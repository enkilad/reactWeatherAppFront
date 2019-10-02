import { SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';

export const fetchUser = id => async dispatch => {
  const response = await axios.get(`/users/${id}`);

  dispatch({ type: 'SIGN_OUT', payload: response.data });
};
