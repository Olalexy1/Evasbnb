import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import './style.scss';

const Subform = () => {
    return ( 
        <Container fluid className='px-3 my-5'>
            <Container className='subform-container pt-5'>
                <h3>Subscribe & Get Special Discount!</h3>
                <p>Don't miss anything, subscribe to our newsletter for special discounts and updates.</p>
                <Row className="justify-content-center my-5">
                    <Col lg={6} md={8} sm={12} className='px-0 mx-0 mb-2'>
                        <Form.Control
                        type="email"
                        placeholder="Enter Your Email Address.."
                        className="sub-form-email"
                        />
                    </Col>
                    <Col lg={2} md={4}  sm={12} className='px-0 mx-0 mb-2'>
                        <button className="cssbuttons-io">
                            <span> Subscribe </span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </Container>
     );
}

const Inqiuryform = () => {
    return ( 
        <Container>
            
        </Container>
     );
}
 
 
export {Subform, Inqiuryform};