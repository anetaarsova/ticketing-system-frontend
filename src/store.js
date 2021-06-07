import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory("/");
const enhancers = [];

const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}
const initialState = {};

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);
export default store;
