import { GET_WEATHER, GET_HISTORYLIST } from './types';
import { axiosWeatherClient, axiosClient } from '../../api';

const getWeatherApi = (lat, lng) => {
  return axiosWeatherClient.get(
    `/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`
  );
};

export const getHistory = () => async (dispatch, getState) => {
  const state = getState();
  // const id = state.users.id;
  const id = '5d97c6a319d0c31ec86b750b';
  const data = await axiosClient.get('/history', {
    user: { id }
  });
  dispatch({
    type: GET_HISTORYLIST,
    payload: data
  });
};

export const getWeather = (lat, lng, city) => async (dispatch, getState) => {
  const state = getState();

  const response = await getWeatherApi(lat, lng);

  const list = response.data.list.map(obj => {
    let temp = Math.floor(obj.main.temp);
    const date = obj.dt_txt;
    const weather = obj.weather[0].main;
    if (+temp > 0) {
      temp = `+${temp}`;
    }
    return { temp, date, weather };
  });

  const id = state.users.id;

  await axiosClient.post('/history', {
    user: { id },
    data: { city, list: '' }
  });

  dispatch({
    type: GET_WEATHER,
    payload: {
      weather: {
        ...response.data,
        list
      },
      city
    }
  });
};
