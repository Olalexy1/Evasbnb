// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar';
import Footer from './components/Footer';


import Homepage from './pages/HomePage';
import Rooms from './pages/Rooms';
import Aboutus from './pages/AboutUs';
import Booking from './pages/Bookings';
import Contact from './pages/ContactUs';
import Blog from './pages/Blog';
import Services from './pages/Services-page';
import Properties from './pages/Properties';
import Room from './pages/Room';
import Checkout from './pages/Checkout';
import SearchResults from './components/Search-result';


function App() {
  return (
    <Router>
      <Container fluid className='px-0 mx-0'>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/Rooms" element={<Rooms />} />
            <Route exact path="/About" element={<Aboutus />} />
            <Route exact path="/Booking" element={<Booking />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Properties" element={<Properties />} />
            <Route exact path="/Room" element={<Room />} />
            <Route exact path="/Checkout" element={<Checkout />} />
            <Route exact path="/Search-Results" element={<SearchResults />} />
          </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
