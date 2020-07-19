import { combineReducers } from "redux";

import demoReducer from "../pages/Admin/Home/reducer";
import loginReducer from "../pages/Login/reducer";
import layoutReducer from "../pages/Layout/AdminMaster/reducer";
import landingPageReducer from "../pages/Web/Home/reducer";

export default combineReducers({
  demoReducer,
  loginReducer,
  layoutReducer,
  landingPageReducer,
});
