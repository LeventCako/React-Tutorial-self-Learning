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

/* Why? = better time efficient Code since it only renders once 
rather than every time*/

function UseRef() {
    /* Now it doesnt re render after ever */
    /* When using ref it returns an Object
    with one property called 'current' */

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick1() {
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor = "yellow";
      inputRef2.current.style.backgroundColor = "";
      inputRef3.current.style.backgroundColor = "";
    }

    
    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
      }


      
    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
      }


    return (<>
        <div className='RefDiv'>

            <button className='useRefBtn' onClick={handleClick1}>
                Click Me 1:
            </button>
            <input ref={inputRef1}/>

            <button className='useRefBtn' onClick={handleClick2}>
                Click Me 2:
            </button>
            <input ref={inputRef2}/>


            <button className='useRefBtn' onClick={handleClick3}>
                Click Me 3:
            </button>
            <input ref={inputRef3}/>
        </div>



    </>)
}

export default UseRef;