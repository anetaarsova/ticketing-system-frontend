import {
    userLogin,
    userRegister
} from "../../api/UserApi";
import actions from "./actions";


const userRegisterReq = (user) => {
    console.log("user", user);
    return (dispatch, getState) => {
        dispatch(actions.userRegisterRequest());
        return userRegister(user)
            .then((returnedItem) => {
                console.log("returned item", returnedItem);
                dispatch(actions.userRegisterSuccess(returnedItem));
                return Promise.resolve(returnedItem);
            })
            .catch((e) => {
                dispatch(actions.userRegisterFail(e));
                return Promise.reject(e);
            });
    };
};

const userLoginReq = (user) => {
    console.log("user", user);
    return (dispatch, getState) => {
        dispatch(actions.userLoginRequest());
        return userLogin(user)
            .then((returnedItem) => {
                console.log("returned item", returnedItem);
                dispatch(actions.userLoginSuccess(returnedItem));
                return Promise.resolve(returnedItem);
            })
            .catch((e) => {
                dispatch(actions.userLoginFail(e));
                // console.log("e", e);
                return Promise.reject(e);
            });
    };
};

const logoutUser = () => {
    return (dispatch) => {
        return dispatch(actions.userLogout);
    };
};

export default {
    userRegisterReq,
    userLoginReq,
    logoutUser
};