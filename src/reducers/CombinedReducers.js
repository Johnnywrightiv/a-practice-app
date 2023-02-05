// import { combineReducers } from "redux";
import { exampleReducer } from "./Reducers";

// redux store object with state
const rootReducer = combineReducers({
  keyName: exampleReducer
});

export default rootReducer