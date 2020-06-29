export const ActionTypes = {
  SHOW_LOADING_AUTH: "SHOW_LOADING_AUTH",
  HIDE_LOADING_AUTH: "HIDE_LOADING_AUTH",
};

export const actions = {
  showLoadingAuth: function () {
    return {
      type: ActionTypes.SHOW_LOADING_AUTH    
    };
  },
  hideLoadingAuth: function () {
    return {
      type: ActionTypes.HIDE_LOADING_AUTH,
    };
  },
};
