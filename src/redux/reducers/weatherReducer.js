import { GET_WEATHER } from '../actions/types';

const INITIAL_STATE = {
  city: '',
  weatherList: [],
  createdAtTime: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        city: action.payload.city,
        weatherList: action.payload.weatherList,
        createdAtTime: new Date()
      };
    default:
      return state;
  }
};
