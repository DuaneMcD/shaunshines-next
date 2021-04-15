import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Axios from 'axios';
import './CarPicker.css';
import YearSelect from './YearSelect';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModelSelect';

const CarPicker = () => {
  const [models, setModels] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2010');
  const [selectedMake, setSelectedMake] = useState('kia');
  const apiURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${selectedMake}/modelyear/${selectedYear}?format=json`;
  const options = [
    { label: 'Select a Service', value: 'Select a Service' },
    { label: 'Make it Shine!', value: 'Shine' },
    { label: 'Exterior', value: 'Exterior' },
    { label: 'Interior', value: 'Interior' },
    { label: 'Custom', value: 'Custom' },
  ];

  const fetchModels = async () => {
    const response = await Axios(apiURL);
    setModels(response.data.Results);
  };

  const displayEstimate = () => {};

  useEffect(() => {
    if (selectedYear && selectedMake) {
      fetchModels();
      document.querySelector('.selectModel').label = 'RESET';
    }
  }, [selectedYear, selectedMake]);

  return (
    <div className='servicePicker'>
      <p>Please select a vehicle</p>
      <YearSelect
        function={setSelectedYear}
        onChange={console.log(selectedYear)}
      />
      <MakeSelect function={setSelectedMake} />
      <ModelSelect make={selectedMake} year={selectedYear} models={models} />
      <p className='promptSelectService'>Detail service:</p>
      <Select className='selectService' options={options} />
    </div>
  );
};

export default CarPicker;
