import { GET_WEATHER, CREATE_HISTORYLIST } from '../actions/types';

const INITIAL_STATE = {
  city: '',
  weatherList: [],
  createdAtTime: null,
  historyData: null
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
    case CREATE_HISTORYLIST:
      return {
        ...state,
        historyData: action.payload
      };
    default:
      return state;
  }
};
