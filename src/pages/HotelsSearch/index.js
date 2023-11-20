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
import { useGetHotelsByLocationQuery, useGetHotelsBySearchQuery } from '../../services/bookingApi';
import './style.scss';
import { BsFilter } from 'react-icons/bs';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import { useCountry } from '../../context/countryContext';
import { countries, singularize, hotelTypes, hotelFacilities } from '../../utils';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const HotelsSearch = () => {
    let location = useLocation();

    const [toggle, setToggle] = useState(false);

    const [searchDetails, setSearchDetails] = useState(location.state?.searchFormData);

    const [searchResult, setSearchResult] = useState(location.state?.searchResult);

    const [suggestionsList, setSuggestionList] = useState(location.state?.suggestions);

    const [queryParams, setQueryParams] = useSearchParams();

    const searchData = JSON.parse(queryParams.get('searchResult'));

    const [currentPage, setCurrentPage] = useState(1);

    const SearchResultHotelList = searchResult?.result || [];

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
    const [selectedFilter, setSelectedFilter] = useState([])
    const [selectedAmenities, setSelectedAmenities] = useState([])

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

        setToggle(false)

        setTimeout(() => {
            setIsFiltered(false);
        }, 1000);
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

        setToggle(false)

        setTimeout(() => {
            setIsFiltered(false);
        }, 1000);
    };

    const handleOtherFiltersChange = (event) => {
        const selectedType = event.target.value;
        const isSelected = selectedFilter.includes(selectedType);

        setIsFiltered(true)

        if (isSelected) {
            // If the type is already selected, remove it
            setSelectedFilter(selectedFilter.filter(type => type !== selectedType));
        } else {
            // If the type is not selected, add it
            setSelectedFilter([...selectedFilter, selectedType]);
        }

        setToggle(false)

        setTimeout(() => {
            setIsFiltered(false);
        }, 1000);

    };


    const handleAmenitiesChange = (event) => {
        const selectedType = Number(event.target.value);
        const isSelected = selectedAmenities.includes(selectedType);

        setIsFiltered(true)

        if (isSelected) {
            // If the type is already selected, remove it
            setSelectedAmenities(selectedAmenities.filter(type => type !== selectedType));
        } else {
            // If the type is not selected, add it
            setSelectedAmenities([...selectedAmenities, selectedType]);
        }

        setToggle(false)

        setTimeout(() => {
            setIsFiltered(false);
        }, 1000);
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

    const amenityTypes = hotelFacilities?.result || [];

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if newSearchParams has data
                if (newSearchParams && Object.keys(newSearchParams).length > 0) {
                    const response = await refetch();

                    await new Promise((resolve) => setTimeout(resolve, 2000));

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

                    setSearchedLocation(formLocation);
                    setSearchDetails(searchDataCurrent);
                    setSuggestionList(suggestionsList);

                    if (response.isSuccess && response.data) {
                        setSearchResult((prevSearchResult) => {
                            // Use the state updater function to get the latest state
                            // Do any additional processing here if needed
                            return response.data;
                        });
                        // setSearchResult(response.data);
                        setSelectedProperty([]);
                        setSelectedRating([]);
                        setSelectedFilter([]);
                        setSelectedAmenities([]);
                        setQueryParams({ searchResult: JSON.stringify(searchDataCurrent) });
                        filteredList = [];
                    } else {
                        console.log('Search result is undefined. Cannot proceed without it.');
                    }
                }
            } catch (error) {
                console.error('Error fetching hotels:', error);
                // Handle error if needed
            }
        };

        fetchData();
    }, [newSearchParams]);

    useEffect(() => {
        // Use the updated value of searchResult immediately when it changes
        console.log('Updated searchResult:', searchResult);
    }, [searchResult]);

    const locationParams = {
        name: formLocation,
        locale: 'en-gb'
    };

    const { data: locationData } = useGetHotelsByLocationQuery(locationParams);

    const destId = locationData?.[0].dest_id;

    const locationName = locationData?.[0].city_name;

    const { data: newSearchResult, isFetching, isLoading, isSuccess, isError, error, refetch } = useGetHotelsBySearchQuery(newSearchParams);

    // const newSearchResultHotelList = newSearchResult?.result || [];

    let filteredList;

    const filterPropertyType = () => {

        // if (isSuccess) {
        //     // Use newSearchResultHotelList if isSuccess is true
        //     filteredList = [...newSearchResultHotelList];
        // } else {
        //     // Use SearchResultHotelList if isSuccess is false
        //     filteredList = [...SearchResultHotelList];
        // }

        filteredList = [...SearchResultHotelList]

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

        // Apply other filter
        if (selectedFilter.length > 0) {
            filteredList = filteredList.filter((accommodation) =>
                selectedFilter.includes(accommodation.ribbon_text || accommodation.is_beach_front === 1)
            );
        }

        // Apply Amenities filter
        if (selectedAmenities.length > 0) {
            filteredList = filteredList.filter((accommodation) =>
                selectedAmenities.some((amenity) =>
                    accommodation.hotel_facilities
                        .split(',')
                        .map(Number)
                        .includes(Number(amenity))
                )
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

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (validateInputs()) {

            const baseParams = {
                checkin_date: formData.checkInDate,
                dest_type: selectedInfo.type,
                units: 'metric',
                checkout_date: formData.checkOutDate,
                adults_number: formData.adults,
                order_by: 'popularity',
                dest_id: destId,
                filter_by_currency: 'USD',
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

        }

        else {
            console.log('cannot proceed without filling search')
        }

    }

    let PageSize = 10;

    const currentSearchResultData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filterPropertyType().slice(firstPageIndex, lastPageIndex);

    }, [currentPage, isFetching, isLoading, SearchResultHotelList, selectedProperty, selectedRating, selectedFilter, selectedAmenities, isSuccess, PageSize, refetch]);

    console.log(SearchResultHotelList, 'see form location', formLocation, 'see new search results hotel list')

    // console.log(SearchResultHotelList, 'see old search result')

    // console.log(searchDetails, 'see current search data')

    // console.log(filterPropertyType(), filterPropertyType().length, 'see filter property type')

    // console.log(selectedAmenities, 'selected Amenities')S


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
                    <Col lg={4} className="d-none d-md-none d-lg-block">
                        <div className='filter-container'>
                            <div direction="horizontal" gap={3} className='filter-header'>
                                <BsFilter style={{ fontSize: '24px' }} />
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
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleRatingChange}
                                        checked={selectedRating.includes('5')}
                                        value={5}
                                    />} label="Okay: 5+" />
                                </FormGroup>
                            </div>
                            <div className='divider' />
                            <div className='filter-wrappers'>
                                <p>Other Filters</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleOtherFiltersChange}
                                        value={'Breakfast included'}
                                    />} label="Breakfast Included" />
                                    <FormControlLabel control={<Checkbox
                                        onChange={handleOtherFiltersChange}
                                        value={1}
                                    />} label="Beach Front" />
                                </FormGroup>
                            </div>
                            <div className='divider' />
                            <div className='filter-wrappers'>
                                <p>Property Amenities</p>
                                <FormGroup>

                                    {
                                        amenityTypes
                                            .filter(item => [2, 3, 4, 5, 7, 8, 11, 17, 22, 24, 46, 54, 96, 107, 109, 301, 433].includes(item.hotel_facility_type_id))
                                            .map(item => (
                                                <FormControlLabel
                                                    key={item.hotel_facility_type_id}
                                                    control={
                                                        <Checkbox
                                                            onChange={handleAmenitiesChange}
                                                            checked={selectedAmenities.includes(Number(item.hotel_facility_type_id))}
                                                            value={Number(item.hotel_facility_type_id)}
                                                        />
                                                    }
                                                    label={item.name}
                                                />
                                            ))
                                    }

                                </FormGroup>
                            </div>
                        </div>
                    </Col>
                    {<Col lg={8} className="d-md-block">
                        {(isFetching && newSearchParams !== null) || isFiltered ? (
                            <Stack direction='row' style={{ alignItems: 'center' }}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Stack>
                        ) : (
                            <div className='hotels-container'>
                                <Stack direction='horizontal' style={{ alignItems: 'center', justifyContent: 'space-between', border: "1px solid lightgrey", borderRadius: '8px', padding: '10px' }}>
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


                                    <Stack direction='horizontal' className='filter-mobile d-block d-md-block d-lg-none' style={{ alignItems: 'center', gap: '8px', fontWeight: '600', cursor: 'pointer' }}
                                        onClick={() => setToggle(true)}>
                                        <BsFilter />
                                        <span style={{ fontSize: '18px' }}>Filter</span>
                                    </Stack>
                                </Stack>

                                {toggle && (
                                    <motion.div
                                        className='filter-motion-div d-lg-none'
                                        whileInView={{ x: [300, 0] }}
                                        transition={{ duration: 0.85, ease: 'easeOut' }}
                                    >
                                        <HiX className="close-icon" onClick={() => setToggle(false)} />

                                        <div className='filter-container'>
                                            <div direction="horizontal" gap={3} className='filter-header'>
                                                <BsFilter style={{ fontSize: '24px' }} />
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
                                                    <FormControlLabel control={<Checkbox
                                                        onChange={handleRatingChange}
                                                        checked={selectedRating.includes('5')}
                                                        value={5}
                                                    />} label="Okay: 5+" />
                                                </FormGroup>
                                            </div>
                                            <div className='divider' />
                                            <div className='filter-wrappers'>
                                                <p>Other Filters</p>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox
                                                        onChange={handleOtherFiltersChange}
                                                        value={'Breakfast included'}
                                                    />} label="Breakfast Included" />
                                                    <FormControlLabel control={<Checkbox
                                                        onChange={handleOtherFiltersChange}
                                                        value={1}
                                                    />} label="Beach Front" />
                                                </FormGroup>
                                            </div>
                                            <div className='divider' />
                                            <div className='filter-wrappers'>
                                                <p>Property Amenities</p>
                                                <FormGroup>

                                                    {
                                                        amenityTypes
                                                            .filter(item => [2, 3, 4, 5, 7, 8, 11, 17, 22, 24, 46, 54, 96, 107, 109, 301, 433].includes(item.hotel_facility_type_id))
                                                            .map(item => (
                                                                <FormControlLabel
                                                                    key={item.hotel_facility_type_id}
                                                                    control={
                                                                        <Checkbox
                                                                            onChange={handleAmenitiesChange}
                                                                            checked={selectedAmenities.includes(Number(item.hotel_facility_type_id))}
                                                                            value={Number(item.hotel_facility_type_id)}
                                                                        />
                                                                    }
                                                                    label={item.name}
                                                                />
                                                            ))
                                                    }

                                                </FormGroup>
                                            </div>
                                        </div>

                                    </motion.div>
                                )}

                                {currentSearchResultData.map((hotel, index) => (
                                    <HotelCard key={index} hotel={hotel} />
                                ))}
                            </div>
                        )}
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
