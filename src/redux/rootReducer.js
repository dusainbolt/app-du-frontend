import { combineReducers } from "redux";

import demoReducer from "../pages/Admin/Home/reducer";
import loginReducer from "../pages/Login/reducer";
import LayoutReducer from "../pages/Layout/AdminMaster/reducer";
import LandingPageReducer from "../pages/Web/Home/reducer";

export default combineReducers({
  demoReducer,
  loginReducer,
  LayoutReducer,
  LandingPageReducer,
});
