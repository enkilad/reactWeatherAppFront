import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import usersReducer from './usersReducer';
import historyListReducer from './historyListReducer';
import historyDetailsReducer from './historyDetailsReducer';

export default combineReducers({
  weather: weatherReducer,
  users: usersReducer,
  historyList: historyListReducer,
  historyDetails: historyDetailsReducer
});
