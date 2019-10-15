import { GET_HISTORYDETAILS } from './types';
import { axiosClient } from '../../api';

export const getHistoryDetails = id => async dispatch => {
  const response = await axiosClient.get(`/history${id}`);

  dispatch({ type: GET_HISTORYDETAILS, payload: response.data });
};
