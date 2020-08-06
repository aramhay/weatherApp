import React, { FC } from 'react';
import WeatherOfDay from '../weather-of-day/WeatherOfDay';
import WeatherOfWeek from '../weather-of-week/WeatherOfWeek';
import './weatherContainer.scss';
import { Switch, Route, NavLink } from 'react-router-dom';

const WeatherContainer: FC = () => {
  return (
    <div className='weather__container'>
      <header className='weather__container--header'>
        <div className='weather__container--links'>
          <NavLink exact to='/' className='link' activeClassName='active'>
            Week
          </NavLink>
        </div>
        <div className='weather__container--links'>
          <NavLink to='/day' className='link' activeClassName='active'>
            Day
          </NavLink>
        </div>
      </header>
      <Switch>
        <Route exact path='/' component={WeatherOfWeek} />
        <Route path='/day' component={WeatherOfDay} />
      </Switch>
    </div>
  );
};

export default WeatherContainer;
