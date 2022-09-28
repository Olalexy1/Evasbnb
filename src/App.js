// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid className='px-0 mx-0'>
      <NavBar/>
      <Footer/>
    </Container>
    
  );
}

export default App;
