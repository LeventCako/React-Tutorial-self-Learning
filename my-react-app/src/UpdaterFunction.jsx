import React, { useState } from 'react';
function UpdaterFunction() {


    /* UPDATER FUNCTION => a Function passed as an Argument to SetState()
    usually Bsp: setYear(arrow function)
    Allows for safe Updates based on the previous state used with 
    multiple state updates and async functions
     */


    let [count, setCount] = useState(0);

    const incrementCount = () => {
        /* Takes the PENDING State to calculate
        NEXT state
        REact puts the updater Function in a queue
        during next render it will call them in th same order */
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        
    }

    const decrementCount = () => {
        setCount(c => c - 1);
    }


    const resetCount = () => {
        setCount(0);
    }
    const plus10Count = () => {
        setCount(c => c + 10);
    }
    return (<>
        <div className='Counter-container'>
            <p className='resultCount'>Count: {count}</p>
            <button className='incrementCount' onClick={incrementCount}>Increment 3x</button>
            <button className='decrementCount' onClick={decrementCount}>Decrement</button>
            <button className='resetCount'onClick={resetCount}>Reset</button>
            <button className='plus10Count'onClick={plus10Count}>+ 10</button>
        </div>

    </>
    )
}

export default UpdaterFunction;