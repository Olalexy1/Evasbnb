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

import Carousel from 'react-grid-carousel';

import slider1 from '../../images/arthur-hickinbotham.jpg';
import slider2 from '../../images/cara-grobbelaar.jpg';
import slider3 from '../../images/harry-cunningham.jpg';
import slider4 from '../../images/vije-vijendranath.jpg';

import './style.scss'

const MidSection = () => {
    return ( 
        <Container fluid className='mt-5'>
            <Container className='midsection py-5'>
                <h3>Our Popular Rooms</h3>
                <p>Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem <br/> quo architecto laborum qui sequi sint id accusamus tempore.</p>
                <Row className='mx-2 pt-3'>
                    <Col lg={4} md={4} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={RedRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href=''><b>Red Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={PurpleRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href=''><b>Purple Room</b></a>
                                <ul>
                                    <li><IoBed className='icon'/> Double Bed</li>
                                    <li><FaBath className='icon'/> 1 Bathroom</li>
                                    <li><FaWifi className='icon'/> Wifi </li>
                                </ul>
                                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='rooms px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={GreenRoom} alt="Avatar" className='img'/>
                        </div>
                        <div className="text-container py-2">
                                <a href=''><b>Green Room</b></a>
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

const BottomSection = () => {
    return ( 
        <Container fluid className='pt-5'>
            <Container className='services-container px-5 my-5'>
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


const Gallery = () => {
    return (
        <Container fluid className='px-0 mx-0 mb-5'>
                <Carousel containerStyle={{padding: '0px'}} cols={3} rows={1} gap={10} loop autoplay={3500} scrollSnap={true}>
                <Carousel.Item>
                <img width="100%" src={slider1} />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" src={slider4} />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" src={slider2} />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" src={slider3} />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" src={slider1} />
                </Carousel.Item>
                <Carousel.Item>
                <img width="100%" src={slider4} />
                </Carousel.Item>
            </Carousel>
      </Container>
    )
}

 
export { MidSection, BottomSection, Gallery };