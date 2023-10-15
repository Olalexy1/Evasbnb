import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

import { FaBed, FaBath, FaWifi, FaParking, FaStar, FaSwimmer, } from 'react-icons/fa';
import { GiMeal, GiVacuumCleaner } from 'react-icons/gi';
import { MdOutlineLocalLaundryService, MdPets, MdKitchen, MdFreeBreakfast } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';

import Carousel from 'react-grid-carousel';

import slider1 from '../../images/arthur-hickinbotham.jpg';
import slider2 from '../../images/cara-grobbelaar.jpg';
import slider3 from '../../images/harry-cunningham.jpg';
import slider4 from '../../images/vije-vijendranath.jpg';

import './style.scss';

const PopularHotels = ({randomHotels}) => {

    return (
        <Container fluid className='mt-5'>
            <Container className='midsection py-5'>
                <h3>The Best Hotels In Your City</h3>
                <p>Available in Your City Today</p>
                <Row className='mx-2 pt-3'>
                    {randomHotels?.map((item) => (
                        <Col lg={4} md={6} sm={12} className='rooms px-0 mb-4 pe-3'>
                            <div className="card">
                                <img src={item.max_photo_url} alt="Avatar" className='img' />
                            </div>
                            <div className="text-container py-2">
                                <a href='/Room' style={{ whiteSpace: 'nowrap', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}><b>{item.hotel_name}</b></a>
                                <p>{item.district || item.city_name_en}</p>
                                <ul>
                                    {
                                        item.review_score && (
                                           <li><FaStar className='icon' /> {item.review_score.toLocaleString('en-US', { minimumFractionDigits: 1 })}</li> 
                                        )
                                    }
                                    <li><MdFreeBreakfast className='icon' /> {item.ribbon_text || 'Breakfast excluded'}</li>
                                    {/* <li><FaWifi className='icon' /> Wifi </li> */}
                                </ul>
                                <span className='amt'>{Math.floor(item.composite_price_breakdown.all_inclusive_amount.value).toLocaleString('en-US', {style: 'currency', currency: item.composite_price_breakdown.all_inclusive_amount.currency})} </span> <span className='night'> / Night</span>
                            </div>
                        </Col>
                    ))}

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
                                <GiMeal />
                                <p>Delicious Meals</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <FaParking />
                                <p>Parking Area</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <FaWifi />
                                <p>Free Wifi</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <MdOutlineLocalLaundryService />
                                <p>Laundry services</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <FaSwimmer />
                                <p>Swimming</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <MdPets />
                                <p>Pets Allowed</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <GiVacuumCleaner />
                                <p>Cleaning Services</p>
                            </Col>
                            <Col className='service-icon-container pt-3 px-0' lg={3} md={4} sm={6}>
                                <MdKitchen />
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
            <Carousel containerStyle={{ padding: '0px' }} cols={3} rows={1} gap={10} loop autoplay={3500} scrollSnap={true}>
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


export { PopularHotels, BottomSection, Gallery };