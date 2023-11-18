import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.scss'

const Properties = () => {
    return ( 
        <Container fluid className='properties-container px-0'>
                <Col lg={12} className='background-image px-0'>
                    <div className='text-container px-0'>
                        <h3>Properties</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><span>/properties</span></li>
                        </ul>
                    </div>
                </Col>
        </Container>
     );
}
 
export default Properties;