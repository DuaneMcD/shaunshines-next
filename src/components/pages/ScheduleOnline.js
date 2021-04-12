import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Schedule from '../Schedule';

export function ScheduleOnline() {
  return (
    <>
      <Navbar />
      <Schedule />
      <Footer />
    </>
  );
}

export default ScheduleOnline;
