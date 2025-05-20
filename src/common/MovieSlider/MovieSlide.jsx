import React from "react";
import style from "./MovieSlide.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieSlide = ({ type, movies, title }) => {
  return (
    <div className={style.populrWrapper}>
      <p className={style.title}>{title}</p>

      <Swiper
        spaceBetween={20}
        slidesPerView={5.3}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 3.3,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ type: "progressbar" }}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlide;
