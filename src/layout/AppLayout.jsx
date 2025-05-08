import React from "react";
import styles from "./AppLayout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import SearchButton from "../common/SearchButton/SearchButton";

const AppLayout = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Popular", path: "/popular" },
    { label: "Now", path: "/now-playing" },
    { label: "Top Rated", path: "/top-rated" },
    { label: "Upcoming", path: "/upcoming" },
    { label: "Trending", path: "/trending" },
  ];

  const goHome = () => {
    navigate("/");
  };

  // const goMovies = () => {
  //   navigate("/movies");
  // };

  return (
    <div>
      <div className={styles.navbar}>
        <h1 onClick={goHome}>Moodie</h1>
        <ul className={styles.gnb}>
          {navItems.map((item) => (
            <li key={item.path} title={item.label} path={item.path}>
              {item.label}
            </li>
          ))}
          <li>
            <SearchButton />
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
