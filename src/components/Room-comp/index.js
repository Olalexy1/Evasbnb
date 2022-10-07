import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

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

            <Row>
                <Col></Col>
            </Row>

        </Container>
     );
}
 
export default Roomcomponent;