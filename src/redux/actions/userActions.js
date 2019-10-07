import { SIGN_IN, SIGN_OUT, SIGN_UP, GET_USER } from './types';
import { axiosClient, setToken } from '../../api';

export const signUp = formValues => async dispatch => {
  const response = await axiosClient.post('/register', {
    username: formValues.username,
    password: formValues.password
  });
  setToken(response.data.token);

  dispatch({ type: SIGN_UP, payload: formValues });
};

export const signIn = formValues => async dispatch => {
  const response = await axiosClient.post('/login', {
    username: formValues.username,
    password: formValues.password
  });

  setToken(response.data.token);
  dispatch({ type: SIGN_IN, payload: formValues });
};

export const signOut = () => async dispatch => {
  dispatch({ type: SIGN_OUT });
};

export const getUser = id => async dispatch => {
  const response = await axiosClient.get(`/users/${id}`);

  dispatch({ type: GET_USER, payload: response.data });
};
