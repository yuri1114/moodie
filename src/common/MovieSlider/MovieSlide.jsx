import React from "react";
import style from "./MovieSlide.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieSlide = ({ title, movies }) => {
  return (
    <div className={style.populrWrapper}>
      <h3>{title}</h3>

      <Swiper
        spaceBetween={20}
        slidesPerView={4.3}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ type: "progressbar" }}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlide;
