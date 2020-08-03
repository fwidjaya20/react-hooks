import React, { useReducer, useEffect } from "react";
import {counterReducer} from "./reducer";
import {counterState} from "./state";
import { INCREMENT, DECREMENT } from "./action";

const ExampleUseReducerHook = () => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    const handleIncBtnClicked = () => {
        dispatch({
            type: INCREMENT,
            payload: 1
        });
    }

    const handleDecBtnClicked = () => {
        dispatch({
            type: DECREMENT,
            payload: 1
        });
    }

    return (
        <div>
            <h1> The Count is {state.count} </h1>
            <button type="button" onClick={handleIncBtnClicked}> Increment </button>
            <button type="button" onClick={handleDecBtnClicked}> Decrement </button>
        </div>
    )
}

export default ExampleUseReducerHook;