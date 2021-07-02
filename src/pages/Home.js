import Navbar from '../Components/Navbar';
import HeaderGraphic from '../Components/HeaderGraphic';
import HeaderContact from '../Components/HeaderContact';
import HomeContent from '../Components/HomeContent';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

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
