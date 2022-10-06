// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { MidSection, BottomSection, Gallery } from './components/Section';
import Slickcarousel from './components/Slick-carousel';
import Blogcards from './components/Blog-cards';
import { Subform, Inqiuryform } from './components/Forms';



function App() {
  return (
    <Container fluid className='px-0 mx-0'>
      <NavBar/>
      <Banner/>
      <MidSection/>
      <Slickcarousel/>
      <BottomSection/>
      <Blogcards/>
      <Subform/>
      <Footer/>
    </Container>
    
  );
}

export default App;
