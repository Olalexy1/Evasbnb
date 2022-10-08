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
                    <Col md={3} lg={3} className='check-form px-3 py-4'>
                        <h4>Check Availability</h4>

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
                    </Col>
                </Row>
            </Container>

        </Container>
     );
}
 
export default Roomcomponent;