import Head from 'next/head';
import '../Components/CarPicker.css';
import '../Components/Button.css';
import '../Components/Contact.css';
import '../Components/Footer.css';
import '../Components/HeaderContact.css';
import '../Components/HomeContent.css';
import '../Components/MakeSelect.css';
import '../Components/HeaderGraphic.css';
import '../Components/ModelSelect.css';
import '../Components/PurchaseButton.css';
import '../Components/Navbar.css';
import '../Components/Schedule.css';
import '../Components/TrimSelect.css';
import '../Components/YearSelect.css';
import '../App.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shaun Shines Detailing</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
