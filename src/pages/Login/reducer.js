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
    console.log(action);
    return {
      ...state,
      actorInfo: action.payload.token,
      userDetail: action.payload.data
    };
  case ActionTypes.POST_AUTH_ERROR:
    return{
      ...state,
      actorInfo: action.payload
    };
  default:
    return state;
  }
};
