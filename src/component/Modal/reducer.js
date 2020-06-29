import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
  title: "Modal Title",
  content: null,
  visible: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.SHOW_MODAL:
    return {
      ...state,
      title: action.title,
      content: action.content,
      visible: true,
    };
  case ActionTypes.HIDE_MODAL:
    return {
      ...state,
      visible: false,
    };
  default:
    return state;
  }
};
