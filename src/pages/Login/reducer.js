import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
  actorInfo: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.POST_LOGIN_START:
    return {
      ...state,
    };
  case ActionTypes.POST_LOGIN_SUCCESS:
    return {
      ...state,
      actorInfo: action.payload
    };
  case ActionTypes.POST_LOGIN_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};
