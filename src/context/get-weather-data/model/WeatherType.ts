export type WeatherContextType = {
  data: { data: WeatherDataType };
  getWeatherData: (cityWeather?: string, count?: string) => Promise<void>;
};

export type WeatherDataType = {
  city: CityType;
  cod: number;
  cnt: number;
  list: listType[];
  message: number;
};

export type CityType = {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  coord: {
    lat: number;
    lon: number;
  };
};

export type listType = {
  city: any;
  cod: any;
  cnt: any;
  list: any;
  message: any;
  clouds: {
    all: number;
  };
  dt: number;
  dt_text: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: string;
  weather: weatherArrayType[];
  wind: {
    deg: number;
    speed: number;
  };
};

type weatherArrayType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type InitialStateType = {
  data: WeatherContextType;
};
