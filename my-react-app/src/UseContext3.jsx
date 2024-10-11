import UseContext4 from "./UseContext4";
import React, {useContext} from 'react';
import { UserContext } from './UseContext';




function UseContext3() {

  const userData = useContext(UserContext);

    return<>
    <div className="box">
      <h1>Component C</h1>
      <h2>{`You are almost there ${userData}`}</h2>
      <UseContext4></UseContext4>
    </div>
    
    
    
    </>
}


export default UseContext3;