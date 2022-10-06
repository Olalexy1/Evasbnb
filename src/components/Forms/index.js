import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import './style.scss';

const Subform = () => {
    return ( 
        <Container fluid>
            <Container className='subform-container'>
                <Row className="justify-content-center my-5">
                    <Col className='px-0 mx-0 mb-2' sm md lg={6}>
                            <Form.Control
                            type="email"
                            placeholder="Enter Your Email Address.."
                            className="sub-form-email"
                            />
                    </Col>
                    <Col className='px-0 mx-0 mb-2' sm md={12} lg={2}>
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