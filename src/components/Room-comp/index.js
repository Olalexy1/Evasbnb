import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

import Slickcarousel from '../image-gallery-carousel'; 

import './style.scss';

const Roomcomponent = () => {
    return ( 
        <Container fluid className='room-comp-container'>
            <Row className='my-5 room-brief mx-2'>
                <Col sm className='brief py-3'>
                    <span>Beds</span>
                    <p>Double Bed</p>
                </Col>
                <Col sm className='brief py-3'>
                    <span>Room Size</span>
                    <p>Beds</p>
                </Col>
                <Col sm className='brief py-3'>
                    <span>Occupancy</span>
                    <p>2 Adults</p>
                </Col>
                <Col sm className='brief py-3'>
                    <span>Bathroom</span>
                    <p>1 Shower Bath</p>
                </Col>
                <Col sm md={3} lg={3} className='price-container py-4'>
                    <div>
                        <span className='price'> Price</span> <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
                    </div>
                </Col>
            </Row>
            <Slickcarousel/>
            <Container className='room-desc-container'>
                <Row className='my-5'>
                    <Col className='inner-desc-container py-4'>
                        <h3>Room Description</h3>
                        <div className='desc-text pt-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                                minima nesciunt dolorem!
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                                minima nesciunt dolorem!
                            </p>
                        </div>

                    </Col>
                    <Col md={4} lg={3} className='px-0'>
                        <div className='check-form px-3 py-4'>

                            <h4 className='header-text pb-2'>Check Availability</h4>

                            <Form action="#" method="POST">
                                <Row className='form'>
                                    <Col className="form-sect my-3" lg={12} md={12}>
                                        <Form.Control className="form-items py-3" type="date" name="checkin"/>
                                    </Col>
                                    <Col className="form-sect my-3" lg={12} md={12}>
                                        <Form.Control className="form-items py-3" type="date" name="checkout"/>
                                    </Col>
                                    <Col className="form-sect my-3" lg={12} md={12}>
                                        <Form.Select className="form-items py-3" aria-label="Default select example">
                                            <option>Adult</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </Form.Select>
                                    </Col>
                                    <Col className="form-sect my-3" lg={12} md={12}>
                                        <Form.Select className="form-items py-3" aria-label="Default select example">
                                            <option>Children</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </Form.Select>
                                    </Col>
                                    <Col className="form-btn my-2" lg={12} md={12}>
                                        <button className="cssbuttons-io">
                                            <span> Check Availability </span>
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        
                    </Col>
                </Row>

                <Row className='my-5'>
                    <Col className='amenities-container py-4'>
                        <Row>
                            <Col lg={5} className='mb-3'>
                                <div className='amenities-list-container'>
                                <img fluid src={GreenRoom} width="100%" alt=""/>
                                </div>
                            </Col>
                            <Col lg={7} className='mb-3'>
                                <div className='amenities-img'>
                                    <img fluid src={GreenRoom} width="100%" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} lg={3} className='discover-container py-4 px-0'>
                        <h4 className='header-text pb-2'>Discover Our Rooms</h4>
                        <Row className='img-grid-container px-0 my-3'>
                            <Col className='img-grid mb-3' lg={6}>
                                <a href="" >
                                    <img fluid src={GreenRoom} width="100%" alt=""/>
                                </a>
                            </Col> 
                            <Col className='img-grid mb-3' lg={6}>
                                <a href="">
                                    <img src={GreenRoom} width="100%" alt=""/>
                                </a>
                            </Col>
                            <Col className='img-grid mb-3' lg={6}>
                                <a href="">
                                    <img src={GreenRoom} width="100%" alt=""/>
                                </a>
                            </Col>
                            <Col className='img-grid mb-3' lg={6}>
                                <a href="">
                                    <img src={GreenRoom} width="100%" alt=""/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className='my-5'>
                    <Col className='room-services-container py-4'></Col>
                    <Col md={3} lg={3} className='help-container py-4'>
                        <h4>Need Help</h4>
                    </Col>
                </Row>
            </Container>

        </Container>
     );
}
 
export default Roomcomponent;