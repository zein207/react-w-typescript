import { useState } from "react";
import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

    const { value, acc } = useCounter();
    
    return (
        <>
            <h3>Counter With Hook <small>{ value }</small></h3>
            <button className='btn btn-primary mr-4' onClick={ () => acc(1) }>+1</button>
            <button className='btn btn-primary' onClick={ () => acc(-1) }>-1</button>

        </>
    )
}
