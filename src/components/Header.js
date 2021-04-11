import React from 'react';
import { Navbar } from './Navbar.js';
import './Header.css';

export function Header() {
  return (
    <>
      <section className='header'>
        <Navbar></Navbar>
        <div className='headerContact'>
          <a className='headerPhoneNumber' href='tel:+1757-754-7133'>
            <i className='bi bi-telephone-outbound'></i> (757) 754-7133{' '}
          </a>
          <a
            className='headerEmail'
            href='mailto:Hello@shaunshines.com?subject=customer%20contact'>
            <i className='bi bi-envelope'></i> Hello@ShaunShines.com
          </a>
          <a id='scheduleService' href='./schedule-service'>
            <i className='bi bi-calendar2-event'></i> Schedule A Detail
          </a>
        </div>
        <div className='headerGraphics'></div>
      </section>
    </>
  );
}

export default Header;
