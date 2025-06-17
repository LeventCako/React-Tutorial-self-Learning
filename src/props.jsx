import React from "react";

function UserCard(props) {


return(
   
    <li>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
        
    </li>
)
}



export default UserCard;