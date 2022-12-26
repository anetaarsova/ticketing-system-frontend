import { userConstants } from "./constants";

let user = JSON.parse(localStorage.getItem("user"));
//const initialState = user ? { loggedIn: true, user } : {};

const defaultState = {
  user: undefined,
  loading: false,
  loggedIn: false
};

export default function reducer(currentState = defaultState, action) {

  switch (action.type) {

    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...currentState,
        loading: true
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...currentState,
        user: action.payload,
        loading: true,
        loggedIn: true
      };
    case userConstants.USER_REGISTER_FAILURE:
      return {
        ...currentState,
        loading: false,
        loggedIn: false
      };
    case userConstants.USER_LOGIN_REQUEST:
      return {
        ...currentState,
        loading: true
      };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...currentState,
        user: action.payload,
        loading: true,
        loggedIn: true
      };
    case userConstants.USER_LOGIN_FAILURE:
      return {
        ...currentState,
        loading: false,
        loggedIn: false
      };
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return defaultState;
  }
}
