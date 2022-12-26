import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "./LoginComponent";
import operations from "../redux/operations";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const { user, loggedIn, loading } = useSelector((state) => state.userReducer);
    const [selectedItem, setSelectedItem] = useState(undefined);

    const userLoginAttempt = (user) => {
        debugger;
        // if(user.id){
            dispatch(operations.userLoginReq(user))
                .then((res) => {
                    setSelectedItem(undefined);
                })
                .catch((res) => {});
        // }
        // else
        //     dispatch(operations.userRegisterReq(user))
        //         .then((res) => {
        //             setSelectedItem(res);
        //         })
        //         .catch((res) => {});
    }

    const reset = () => {
        dispatch(operations.logoutUser());
    }

    return (
        <LoginComponent
            user={user}
            loggedIn={loggedIn}
            loading={loading}
            userLoginAttepmt={userLoginAttempt}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            reset={reset}
        />
    );
};

export default LoginContainer;