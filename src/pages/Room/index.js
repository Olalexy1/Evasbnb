import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Subform } from '../../components/Forms';
import Roomcomponent from '../../components/Room-comp';

import './style.scss'

const Room = () => {
    return ( 
        <Container fluid className='room-container px-0'>
                <Col lg={12} className='background-image px-0'>
                    <div className='text-container px-0'>
                        <h3>Green Room</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><span>/Room</span></li>
                        </ul>
                    </div>
                </Col>
                <Roomcomponent/>
                <Subform/>
        </Container>
     );
}
 
export default Room;