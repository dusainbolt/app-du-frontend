import { put, takeLatest } from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";
import {
  postLoginApi,
  postAuthAdminApi,
  postLogoutAdminApi,
  postChangePasswordAdminApi,
} from "../../services/AuthRequest";
import { actions as actionLayout } from "../Layout/AdminMaster/actions";

import { effectAfterRequest } from "../../common/js/function";
import api from "../../services/api";

function* postLogin(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    const response = yield postLoginApi(action.values);
    yield put(actions.postLoginSuccess(response));
    yield effectAfterRequest("success", "Chào mừng đến trang quản trị", 1, "/bautroixanh/home");
  } catch (e) {
    yield effectAfterRequest("error", "Sai tài khoản hoặc mật khẩu", 1);
  }
}

function* redirectForLogin(action) {
  yield put(actionLayout.showLoadingAuth());
  try {
    yield api.setAuthRequest(action.values);
    const response = yield postAuthAdminApi();
    yield put(actions.postAuthAdminSuccess({ token: action.values }, response));
    yield effectAfterRequest("success", "Chào mừng đến trang quản trị", 2, "/bautroixanh/home");
  } catch (e) {
    yield effectAfterRequest("error", "Phiên đăng nhập hết hạn", 2);
  }
}

function* checkAuthAdmin(action) {
  try {
    yield api.setAuthRequest(action.values);
    const response = yield postAuthAdminApi();
    yield put(actions.postAuthAdminSuccess({ token: action.values }, response));
  } catch (e) {
    yield effectAfterRequest("error", "Phiên đăng nhập hết hạn", 2);
  }
}

function* logoutAdmin(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    yield postLogoutAdminApi({ token: action.token });
  } catch (e) {
    yield put(actions.postLoginSuccess({}));
  }
  yield put(actions.postLoginSuccess({}));
  yield effectAfterRequest("warning", "Đã đăng xuất", 1, "/bautroixanh/login");
}

function* changePassword(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    const response = yield postChangePasswordAdminApi(action.values);
    if (response.data) {
      yield put(actions.postChangePasswordSuccess(response));
      yield effectAfterRequest("success", "Đổi mật khẩu thành công", 1);
    } else {
      yield put(actions.postAuthAdminError({}));
      yield effectAfterRequest("warning", "Đổi mật khẩu thất bại", 1);
    }
  } catch (e) {
    yield put(actions.postAuthAdminError(e));
    yield effectAfterRequest("warning", "Đổi mật khẩu thất bại", 1);
  }
}

export function* watchLogin() {
  yield takeLatest(ActionTypes.POST_LOGIN_START, postLogin);
  yield takeLatest(ActionTypes.POST_REDIRECT_START, redirectForLogin);
  yield takeLatest(ActionTypes.POST_AUTH_START, checkAuthAdmin);
  yield takeLatest(ActionTypes.POST_LOGOUT_START, logoutAdmin);
  yield takeLatest(ActionTypes.POST_CHANGE_PASSWORD_START, changePassword);
}
