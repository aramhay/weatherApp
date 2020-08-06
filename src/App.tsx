import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WeatherContainer from './components/weather-container/WeatherContainer';
import WeatherState from './context/get-weather-data/weatherState';

const App = () => {
  return (
    <BrowserRouter>
      <WeatherState>
        <WeatherContainer />
      </WeatherState>
    </BrowserRouter>
  );
};

export default App;
