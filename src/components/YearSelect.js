import React from 'react';
import './YearSelect.css';

export const YearSelect = () => {
  const currentModelYear = new Date().getFullYear();
  const years = [];
  for (let i = currentModelYear; i > 1949; i--) {
    years.push(React.createElement('option', { value: i, key: i }, i));
  }
  console.log(currentModelYear);

  return (
    <select name='car-years' id='car-years' className='vehicle year' required>
      <option value=''>Select a year</option>
      {years}
    </select>
  );
};

export default YearSelect;
