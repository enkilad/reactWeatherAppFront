import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  weather: weatherReducer,
  users: usersReducer
});
