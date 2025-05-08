import React from "react";
import { usePopularMoivesQuery } from "../../../../hooks/usePopularMovies";
import style from "./Banner.module.scss";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoivesQuery();

  if (isLoading) return <h1>Loading . . .</h1>;
  if (isError) return <h1>{error.message}</h1>;
  if (!data?.results?.length) return null;

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];

  return (
    <div className={style.banner}>
      <div className={style.position}>
        <div className={style.imgContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${randomMovie?.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className={style.text}>
          <h3>{randomMovie?.title}</h3>
          <p>{randomMovie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
