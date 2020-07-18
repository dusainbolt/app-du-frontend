import {
  put,
  takeLatest,
} from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";
import {
  postLoginApi,
  postAuthAdminApi,
  postLogoutAdminApi,
  postChangePasswordAdminApi,
} from "../../services/AuthRequest";
import {
  actions as actionLayout
} from "../Layout/AdminMaster/actions";

import {
  message
} from "antd";
import api from "../../services/api";
import { browserHistory } from "../../utils/history";

function* postLogin(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    const response = yield postLoginApi(action.values);
    yield put(actions.postLoginSuccess(response));
    yield genMsgResult("success", "Chào mừng đến trang quản trị", 1, "/bautroixanh/home");
  } catch (e) {
    yield genMsgResult("error", "Sai tài khoản hoặc mật khẩu", 1);
  }
}

function* redirectForLogin(action) {
  yield put(actionLayout.showLoadingAuth());
  try {
    yield api.setAuthRequest(action.values);
    const response = yield postAuthAdminApi();
    yield put(actions.postAuthAdminSuccess({ token: action.values }, response));
    yield genMsgResult(
      "success","Chào mừng đến trang quản trị",2,"/bautroixanh/home");
  } catch (e) {
    yield genMsgResult("error", "Phiên đăng nhập hết hạn", 2);
  }
}

function* checkAuthAdmin(action) {
  yield put(actions.postAuthAdminError({}));
  try {
    yield api.setAuthRequest(action.values);
    const response = yield postAuthAdminApi();
    yield put(actions.postAuthAdminSuccess({ token: action.values }, response));
  } catch (e) {
    yield genMsgResult("error", "Phiên đăng nhập hết hạn", 2);
  }
}

function* logoutAdmin(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    yield postLogoutAdminApi();
  } catch (e) {
    yield put(actions.postLoginSuccess({}));
  }
  yield put(actions.postLoginSuccess({}));
  yield genMsgResult("warning", "Đã đăng xuất", 1, "/bautroixanh/login");
}

function* changePassword(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    yield postChangePasswordAdminApi(action.values);
    yield put(actionLayout.hideModal());
    yield genMsgResult("success", "Đổi mật khẩu thành công", 1);
  } catch (e) {
    yield genMsgResult("warning", "Đổi mật khẩu thất bại", 1);
  }
}

function* genMsgResult(typeMsg, msg, typeHide = 0, redirect = "") {
  if (redirect) {
    yield browserHistory.push(redirect);
  }
  if (typeHide === 1) {
    yield put(actionLayout.hideLoadingEvent());
  } else if (typeHide === 2) {
    yield put(actionLayout.hideLoadingAuth());
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