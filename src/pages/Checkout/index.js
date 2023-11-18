import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkoutcomp from '../../components/Checkout-comp';

import './style.scss'

const Checkout = () => {
    return ( 
        <Container fluid className='blog-container px-0'>
                <Col lg={12} className='background-image px-0'>
                    <div className='text-container px-0'>
                        <h3>Checkout</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><span>/Checkout</span></li>
                        </ul>
                    </div>
                </Col>
                <Checkoutcomp/>
        </Container>
     );
}
 
export default Checkout;