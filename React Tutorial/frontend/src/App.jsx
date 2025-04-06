import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  
  return (
   <>
   <MovieCard movie={{title: "Levents Film", release_date: "2024"}}></MovieCard>
   <MovieCard movie={{title: "Meleks Film", release_date: "2024"}}></MovieCard>
   </>
  )
}



export default App
