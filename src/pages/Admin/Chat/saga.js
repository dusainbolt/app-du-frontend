import { put, takeLatest } from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";
import { sendMessageApi } from "../../../services/MessageRequest";
import { effectAfterRequest } from "../../../utils";

function* sendEmail(action) {
  try {
    const response = yield sendMessageApi(action.params);
    if (response.meta.code === 0) {
      yield put(actions.sendMessageSuccess({}));
    } else {
      yield put(actions.sendEmailError({}));
      effectAfterRequest("error", "Send message error");
    }
  } catch (e) {
    effectAfterRequest("error", "Send message error");
    yield put(actions.sendEmailError(e));
  }
}

export function* watchSendEmail() {
  yield takeLatest(ActionTypes.SEND_EMAIL_START, sendEmail);
}
