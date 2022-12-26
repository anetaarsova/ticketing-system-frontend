import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ticketReducer from "./ticket/redux/reducer";
import userReducer from "./user/redux/reducer";

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    ticketReducer: ticketReducer,
    userReducer: userReducer
  });
};

export default rootReducer;
