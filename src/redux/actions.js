// src/redux/actions.js
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "./actionTypes";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "c579002b26c81d258571535f720e292a";

const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "04fb310e0cmshd02034144da9f42p164e6bjsn19847a33f4e2",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const fetchCities = (input) => async (dispatch) => {
  dispatch({ type: FETCH_CITIES_REQUEST });
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );
    const data = await response.json();
    dispatch({ type: FETCH_CITIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CITIES_FAILURE, error });
  }
};

export const fetchWeatherData = (lat, lon) => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });
  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    const weatherData = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    dispatch({
      type: FETCH_WEATHER_SUCCESS,
      payload: { weatherData, forecastData },
    });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_FAILURE, error });
  }
};
