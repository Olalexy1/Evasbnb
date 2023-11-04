import React, { useState, useEffect, useRef, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';
import HotelCard from '../../components/HotelCard';
import { useGetCitiesInNgQuery, useGetListOfDistrictsQuery, useGetListOfHotelsQuery, useGetHotelDetailsQuery, useGetHotelsSearchQuery, useGetHotelsByLocationQuery } from '../../services/bookingApi';
import './style.scss';
import { BsFilter } from 'react-icons/bs';
import Pagination from '../../components/Pagination/Pagination';

const HotelsSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const searchResult = JSON.parse(searchParams.get('searchResult'));

    const [currentPage, setCurrentPage] = useState(1);

    const searchDetails = location.state.searchFormData;

    const searchResult = location.state.searchResult;

    const SearchResultHotelList = searchResult?.result || [];

    const searchData = JSON.parse(searchParams.get('searchResult'));

    const [formData, setFormData] = useState({ checkInDate: searchDetails?.checkInDate, checkOutDate: searchDetails?.checkOutDate, adults: searchDetails?.adults, children: searchDetails?.children, rooms: searchDetails?.rooms, locationDetails: searchDetails?.locationDetails });
    const [formLocation, setFormLocation] = useState(searchDetails?.location);
    const [inputId, setInputId] = useState('');
    const [inputType, setInputType] = useState('');
    const [selectedInfo, setSelectedInfo] = useState(null);

    const [errors, setErrors] = useState({
        location: '',
        checkInDate: '',
        checkOutDate: '',
        adults: '',
        rooms: ''
    });

    const [suggestions, setSuggestions] = useState([]);
    const suggestionsContainerRef = useRef(null);
    const [visibleSuggestions, setVisibleSuggestions] = useState([]);
    const [newSearchParams, setNewSearchParams] = useState(null);
    const { data: cityList, isLoading, isSuccess, isError, error } = useGetCitiesInNgQuery();
    const { data: districtList } = useGetListOfDistrictsQuery();
    const { data: hotelsList } = useGetListOfHotelsQuery();

    const BATCH_SIZE = 5; // Number of suggestions to load at a time

    useEffect(() => {
        const loadSuggestionsBatch = () => {
            const remainingSuggestions = suggestions.slice(visibleSuggestions.length);
            const nextBatch = remainingSuggestions.slice(0, BATCH_SIZE);
            setVisibleSuggestions(prevVisibleSuggestions => [...prevVisibleSuggestions, ...nextBatch]);
        };

        loadSuggestionsBatch();
    }, [suggestions]);

    // Close the suggestions list when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionsContainerRef.current &&
                !suggestionsContainerRef.current.contains(event.target)) {
                setVisibleSuggestions([]);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const locationParams = {
        name: formLocation,
        locale: 'en-gb'
    };

    const { data: locationData } = useGetHotelsByLocationQuery(locationParams)

    const destId = locationData?.[0].dest_id;

    // const { data: searchResult, isFetching } = useGetHotelsSearchQuery(newSearchParams);

    const cities = cityList?.result || [];
    const districts = districtList?.result || [];
    const hotels = hotelsList?.result || [];

    // Filter the data based on the condition nr_hotels !== 0
    const filteredCities = cities?.filter(city => city.nr_hotels !== 0);
    const cityIdsWithHotels = filteredCities?.map(city => city.city_id);

    const cityInfo = filteredCities?.map(city => ({
        id: city.city_id,
        name: city.name,
        number_hotels: city.nr_hotels,
        type: 'city',
    }));

    const districtInfo = districts?.map(district => ({
        id: district.district_id,
        name: district.name,
        number_hotels: district.nr_hotels,
        type: 'district',
    }))

    // Filter hotels data based on city_ids present in cityInfo
    const hotelsInfo = hotels?.filter(hotel => cityIdsWithHotels.includes(hotel.city_id))?.map(hotel => ({
        id: hotel.hotel_id,
        name: hotel.name,
        type: 'hotel',
    }));

    const combinedOptions = [...cityInfo, ...districtInfo, ...hotelsInfo]

    const { checkInDate, checkOutDate, adults, children, rooms, locationDetails } = formData

    const handleInputChangeTwo = (event) => {
        const value = event.target.value;
        setFormLocation(value);
        setErrors(prevErrors => ({ ...prevErrors, location: '' }));

        const filteredSuggestions = combinedOptions?.filter(suggestion =>
            suggestion.name.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
        setVisibleSuggestions([]);
    };

    const handleSuggestionClick = (selectedId, selectedName, selectedType) => {
        setFormLocation(selectedName.toString());
        setInputId(selectedId.toString());
        setInputType(selectedType.toString());
        setSelectedInfo({ id: selectedId, name: selectedName, type: selectedType });
        setSuggestions([]);
        setVisibleSuggestions([]);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const isCheckOutValid = () => checkOutDate > checkInDate;

    const validateInputs = () => {
        let validationPassed = true;
        const newErrors = { location: '', checkInDate: '', checkOutDate: '', adults: '', rooms: '' };

        if (!location.trim()) {
            newErrors.location = 'Location is required';
            validationPassed = false;
        }

        if (!checkOutDate.trim()) {
            newErrors.checkOutDate = 'Check Out Date is required';
            validationPassed = false;
        } else if (!isCheckOutValid()) {
            newErrors.checkOutDate = 'Check out date cannot be before or same as check in date';
            validationPassed = false;
        }

        if (Number(adults) < 1) {
            newErrors.adults = 'Field is required';
            validationPassed = false;
        }

        if (Number(rooms) < 1) {
            newErrors.rooms = 'Field is required';
            validationPassed = false;
        }

        setErrors(newErrors);
        return validationPassed;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateInputs()) {
            isCheckOutValid()

            const searchData = {
                checkInDate: formData.checkInDate,
                checkOutDate: formData.checkOutDate,
                adults: formData.adults,
                children: formData.children,
                rooms: formData.rooms,
                location: location,
                locationDetails: selectedInfo,
            };

            const baseParams = {
                checkin_date: formData.checkInDate,
                dest_type: selectedInfo.type,
                units: 'metric',
                checkout_date: formData.checkOutDate,
                adults_number: formData.adults,
                order_by: 'popularity',
                dest_id: destId,
                filter_by_currency: 'AED',
                locale: 'en-gb',
                room_number: formData.rooms,
                categories_filter_ids: 'class::2,class::4,free_cancellation::1',
                page_number: '0',
                include_adjacency: 'true',
            };

            if (formData.children) {
                baseParams.children_number = formData.children;
                baseParams.children_ages = '5,0';
            };

            setNewSearchParams(baseParams);

            const resultType = selectedInfo.type
        }

        else {
            console.log('cannot proceed without filling search')
        }

    }

    let PageSize = 10;

    const currentSearchResultData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return SearchResultHotelList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    console.log(searchData, searchDetails, searchResult, 'New Page')

    return (
        <Container fluid className='py-5'>
            <SearchForm
                formData={formData}
                errors={errors}
                visibleSuggestions={visibleSuggestions}
                handleSuggestionClick={handleSuggestionClick}
                handleChangeInput={handleChangeInput}
                handleInputChangeTwo={handleInputChangeTwo}
                suggestionsContainerRef={suggestionsContainerRef}
                handleSubmit={handleSubmit}
                suggestions={suggestions}
                location={formLocation}
            />
            <Container>
                <Row>
                    <Col lg={4} className="d-none d-md-block">
                        <div className='filter-container'>
                            <div direction="horizontal" gap={3} className='filter-header'>
                                <BsFilter />
                                <span>Search Filters</span>
                            </div>
                            <div className='filter-wrappers'>
                                <p>Property type</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="hotel" />
                                    <FormControlLabel control={<Checkbox />} label="apartment" />
                                    <FormControlLabel control={<Checkbox />} label="resort" />
                                    <FormControlLabel control={<Checkbox />} label="villa" />
                                    <FormControlLabel control={<Checkbox />} label="hostel" />
                                </FormGroup>
                            </div>
                            <div className='divider' />
                            <div className='filter-wrappers'>
                                <p>Property rating</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Superb: 9+" />
                                    <FormControlLabel control={<Checkbox />} label="Very Good: 8+" />
                                    <FormControlLabel control={<Checkbox />} label="Good: 7+" />
                                    <FormControlLabel control={<Checkbox />} label="Pleasant: 6+" />
                                </FormGroup>
                            </div>
                            <div className='divider' />
                            <div className='filter-wrappers'>
                                <p>Room facilities</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="hotel" />
                                    <FormControlLabel control={<Checkbox />} label="apartment" />
                                    <FormControlLabel control={<Checkbox />} label="resort" />
                                    <FormControlLabel control={<Checkbox />} label="villa" />
                                    <FormControlLabel control={<Checkbox />} label="hostel" />
                                </FormGroup>
                            </div>
                            <div className='divider' />
                            {/* <div className='filter-wrappers'>
                                <p>Brands</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="hotel" />
                                    <FormControlLabel control={<Checkbox />} label="apartment" />
                                    <FormControlLabel control={<Checkbox />} label="resort" />
                                    <FormControlLabel control={<Checkbox />} label="villa" />
                                    <FormControlLabel control={<Checkbox />} label="hostel" />
                                </FormGroup>
                            </div>
                            <div className='divider' /> */}
                            <div className='filter-wrappers'>
                                <p>Property Amenities</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="hotel" />
                                    <FormControlLabel control={<Checkbox />} label="apartment" />
                                    <FormControlLabel control={<Checkbox />} label="resort" />
                                    <FormControlLabel control={<Checkbox />} label="villa" />
                                    <FormControlLabel control={<Checkbox />} label="hostel" />
                                </FormGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg md={8}>
                        <div className='hotels-container'>
                            <h5>{formLocation}: {SearchResultHotelList.length} properties found</h5>
                            {currentSearchResultData.map((hotel, index) => (
                                <HotelCard key={index} hotel={hotel} />
                            ))}
                        </div>

                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={SearchResultHotelList.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HotelsSearch;
