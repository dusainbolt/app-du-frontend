export const ActionTypes = {
  SEND_EMAIL_START: "SEND_EMAIL_START",
  SEND_EMAIl_SUCCESS: "SEND_EMAIl_SUCCESS",
  SEND_EMAIl_ERROR: "SEND_EMAIl_ERROR"
};

export const actions = {
  sendEmailStart: function(params){
    return {
      type: ActionTypes.SEND_EMAIL_START,
      params
    };
  },
  sendEmailSuccess: function(success){
    return {
      type: ActionTypes.SEND_EMAIl_SUCCESS,
      payload: success
    };
  },
  sendEmailError: function(error){
    return {
      type: ActionTypes.SEND_EMAIl_ERROR,
      payload: error
    };
  }
};
