import { all } from "redux-saga/effects";

import { watchLogin } from "../pages/Login/saga";
import { watchSendMessage } from "../pages/Admin/Chat/saga";
import { watchSendEmail } from "../pages/Admin/Home/saga";

function* rootSaga() {
  yield all([
    watchLogin(),
    watchSendEmail(),
    watchSendMessage(),
  ]);
}
export default rootSaga;
