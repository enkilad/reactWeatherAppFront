import { GET_HISTORYDETAILS } from './types';
import { axiosClient } from '../../api';

export const getHistoryDetails = data => async dispatch => {
  await axiosClient.post('/history', {
    replaceMe: 'data.replaceMe'
  });

  dispatch({ type: GET_HISTORYDETAILS, payload: data });
};
