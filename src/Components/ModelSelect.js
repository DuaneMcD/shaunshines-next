import React from 'react';

import Select from 'react-select';
import './ModelSelect.css';

const ModelSelect = props => {
  return (
    <Select
      className='selectModel'
      placeholder='Select Vehicle Model'
      models={props.models}
      options={props.models.map(model => ({
        label: model.Model_Name,
        value: model.Model_Name,
      }))}
      onChange={e => {
        props.function(e.value);
      }}
    />
  );
};

export default ModelSelect;
