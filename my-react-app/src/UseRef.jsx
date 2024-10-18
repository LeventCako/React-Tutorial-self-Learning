import React, { useState, useEffect, useRef } from 'react';



/* useState() = Re renders the component when state value changes */
/* useRef() = "use reference" does not cause re- renders when
its value changes.

When you want a Component to remember some informations
but you dont want that information to trigger new renders.

helpful with...
1. accessing/interacting with DOM elements
2. handling Focus, Animations, and Transitions
3. Managing Timers and Intervals*/


function UseRef() {
/* Now it doesnt re render after ever */
    const ref = useRef(0);

   useEffect(() => {
    console.log("COMPONENT RENDERED");
   })

    function handleClick() {
        ref.current++;
        console.log(ref.current)

    }
    return (<>
        <button className='useRefBtn' onClick={handleClick}>
            Click Me:
        </button>


    </>)
}

export default UseRef;