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

import './style.scss';

const Rooms = () => {
    return ( 
        <Container fluid className='rooms-container px-0 mx-0'>
            <Row className='background-img'>
            </Row>
        </Container>
     );
}
 
export default Rooms;