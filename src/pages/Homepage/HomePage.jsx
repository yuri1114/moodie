import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import style from "./HomePage.module.scss";

//1. 배너- top popular movie 첫번째 아이템 보여주기
//2. popular movie
//3. top rated movie
//4. upcoming movie
const HomePage = () => {
  return (
    <div>
      <Banner scrollY={scrollY} />
      <PopularMovieSlide />
    </div>
  );
};

export default HomePage;
