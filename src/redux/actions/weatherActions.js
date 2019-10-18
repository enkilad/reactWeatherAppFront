import { GET_WEATHER, CREATE_HISTORYLIST } from './types';
import { axiosWeatherClient, axiosClient } from '../../api';
import { getToken } from '../../api/index';

const token = getToken();

const getWeatherApi = (lat, lng) => {
  return axiosWeatherClient.get(
    `/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`
  );
};

export const getWeather = (lat, lng, city) => async dispatch => {
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

  dispatch({
    type: GET_WEATHER,
    payload: { weatherList: list, city }
  });
};

export const createHistory = () => async (dispatch, getState) => {
  const state = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  // console.log('token', token);
  const response = await axiosClient.post(
    '/history',
    {
      user: token,
      city: state.weather.city,
      weatherList: state.weather.weatherList,
      createdAtTime: state.weather.createdAtTime
    },
    config
  );
  // console.log('response.data', response.data);

  dispatch({ type: CREATE_HISTORYLIST, payload: response.data });
};
