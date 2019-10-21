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
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        // email: action.payload.email,
        // password: action.payload.password,
        // username: action.payload.username
        token: localStorage.getItem('token')
      };
    case SIGN_OUT:
      return {
        ...state,
        // email: '',
        // password: '',
        // username: ''
        token: null
      };
    case SIGN_UP:
      return {
        ...state,
        userData: 'Sign up!'
        // email: action.payload.email,
        // password: action.payload.password
      };
    case GET_USER:
      return {
        ...state,
        userData: action.payload
        // email: action.payload.email,
        // password: action.payload.password,
        // username: action.payload.username
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
