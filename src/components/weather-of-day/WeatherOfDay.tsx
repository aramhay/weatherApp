import React, { FC, useEffect, useContext, useState } from 'react';
import WeatherContext from '../../context/get-weather-data/weatherContext';
import windIcon from '../../assets/images/winds.png';
import termIcon from '../../assets/images/temp.png';

import './weatherOfDay.scss';
import WeatherSearch from '../weather-search/WeatherSearch';
import { WeatherContextType } from '../../context/get-weather-data/model/WeatherType';

const WeatherOfDay: FC = () => {
  const [value, setValue] = useState('');
  const weatherContext = useContext(WeatherContext) as WeatherContextType;
  const { getWeatherData } = weatherContext;
  const data = weatherContext?.data.data;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      weatherContext?.getWeatherData(value);
      setValue('');
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return (
    <>
      <WeatherSearch
        value={value}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <div className='day__container'>
        <div className='day__container--items' key={data?.list[0].dt}>
          <div className='day__container--name'>
            <p>{data?.city.name}</p>
          </div>
          <div className='day__container--temp'>
            <img
              src={`http://openweathermap.org/img/w/${data?.list[0].weather[0].icon}.png`}
              alt='Weather Icon'
            />
            <p>{data?.list[0].main.temp} &deg;&nbsp;C</p>
          </div>
          <div className='day__container--type'>
            <p>{data?.list[0].weather[0].main}</p>
          </div>
          <div className='day__container--options'>
            <div>
              <img src={windIcon} alt='Wind Icon' />
              <p>Wind speed &nbsp;{data?.list[0].wind.speed}&nbsp; m/s</p>
            </div>
            <div>
              <img src={termIcon} alt='Wind Icon' />
              <p>Wind degree &nbsp;{data?.list[0].wind.deg} &nbsp; deg</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherOfDay;
