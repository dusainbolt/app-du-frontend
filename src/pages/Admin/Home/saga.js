import { put, takeLatest } from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";
import { sendEmailApi } from "../../../services/EmailRequest";
import { actions as actionLayout } from "../../Layout/AdminMaster/actions";
import { effectAfterRequest } from "../../../utils";

function* sendEmail(action) {
  yield put(actionLayout.showLoadingEvent());
  try {
    const response = yield sendEmailApi(action.params);
    if (response.meta.code === 0) {
      yield put(actions.sendEmailSuccess({}));
      yield effectAfterRequest("success", "Gửi mail thành công", 1);
    } else {
      yield put(actions.sendEmailError({}));
      yield effectAfterRequest("error", "Gửi mail thất bại", 1);
    }
  } catch (e) {
    yield put(actions.sendEmailError(e));
    yield effectAfterRequest("error", "Gửi mail thất bại", 1);
  }
}

export function* watchSendEmail() {
  yield takeLatest(ActionTypes.SEND_EMAIL_START, sendEmail);
}
