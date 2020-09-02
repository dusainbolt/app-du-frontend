import { combineReducers } from "redux";

import demoReducer from "../pages/Admin/Home/reducer";
import loginReducer from "../pages/Login/reducer";
import layoutReducer from "../pages/Layout/reducer";
import chatReducer from "../pages/Admin/Chat/reducer";

export default combineReducers({
  demoReducer,
  loginReducer,
  layoutReducer,
  chatReducer,
});
