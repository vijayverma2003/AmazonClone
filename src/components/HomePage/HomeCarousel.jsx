import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../../styles/carousel.css";

import { getCarousels } from "../../services/carousel";

function Carousel() {
  let [currentSlide, setCurrentSlide] = useState(1);
  let [carousels] = useState(getCarousels());

  const [slides] = useState(document.getElementsByClassName("slide"));

  useEffect(() => {
    let i;
    let slidesCount = slides.length;

    for (i = 0; i < slidesCount; i++) {
      slides[i].style.display = "none";
    }

    if (currentSlide > slidesCount) currentSlide = 1;
    if (currentSlide < 1) currentSlide = slidesCount;

    slides[currentSlide - 1].style.display = "block";
  });

  const carousel = {
    handleNext() {
      setCurrentSlide(currentSlide + 1);
    },
    handlePrevious() {
      setCurrentSlide(currentSlide - 1);
    },
  };

  return (
    <div className="app">
      <div className="slideshow">
        {carousels.map((imageUrl) => (
          <button key={imageUrl} className="slide btn-link zero-padding">
            <img src={imageUrl} alt="" className="slideshow-photo" />
          </button>
        ))}
      </div>
      <i
        onClick={carousel.handlePrevious}
        className="fas fa-chevron-left previous"
      ></i>
      <i
        onClick={carousel.handleNext}
        className="fas fa-chevron-right next"
      ></i>
    </div>
  );
}

export default Carousel;
