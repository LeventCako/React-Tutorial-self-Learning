import React, { useState } from "react";




function ColorPicker() {

    const [color, setColor] = useState("#602f2f");


    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return (
        <>

            <div className="Colorpicker-container">
                
                <h1 className="colorPickerHead">Color Picker!</h1>

                <div className="Color-Display" style={{ backgroundColor: color }}>
                    <p>Selected Color: <br>
                    </br>
                    
                    RGB: {color}
                    </p>
                </div>
                <label className="ColorChooser">Select a Color: </label>
                <input type="color" value={color} onChange={handleColorChange}></input>
            </div>


        </>


    )
}



export default ColorPicker;