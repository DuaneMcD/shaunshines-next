import React from 'react';
import './CarPicker.css';

export const CarPicker = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <select className='car-year'>
      <option value=''>Select Year</option>
    </select>
  );
};

export default CarPicker;
