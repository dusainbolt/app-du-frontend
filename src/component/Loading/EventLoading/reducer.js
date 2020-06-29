import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
  isLoading: false
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.SHOW_LOADING_EVENT:
    return {
      ...state,
      isLoading: true
    };
  case ActionTypes.HIDE_LOADING_EVENT:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
};
