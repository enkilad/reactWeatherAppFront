import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  GET_USER,
  CHANGE_USERNAME,
  CHANGE_PASSWORD
} from './types';
import { axiosClient, setToken } from '../../api';
// import history from '../../history';
import { getToken } from '../../api/index';

const token = getToken();

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export const signUp = formValues => async dispatch => {
  await axiosClient.post('/register', {
    username: formValues.username,
    email: formValues.email,
    password: formValues.password
  });

  dispatch({ type: SIGN_UP, payload: formValues });
};

export const signIn = formValues => async dispatch => {
  const response = await axiosClient.post('/login', {
    username: formValues.username,
    email: formValues.email,
    password: formValues.password
  });

  setToken(response.data.token);

  dispatch({ type: SIGN_IN, payload: formValues });
};

export const signOut = () => async dispatch => {
  localStorage.clear();
  this.props.history.replace('/');

  dispatch({ type: SIGN_OUT });
};

export const getUser = () => async dispatch => {
  const response = await axiosClient.get(`/user`, config);

  console.log(response);
  dispatch({ type: GET_USER, payload: response.data[0] });
};

export const changeUsername = inputValues => async dispatch => {
  const response = await axiosClient.post(
    '/updateUsername',
    {
      newUsername: inputValues.newUsername
    },
    config
  );
  console.log(response.data);
  dispatch({ type: CHANGE_USERNAME, payload: response.data });
};

export const changePassword = inputValues => async dispatch => {
  const response = await axiosClient.post(
    '/updatePassword',
    {
      currentPassword: inputValues.currentPassword,
      newPassword: inputValues.newPassword
    },
    config
  );

  dispatch({ type: CHANGE_PASSWORD, payload: response.data });
};
