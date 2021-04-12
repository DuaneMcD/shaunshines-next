import React from 'react';
import './Schedule.css';
import CarQuery from './CarQuery.js';

const Schedule = () => {
  return (
    <main className='shop'>
      <script
        src='https://code.jquery.com/jquery-3.6.0.min.js'
        integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
        crossOrigin='anonymous'></script>
      <script
        type='text/javascript'
        src='http://www.carqueryapi.com/js/carquery.0.3.4.js'></script>
      <script src={CarQuery}></script>
      <button id='cart' className='cart'>
        <i className='bi bi-cart-fill'></i>
      </button>
      <h1 className='title'>Schedule Service</h1>
      <img className='shopImage' src='./images/tireCleaner.jpg' alt='' />
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
      <div className='carpicker'>
        <p className='prompt'>Please select a vehicle</p>
        <select name='car-years' id='car-years' className='vehicle year'>
          <option value='' required>
            Select a year
          </option>
        </select>
        <select
          name='car-makes'
          id='car-makes'
          className='vehicle make'
          required>
          <option value=''>Select a make</option>
        </select>
        <select
          name='car-models'
          id='car-models'
          className='vehicle model'
          required>
          <option value=''>Select a model</option>
        </select>
        <select
          name='car-model-trims'
          id='car-model-trims'
          className='trims'
          required>
          <option value=''>Select a trim</option>
        </select>
        <input
          type='datetime-local'
          id='dateTime'
          className='dateTime'
          step='3600'
          required
        />
        <p className='prompt detailService'>Detail service:</p>
        <select className='vehicle service'>
          <option value='Select a Service' required>
            Select a Service
          </option>
          <option value='Shine'>Make It Shine!</option>
          <option value='Exterior'>Exterior Only</option>
          <option value='Interior'>Interior Only</option>
          <option value='Custom'>Custom Package</option>
        </select>
      </div>
      <button className='addToCart'>Add to cart</button>
    </main>
  );
};

export default Schedule;
