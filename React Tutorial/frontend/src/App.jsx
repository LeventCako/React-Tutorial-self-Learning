
import './App.css'

function App() {
  
  return (
   <>
   <div>
    <p>Hello World</p>
    <Text show={"Count = "}/>
   </div>
   </>
  )
}


function Text({show}) {
  return(
    <div>
      <p>{show}</p>
    </div>
  )
}

export default App
