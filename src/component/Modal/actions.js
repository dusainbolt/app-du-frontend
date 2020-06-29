export const ActionTypes = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const actions = {
  showModal: function (title, content) {
    return {
      type: ActionTypes.SHOW_MODAL,
      title,
      content,
    };
  },
  hideModal: function () {
    return {
      type: ActionTypes.HIDE_MODAL,
    };
  },
};
