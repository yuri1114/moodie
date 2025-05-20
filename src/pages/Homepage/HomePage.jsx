import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import style from "./HomePage.module.scss";
import MovieSection from "./components/MovieSection/MovieSection";

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${style.pageEnter} ${visible ? style.active : ""}`}>
      <Banner scrollY={scrollY} />
      <MovieSection type="popular" title="Popular" />
      <MovieSection type="top-rated" title="Top Rated" />
      <MovieSection type="upcoming" title="Upcoming" />
    </div>
  );
};

export default HomePage;
