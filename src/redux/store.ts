import { combineReducers, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducers = combineReducers({
  counterReducer,
  dynamicCounterReducer,
});

const store = createStore(rootReducers);

export default store;
