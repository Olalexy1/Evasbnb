import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// import logo from '../../images/logo.png';
import './style.scss';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'Blog',
    href: '#',
  },
  {
    id: 3,
    name: "About Us",
    href: '#',
  },
  {
    id: 4,
    name: "Contact Us",
    href: '/contact',
  }
]

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={logo} alt="logo" /> */}
        <h1>
          <a href="/" className="logo-text">My</a>
        </h1>
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className={`app__flex p-text ${location.pathname === item.href ? 'active' : ''}`} key={item.id}>
            <a className="links-text" href={item.href}>{item.name}</a>
            <div />
          </li>
        ))}

        <li className='link-btn'>
          <a className="link-btn-text" href='/'>Sign In</a>
        </li>
        <li className='link-btn'>
          <a className="link-btn-text" href='/'>Register</a>
        </li>
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
                <li 
                key={item.id}>
                  <a className={`${location.pathname === item.href ? 'active' : ''}`} href={item.href} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}

              <li className='link-btn'>
                <a className="link-btn-text" href='/'>Sign In</a>
              </li>
              <li className='link-btn'>
                <a className="link-btn-text" href='/'>Register</a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;