import React, {useState} from 'react';
function MyComponent() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState("age needed");
    const [isEmployed, setIsEmployed] = useState(false);
    
    const updateProfile = () => {
        setName('Levent'),
        setAge(30),
        setIsEmployed(!isEmployed);


        
    }
    
   
    return(<div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Employment: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateProfile}>update Profile</button>
    </div>)
}



export default MyComponent