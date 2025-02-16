import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementByAmount } from "./counterSlice";

export function Counter(){
    const count= useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log(count);


return (
    <div>
        <div>
            <button aria-label="Increment value"
            onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>Decrement</button>  
            <button onClick={()=>dispatch(incrementByAmount(10))}>Increment by 10</button>  
        </div>
    </div>
)

}