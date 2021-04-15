import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './CarPicker.css';
import YearSelect from './YearSelect';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModelSelect';

const CarPicker = () => {
  const [selectedYear, setSelectedYear] = useState('2007');
  const [selectedMake, setSelectedMake] = useState('land rover');
  // const [fetchModelsAPI, setFetchModelsAPI] = useState();
  const options = [
    { label: 'Select a Service', value: 'Select a Service' },
    { label: 'Shine', value: 'Shine' },
    { label: 'Exterior', value: 'Exterior' },
    { label: 'Interior', value: 'Interior' },
    { label: 'Custom', value: 'Custom' },
  ];
  // const refreshAPI = async () => {
  //   const response = await Axios(apiURL);
  //   setModels(response.data.Results);
  // };
  // useEffect(() => {
  //   setFetchModelsAPI(refreshAPI);
  // }, [setSelectedYear, setSelectedMake]);

  return (
    <div className='carpicker'>
      <p className='prompt'>Please select a vehicle</p>
      <YearSelect
        onChange={() => {
          setSelectedYear(React.querySelector('.userSlectedYear').textContent);
        }}
      />
      <MakeSelect
        onChange={() => {
          setSelectedMake(React.querySelector('.userSlectedMake').textContent);
        }}
      />
      <ModelSelect
        make={selectedMake}
        year={selectedYear}
        // fetchModeAPI={fetchModelsAPI}
      />
      <p className='prompt detailService'>Detail service:</p>
      <Select className='vehicle service' options={options} />
    </div>
  );
};

export default CarPicker;
