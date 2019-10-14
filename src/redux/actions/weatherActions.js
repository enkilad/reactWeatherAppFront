import { GET_WEATHER, GET_HISTORYLIST } from './types';
import { axiosWeatherClient, axiosClient } from '../../api';
import { getToken } from '../../api/index';

const getWeatherApi = (lat, lng) => {
  return axiosWeatherClient.get(
    `/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`
  );
};

const token = getToken();

const someFunc = async state => {
  console.log('token', token);
  await axiosClient.post('/history', {
    user: token,
    city: state.weather.city,
    weatherList: state.weather.weatherList,
    createdAtTime: state.weather.createdAtTime
  });
};

export const getHistory = () => async (dispatch, getState) => {
  const state = getState();
  const response = someFunc(state);
  console.log('response.data', response.data);
  // const id = state.users.id;
  // const id = '5d97c6a319d0c31ec86b750b';

  dispatch({ type: GET_HISTORYLIST, payload: response.data }); // u stopped here!!!
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

  // const id = state.users.id;

  // await axiosClient.post(`/history`, {
  //   user: { id },
  //   data: { city, list: '' }
  // });

  dispatch({
    type: GET_WEATHER,
    payload: { weatherList: list, city }
  });
};
