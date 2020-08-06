import React, { FC, useContext, useEffect, useState } from 'react';
import './weatherOfWeek.scss';
import WeatherContext from '../../context/get-weather-data/weatherContext';
import windIcon from '../../assets/images/winds.png';
import termIcon from '../../assets/images/temp.png';
import WeatherSearch from '../weather-search/WeatherSearch';
import { week } from '../../api/urls';
import { WeatherContextType } from '../../context/get-weather-data/model/WeatherType';

const WeatherOfWeek: FC = () => {
  const weatherContext = useContext(WeatherContext) as WeatherContextType;
  const { getWeatherData } = weatherContext;
  const data = weatherContext?.data.data;
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      weatherContext?.getWeatherData(value, week);
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
      <div className='week__container'>
        {data?.list.map((item) => (
          <div className='week__container--items' key={item.dt}>
            <div className='week__container--name'>
              <p>{data.city.name}</p>
            </div>
            <div className='week__container--temp'>
              <img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt='Weather Icon'
              />
              <p>{Math.ceil(item.main.temp)} &deg;&nbsp;C</p>
            </div>
            <div className='week__container--type'>
              <p>{item.weather[0].main}</p>
            </div>
            <div className='week__container--options'>
              <div>
                <img src={windIcon} alt='Wind Icon' />
                <p>Wind speed &nbsp;{item.wind.speed}&nbsp; m/s</p>
              </div>
              <div>
                <img src={termIcon} alt='Wind Icon' />
                <p>Wind degree &nbsp;{item.wind.deg} &nbsp; deg</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherOfWeek;
