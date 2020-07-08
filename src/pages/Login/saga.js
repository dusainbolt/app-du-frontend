import { put, takeLatest, delay } from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";
import { postLoginApi, postAuthAdminApi, postLogoutAdminApi, postChangePasswordAdminApi } from "../../services/AuthRequest";
import { actions as actionLoadingAuth } from "../../component/Loading/AuthenLoading/actions";
import { actions as actionLoadingEvent } from "../../component/Loading/EventLoading/actions";
import { actions as actionModal } from "../../component/Modal/actions";

import { message } from "antd";
import api from "../../services/api";
import { browserHistory } from "../../utils/history";

function* postLogin(action) {
  yield put(actionLoadingEvent.showLoadingEvent());
  try {
    const response = yield postLoginApi(action.values);
    if (!response.status) {
      yield put(actions.postLoginSuccess(response));
      yield genMsgResult("success", "Chào mừng đến trang quản trị", 800, 1, "/bautroixanh/home");
    } else {
      yield put(actions.postLoginError({}));
      yield genMsgResult("warning", "Có lỗi bất ngờ sảy ra", 800, 1);
    }
  } catch (e) {
    yield genMsgResult("error", "Sai tài khoản hoặc mật khẩu", 800, 1);
  }

}

function* redirectForLogin(action){
  yield put(actionLoadingAuth.showLoadingAuth());
  try {
    yield api.setAuthRequest(action.values);
    const response = yield postAuthAdminApi();
    yield put(actions.postAuthAdminSuccess(response));
    yield genMsgResult("success", "Chào mừng đến trang quản trị", 800, 2, "/bautroixanh/home");
  } catch (e) {
    yield put(actions.postAuthAdminError(e));
    yield genMsgResult("error", "Phiên đăng nhập hết hạn", 800, 2);
  }
}

function* checkAuthAdmin(action){
  try {
    yield api.setAuthRequest(action.values);
    const response = yield postAuthAdminApi();
    yield put(actions.postAuthAdminSuccess(response));
  } catch (e) {
    yield put(actions.postAuthAdminError(e));
    yield genMsgResult("error", "Phiên đăng nhập hết hạn", 800, 2);
  }
}

function* logoutAdmin(action){
  yield put(actionLoadingEvent.showLoadingEvent());
  try {
    yield postLogoutAdminApi();
  } catch (e) {
    yield put(actions.postLoginSuccess({}));
  }
  yield put(actions.postLoginSuccess({}));
  yield genMsgResult("warning", "Đã đăng xuất", 800, 1, "/bautroixanh/login");
}

function* changePassword(action){
  yield put(actionLoadingEvent.showLoadingEvent());
  try {
    const response = yield postChangePasswordAdminApi(action.values);
    if (!response.status) {
      yield put(actions.postLoginSuccess(response));
      yield put(actionModal.hideModal());
      yield genMsgResult("success", "Đổi mật khẩu thành công", 800, 1);
    }else{
      yield genMsgResult("warning", "Đổi mật khẩu thất bại", 800, 1);
    }
  } catch (e) {
    yield genMsgResult("warning", "Đổi mật khẩu thất bại", 800, 1);
  }
}

function* genMsgResult(typeMsg, msg, timeDelay, typeHide = 0, redirect=""){
  yield delay(timeDelay);
  if(redirect){
    yield browserHistory.push(redirect);
  }
  if(typeHide === 1){
    yield put(actionLoadingEvent.hideLoadingEvent());
  }else if( typeHide === 2){
    yield put(actionLoadingAuth.hideLoadingAuth());
  }
  yield message[typeMsg](msg);
}

export function* watchLogin() {
  yield takeLatest(ActionTypes.POST_LOGIN_START, postLogin);
  yield takeLatest(ActionTypes.POST_REDIRECT_START, redirectForLogin);
  yield takeLatest(ActionTypes.POST_AUTH_START, checkAuthAdmin);
  yield takeLatest(ActionTypes.POST_LOGOUT_START, logoutAdmin);
  yield takeLatest(ActionTypes.POST_CHANGE_PASSWORD_START, changePassword);

}
