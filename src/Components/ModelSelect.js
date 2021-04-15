import React from 'react';

import Select from 'react-select';
import './ModelSelect.css';

const ModelSelect = props => {
  return (
    <Select
      className='userSlectedModel'
      placeholder='Enter Vehicle Model'
      models={props.models}
      options={props.models.map(model => ({
        label: model.Model_Name,
        value: model.Model_Name,
      }))}
    />
  );
};

export default ModelSelect;
