import React, { useState, useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

import slider1 from '../../images/arthur-hickinbotham.jpg'
import slider2 from '../../images/cara-grobbelaar.jpg'
import slider3 from '../../images/harry-cunningham.jpg'
import slider4 from '../../images/vije-vijendranath.jpg'


import { FaChevronCircleRight, FaChevronCircleLeft, FaUser, FaChild, FaCalendarDay, FaMapMarkerAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import './style.scss'
import { useGetCitiesInNgQuery, useGetListOfDistrictsQuery, useGetListOfHotelsQuery, useGetHotelDetailsQuery, useGetHotelsSearchQuery } from '../../services/bookingApi';
import AutocompleteComp from '../AutoCompleteDropdown';

const Banner = () => {
    const [inputText, setInputText] = useState("");

    // console.log(parentInputValue, 'parentInputValue')
    const { data: cityList, isFetching, isLoading, isSuccess, isError, error } = useGetCitiesInNgQuery();
    const { data: districtList } = useGetListOfDistrictsQuery();
    const { data: hotelsList } = useGetListOfHotelsQuery();
    // const { data: HotelSearch } = useGetHotelsSearchQuery();
    // const { data: HotelDetails } = useGetHotelDetailsQuery();

    if (isFetching) return <p>loading....</p>;

    const cities = cityList?.result;
    const districts = districtList?.result;
    const hotels = hotelsList?.result;

    // console.log(hotels, 'hotels')

    // Filter the data based on the condition nr_hotels !== 0
    const filteredCities = cities?.filter(city => city.nr_hotels !== 0);
    const cityIdsWithHotels = filteredCities?.map(city => city.city_id);

    const cityInfo = filteredCities.map(city => ({
        id: city.city_id,
        name: city.name,
        // number_hotels: city.nr_hotels,
        type: 'city',
    }));

    const districtInfo = districts.map(district => ({
        id: district.district_id,
        name: district.name,
        // number_hotels: district.nr_hotels,
        type: 'district',
    }))

    // Filter hotels data based on city_ids present in cityInfo
    const hotelsInfo = hotels?.filter(hotel => cityIdsWithHotels.includes(hotel.city_id))?.map(hotels => ({
        id: hotels.hotel_id,
        name: hotels.name,
        type: 'hotel',
    }));

    const combinedOptions = [...cityInfo, ...districtInfo, ...hotelsInfo]

    // console.log(cityInfo, 'cityInfo')

    // console.log(districtInfo, 'districtInfo')

    // console.log(hotelsInfo, 'HotelsInfo')

    console.log(combinedOptions, 'combinedOptions')

    const Autocomplete = () => {
        const [inputValue, setInputValue] = useState('');
        const [inputType, setInputType] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const suggestionsContainerRef = useRef(null);
        const [visibleSuggestions, setVisibleSuggestions] = useState([]);

        const BATCH_SIZE = 5; // Number of suggestions to load at a time

        useEffect(() => {
            const loadSuggestionsBatch = () => {
                const remainingSuggestions = suggestions.slice(visibleSuggestions.length);
                const nextBatch = remainingSuggestions.slice(0, BATCH_SIZE);
                setVisibleSuggestions(prevVisibleSuggestions => [...prevVisibleSuggestions, ...nextBatch]);
            };

            loadSuggestionsBatch();
        }, [suggestions]);

        const handleInputChange = (event) => {
            const value = event.target.value;
            setInputValue(value);

            const filteredSuggestions = combinedOptions.filter(suggestion =>
                suggestion.name.toLowerCase().includes(value.toLowerCase())
            );

            console.log(filteredSuggestions, 'filteredSuggestions')

            setSuggestions(filteredSuggestions);
            setVisibleSuggestions([]);
        };

        const handleSuggestionClick = (selectedId, selectedType) => {
            setInputValue(selectedId.toString()); // selectedId
            setInputType(selectedType.toString()); //selectedType
            setSuggestions([]); // Clear suggestions after selecting one
            setVisibleSuggestions([]); // Close the suggestions list
        };

        console.log(visibleSuggestions, 'visibleSuggestions')

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

        return (
            <div className="autocomplete-container">
                <Form.Control
                    type="text"
                    className="autocomplete-input"
                    placeholder="Enter a destination..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {visibleSuggestions.length > 0 && (
                    <ul ref={suggestionsContainerRef} className="suggestions-list">
                        {visibleSuggestions.map((suggestion) => (
                            <li
                                key={suggestion.id}
                                className="suggestion"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };


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
                <Form action="/Search-Results" method="POST">
                    <Row className='form mx-1'>
                        <Col className="form-sect mb-3 mt-3 destination-container" lg md={6}>
                            <Form.Label className='label'><FaMapMarkerAlt className='form-icons' /> Location</Form.Label>
                            {/* <Form.Control className='destination-input' type="input" name="location" value={inputText}
                                onChange={handleInputChange}
                                placeholder="Enter a destination" required /> */}
                            {/* <AutocompleteComp passInputValue={handleAutocompleteInput} /> */}
                            <Autocomplete />
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg md={6}>
                            <Form.Label className='label'><FaCalendarDay className='form-icons' /> Check-In</Form.Label>
                            <Form.Control type="date" name="checkin" required />
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg md={6}>
                            <Form.Label className='label'><FaCalendarDay className='form-icons' /> Check-Out</Form.Label>
                            <Form.Control type="date" name="checkout" required />
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg={3} md={9}>
                            <Row className='px-0'>
                                <Col className='mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><FaUser className='form-icons' /> Adult</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                                <Col className='mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><FaChild className='form-icons' /> Children</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                                {/* <Col className='mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><IoBed className='form-icons' /> Rooms</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col className="form-btn pt-3 mb-3 mt-3" lg md={3}>
                            <button className="cssbuttons-io">
                                <a href="/Search-Results"> <span> Search </span> </a>
                            </button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
}

export default Banner;