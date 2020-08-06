import { createContext } from 'react';
import { WeatherContextType } from './model/WeatherType';

const WeatherContext = createContext<WeatherContextType | null>(null);

export default WeatherContext;
