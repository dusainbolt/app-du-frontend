import {
  ActionTypes
} from "./actions";

const DEFAULT_STATE = {
  demo: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.CHANGE_LANGUAGE: 
    return {
      ...state,
    };
  default:
    return state;
  }
};