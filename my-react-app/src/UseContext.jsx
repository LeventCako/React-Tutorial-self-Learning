import React, { useState, createContext } from 'react'
import UseContext2 from "./UseContext2.jsx";


export const UserContext = createContext();



/* UseContext() = React Hook that allows you to share values
                  between multiple levels of Components
                  without passing props through each level */

/* Steps:
 1. import {createContext} from 'react';
 2. export const myContext = createContext();
 3. <MyContext.Provider value={value}>
     <Child /> </MyContext.Provider>  */


function UseContext() {

  const [user, setUser] = useState("Mckey")
  return (<>
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      {/* UserContext.provider is now the Provider
      so the one who stores the Data
      UserContext2 is the Child who gets passed down the data */}

      
      <UserContext.Provider value={user}>
        <UseContext2 user={user}></UseContext2>
      </UserContext.Provider>

    </div>



  </>)
}


export default UseContext;