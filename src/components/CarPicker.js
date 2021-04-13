import React from 'react';
import './CarPicker.css';
import MakeSelect from './MakeSelect';
import YearSelect from './YearSelect';

export const CarPicker = () => {
  return (
    <div className='carpicker'>
      <p className='prompt'>Please select a vehicle</p>
      <YearSelect />
      <MakeSelect />

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
  );
};

export default CarPicker;
