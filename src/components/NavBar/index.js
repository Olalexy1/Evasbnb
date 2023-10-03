// import React, { useState } from 'react';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// import logo from '../../images/logo.png';
// import SAFlag from '../../images/South-Africa.svg';

// import './style.scss';

// function NavBar() {
//   return (
//     <Navbar fluid={true} className="navigation-container" bg="light" expand="lg" sticky="top">
//       <Container fluid className='navigation'>
//       <Navbar.Brand className="brand" href="/">
//             <img
//               src={logo}
//               width="60"
//               height="60"
//               className="d-inline-block align-top"
//               alt="Eva's Bed and Breakfast logo"
//             /> <span>9jahotels</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="nav-links-container ms-auto my-1">
//             <Nav.Link className='links' href="/">Home</Nav.Link>
//             <Nav.Link className='links' href="/Rooms">Hotels</Nav.Link>
//             <Nav.Link className='links' href="/Booking">Booking</Nav.Link>
//             <Nav.Link className='links' href="/Blog">Blog</Nav.Link>
//             <Nav.Link className='links' href="/Contact">Contact Us</Nav.Link>
//             <Nav.Link className='links-alt' href="#link">USD</Nav.Link>
//             <Nav.Link className='links-alt' href="#link">
//               <img
//                   src={SAFlag}
//                   width="25"
//                   // className="d-inline-block align-top"
//                   alt="South Africa Flag"
//               />
//             </Nav.Link>

//             <button className="cssbuttons-io">
//               <span> Enquiries </span>
//             </button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import logo from '../../images/logo.png';
import './style.scss';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'Hotels',
    href: '/',
  },
  {
    id: 3,
    name: "Bookings",
    href: '/',
  },
  {
    id: 4,
    name: "Contact Us",
    href: '/',
  }
]

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className="app__flex p-text" key={item.id}>
            <div />
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;