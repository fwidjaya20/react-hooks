import React, { useState, useEffect } from "react";

const ExampleUseEffectHook = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const result = {
            username: username,
            password: password
        } 
        document.getElementById("formResult").innerHTML = JSON.stringify(result);
    });

    const handleOnSubmit = () => {
        const result = {
            username: username,
            password: password
        }
        console.log("Form Result", JSON.stringify(result));
    }

    return (
        <>
        <form noValidate onSubmit={handleOnSubmit}>
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
        <pre id="formResult"></pre>
        </>
    );
}

export default ExampleUseEffectHook;