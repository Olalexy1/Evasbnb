import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.scss'

const Blog = () => {
    return ( 
        <Container fluid className='blog-container px-0'>
                <Col lg={12} className='background-image px-0'>
                    <div className='text-container px-0'>
                        <h3>Blog</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><span>/Blog</span></li>
                        </ul>
                    </div>
                </Col>
        </Container>
     );
}
 
export default Blog;