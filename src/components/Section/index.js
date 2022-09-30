import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

import { FaBed, FaBath, FaWifi } from 'react-icons/fa';

import './style.scss'

const MidSection = () => {
    return ( 
        <Container fluid className='my-5'>
            <Container className='midsection py-5'>
                <h3>Our Popular Rooms</h3>
                <p>Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem <br/> quo architecto laborum qui sequi sint id accusamus tempore.</p>
                <Row className='mx-2 pt-3'>
                    <Col lg={4} md={4} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={RedRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <h6><b>Red Room</b></h6>
                                <ul>
                                    <li><FaBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li> 
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={PurpleRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <h6><b>Purple Room</b></h6>
                                <ul>
                                    <li><FaBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li> 
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={GreenRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <h6><b>Green Room</b></h6>
                                <ul>
                                    <li><FaBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
     );
}

const BottomSection = () => {
    return ( 
        <Container fluid>
            <Container className='services-container'>
                <Row>
                    <Col lg={12}>
                        <h3>Our Services</h3>
                        <p>We are providing you with the best services</p>
                    </Col>
                    <Col lg={12}>
                        <Row>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                            <Col className='service-icon-container' lg={2} md={3} sm={4}></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container> 
    );
}

 
export { MidSection, BottomSection };