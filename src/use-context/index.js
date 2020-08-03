import React, { useContext } from "react";
import Login from "./login";
import Loading from "./loading";
import UserContext from "./user-context"
import LoadingProvider from "./loading-provider"
import UserProvider from "./user-provider"
import UserDetail from "./user-detail"

const ExampleUseContextHook = () => {
    const { name, email } = useContext(UserContext);

    return (
        <LoadingProvider>
            <UserProvider>
            <div>
                <Login />

                <Loading />

                <UserDetail />
            </div>
            </UserProvider>
        </LoadingProvider>
    );
}

export default ExampleUseContextHook;