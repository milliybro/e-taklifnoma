import { thunk } from "redux-thunk";
import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";

const store = (initialState) => {
  const middleware = [thunk];
  return createStore(reducers, initialState, applyMiddleware(...middleware));
};
export default store;
