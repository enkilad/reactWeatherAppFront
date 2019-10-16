import { SIGN_IN, SIGN_OUT, SIGN_UP, GET_USER } from './types';
import { axiosClient, setToken } from '../../api';
// import history from '../../history';

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
  // this.props.history.replace('/');

  dispatch({ type: SIGN_OUT });
};

export const getUser = id => async dispatch => {
  const response = await axiosClient.get(`/users/${id}`);

  dispatch({ type: GET_USER, payload: response.data });
};

// export const getUser = (id, email) => async dispatch => {
//   const response =
//     (await axiosClient.get(`/users/${id}`)) &&
//     axiosClient.get(`/users/${email}`);

//   dispatch({ type: GET_USER, payload: response.data });
// };
