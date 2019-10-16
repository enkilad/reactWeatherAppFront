import { GET_HISTORYDETAILS } from './types';
import { axiosClient } from '../../api';
import { getToken } from '../../api/index';

const token = getToken();

// id, data as params
export const getHistoryDetails = () => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axiosClient.get(`/history`, config);

  dispatch({ type: GET_HISTORYDETAILS, payload: response.data });
};
