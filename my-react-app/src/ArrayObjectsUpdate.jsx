import React, { useState } from "react";


function ArrayObjectsUpdate() {

    const [cars, setCars] = useState([]);
    const [carYear,  setCarYear] = useState(new Date().getFullYear());
    const [carMake,  setCarMake] = useState("");
    const [carModel,   setCarModel] = useState("");


    function handleAddCar() {
     
        const newcar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...cars, newcar]);
        setCarMake("")
        setCarModel("")
        setCarYear(new Date().getFullYear());
    }

    function handleRemoveCar(index) {
     setCars(c =>  c.filter((car, i) => i !== index));

    }

    function handleYearChange(event) {
    setCarYear(event.target.value);

    }

    function handleMakeChange(event) {
    setCarMake(event.target.value);
    }

    function handleModelChange(event) {
    setCarModel(event.target.value);
    }



    return(
        <>
        <div className="CarObjectDiv">
            <h2>List of car Objects:</h2>
            <ul>
              {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
               {car.year}  {car.make} {car.model}

            </li>
            )}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/>
            <br></br>
            <input type="text" value={carMake} onChange={handleMakeChange}
            placeholder="enter Car make..."/>
            <br />
            <input type="text" value={carModel} onChange={handleModelChange}
            placeholder="enter Car model..."/>
            <button onClick={handleAddCar} className="AddCarButton">Add Car</button>
        </div>
        
        </>
    )
}


export default  ArrayObjectsUpdate;
