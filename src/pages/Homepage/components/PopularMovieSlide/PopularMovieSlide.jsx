import React from "react";
import { usePopularMoivesQuery } from "../../../../hooks/usePopularMovies";

import style from "./PopularMovieSlide.module.scss";
import MovieSlide from "../../../../common/MovieSlider/MovieSlide";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoivesQuery();

  if (isLoading) return <p>Loading . . . </p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className={style.slideArea}>
      <MovieSlide title={"Popular Movies"} movies={data.results}></MovieSlide>
    </div>
  );
};

export default PopularMovieSlide;
