import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../../images/logo.png'

import { FaFacebook, FaTwitter, FaAirbnb, FaInstagram, FaLocationArrow, FaMapPin, FaPhone, FaPaperPlane } from 'react-icons/fa';

import './style.scss'

const Footer = () => {
    return ( 
        <Container fluid className='footer-container'>
            <Container>
                <Row className='footer py-5'>
                    <Col lg={4} md={6} className='left-footer inner-footer mb-4'>
                        <div className='left-footer-inner'>
                            <a href="/"> <img src={logo} width="50px" alt="Eva's Logo" className='me-3' /></a>
                            <h6>Book My Stay</h6>
                        </div>

                        <div>
                            <p>
                            Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                            </p>
                        </div>

                        <div className='social-media-container mt-3'>
                            <a href="#"> <FaFacebook className='icon'/> </a>
                            <a href="#"> <FaInstagram className='icon'/> </a>
                            <a href="#"> <FaTwitter className='icon'/> </a>    
                        </div>  

                    </Col>
                    <Col lg md={6} className='centre-left-footer inner-footer mb-4'>
                        <h6>Links</h6>
                        <ul>
                            <li>Countries</li>
                            <li>Regions</li>
                            <li>Hotels</li>
                            <li>Cities</li>
                            <li>Districts</li>
                            <li><a href="#">See More...</a></li>
                        </ul>
                    </Col>
                    <Col lg md={6} className='centre-right-footer inner-footer mb-4'>
                        <h6>Company</h6>
                        <ul>
                            <li><a href="#"> My Booking </a></li>
                            <li><a href="#"> About Us </a></li>
                            <li><a href="#"> FAQs </a></li>
                            <li><a href="#"> Our </a></li>
                            <li><a href="#"> Blog </a></li>
                            <li><a href="#"> Terms of Service </a></li>
                        </ul>
                    </Col>
                    <Col lg md={6} className='right-footer inner-footer mb-4'>
                        <h6>Contact Us</h6>
                        <ul>
                            <li><FaLocationArrow className='icon'/> Cole street, Surulere, Lagos</li>
                            <li><FaPhone className='icon'/> 08188394639</li>
                            <li><FaPaperPlane className='icon'/> bms@gmail.com</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </Container>
     );
}
 
export default Footer;