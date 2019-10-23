import { GET_HISTORYDETAILS } from './types';
import { axiosClient } from '../../api';

export const getHistoryDetails = () => async dispatch => {
  const response = await axiosClient.get('/history');

  dispatch({ type: GET_HISTORYDETAILS, payload: response.data });
};
