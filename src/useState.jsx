import React from "react";
import { useState } from "react";
function Zähler() {
const [count, setCount] = useState(0);

    return(
        <p>
            UseState showcase:
            <br />
            {count} <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </p>
    )

}


export default Zähler;