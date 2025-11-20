import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useMovieContext();
  const isFavorite = favorites.some((m) => m.id === movie.id);

  const handleClick = (e) => {
    e.stopPropagation(); // ← This stops the click from breaking the page
    e.preventDefault();

    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
  onClick={handleClick}
  className={`favorite-btn ${isFavorite ? "active" : ""}`}
>
  ♥
</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0] || "N/A"}</p>
      </div>
    </div>
  );
}

export default MovieCard;