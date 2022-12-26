import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory("/");
const enhancers = [];

const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
// const devToolsExtension =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

// if (typeof devToolsExtension === "function") {
//   enhancers.push(devToolsExtension());
// }
const initialState = {};

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);
export default store;
