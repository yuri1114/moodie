import React from "react";
import style from "./SearchButton.module.scss";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/search");
      }}
      className={style.searchIcon}
    ></button>
  );
};

export default SearchButton;
