import { combineReducers } from "redux";
import alert from "./alert";
import retriever from "./retriever";
import getPath from "./getPath";

export default combineReducers({
  alert,
  retriever,
  getPath
});
