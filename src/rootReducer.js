import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ticketReducer from "./views/user/redux/reducer";

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    tickets: ticketReducer,
  });
};

export default rootReducer;
