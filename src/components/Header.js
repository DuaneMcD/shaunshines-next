import React from 'react';
import { Navbar } from './Navbar.js';
import './Header.css';

function Header() {
  return (
    <>
      <section class='header'>
        <section class='address-box'>
          <a
            id='address'
            href='https://www.google.com/maps/place/Shaun+Shines+Automotive+Detailing/@36.8141086,-76.1014505,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd628d231aa7bdf57!8m2!3d36.8141086!4d-76.0992618?authuser=5'>
            <i class='bi bi-geo-alt-fill'></i> 3642 Holland Road Unit 103,
            Virgina Beach, VA 23452
          </a>
        </section>
        <Navbar></Navbar>
        <div class='headerContact'>
          <a class='headerPhoneNumber' href='tel:+1757-754-7133'>
            <i class='bi bi-telephone-outbound'></i> (757) 754-7133{' '}
          </a>
          <a
            class='headerEmail'
            href='mailto:Hello@shaunshines.com?subject=customer%20contact'>
            <i class='bi bi-envelope'></i> Hello@ShaunShines.com
          </a>
          <a id='scheduleService' href='./schedule-service'>
            <i class='bi bi-calendar2-event'></i> Schedule A Deatail
          </a>
        </div>

        <div class='headerGraphics'>
          <img
            class='headerWordMark'
            src={`${process.env.PUBLIC_URL}/images/tireCleaner.jpg`}
            alt='shaun shines detailing'
          />
        </div>
      </section>
    </>
  );
}

export default Header;
