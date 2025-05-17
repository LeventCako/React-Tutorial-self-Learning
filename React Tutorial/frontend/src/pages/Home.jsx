import MovieCard from "../components/MovieCard"
import React, { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../../../services/api";
import "../css/home.css"
function Home() {
console.log("Home component rendered");
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


   
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                console.log("Fetching popular movies...");
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ac57756d2e0691a6bdd16ffa9d46af04");
                const data = await response.json();
                console.log("Raw API response:", data);
                setMovies(data.results || []);
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