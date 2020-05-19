import { combineReducers } from "redux";
import { reducer as headReducer } from "../components/Head/store/index";
import { reducer as loginSignReducer } from "../components/LoginSign/store/index";

export default combineReducers({
  head: headReducer,
  loginSign: loginSignReducer,
});
