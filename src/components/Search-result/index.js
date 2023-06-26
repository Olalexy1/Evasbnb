import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

import { FaBed, FaBath, FaWifi, FaParking, faSwimmer, FaSwimmer, } from 'react-icons/fa';
import { GiMeal, GiVacuumCleaner } from 'react-icons/gi';
import { MdOutlineLocalLaundryService, MdPets, MdKitchen } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';

import './style.scss'

const SearchResults = () => {
    return ( 
        <Container fluid className='bg-container pt-5'>
            <Container className='allrooms py-5'>
                <Row className='mx-2 pt-3'>
                    <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={RedRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href='/Room'><b>Red Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={PurpleRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href='/Room'><b>Purple Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={GreenRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href='/Room'><b>Green Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={RedRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href='/Room'><b>Red Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={PurpleRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href='/Room'><b>Purple Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={GreenRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href='/Room'><b>Green Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
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
 
export default SearchResults;