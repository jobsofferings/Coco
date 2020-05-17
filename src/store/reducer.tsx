import { combineReducers } from "redux";
import { reducer as headReducer } from "../components/Head/store/index";
import { reducer as userReducer } from "../components/Archive/store/index";

export default combineReducers({
  head: headReducer,
  archive: userReducer,
});
