import { combineReducers } from "redux";

import demoReducer from "../pages/Admin/Home/reducer";
import loginReducer from "../pages/Login/reducer";
import loadingAuthReducer from "../component/Loading/AuthenLoading/reducer";
import loadingEventReducer from "../component/Loading/EventLoading/reducer";
import modalReducer from "../component/Modal/reducer";

export default combineReducers({
  demoReducer,
  loginReducer,
  loadingEventReducer,
  loadingAuthReducer,
  modalReducer,
});
