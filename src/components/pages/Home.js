import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import HeaderGraphic from '../HeaderGraphic';
import HeaderContact from '../HeaderContact';
import HomeContent from '../HomeContent';
import Contact from '../Contact';
import Footer from '../Footer';

export function Home() {
  return (
    <>
      <Navbar />
      <HeaderContact />
      <HeaderGraphic />
      <HomeContent />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
