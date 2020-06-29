import { all } from "redux-saga/effects";

import { watchGetDemo } from "../pages/Admin/Home/saga";
import { watchLogin } from "../pages/Login/saga";

function* rootSaga() {
  yield all([watchGetDemo(), watchLogin()]);
}
export default rootSaga;
