import React, { useEffect, useState, useRef } from "react";


function TrainingUseEffect() {

    const [count, setCount] = useState(0);
    const intervalId = useRef(null);

    useEffect(() => {
        // Clear existing interval if any
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }

        // Setup interval to run periodically only when count changes
        intervalId.current = setInterval(() => {
            console.log('Interval running with count:', count);
            // You can perform a task here that depends on the count
        }, 1000);

        // Cleanup interval on dependency change or unmount
        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, [count]); // The effect depends on count

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