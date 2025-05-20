import React from "react";
import styles from "./MovieCard.module.scss";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, type }) => {
  const navigate = useNavigate();

  const goMovieDetail = () => {
    navigate(`/movies/${type}/${movie.id}`);
  };

  if (!movie) return null;

  return (
    <div className={styles.movieCard} onClick={goMovieDetail}>
      <div className={styles.imgWrap}>
        {movie.poster_path ? (
          <img
            src={`https://media.themoviedb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || "Movie Poster"}
          />
        ) : (
          <div className={styles.noImg}>NO IMG</div>
        )}
      </div>
      <div className={styles.textInfo}>
        <p>{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
