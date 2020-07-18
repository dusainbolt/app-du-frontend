import {
  ActionTypes
} from "./actions";

const DEFAULT_STATE = {
  lang: "vn",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.CHANGE_LANGUAGE: 
    return {
      ...state,
      lang: action.lang
    };
  default:
    return state;
  }
};