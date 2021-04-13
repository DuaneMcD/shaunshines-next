import React from 'react';
import './MakeSelect.css';

export const MakeSelect = () => {
  const makes = ['audi', 'bmw', ' dodge'];

  console.log(makes);

  return (
    <select name='car-makes' id='car-makes' className='vehicle make' required>
      <option value=''>Select a make</option>
      {makes.map(make => (
        <option key={make}>{make}</option>
      ))}
    </select>
  );
};

export default MakeSelect;
