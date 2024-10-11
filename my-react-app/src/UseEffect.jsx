
/* UseEffect() = React Hook that tells REACT 
DO SOME CODE WHEN(pick one)...
- ..this Component re renders
- ..this Component mounts 
- ..State of a value changes */


/* 1. useEffect(() => {})         Runs after every re render */
/* 2. useEffect(() => {}, [])     Runs only once when the component mounts */
/* 3. useEffect(() => {}, [value]) Runs when the value changes */



/* Usage:
1. Event Listeners
2. DOM Manipulation
3. Real time updates
4. Fetchign Data from an Api
5. Clean up when a Component Unmounts */

/* Mount = adding a Component to DOM
   Unmount = removing a Component  from DOM */





import React, { useEffect, useState } from "react";

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    /* Document.title only changes once
    due to Empty Array

    */
    useEffect(() => {
        document.title = `Count:  ${count}`
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }




  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {

    window.addEventListener("resize", handleResize);
    console.log("event listener added")
  

    return() => {
        window.removeEventListener("resize", handleResize);
        console.log("Event listener removed")
    }
    
  

  }, []);


  useEffect(() => {
    document.title = `size: ${width} x ${height}`;

  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }


    return(<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br></br>
    <button onClick={changeColor}>Change Color</button>
    
    
    <p> Window Width: {width}px</p>
    <p> Window Height: {height}px</p>
    
    </>)
}


export  default UseEffect;
