import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todosReducer,
  filtersReducer,
});

export default rootReducer;
