import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/shaun-shines-detailing-logo-optimized.png';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <section className='address-box'>
        <a
          id='address'
          href='https://www.google.com/maps/place/Shaun+Shines+Automotive+Detailing/@36.8141086,-76.1014505,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd628d231aa7bdf57!8m2!3d36.8141086!4d-76.0992618?authuser=5'>
          <i className='bi bi-geo-alt-fill'></i> 3642 Holland Road Unit 103,
          Virgina Beach, VA 23452
        </a>
      </section>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className='shaunShinesLogo' src={logo} alt='Shaun Shines Logo' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/schedule'
              className='nav-links'
              onClick={closeMobileMenu}>
              Schedule Service
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
