import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
  isLoading: false
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.GET_DEMO_START:
    return {
      ...state,
      isLoading: true
    };
  case ActionTypes.GET_DEMO_ERROR:
    return {
      ...state,
      isLoading: false,
      error: ""
    };
  case ActionTypes.GET_DEMO_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  default:
    return state;
  }
};
