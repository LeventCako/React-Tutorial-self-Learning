import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../../../services/api";
import "../css/home.css"
function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    console.log(getPopularMovies);
   useEffect(() => {
    const loadPopularMovies = async () => {
        try {
            console.log("Fetching popular movies...");
            const popularMovies = await getPopularMovies();
            console.log("Fetched movies:", popularMovies); // Check if movies are received
            setMovies(popularMovies); // Ensure movies is an array
        } catch (err) {
            console.error("Error fetching movies:", err);
            setError("Failed Loading...");
        } finally {
            setLoading(false);
        }
    };

    loadPopularMovies();
}, []);



    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="search..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}>
                    </input>
                    <button type="submit" className="search-button">Search</button>
                </form>


                <div className="movies-grid">
                    {movies.map(movie =>
                        movie.title.toLowerCase().startsWith(searchQuery) && /* Function to filter out */
                        (<MovieCard movie={movie} key={movie.id}></MovieCard>))}
                </div>
            </div>
        </>
    )
}

export default Home;