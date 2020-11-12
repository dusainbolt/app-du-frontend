export const ActionTypes = {
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
  GET_DEMO_SUCCESS: "GET_DEMO_SUCCESS",
  GET_DEMO_ERROR: "GET_DEMO_ERROR"
};

export const actions = {
  changeLanguage: function (lang) {
    return {
      type: ActionTypes.CHANGE_LANGUAGE,
      lang
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
