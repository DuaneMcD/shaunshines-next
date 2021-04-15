import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Select from 'react-select';
import './ModelSelect.css';

const ModelSelect = props => {
  const [models, setModels] = useState([]);

  const apiURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${props.make}/modelyear/${props.year}?format=json`;

  useEffect(() => {
    fetchModels();
  });

  const fetchModels = async () => {
    const response = await Axios(apiURL);
    setModels(response.data.Results);
  };

  return (
    <Select
      className='userSlectedModel'
      placeholder='Enter Vehicle Model'
      options={models.map(model => ({
        label: model.Model_Name,
        value: model.Model_Name,
      }))}
      onChange={opt => console.log(opt.label, opt.value)}
    />
  );
};

export default ModelSelect;
