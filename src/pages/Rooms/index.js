import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Allrooms from '../../components/Allrooms';
import { Subform } from '../../components/Forms';

import './style.scss'

const Rooms = () => {
    return ( 
        <Container fluid className='rooms-container px-0'>
                <Col lg={12} className='background-image px-0'>
                    <div className='text-container px-0'>
                        <h3>All Rooms</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><span>/Rooms</span></li>
                        </ul>
                    </div>
                </Col>
                <Allrooms/>
                <Subform/>
        </Container>
     );
}
 
export default Rooms;