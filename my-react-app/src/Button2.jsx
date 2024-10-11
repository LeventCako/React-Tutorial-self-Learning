
function Button2() {

    

    /* const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`)
    } */
    
/* FIX: here we used an arrow function 
so it doesnt call anymore the handleClick2 function
when we render the component.
 *//* 
return(<button onClick={() => handleClick2("Levent")}>click Me 😊</button>); */



const handleClick = (e) => e.target.textContent = "Bestellt.";

return(<button onDoubleClick={(e) => handleClick(e)}>click Me 😊</button>);
}

export default Button2