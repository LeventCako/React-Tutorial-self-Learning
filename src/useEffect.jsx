import React, { useEffect, useState } from "react";


function TrainingUseEffect() {

    const [count, setCount] = useState(0);



    useEffect(() => {
        console.log("Component  updated");
    }, [count]); // Empty dependency array means 
    // this runs once after the initial render


   const incrementBtn = () => {
        setCount(c => c + 1);
    }
    return (
        <>
            <div><p>hi</p></div>
            <div>Count: {count}</div>
            <button onClick={incrementBtn}>Increment</button>

        </>
    )

}



export default TrainingUseEffect;