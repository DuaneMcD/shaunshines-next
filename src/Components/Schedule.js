import React from 'react';
import './Schedule.css';
import serviceImg from './images/tireCleaner.jpg';
import CarPicker from './CarPicker';
// import Flatpickr from 'react-flatpickr';

const Schedule = () => {
  return (
    <main className='shop'>
      <button id='cart' className='cart'>
        <i className='bi bi-cart-fill'></i>
      </button>
      <h1 className='title'>Schedule Service</h1>
      <img className='shopImage' src={serviceImg} alt='' />
      <p className='salesCopy'>
        Shaun Shines offers bespoke detailing services to suite your vehicle
        needs. <br />
        <br />
        To schedule service please enter your vehicle details, detailing service
        and a date.
      </p>
      <p className='disclaimer'>
        <u>Notice</u>
        <br />
        **Base Prices shown**
        <br />
        The quote may vary depending on vehicles’ size/condition – heavily
        pitted, soiled, badly scratched etc. All vehicles are reviewed for
        condition before service.
      </p>
      <div className='servicePicker'>
        <CarPicker />
        {/* <Flatpickr className='flatpikr' /> */}
        {/* <input
          type='datetime-local'
          id='dateTime'
          className='dateTime'
          step='3600'
          required
        /> */}
      </div>
      <div className='addService'>
        <p>$100.00</p>
        <button className='addToCart'>Add to cart</button>
      </div>
    </main>
  );
};

export default Schedule;
