
import axios from 'axios';

const API_KEY = 'dbb4fd35a774c23c35c8f10524e6f24d';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},by`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
