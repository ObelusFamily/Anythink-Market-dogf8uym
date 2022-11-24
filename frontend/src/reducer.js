import alert from "./reducers/alert";
import auth from "./reducers/auth";
import { combineReducers } from "redux";
import common from "./reducers/common";
import editor from "./reducers/editor";
import home from "./reducers/home";
import item from "./reducers/item";
import itemList from "./reducers/itemList";
import profile from "./reducers/profile";
import { routerReducer } from "react-router-redux";
import settings from "./reducers/settings";

export default combineReducers({
  item,
  itemList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  alert,
  router: routerReducer,
});
