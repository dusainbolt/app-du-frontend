import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
  actorInfo: {},
  userDetail: {},
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
  case ActionTypes.POST_AUTH_SUCCESS:
    return {
      ...state,
      userDetail: action.payload
    };
  case ActionTypes.POST_AUTH_ERROR:
    return{
      ...state,
    };
  default:
    return state;
  }
};
