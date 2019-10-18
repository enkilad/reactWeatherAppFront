import { SIGN_IN, SIGN_OUT, GET_USER, SIGN_UP } from '../actions/types';

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
    case GET_USER:
      return {
        ...state,
        userData: action.payload
        // email: action.payload.email,
        // password: action.payload.password,
        // username: action.payload.username
      };
    case SIGN_UP:
      return {
        ...state,
        user: 'Sign up!'
        // email: action.payload.email,
        // password: action.payload.password
      };
    default:
      return state;
  }
};
