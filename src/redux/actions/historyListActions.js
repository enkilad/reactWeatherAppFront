import { GET_HISTORYLIST } from './types';
import { axiosClient } from '../../api';

// id, data as params
export const getHistoryList = () => async dispatch => {
  const response = await axiosClient.get(`/history`);

  dispatch({ type: GET_HISTORYLIST, payload: response.data });
};
