import axios from 'axios';

const API_KEY = `888396d43cd293985fc8d02a01a4c4dc`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`;

export const FETCH_WEATHER = `FETCH_WEATHER`;

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type    : FETCH_WEATHER,
		payload : request,
	};
}