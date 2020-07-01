import { combineReducers } from "redux";
import { reducer as headReducer } from "../page/Head/store/index";
import { reducer as loginSignReducer } from "../page/LoginSign/store/index";

export default combineReducers({
  head: headReducer,
  loginSign: loginSignReducer,
});
