import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer.js';
import usersReducer from './usersReducer.js';

export default combineReducers({
  weather: weatherReducer,
  users: usersReducer
});