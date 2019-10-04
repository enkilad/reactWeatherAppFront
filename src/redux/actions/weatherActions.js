import { GET_WEATHER } from './types';
import { axiosClient } from '../../api';

export const getWeather = (lat, lon) => async dispatch => {
  const response = await axiosClient.get(
    `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`
  );

  dispatch({ type: 'GET_WEATHER', payload: response.data });
};
