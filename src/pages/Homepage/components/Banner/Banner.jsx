import React from "react";
import { useMovieListQuery } from "../../../../hooks/useMovieListQuery";
import styles from "./Banner.module.scss";

const Banner = () => {
  const { data, isLoading, isError, error } = useMovieListQuery();

  if (isLoading) return <h1>Loading . . .</h1>;
  if (isError) return <h1>{error.message}</h1>;
  if (!data?.results?.length) return null;

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];

  return (
    <div className={styles.banner}>
      <div className={styles.imgContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
          alt="Movie Poster"
        />
      </div>
      <div className={styles.text}>
        <p>{randomMovie?.title}</p>
      </div>
    </div>
  );
};

export default Banner;
