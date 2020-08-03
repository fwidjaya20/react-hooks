import React, { useState } from "react";
import UserContext from "./user-context";

const UserProvider = ({children}) => {
    const setUserDetail = ({
        name, email
    }) => {
        updateUserDetail(prevState => {
            return {
                ...prevState,
                name: name,
                email: email,
            }
        })
    }

    const userState = {
        name: "",
        email: "",
        setUserDetail
    };

    const [userDetail, updateUserDetail] = useState(userState);

    return (
        <UserContext.Provider value={userDetail}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;