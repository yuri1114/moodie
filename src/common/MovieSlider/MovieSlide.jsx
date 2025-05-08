import React from "react";
import style from "./MovieSlide.module.scss";

import MovieCard from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieSlide = ({ title, movies }) => {
  return (
    <div className={style.wrapper}>
      <h3>{title}</h3>

      <Swiper
        spaceBetween={20}
        slidesPerView={5.5}
        style={{ padding: "1rem 0" }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide>
            <MovieCard movie={movie} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlide;
