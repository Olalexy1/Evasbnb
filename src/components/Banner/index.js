import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

import slider1 from '../../images/arthur-hickinbotham.jpg'
import slider2 from '../../images/cara-grobbelaar.jpg'
import slider3 from '../../images/harry-cunningham.jpg'
import slider4 from '../../images/vije-vijendranath.jpg'


import { FaChevronCircleRight, FaChevronCircleLeft, FaUser, FaChild, FaCalendarDay } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import './style.scss'

const Banner = () => {
    return ( 
        <Container fluid className='banner px-0'>
            <Carousel
                indicators="false"
                nextIcon={<FaChevronCircleRight className='indicator-icon'/>}
                prevIcon={<FaChevronCircleLeft className='indicator-icon'/>}>
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
                    <Row className='form mx-2'>
                        <Col className="form-sect mb-3 mt-3" lg md={6}>
                            <Form.Label className='label'><FaCalendarDay className='form-icons'/> Check-In</Form.Label>
                            <Form.Control type="date" name="checkin" required/>
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg md={6}>
                            <Form.Label className='label'><FaCalendarDay className='form-icons'/> Check-Out</Form.Label>
                            <Form.Control type="date" name="checkout" required/>
                        </Col>
                        <Col className="form-sect mb-3 mt-3" lg={5} md={9}>
                            <Row className='px-0'>
                                <Col className='mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><FaUser className='form-icons'/> Adult</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                                <Col className='mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><FaChild className='form-icons'/> Children</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                                <Col className='mb-3' lg md={4} sm={4}>
                                    <Form.Label className='label'><IoBed className='form-icons'/> Rooms</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
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