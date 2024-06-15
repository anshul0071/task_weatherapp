import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
  } from './actionTypes';
  
  const initialState = {
    loading: false,
    cities: [],
    weather: {},
    forecast: {},
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CITIES_REQUEST:
      case FETCH_WEATHER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CITIES_SUCCESS:
        return {
          ...state,
          loading: false,
          cities: action.payload,
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false,
          weather: action.payload.weatherData,
          forecast: action.payload.forecastData,
        };
      case FETCH_CITIES_FAILURE:
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  