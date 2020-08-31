export const ActionTypes = {
  SEND_MESSAGE_START: "SEND_MESSAGE_START",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_ERROR: "SEND_MESSAGE_ERROR",
  LOGIN_CHAT_START: "LOGIN_CHAT_START",
  LOGIN_CHAT_SUCCESS: "LOGIN_CHAT_SUCCESS",
  LOGIN_CHAT_ERROR: "LOGIN_CHAT_ERROR",
  GET_LIST_CHAT_START: "GET_LIST_CHAT_START",
  GET_LIST_CHAT_SUCCESS: "GET_LIST_CHAT_SUCCESS",
  GET_LIST_CHAT_ERROR: "GET_LIST_CHAT_ERROR",
};

export const actions = {
  sendMessageStart: function(params){
    return {
      type: ActionTypes.SEND_MESSAGE_START,
      params
    };
  },
  sendMessageSuccess: function(success){
    return {
      type: ActionTypes.SEND_MESSAGE_SUCCESS,
      payload: success
    };
  },
  sendMessageError: function(error){
    return {
      type: ActionTypes.SEND_MESSAGE_ERROR,
      payload: error
    };
  },
  getListChatStart: function(params){
    return {
      type: ActionTypes.GET_LIST_CHAT_START,
      params
    };
  },
  getListChatSuccess: function(success){
    return {
      type: ActionTypes.GET_LIST_CHAT_SUCCESS,
      payload: success
    };
  },
  getListChatError: function(error){
    return {
      type: ActionTypes.GET_LIST_CHAT_ERROR,
      payload: error
    };
  },
  loginChatStart: function(params){
    return {
      type: ActionTypes.LOGIN_CHAT_START,
      params
    };
  },
  loginChatSuccess: function(success){
    return {
      type: ActionTypes.LOGIN_CHAT_SUCCESS,
      payload: success
    };
  },
  loginChatError: function(error){
    return {
      type: ActionTypes.LOGIN_CHAT_ERROR,
      payload: error
    };
  }
};
