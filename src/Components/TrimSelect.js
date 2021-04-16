import React from 'react';

import Select from 'react-select';
import './TrimSelect.css';

const TrimSelect = props => {
  return (
    <Select
      className='selectTrim'
      placeholder='Select Vehicle Trim'
      trims={props.trims}
      options={{
        label: props.trims,
        value: props.trims,
      }}
    />
  );
};

export default TrimSelect;
