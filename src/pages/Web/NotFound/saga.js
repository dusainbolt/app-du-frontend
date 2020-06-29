import { put, takeLatest } from "redux-saga/effects";
import { actions, ActionTypes } from "./actions";

function* getDemo() {
  try {
    const response = false;
    if (response) {
      yield put(actions.getDemoSuccess({}));
    } else {
      yield put(actions.getDemoError({}));
    }
  } catch (e) {
    yield put(actions.getDemoError(e));
  }
}

export function* watchGetDemo() {
  yield takeLatest(ActionTypes.GET_DEMO_START, getDemo);
}
