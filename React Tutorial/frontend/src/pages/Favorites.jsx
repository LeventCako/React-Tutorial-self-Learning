import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
    const { favorites } = useMovieContext();


    if (favorites) {
        return <div>
            <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map(movie =>
                (<MovieCard movie={movie} key={movie.id}></MovieCard>))}
        </div>
            </div>
    }
    return (
        <>

            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>start adding movies to your favorites </p>
            </div>


        </>
    )
}

export default Favorite;