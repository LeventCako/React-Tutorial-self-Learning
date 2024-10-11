import React, {useState, useEffect} from "react";


function ClockApp() {

    const[time, setTime] = useState(new Date());

   useEffect(() => {
     const intervallId = setInterval(() => {
        setTime(new Date());
     }, 1000);


     return() => {
        clearInterval(intervallId);
     }
   }, []);


   function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    /* if time is less than 12 it will show PM
    if bigger than AM */
    const meridiem = hours >= 12 ? "PM" : "AM"

    /* if we have 12 o clock it will be 12 but at 13 o clock it will be 1 */
    hours =  hours % 12 || 12;


    return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridiem}`
   }


   function padzero(number){
    /* if the number is less than 10 it will add 0 before it */

    return (number < 10 ? "0" : "") + number;
   }
    return (<>
    <div className="AppBody">
    <div className="ClockContainer">
        <div className="Clock">
          <span>{formatTime()}</span>
        </div>


     </div>

    </div>
     
    </>
    )
}


export default ClockApp;