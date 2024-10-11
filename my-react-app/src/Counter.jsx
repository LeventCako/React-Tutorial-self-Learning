import React, { useState } from 'react';
function Counter() {

    /* react Hook: Soecial function that allows functional components
    to use React features without writing class components */

    /* useState(): A React Hook that allows the creation of a
     stateful variable And a setter function to update its value
     in the virtual DOM
     */
    let [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }


    const resetCount = () => {
        setCount(count = 0);
    }
    const plus10Count = () => {
        setCount(count + 10);
    }
    return (<>
        <div className='Counter-container'>
            <p className='resultCount'>Count: {count}</p>
            <button className='incrementCount' onClick={incrementCount}>Increment</button>
            <button className='decrementCount' onClick={decrementCount}>Decrement</button>
            <button className='resetCount'onClick={resetCount}>Reset</button>
            <button className='plus10Count'onClick={plus10Count}>+ 10</button>
        </div>

    </>
    )
}

export default Counter;