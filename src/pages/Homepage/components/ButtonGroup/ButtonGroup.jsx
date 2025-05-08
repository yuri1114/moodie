import React from "react";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="carouselButtonGroup">
      <button onClick={() => previous()}>◀</button>
      <button className="button" onClick={() => next()}>
        ▶
      </button>
    </div>
  );
};

export default ButtonGroup;
