import { useState } from "react"

export const useCounter = (initialState = 10) => {
    //Counter's initial state
    const [state, setState] = useState(initialState);
    //Counter's methods
    const increment = (factor = 1) => {
        setState( state + factor);
    }
    const decrement = (factor = 1) => {
        setState( state - factor);
    }
    const reset = () =>{
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }    

} 