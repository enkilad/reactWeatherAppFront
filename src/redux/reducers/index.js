import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import usersReducer from './usersReducer';
import historyListReducer from './historyListReducer';
import historyDetailsReducer from './historyDetailsReducer';

export default combineReducers({
  weather: weatherReducer,
  user: usersReducer,
  historyList: historyListReducer,
  historyDetails: historyDetailsReducer
});
