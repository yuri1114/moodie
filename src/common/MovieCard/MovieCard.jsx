import React from "react";
import styles from "./MovieCard.module.scss";
const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.imgWrap}>
        <img
          src={`https://media.themoviedb.org/t/p/w1280${movie.poster_path}`}
          alt="Movie Poster"
        />
      </div>
      <div className={styles.textInfo}>
        <p>{movie.title}</p>
        {/* {movie.genre_ids.map((id) => (
          <div className="badge">{id}</div>
        ))}
        <p>{movie.vote_average}</p>
        <p>{movie.popularity}</p>
        <div>{movie.adult ? "청소년관란불가" : "전체관람"}</div> */}
      </div>
    </div>
  );
};

export default MovieCard;
