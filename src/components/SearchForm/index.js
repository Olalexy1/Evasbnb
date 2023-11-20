import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaChild, FaCalendarDay, FaMapMarkerAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { useGetListOfCitiesQuery, useGetListOfDistrictsQuery, useGetListOfHotelsQuery } from '../../services/bookingApi';
import './style.scss';

const SearchForm = ({
    formData,
    // onFormChange,
    // onFormSubmit,
    location,
    errors,
    suggestions,
    visibleSuggestions,
    handleSuggestionClick,
    handleChangeInput,
    handleInputChangeTwo,
    suggestionsContainerRef,
    handleSubmit,
}) => {
    const {
        checkInDate,
        checkOutDate,
        adults,
        children,
        rooms,
        locationDetails
    } = formData;

    const today = new Date().toISOString().split('T')[0];
    const [searchParams, setSearchParams] = useState(null);
    const { data: cityList, isFetching, isLoading, isSuccess, isError, error } = useGetListOfCitiesQuery();
    const { data: districtList } = useGetListOfDistrictsQuery();
    const { data: hotelsList } = useGetListOfHotelsQuery();
    const navigate = useNavigate();

    return (
        <Container className='search-form-container my-5'>
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
                                style={errors.formLocation ? { border: "2px solid red" } : {}}
                            />
                            {errors.formLocation && <p className="error-message">{errors.formLocation}</p>}
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
                        <Form.Control type="date" name="checkInDate" required onChange={handleChangeInput} value={checkInDate} min={today} style={errors.checkInDate ? { border: "2px solid red" } : {}} />
                        {errors.checkInDate && <p className="error-message">{errors.checkInDate}</p>}
                    </Col>
                    <Col className="form-sect mb-3 mt-3" lg md={6}>
                        <Form.Label className='label'><FaCalendarDay className='form-icons' /> Check-Out</Form.Label>
                        <Form.Control type="date" name="checkOutDate" required onChange={handleChangeInput} value={checkOutDate} min={checkInDate} style={errors.checkOutDate ? { border: "2px solid red" } : {}} />
                        {errors.checkOutDate && <p className="error-message">{errors.checkOutDate}</p>}
                    </Col>
                    <Col className="select-container mb-3 mt-3" lg={3} md={9}>
                        <div>
                            <Form.Label className='label'><FaUser className='form-icons' /> Adult</Form.Label>
                            <Form.Select aria-label="Default select example" name='adults' required onChange={handleChangeInput} value={adults} style={errors.adults ? { border: "2px solid red" } : {}}>
                                {Array.from({ length: 11 }, (_, index) => (
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
                            <Form.Select aria-label="Default select example" name='rooms' required onChange={handleChangeInput} value={rooms} style={errors.rooms ? { border: "2px solid red" } : {}}>
                                {Array.from({ length: 11 }, (_, index) => (
                                    <option key={index} value={index}>{index}</option>
                                ))}
                            </Form.Select>
                            {errors.rooms && <p className="error-message">{errors.rooms}</p>}
                        </div>
                    </Col>
                    <Col className="form-btn pt-3 mb-3 mt-3" lg md={3}>
                        <button className="cssbuttons-io" onClick={handleSubmit}>
                            <span>Search</span>
                        </button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SearchForm