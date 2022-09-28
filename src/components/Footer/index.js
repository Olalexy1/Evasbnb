import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../../images/Evas.png'

import { FaFacebook, FaTwitter, FaAirbnb, FaInstagram, FaLocationArrow, FaMapPin, FaPhone, FaPaperPlane } from 'react-icons/fa';

import './style.scss'

const Footer = () => {
    return ( 
        <Container fluid className='footer-container'>
            <Container>
                <Row className='footer py-5'>
                    <Col lg={4} md={6} className='left-footer inner-footer mb-4'>
                        <div className='left-footer-inner'>
                            <a href=""> <img src={logo} width="50px" alt="Eva's Logo" className='me-3' /></a>
                            <h6>Eva's Bed and Breakfast</h6>
                        </div>

                        <div>
                            <p>
                            Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                            </p>
                        </div>

                        <div className='social-media-container mt-3'>
                            <a href=""> <FaFacebook className='icon'/> </a>
                            <a href=""> <FaInstagram className='icon'/> </a>
                            <a href=""> <FaTwitter className='icon'/> </a>
                            <a href=""> <FaAirbnb className='icon'/> </a>    
                        </div>  

                    </Col>
                    <Col lg md={6} className='centre-left-footer inner-footer mb-4'>
                        <h6>Services</h6>
                        <ul>
                            <li>Parking Area</li>
                            <li>Entertainment</li>
                            <li>WIFI</li>
                            <li>Laundry Services</li>
                            <li>Kitchen</li>
                            <li><a href="">See More...</a></li>
                        </ul>
                    </Col>
                    <Col lg md={6} className='centre-right-footer inner-footer mb-4'>
                        <h6>Links</h6>
                        <ul>
                            <li><a href=""> Bookings </a></li>
                            <li><a href=""> About Us </a></li>
                            <li><a href=""> FAQs </a></li>
                            <li><a href=""> Our Rooms </a></li>
                            <li><a href=""> Blog </a></li>
                            <li><a href=""> Properties </a></li>
                        </ul>
                    </Col>
                    <Col lg md={6} className='right-footer inner-footer mb-4'>
                        <h6>Contact Us</h6>
                        <ul>
                            <li><FaLocationArrow className='icon'/> 41 Good Hope Street, 2101 Johannesburg, South Africa</li>
                            <li><FaPhone className='icon'/> 08058198545</li>
                            <li><FaPaperPlane className='icon'/> evasbnb@gmail.com</li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>

        </Container>
     );
}
 
export default Footer;