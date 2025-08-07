import React, { useState } from "react";

function mapReact() {
    const [items, setItems] = useState([
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Date" },
        { id: 5, name: "Elderberry" }
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAdd = () => {
        if (inputValue.trim() === "") return; // Prevent adding empty items
        
        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
        const newItem = { id: newId, name: inputValue };
        
        setItems([...items, newItem]);
        setInputValue(""); // Clear input after adding
    }
    const handleDelete = (id) => {
        // Filter out the item that matches the id
        setItems(items.filter(fruit => fruit.id !== id));
    };
    return (
        <>
            <div><input value={inputValue} onChange={handleChange} type="text" placeholder="Add a new Fruit..." />
                <button onClick={() => handleAdd()}>Add</button></div>
            <div>List of Fruits:</div>
            <ul>
                {items.map(fruit => (
                    <li key={fruit.id}>{fruit.name}
                        <button onClick={() => handleDelete(fruit.id)}>X</button>
                    </li>

                ))}
            </ul>
            {items.length === 0 && <p>No items left!</p>}
        </>
    )
}


export default mapReact;