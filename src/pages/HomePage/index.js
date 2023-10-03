import Container from 'react-bootstrap/Container';

import Banner from '../../components/Banner';
import { PopularHotels, BottomSection, Gallery } from '../../components/Section';
import Slickcarousel from '../../components/Slick-carousel';
import Blogcards from '../../components/Blog-cards';
import { Subform, Inqiuryform } from '../../components/Forms';

const Homepage = () => {
    return (
        <Container fluid className='px-0 mx-0'>
            <Banner />
            <PopularHotels/>
            <Slickcarousel />
            {/* <Gallery /> */}
            <Blogcards />
            <Subform />
        </Container>
    );
}

export default Homepage;