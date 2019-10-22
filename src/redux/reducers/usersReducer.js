import {
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
  SIGN_UP,
  CHANGE_USERNAME,
  CHANGE_PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
  userData: null,
  token: localStorage.getItem('token')
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: localStorage.getItem('token')
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null
      };
    case SIGN_UP:
      return {
        ...state,
        userData: 'Sign up!'
      };
    case GET_USER:
      return {
        ...state,
        userData: action.payload
      };
    case CHANGE_USERNAME:
      return {
        ...state
      };
    case CHANGE_PASSWORD:
      return {
        ...state
      };
    default:
      return state;
  }
};
