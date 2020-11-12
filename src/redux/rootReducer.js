import { combineReducers } from "redux";

import loginReducer from "../pages/Login/reducer";
import layoutReducer from "../pages/Layout/AdminMaster/reducer";
import landingPageReducer from "../pages/WebHome/reducer";

export default combineReducers({
  loginReducer,
  layoutReducer,
  landingPageReducer,
});
