import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import {
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAILURE,
} from '../actionTypes';
import WeatherContext from './weatherContext';
import { baseURL, forecast, appId, week } from './../../api/urls';
import weatherReducer from './weatherReducer';

type PropsType = {
  children: React.ReactNode;
};

const WeatherState = (props: PropsType) => {
  const initialState = {
    data: {},
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const getWeatherData = useCallback(
    async (cityWeather = 'london', count = week) => {
      try {
        const res = await axios.get(
          `${baseURL}${forecast}${cityWeather}${count}${appId}`
        );
        dispatch({
          type: FETCH_WEATHER_DATA_SUCCESS,
          payload: res,
        });
      } catch (error) {
        dispatch({
          type: FETCH_WEATHER_DATA_FAILURE,
        });
      }
    },
    []
  );

  return (
    <WeatherContext.Provider
      value={{
        data: state.data,
        getWeatherData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherState;
