import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import slider1 from '../../images/arthur-hickinbotham.jpg';
import slider2 from '../../images/cara-grobbelaar.jpg';
import slider3 from '../../images/harry-cunningham.jpg';


import './style.scss'

const Blogcards = () => {
    return ( 
        <Container fluid className='pt-5'>
            <Container className='blogcards-container my-5'>
            <h3>Latest From Our Blog</h3>
                <Row className='mx-2 pt-3'>
                    <Col lg={4} md={4} sm={12} className='blog-cards px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={slider1} alt="Avatar" className='img'/>
                            <div className='text-container'>
                                <h6><a href='#'>Things you need to see while you're in Johannesburg</a></h6>
                                <p>Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore...</p>
                                <a className='read-more' href='#'>Read More...</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='blog-cards px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={slider2} alt="Avatar" className='img'/>
                            <div className='text-container'>
                                <h6><a href='#'>Things you need to see while you're in Johannesburg</a></h6>
                                <p>Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore...</p>
                                <a className='read-more' href='#'>Read More...</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='blog-cards px-0 mb-4 pe-3'>
                        <div className="card">
                            <img src={slider3} alt="Avatar" className='img'/>
                            <div className='text-container'>
                                <h6><a href='#'>Things you need to see while you're in Johannesburg</a></h6>
                                <p>Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore...</p>
                                <a className='read-more' href='#'>Read More...</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container> 
    );
}
 
export default Blogcards;
