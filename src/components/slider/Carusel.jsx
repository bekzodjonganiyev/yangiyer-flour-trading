import React from "react";
import Slider from "react-slick";

import "./Carusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgVideo from "../../assets/images/bg.jpg";
import bgVideo1 from "../../assets/images/bg1.jpg";
import bgVideo2 from "../../assets/images/bg2.jpg";

export const Carusel = () => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 76, 7];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-10">
      {/* <Carousel slideInterval={5000}>
        {arr.map((item) => (
          <img
            key={item}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
        ))}
      </Carousel> */}
      {/* <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className='content'>
		  <h1>This is a text</h1>
		</div> */}
      {/* <img src={bgVideo} alt="" className="w-full" /> */}
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={2000}
        fade={true}
        pauseOnHover={false}
      >
        <div>
          <img src={bgVideo} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={bgVideo1} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={bgVideo2} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={bgVideo} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={bgVideo1} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={bgVideo2} alt="" className="w-full" />{" "}
        </div>
      </Slider>
    </div>
  );
};
