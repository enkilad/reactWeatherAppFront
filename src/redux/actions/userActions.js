import { GET_USER, SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';

export const getUser = id => async dispatch => {
  const response = await axios.get(`/users/${id}`);

  dispatch({ type: GET_USER, payload: response.data });
};
