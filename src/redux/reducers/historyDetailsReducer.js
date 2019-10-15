import { GET_HISTORYDETAILS } from '../actions/types';

const INITIAL_STATE = {
  data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HISTORYDETAILS: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};
