export const ActionTypes = {
  GET_DEMO_START: "GET_DEMO_START",
  GET_DEMO_SUCCESS: "GET_DEMO_SUCCESS",
  GET_DEMO_ERROR: "GET_DEMO_ERROR"
};

export const actions = {
  getDemoStart: function () {
    return {
      type: ActionTypes.GET_DEMO_START    
    };
  },
  getDemoSuccess: function (success) {
    return {
      type: ActionTypes.GET_DEMO_SUCCESS,
      payload: success
    };
  },
  getDemoError: function (error) {
    return {
      type: ActionTypes.GET_DEMO_ERROR,
      payload: error
    };
  }
};
