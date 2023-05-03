import React from "react";
import Slider from "react-slick";

import "./Carusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carusel = () => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 76, 7];
  const images = [
    "https://backend.tkti.uz/uploads/file-1680953905268.jpg",
    "https://backend.tkti.uz/uploads/file-1680953888366.jpg",
    "https://backend.tkti.uz/uploads/file-1680953777534.jpg",
    "https://backend.tkti.uz/uploads/file-1680953754646.jpg",
    "https://backend.tkti.uz/uploads/file-1680953713364.jpg",
    "https://backend.tkti.uz/uploads/file-1680953240671.jpg"
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-10">
      
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={2000}
        fade={true}
        pauseOnHover={false}
      >
        {
          images.map(item => (
            <div className="">
              <img src={item} alt="un firmasi" className="w-full" />
            </div>
          ))
        }
        
      </Slider>
    </div>
  );
};
