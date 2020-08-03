import { counterState } from "./state";
import { INCREMENT, DECREMENT } from "./action";

export const counterReducer = (state = counterState, action) => {
    switch(action.type) {
        case INCREMENT:
            return counterIncrement(state, action.payload);
        case DECREMENT:
            return counterDecrement(state, action.payload);
    }
}

const counterIncrement = (state, payload) => {
    return {
        ...state,
        count: state.count + payload
    }
}

const counterDecrement = (state, payload) => {
    return {
        ...state,
        count: state.count - payload
    }
}