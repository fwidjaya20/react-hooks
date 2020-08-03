import React, { useContext } from "react";
import UserContext from "./user-context";

const UserDetail = () => {
    const { name, email } = useContext(UserContext); 
    
    return (
        <ul>
            <li> Name: {name} </li>
            <li> Email: {email} </li>
        </ul>
    );
}

export default UserDetail;