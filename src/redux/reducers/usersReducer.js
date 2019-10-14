import { SIGN_IN, SIGN_OUT, SIGN_UP, GET_USER } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  username: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        username: action.payload.username
      };
    case SIGN_OUT:
      return {
        ...state,
        email: '',
        password: '',
        username: ''
      };
    case GET_USER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        username: action.payload.username
      };
    // case SIGN_UP:
    //   return {
    //     ...state,
    //     email: action.payload.email,
    //     password: action.payload.password
    //   };
    default:
      return state;
  }
};
