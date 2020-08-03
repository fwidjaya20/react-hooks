import React, { useState, useContext } from "react";
import LoadingContext from "./loading-context";
import UserContext from "./user-context";

const Login = () => {
    const { showLoading, hideLoading } = useContext(LoadingContext);
    const { setUserDetail } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const authenticateUser = (username, password) => {
        showLoading();

        setTimeout(() => {
            console.log("Bump");
            
            setUserDetail({
                name: "Fredrick Widjaya",
                email: "f.widjaya20@gmail.com"
            });

            hideLoading();
        }, 3000);
    }

    const handleOnSubmit = () => {
        authenticateUser(username, password)
    }

    return (
        <form noValidate>
            <div>
                <label> Username </label>
                <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
                <label> Password </label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div>
                <button type="button" onClick={handleOnSubmit}> Submit </button>
            </div>
        </form>
    );
}

export default Login;