import React from "react";
import { useState } from "react";
function Zähler() {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(0);
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <p>
                UseState showcase:
                <br />
                {count} <br />
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <br />
                {like} <br />
                <button onClick={() => { setLike(l => l + 1) }}>Like</button>
                <button onClick={() => { setLike(l => l - 1) }}>dislike</button>
            </p>

            <br />

            <p>
                {/* This is Conditional Rendering via Toggle and ternary Operator */}
                <button onClick={() => setLogin(prev => !prev)}>toggle Login</button>
                <br />
                Login Status: {login ? "Logged in" : "Logged out"}

            </p>

            <p>
               
                <button onClick={() => setLoading(prev => !prev)}>Toggle Loading</button>
                <br />
                
                Loading Status: {loading ? "Loading..." : "Loaded"}
                </p>
            


            
        </>


    )

}


export default Zähler;