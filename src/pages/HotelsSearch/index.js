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
import { useGetListOfCitiesQuery, useGetListOfDistrictsQuery, useGetListOfHotelsQuery, useGetHotelsByLocationQuery, useGetHotelsBySearchQuery } from '../../services/bookingApi';
import './style.scss';
import { BsFilter } from 'react-icons/bs';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import hotelTypes from '../../utils/HotelTypes';
import { useCountry } from '../../context/countryContext';
import { countries, singularize } from '../../utils';

const HotelsSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const searchResult = JSON.parse(searchParams.get('searchResult'));

    const [currentPage, setCurrentPage] = useState(1);

    // const searchDetails = location.state?.searchFormData;

    const [searchDetails, setSearchDetails] = useState(location.state?.searchFormData);

    const searchResult = location.state?.searchResult;

    const suggestionsList = location.state?.suggestions

    const SearchResultHotelList = searchResult?.result || [];

    const searchData = JSON.parse(searchParams.get('searchResult'));

    const { country } = useCountry();

    const countryCode = countries.result.find((item) => item.name === country);

    const [formData, setFormData] = useState({ checkInDate: searchDetails?.checkInDate, checkOutDate: searchDetails?.checkOutDate, adults: searchDetails?.adults, children: searchDetails?.children, rooms: searchDetails?.rooms, locationDetails: searchDetails?.locationDetails });
    const [formLocation, setFormLocation] = useState(searchDetails?.location);
    const [searchedLocation, setSearchedLocation] = useState(formLocation);
    const [inputId, setInputId] = useState('');
    const [inputType, setInputType] = useState('');
    const [selectedInfo, setSelectedInfo] = useState(searchDetails?.locationDetails);
    const [selectedProperty, setSelectedProperty] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [selectedRating, setSelectedRating] = useState([])

    const handlePropertyChange = (event) => {
        const selectedType = event.target.value;
        const isSelected = selectedProperty.includes(selectedType);

        setIsFiltered(true)

        if (isSelected) {
            // If the type is already selected, remove it
            setSelectedProperty(selectedProperty.filter(type => type !== selectedType));
        } else {
            // If the type is not selected, add it
            setSelectedProperty([...selectedProperty, selectedType]);
        }

        setIsFiltered(false)
    };

    const handleRatingChange = (event) => {
        const selectedType = event.target.value;
        const isSelected = selectedRating.includes(selectedType);

        setIsFiltered(true)

        if (isSelected) {
            // If the type is already selected, remove it
            setSelectedRating(selectedRating.filter(type => type !== selectedType));
        } else {
            // If the type is not selected, add it
            setSelectedRating([...selectedRating, selectedType]);
        }

        setIsFiltered(false)
    };

    const [errors, setErrors] = useState({
        formLocation: '',
        checkInDate: '',
        checkOutDate: '',
        adults: '',
        rooms: ''
    });

    const [suggestions, setSuggestions] = useState([]);
    const suggestionsContainerRef = useRef(null);
    const [visibleSuggestions, setVisibleSuggestions] = useState([]);
    const [newSearchParams, setNewSearchParams] = useState(null);

    const allPropertyTypes = hotelTypes?.result || [];

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

    const locationName = locationData?.[0].city_name;

    const { data: newSearchResult, isFetching, isLoading, isSuccess, isError, error, refetch } = useGetHotelsBySearchQuery(newSearchParams);

    const newSearchResultHotelList = newSearchResult?.result || [];

    // const filterPropertyType = () => {
    //     if (isSuccess) {
    //         if (selectedProperty.length === 0) {
    //             return newSearchResultHotelList;
    //         }

    //         return newSearchResultHotelList.filter((accommodation) => selectedProperty.includes(accommodation.accommodation_type_name));

    //     } else {
    //         if (selectedProperty.length === 0) {
    //             return SearchResultHotelList;
    //         }

    //         return SearchResultHotelList.filter((accommodation) => selectedProperty.includes(accommodation.accommodation_type_name));
    //     }
    // };

    const filterPropertyType = () => {
        let filteredList;

        if (isSuccess) {
            // Use newSearchResultHotelList if isSuccess is true
            filteredList = [...newSearchResultHotelList];
        } else {
            // Use SearchResultHotelList if isSuccess is false
            filteredList = [...SearchResultHotelList];
        }

        // Apply property type filter
        if (selectedProperty.length > 0) {
            filteredList = filteredList.filter((accommodation) =>
                selectedProperty.includes(accommodation.accommodation_type_name)
            );
        }

        // Apply review score filter
        if (selectedRating.length > 0) {
            filteredList = filteredList.filter((accommodation) =>
                accommodation.review_score >= Math.min(...selectedRating)
            );
        }

        return filteredList;
    };


    const { checkInDate, checkOutDate, adults, children, rooms, locationDetails } = formData

    const handleInputChangeTwo = (event) => {
        const value = event.target.value;
        setFormLocation(value);
        setErrors(prevErrors => ({ ...prevErrors, formLocation: '' }));

        const filteredSuggestions = suggestionsList?.filter(suggestion =>
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
        const newErrors = { formLocation: '', checkInDate: '', checkOutDate: '', adults: '', rooms: '' };

        if (!formLocation.trim()) {
            newErrors.formLocation = 'Location is required';
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

            const searchDataCurrent = {
                checkInDate: formData.checkInDate,
                checkOutDate: formData.checkOutDate,
                adults: formData.adults,
                children: formData.children,
                rooms: formData.rooms,
                location: formLocation,
                locationDetails: selectedInfo,
                countryCode: countryCode.country
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

            refetch()

            // const resultType = selectedInfo.type

            setSearchedLocation(formLocation)

            setSearchDetails(searchDataCurrent)

            setSelectedProperty([])

            setSelectedRating([])

        }

        else {
            console.log('cannot proceed without filling search')
        }

    }

    let PageSize = 10;

    // const currentSearchResultData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return SearchResultHotelList.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    const currentSearchResultData = useMemo(() => {
        if (isSuccess) {
            // If isFetching is true, use newSearchResultHotelList
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return filterPropertyType().slice(firstPageIndex, lastPageIndex);
        } else {
            // If isFetching is false, use searchResultHotelList
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return filterPropertyType().slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, isFetching, isLoading, SearchResultHotelList, newSearchResultHotelList, selectedProperty]);

    console.log(newSearchResultHotelList, 'see new search results hotel list')

    // console.log(SearchResultHotelList, 'see old search result')

    console.log(currentSearchResultData, 'see current search result data')

    console.log(filterPropertyType(), filterPropertyType().length, 'see rating:', selectedRating, 'see filter property type')

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
                                <p>Property Type</p>
                                <FormGroup>
                                    {
                                        allPropertyTypes.map((item) => (
                                            <FormControlLabel key={item.hotel_type_id} control={<Checkbox
                                                onChange={handlePropertyChange}
                                                checked={selectedProperty.includes(singularize(item.name))}
                                                value={singularize(item.name)}
                                            />} label={item.name} />
                                        ))
                                    }
                                </FormGroup>
                            </div>
                            <div className='divider' />
                            <div className='filter-wrappers'>
                                <p>Property Rating</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleRatingChange}
                                        checked={selectedRating.includes('9')}
                                        value={9}
                                    />} label="Superb: 9+" />
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleRatingChange}
                                        checked={selectedRating.includes('8')}
                                        value={8}
                                    />} label="Very Good: 8+" />
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleRatingChange}
                                        checked={selectedRating.includes('7')}
                                        value={7}
                                    />} label="Good: 7+" />
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleRatingChange}
                                        checked={selectedRating.includes('6')}
                                        value={6}
                                    />} label="Pleasant: 6+" />
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
                                    <FormControlLabel control={<Checkbox />} label="Parking" />
                                    <FormControlLabel control={<Checkbox />} label="Restaurant" />
                                    <FormControlLabel control={<Checkbox />} label="Pets Allowed" />
                                    <FormControlLabel control={<Checkbox />} label="Room Service" />
                                    <FormControlLabel control={<Checkbox />} label="Bar" />
                                </FormGroup>
                            </div>
                        </div>
                    </Col>
                    {<Col lg md={8}>
                        {(isFetching && isSuccess) || isFiltered ? (
                            <Stack direction='row' style={{ alignItems: 'center' }}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Stack>
                        ) : (
                            <div className='hotels-container'>
                                <h5 style={{ textTransform: "capitalize" }}>
                                    {isSuccess &&
                                        (selectedInfo.type === "district" ||
                                            selectedInfo.type === "city" ||
                                            selectedInfo.type === "region" ||
                                            selectedInfo.type === "country")
                                        ? searchedLocation
                                        : isSuccess && selectedInfo.type === "hotel"
                                            ? locationName
                                            : searchDetails?.location} : {
                                        filterPropertyType().length
                                    } properties found
                                </h5>

                                {currentSearchResultData.map((hotel, index) => (
                                    <HotelCard key={index} hotel={hotel} />
                                ))}
                            </div>
                        )}
                        {/* <div className='hotels-container'>
                            <h5>{formLocation}: {SearchResultHotelList.length} properties found</h5>
                            {currentSearchResultData.map((hotel, index) => (
                                <HotelCard key={index} hotel={hotel} />
                            ))}
                        </div> */}
                    </Col>}
                </Row>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={filterPropertyType().length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </Container>
        </Container>
    );
}

export default HotelsSearch;
