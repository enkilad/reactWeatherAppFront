import { GET_HISTORYLIST } from './types';
import { axiosClient } from '../../api';

export const getHistoryList = (id, data) => async dispatch => {
  await axiosClient.get(`/history/${id}`, {
    replaceMe: 'data.replaceMe'
  });

  dispatch({ type: GET_HISTORYLIST, payload: data });
};
