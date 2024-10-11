import React, { useState } from "react";

function UpdateArrayState() {
    
    
    const [foods, setFoods] = useState(["Apple",  "Orange", "Banana"]);


   function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    /* Reset the input value */
    document.getElementById("foodInput").value = "";
   

    setFoods(f=> [...foods, newFood]);

   }

   function onKeyDown(event) {
    if(event.key === 'Enter') [
        handleAddFood()
    ]
   }

   function handleRemoveFood(index) {

   setFoods(foods.filter((_, i) => i !== index));
    
   }
    
    
    return(
    
    <>
    <div>
        <h2>List Of Food</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index}
             onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" placeholder="Add Favourite Food" id="foodInput" onKeyDown={onKeyDown}/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
    
    
    </>)
}

export default  UpdateArrayState;
