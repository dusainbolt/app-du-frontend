import api  from "./api";

export const sendMessageApi = params => {
  return api.post("/user/sendmessage", params);
};
