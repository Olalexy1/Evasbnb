import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel';

import slider1 from '../../images/arthur-hickinbotham.jpg'
import slider2 from '../../images/cara-grobbelaar.jpg'
import slider3 from '../../images/harry-cunningham.jpg'
import slider4 from '../../images/vije-vijendranath.jpg'

import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

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
            <Container className='form-container px-3'>
                <Row>
                    <form action="/search/destination" method="POST">
                        <Col lg md={3}>

                        </Col>
                        <Col lg md={3}>

                        </Col>
                        <Col lg={4} md={3}>

                        </Col>
                        <Col lg md={3}>

                        </Col>
                    </form>
                </Row>
            </Container>
        </Container>
     );
}

export default Banner;