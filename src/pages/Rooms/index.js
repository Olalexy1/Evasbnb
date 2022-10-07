import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

import { FaBed, FaBath, FaWifi, FaParking, faSwimmer, FaSwimmer, } from 'react-icons/fa';
import { GiMeal, GiVacuumCleaner } from 'react-icons/gi';
import { MdOutlineLocalLaundryService, MdPets, MdKitchen } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';

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
        </Container>
     );
}
 
export default Rooms;