export const ActionTypes = {
  SEND_MESSAGE_START: "SEND_MESSAGE_START",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_ERROR: "SEND_MESSAGE_ERROR"
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
  }
};
