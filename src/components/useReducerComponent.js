import React, { useReducer } from 'react'

//define object state
const ACTION = {
    INCREASE: " increase",
    DECREASE: "decrease"
}
const initialstate = { counter: 0 }
const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case ACTION.INCREASE:
            return { counter: state.counter + 1 };
        case ACTION.DECREASE:
            return { counter: state.counter - 1 };
        default:
            return { counter: state.counter }

    }
}
const useReducerComponent = () => {
    //state and dispatch is the most common name
    const [state, dispatch] = useReducer(reducer, initialstate);

    const increase = () => {
        dispatch({ type: ACTION.INCREASE });
    }
    const decrease = () => {
        dispatch({ type: ACTION.DECREASE });
    }
    return (
        <div>
            <h2>Counter :{state.counter}</h2>
            <button onClick={increase} >Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default useReducerComponent