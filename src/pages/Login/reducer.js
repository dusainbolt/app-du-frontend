import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
  auth: {},
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
      auth: action.payload
    };
  case ActionTypes.POST_LOGIN_ERROR:
    return {
      ...state,
    };
  case ActionTypes.POST_AUTH_SUCCESS:
    return {
      ...state,
      auth: action.payload.token,
      userDetail: action.payload.data
    };
  case ActionTypes.POST_AUTH_ERROR:
    return{
      ...state,
      auth: action.payload
    };
  default:
    return state;
  }
};