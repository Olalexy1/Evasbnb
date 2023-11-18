import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './style.scss'

import { Subform } from '../../components/Forms';

// import BiMap from 'react-icons/bi'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    return ( 
        <Container fluid className='contact-container px-0'>
                <Col lg={12} className='background-image px-0'>
                    <div className='text-container px-0'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><span>/Contact Us</span></li>
                        </ul>
                    </div>
                </Col>
                <Container>
                    <Row className='my-5'>
                        <Col lg={4} md={6} className='mb-3'>
                            <div className='contact-card py-4'>
                                <div className='icon-container mb-2'>
                                    <FaMapMarkerAlt/>
                                </div>
                                <h4>Address</h4>
                                <p>
                                    Cole Street, <br/> Surulere, <br/> Lagos
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='mb-3'>
                            <div className='contact-card py-4'>
                                <div className='icon-container mb-2'>
                                    <FaPhone/>
                                </div>
                                <h4>Phone</h4>
                                <p>
                                    08188394639
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='mb-3'>
                            <div className='contact-card py-4'>
                                <div className='icon-container mb-2'>
                                    <FaEnvelope/>
                                </div>
                                <h4>Email</h4>
                                <p>
                                    bms@gmail.com
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Col className='question-container' lg={12}>
                        <h4>Have Any Questions?</h4>
                        <p>Kindly fill the form below</p>
                    </Col>
                    <Form action="#" method="POST">
                        <Row className='question-form-container mt-3 py-4 px-4 mx-1'>
                            <Col lg={6} className='my-3'>
                                <Form.Control className="form-items py-3" type="text" name="fullname" placeholder="Fullname" required/>
                            </Col>
                            <Col lg={6} className='my-3'>
                                <Form.Control
                                type="email" placeholder="Email Address" className="form-items py-3" name="email" required/>
                            </Col>
                            <Col lg={6} className='my-3'>
                                <Form.Control className="form-items py-3" type="tel" name="phone" placeholder="Phone Number" required/>
                            </Col>
                            <Col lg={6} className='my-3'>
                                <Form.Select className="form-items py-3" aria-label="Default select example">
                                            <option selected>Inquiry Category</option>
                                            <option value="1">Hotel Inquiry</option>
                                            <option value="2">Amenities</option>
                                            <option value="3">Services</option>
                                            <option value="4">Help Center</option>
                                </Form.Select>
                            </Col>
                            <Col lg={12} className='my-3'>
                                <Form.Control
                                type="textarea" placeholder="Enter Message" className="form-items py-3" id='text-area' name="inquiry" height='200px' required/>
                            </Col>
                            <Col lg={12} className='my-3'>
                                <Row className='justify-content-center'>
                                    <Col md={4} lg={3}>
                                        <button className="cssbuttons-io">
                                            <span> Contact Us </span>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Col className='map-container'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0679268547965!2d3.3591025741320917!3d6.513086723286031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c47c625358f%3A0xcf2bd1824e32ccfd!2sCole%20St%2C%20Idi%20Oro%20101241%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700300641400!5m2!1sen!2sng"
                        width="100%" 
                        height="450" 
                        style={{ border:0 }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </Col>
                <Subform/>
        </Container>
     );
}
 
export default Contact;