import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reduce = combineReducers({});
const intialState = {};
const middleware = [thunk];

const store = createStore(
  reduce,
  composeWithDevTools(applyMiddleware([...middleware]))
);

export default store;
