import React, { HTMLProps, FC } from 'react';
import './weatherSearch.scss';

const WeatherSearch: FC<HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <div className='input__container'>
      <input {...props} type='text' placeholder='Enter the city name' />
    </div>
  );
};

export default WeatherSearch;
