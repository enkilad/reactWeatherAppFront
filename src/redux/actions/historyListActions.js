import { GET_HISTORYLIST } from './types';
import { axiosClient } from '../../api';
import { getToken } from '../../api/index';

const token = getToken();

// id, data as params
export const getHistoryList = () => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axiosClient.get(`/history`, config);

  dispatch({ type: GET_HISTORYLIST, payload: response.data });
};
