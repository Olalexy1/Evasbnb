import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaBed, FaBath, FaWifi, FaParking, faSwimmer, FaSwimmer, } from 'react-icons/fa';
import { GiMeal, GiVacuumCleaner } from 'react-icons/gi';
import { MdOutlineLocalLaundryService, MdPets, MdKitchen } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';

import './style.scss';

const Allservices = () => {
    return ( 
        <Container fluid className='pt-5'>
            <Container className='allservices-container px-5 my-5'>
                <Row className='px-0'>
                    <Col className='text-container px-0 pt-3' lg={4} md={12}>
                        <h3>Our Services</h3>
                        <p>We are providing you with the best services available...</p>
                    </Col>
                    <Col lg={8} md={12}>
                        <Row className='px-0'>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <GiMeal/>
                                <p>Delicious Meals</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <FaParking/>
                                <p>Parking Area</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <FaWifi/>
                                <p>Free Wifi</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <MdOutlineLocalLaundryService/>
                                <p>Laundry services</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <FaSwimmer/>
                                <p>Swimming</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <MdPets/>
                                <p>Pets Allowed</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <GiVacuumCleaner/>
                                <p>Cleaning Services</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <MdKitchen/>
                                <p>Kitchen Area</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container> 
    );
}

export default Allservices;