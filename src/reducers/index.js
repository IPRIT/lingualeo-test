import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import comments from "./comments";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  comments
});
