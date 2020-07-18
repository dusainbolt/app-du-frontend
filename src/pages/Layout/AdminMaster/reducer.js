import {
  ActionTypes
} from "./actions";

const DEFAULT_STATE = {
  modal: {
    title: "Modal Title",
    content: null,
    visible: false,
  },
  isLoadingAuth: false,
  isLoadingEvent: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.SHOW_MODAL:
    var {
      title, content
    } = action;
    return {
      ...state,
      modal: {
        title,
        content,
        visible: true,
      },
    };
  case ActionTypes.HIDE_MODAL:
    state.modal.visible = false;
    return {
      ...state,
    };
  case ActionTypes.SHOW_LOADING_AUTH:
    return {
      ...state,
      isLoadingAuth: true
    };
  case ActionTypes.HIDE_LOADING_AUTH:
    return {
      ...state,
      isLoadingAuth: false,
    };
  case ActionTypes.SHOW_LOADING_EVENT:
    return {
      ...state,
      isLoadingEvent: true
    };
  case ActionTypes.HIDE_LOADING_EVENT:
    return {
      ...state,
      isLoadingEvent: false,
    };
  default:
    return state;
  }
};