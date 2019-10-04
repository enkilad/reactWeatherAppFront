import { GET_WEATHER } from '../actions/types';

const INITIAL_STATE = {
  city: '',
  createdAtTime: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        city: action.payload.data.city,
        createdAtTime: new Date()
      };
    default:
      return state;
  }
};
