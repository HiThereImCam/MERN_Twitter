import { combineReducers } from "redux";
//import session from "./session_reducer";
import errors from "./errors_reducer";
import session from "./session_api_reducer";
import tweets from "./tweets_reducer";

const RootReducer = combineReducers({
  //session,
  errors,
  session,
  tweets,
});

export default RootReducer;
