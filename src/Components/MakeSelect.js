import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Select from 'react-select';
import './MakeSelect.css';

const MakeSelect = props => {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    fetchMakes();
  }, []);
  useEffect(() => {}, [makes]);
  const fetchMakes = async () => {
    const response = await Axios(
      'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
    );
    setMakes(response.data.Results.slice(0, 147));
  };

  return (
    <Select
      className='userSlectedMake'
      placeholder='Enter Vehicle Make'
      options={makes.map(make => ({
        label: make.Make_Name,
        value: make.Make_Name,
      }))}
      onChange={e => {
        props.function(e.value);
      }}
    />
  );
};

export default MakeSelect;
