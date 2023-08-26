import React, { useState, useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

import slider1 from '../../images/arthur-hickinbotham.jpg'
import slider2 from '../../images/cara-grobbelaar.jpg'
import slider3 from '../../images/harry-cunningham.jpg'
import slider4 from '../../images/vije-vijendranath.jpg'

// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { FaChevronCircleRight, FaChevronCircleLeft, FaUser, FaChild, FaCalendarDay, FaMapMarkerAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import './style.scss'
import { useGetCitiesInNgQuery, useGetListOfDistrictsQuery, useGetListOfHotelsQuery, useGetHotelDetailsQuery, useGetHotelsSearchQuery } from '../../services/bookingApi';

const Banner = () => {
    const today = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = useState({ checkInDate: today, checkOutDate: '', adults: '', children: '', rooms: '', locationDetails: null });
    const [location, setLocation] = useState('');
    const [inputId, setInputId] = useState('');
    const [inputType, setInputType] = useState('');
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const suggestionsContainerRef = useRef(null);
    const [visibleSuggestions, setVisibleSuggestions] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { data: cityList, isFetching, isLoading, isSuccess, isError, error } = useGetCitiesInNgQuery();
    const { data: districtList } = useGetListOfDistrictsQuery();
    const { data: hotelsList } = useGetListOfHotelsQuery();

    const [errors, setErrors] = useState({
        location: '',
        checkInDate: '',
        checkOutDate: '',
        adults: '',
        rooms: ''
    });

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


    if (isLoading) return (
        <Stack direction='row' style={{alignItems: 'center'}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Stack>
    )

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
        setLocation(value);
        setErrors(prevErrors => ({ ...prevErrors, location: '' }));

        const filteredSuggestions = combinedOptions?.filter(suggestion =>
            suggestion.name.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
        setVisibleSuggestions([]);
    };

    const handleSuggestionClick = (selectedId, selectedName, selectedType) => {
        setLocation(selectedName.toString()); // selectedName
        setInputId(selectedId.toString()); //selectedId
        setInputType(selectedType.toString()); //selectedType
        setSelectedInfo({ id: selectedId, name: selectedName, type: selectedType }); // Store selected info
        setSuggestions([]); // Clear suggestions after selecting one
        setVisibleSuggestions([]); // Close the suggestions list
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));

        if (checkInDate > checkOutDate) {
            setFormData({ ...formData, checkOutDate: checkInDate })
        }

    };

    const isCheckOutValid = () => checkOutDate >= checkInDate;

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
            newErrors.checkOutDate = 'Check out date cannot be before check in date';
            validationPassed = false;
        }

        console.log(adults, 'adults')

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
        }

        const searchData = {
            checkInDate: formData.checkInDate,
            checkOutDate: formData.checkOutDate,
            adults: formData.adults,
            children: formData.children,
            rooms: formData.rooms,
            locationDetails: selectedInfo,
        };

        console.log(searchData, 'search Data')

    }


    return (
        <Container fluid className='banner px-0'>
            <Carousel
                indicators="false"
                nextIcon={<FaChevronCircleRight className='indicator-icon' />}
                prevIcon={<FaChevronCircleLeft className='indicator-icon' />}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className='form-container my-5'>
                <Form onSubmit={handleSubmit} className='px-0'>
                    <Row className='form mx-1 px-2'>
                        <Col className="form-sect mb-3 mt-3 destination-container" lg md={6} >
                            <Form.Label className='label'><FaMapMarkerAlt className='form-icons' /> Location</Form.Label>
                            <div className="autocomplete-container">
                                <Form.Control
                                    type="text"
                                    className="autocomplete-input"
                                    placeholder="Enter a destination..."
                                    value={location}
                                    name='location'
                                    onChange={handleInputChangeTwo}
                                    required
                                />
                                {errors.location && <p className="error-message">{errors.location}</p>}
                                {visibleSuggestions.length > 0 && (
                                    <ul ref={suggestionsContainerRef} className="suggestions-list">
                                        {visibleSuggestions.map((suggestion, index) => (
                                            <li
                                                key={suggestion.id}
                                                className="suggestion"
                                                onClick={() => handleSuggestionClick(suggestion.id, suggestion.name, suggestion.type)}
                                                style={{
                                                    borderBottom: index !== visibleSuggestions.length - 1 ? '1px solid #ccc' : 'none',
                                                }}
                                            >
                                                {suggestion.type === 'hotel' ? <IoBed /> : <FaMapMarkerAlt />}&nbsp;{suggestion.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg md={6}>
                            <Form.Label className='label'><FaCalendarDay className='form-icons' /> Check-In</Form.Label>
                            <Form.Control type="date" name="checkInDate" required onChange={handleChangeInput} value={checkInDate} min={today} />
                            {errors.checkInDate && <p className="error-message">{errors.checkInDate}</p>}
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg md={6}>
                            <Form.Label className='label'><FaCalendarDay className='form-icons' /> Check-Out</Form.Label>
                            <Form.Control type="date" name="checkOutDate" required onChange={handleChangeInput} value={checkOutDate} min={checkInDate} />
                            {errors.checkOutDate && <p className="error-message">{errors.checkOutDate}</p>}
                        </Col>
                        <Col className="select-container mb-3 mt-3" lg={3} md={9}>
                            <div>
                                <Form.Label className='label'><FaUser className='form-icons' /> Adult</Form.Label>
                                <Form.Select aria-label="Default select example" name='adults' required onChange={handleChangeInput} value={adults}>
                                    {Array.from({ length: 21 }, (_, index) => (
                                        <option key={index} value={index}>{index}</option>
                                    ))}
                                </Form.Select>
                                {errors.adults && <p className="error-message">{errors.adults}</p>}
                            </div>
                            <div>
                                <Form.Label className='label'><FaChild className='form-icons' /> Kids</Form.Label>
                                <Form.Select aria-label="Default select example" name='children' required onChange={handleChangeInput} value={children}>
                                    {Array.from({ length: 11 }, (_, index) => (
                                        <option key={index} value={index}>{index}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label className='label'><IoBed className='form-icons' /> Room</Form.Label>
                                <Form.Select aria-label="Default select example" name='rooms' required onChange={handleChangeInput} value={rooms}>
                                    {Array.from({ length: 21 }, (_, index) => (
                                        <option key={index} value={index}>{index}</option>
                                    ))}
                                </Form.Select>
                                {errors.rooms && <p className="error-message">{errors.rooms}</p>}
                            </div>
                            {/* <Row className='px-0'>
                                <Col className='form-sect mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><FaUser className='form-icons' /> Adult</Form.Label>
                                    <Form.Select aria-label="Default select example" name='adults' required onChange={handleChangeInput} value={adults}>
                                        {Array.from({ length: 21 }, (_, index) => (
                                            <option key={index} value={index}>{index}</option>
                                        ))}
                                    </Form.Select>
                                    {errors.adults && <p className="error-message">{errors.adults}</p>}
                                </Col>
                                <Col className='form-sect mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><FaChild className='form-icons' /> Children</Form.Label>
                                    <Form.Select aria-label="Default select example" name='children' required onChange={handleChangeInput} value={children}>
                                        {Array.from({ length: 11 }, (_, index) => (
                                            <option key={index} value={index}>{index}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col className='form-sect mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><IoBed className='form-icons' /> Room</Form.Label>
                                    <Form.Select aria-label="Default select example" name='rooms' required onChange={handleChangeInput} value={rooms}>
                                        {Array.from({ length: 21 }, (_, index) => (
                                            <option key={index} value={index}>{index}</option>
                                        ))}
                                    </Form.Select>
                                    {errors.rooms && <p className="error-message">{errors.rooms}</p>}
                                </Col>
                            </Row> */}
                        </Col>
                        <Col className="form-btn pt-3 mb-3 mt-3" lg md={3}>
                            <button className="cssbuttons-io" onClick={handleSubmit} type='submit'>
                                <span>Search</span>
                            </button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
}

export default Banner;