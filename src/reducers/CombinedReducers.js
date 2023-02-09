import { combineReducers } from "redux";
import { reducers } from "./Reducers";

// redux store with state object
const rootReducer = combineReducers({
  state: reducers,
});

export default rootReducer;