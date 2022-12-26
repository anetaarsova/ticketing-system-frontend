import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterComponent from "./RegisterComponent";
import operations from "../redux/operations";

function RegisterContainer(props) {
    const dispatch = useDispatch();
    const { user, loggedIn, loading } = useSelector((state) => state.userReducer);
    const [selectedItem, setSelectedItem] = useState(undefined);

    function userLoginAttepmt(user) {
        if(user.id){
            dispatch(operations.userLoginReq(user))
                .then((res) => {
                    setSelectedItem(undefined);
                })
                .catch((res) => {});
        } else
            dispatch(operations.userRegisterReq(user))
                .then((res) => {
                    setSelectedItem(res);
                })
                .catch((res) => {});
    }

    function reset() {
        dispatch(operations.logoutUser());
    }

    return (
        <RegisterComponent
            user={user}
            loggedIn={loggedIn}
            loading={loading}
            userLoginAttepmt={userLoginAttepmt}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            reset={reset}
        />
    );
}

export default RegisterContainer;
