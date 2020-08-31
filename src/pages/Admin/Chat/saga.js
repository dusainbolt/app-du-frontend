import { put, takeLatest, delay } from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";
import { sendMessageAPI, loginChatAPI, getListChatAPI } from "../../../services/MessageRequest";
import { effectAfterRequest } from "../../../utils";
import  api  from "../../../services/api";

function* sendMessage(action) {
  try {
    const response = yield sendMessageAPI(action.params);
    if (response.meta.code === 0) {
      yield put(actions.sendMessageSuccess({}));
    } else {
      yield put(actions.sendMessageError({}));
    }
  } catch (e) {
    effectAfterRequest("error", "Server 500 Error");
    yield put(actions.sendMessageError(e));
  }
}

function* loginChat(action){
  try{
    const response = yield loginChatAPI(action.params);
    if (response.meta.code === 0) {
      yield api.setAuthRequest(response.data.token);
      yield put(actions.loginChatSuccess(response.data));
    }else{
      yield put(actions.loginChatError(response.meta.msg));
    }
  }catch(e){
    effectAfterRequest("error", "Server 500 Error");
    yield put(actions.loginChatError(e));
  }
}

function* getListChat(action){
  try{
    const response = yield getListChatAPI(action.params);
    if (response.meta.code === 0) {
      yield put(actions.getListChatSuccess(response.data));
    }else{
      yield put(actions.getListChatError(response.meta.msg));
    }
  }catch(e){
    yield put(actions.getListChatError(e));
  }
}

export function* watchSendMessage() {
  yield takeLatest(ActionTypes.SEND_MESSAGE_START, sendMessage);
  yield takeLatest(ActionTypes.LOGIN_CHAT_START, loginChat);
  yield takeLatest(ActionTypes.GET_LIST_CHAT_START, getListChat);
}
