import { ActionTypes } from "./actions";
import { actions } from "../../Layout/AdminMaster/actions";

const DEFAULT_STATE = {
  isLoadingLogin: false,
  isLoadingChat: false,
  isLoadingListChat: false,
  errorLogin: "",
  errorChat: "",
  listChat: [],
  extant: 100,
  errorListChat: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case ActionTypes.LOGIN_CHAT_START:
    return {
      ...state,
      isLoadingLogin: true
    };
  case ActionTypes.LOGIN_CHAT_ERROR:
    return {
      ...state,
      isLoadingLogin: false,
      errorLogin: action.payload
    };
  case ActionTypes.LOGIN_CHAT_SUCCESS:
    return {
      ...state,
      isLoadingLogin: false,
      errorLogin: "",
    };
  case ActionTypes.SEND_MESSAGE_START:
    return {
      ...state,
      isLoadingChat: true
    };
  case ActionTypes.SEND_MESSAGE_ERROR:
    return {
      ...state,
      isLoadingChat: false,
      errorChat: action.payload
    };
  case ActionTypes.SEND_MESSAGE_SUCCESS:
    return {
      ...state,
      isLoadingChat: false
    };
  case ActionTypes.GET_LIST_CHAT_START:
    return {
      ...state,
      isLoadingListChat: true
    };
  case ActionTypes.GET_LIST_CHAT_ERROR:
    return {
      ...state,
      isLoadingListChat: false,
      errorListChat: action.payload
    };
  case ActionTypes.GET_LIST_CHAT_SUCCESS:
    return {
      ...state,
      isLoadingListChat: false,
      listChat: action.payload.listChat.reverse().concat(state.listChat),
      extant: action.payload.extant
    };  
  default:
    return state;
  }
};
