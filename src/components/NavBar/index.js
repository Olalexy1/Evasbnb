import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import logo from '../../images/logo.png';
import SAFlag from '../../images/South-Africa.svg';

import './style.scss';

function NavBar() {
  return (
    <Navbar fluid className="navigation-container" bg="light" expand="lg" sticky="top">
      <Container fluid className='navigation'>
      <Navbar.Brand className="brand" href="/">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Eva's Bed and Breakfast logo"
            /> <span>Eva's Bed and Breakfast</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links-container ms-auto my-1">
            <Nav.Link className='links' href="/">Home</Nav.Link>
            <Nav.Link className='links' href="/Rooms">Rooms</Nav.Link>
            <Nav.Link className='links' href="/Booking">Bookings</Nav.Link>
            <Nav.Link className='links' href="/Blog">Blog</Nav.Link>
            <Nav.Link className='links' href="/Contact">Contact Us</Nav.Link>
            <Nav.Link className='links-alt' href="#link">USD</Nav.Link>
            <Nav.Link className='links-alt' href="#link">
              <img
                  src={SAFlag}
                  width="25"
                  // className="d-inline-block align-top"
                  alt="South Africa Flag"
              />
            </Nav.Link>

            <button className="cssbuttons-io">
              <span> Enquiries </span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;