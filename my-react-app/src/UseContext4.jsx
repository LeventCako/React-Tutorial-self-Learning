import React, {useContext} from 'react';
import { UserContext } from './UseContext';

function UseContext4() {

  const userData = useContext(UserContext)

    return(<>
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye  ${userData}`}</h2>

    </div>
    
    
    
    </>)
}


export default UseContext4;