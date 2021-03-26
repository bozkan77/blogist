import { combineReducers } from "redux";
//reducers
import postReducer from "./post";

const rootReducer = combineReducers({
  post: postReducer,
})

export default rootReducer;