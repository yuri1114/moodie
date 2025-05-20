import React from "react";
import styles from "./AppLayout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import SearchButton from "../common/SearchButton/SearchButton";

const AppLayout = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Popular", path: "/movies/popular" },
    { label: "Top Rated", path: "/movies/top-rated" },
    { label: "Upcoming", path: "/movies/upcoming" },
  ];

  return (
    <div>
      <div className={styles.navbar}>
        <h1 onClick={() => navigate("/")}>Moodie</h1>
        <ul className={styles.gnb}>
          {navItems.map((item) => (
            <li
              onClick={() => navigate(item.path)}
              key={item.path}
              title={item.label}
              path={item.path}
            >
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
