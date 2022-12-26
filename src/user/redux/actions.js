import { userConstants } from "./constants";
import {Redirect} from "react-router-dom";


const userRegisterRequest = (request) => {
    return {
        type: userConstants.USER_REGISTER_REQUEST,
        payload: request,
    };
};

const userRegisterSuccess = (user) => {
    return {
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: user,
    };
};

const userRegisterFail = (error) => {
    return {
        type: userConstants.USER_REGISTER_FAILURE,
        payload: error,
    };
};
const userLoginRequest = (request) => {
    return {
        type: userConstants.USER_LOGIN_REQUEST,
        payload: request,
    };
};

const userLoginSuccess = (user) => {
    return {
        type: userConstants.USER_LOGIN_SUCCESS,
        payload: user,
    };
};

const userLoginFail = (error) => {
    return {
        type: userConstants.USER_LOGIN_FAILURE,
        payload: error,
    };
};

const userLogout = () => {
    //return <Redirect to="/home" />;
    return {
      type: userConstants.USER_LOGOUT,
      payload: {},
    };
};

export default {
    userLoginRequest,
    userLoginSuccess,
    userLoginFail,
    userRegisterRequest,
    userRegisterSuccess,
    userRegisterFail,
    userLogout
};