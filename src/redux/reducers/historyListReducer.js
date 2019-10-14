import { GET_HISTORYLIST } from '../actions/types';

const INITIAL_STATE = {
  data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HISTORYLIST: {
      return {
        ...state,
        data: action.payload.data
      };
    }
    default:
      return state;
  }
};
