// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { MidSection, BottomSection, Gallery } from './components/Section'



function App() {
  return (
    <Container fluid className='px-0 mx-0'>
      <NavBar/>
      <Banner/>
      <MidSection/>
      <Gallery/>
      <BottomSection/>
      <Footer/>
    </Container>
    
  );
}

export default App;
