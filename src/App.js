// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar';
import Footer from './components/Footer';


import Homepage from './pages/HomePage';
import Rooms from './pages/Rooms';


function App() {
  return (
    <Router>
      <Container fluid className='px-0 mx-0'>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/Rooms" element={<Rooms />} />
          </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
