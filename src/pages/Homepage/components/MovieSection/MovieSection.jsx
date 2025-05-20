import React, { useEffect } from "react";
import { useMovieListQuery } from "../../../../hooks/useMovieListQuery";
import MovieSlide from "../../../../common/MovieSlider/MovieSlide";
import style from "./MovieSection.module.scss";

const MovieSection = ({ type, title }) => {
  const { data, isLoading, isError, error } = useMovieListQuery(type);

  if (isLoading) return <p>Loading . . . </p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className={style.background}>
      <MovieSlide type={type} title={title} movies={data.results}></MovieSlide>
    </div>
  );
};

export default MovieSection;
