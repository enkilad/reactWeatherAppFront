import { GET_HISTORYLIST } from './types';
import { axiosClient } from '../../api';

export const getHistoryList = data => async dispatch => {
  await axiosClient.post('/history', {
    replaceMe: 'data.replaceMe'
  });

  dispatch({ type: GET_HISTORYLIST, payload: data });
};
