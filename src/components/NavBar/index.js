import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import logo from '../../images/Evas.png';
import SAFlag from '../../images/South-Africa.svg';

import './style.scss';


// const CustomDropDown = () => {

//   // The forwardRef is important!!
// // Dropdown needs access to the DOM node in order to position the Menu
// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//     className="toggleText"
//   >
//     {children}
//     {/* &#x25bc; */}
//   </a>
// ));

// // forwardRef again here!
// // Dropdown needs access to the DOM of the Menu to measure it
// const CustomMenu = React.forwardRef(
//   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//     const [value, setValue] = useState('');

//     return (
//       <div
//         ref={ref}
//         style={style}
//         className={className}
//         aria-labelledby={labeledBy}
//       >
//         <Form.Control
//           autoFocus
//           className="mx-3 my-2 w-auto"
//           placeholder="Search Language..."
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//         />
//         <ul className="list-unstyled">
//           {React.Children.toArray(children).filter(
//             (child) =>
//               !value || child.props.children.toLowerCase().startsWith(value),
//           )}
//         </ul>
//       </div>
//     );
//   },
// );
//   return (
//     <div>
//       <Dropdown>
//         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">Language</Dropdown.Toggle>

//         <Dropdown.Menu as={CustomMenu}>
//           <Dropdown.Item eventKey="1" active>English</Dropdown.Item>
//           <Dropdown.Item eventKey="2">French</Dropdown.Item>
//           <Dropdown.Item eventKey="3">Spanish</Dropdown.Item>
//           <Dropdown.Item eventKey="4">Russian</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//   )
// }


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

            {/* <NavDropdown className='links' title="Properties" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown> */}

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
            {/* <CustomDropDown/> */}
            {/* <Button variant="outline-success">Search</Button> */}

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