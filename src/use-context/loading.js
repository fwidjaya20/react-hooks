import React, { useContext } from "react";
import LoadingContext from "./loading-context";

const Loading = () => {
    const { loadingCount } = useContext(LoadingContext);

    return (
        <>
            {loadingCount > 0 && (<p> Loading ({loadingCount}) ... </p>)}
        </>
    );
}

export default Loading;