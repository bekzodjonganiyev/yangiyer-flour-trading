import React from "react";
import Slider from "react-slick";
import "./Partners.css"


import { useAppContext } from "../../context/app.contex";

export const Partners = () => {

  const { colors } = useAppContext();

  const images = [
    {src: 'https://backend.tkti.uz/uploads/file-1680953905268.jpg', alt: 'Image 1'},
    {src: 'https://backend.tkti.uz/uploads/file-1680953888366.jpg', alt: 'Image 2'},
    {src: 'https://backend.tkti.uz/uploads/file-1680953777534.jpg', alt: 'Image 3'},
    {src: 'https://backend.tkti.uz/uploads/file-1680953754646.jpg', alt: 'Image 1'},
    {src: 'https://backend.tkti.uz/uploads/file-1680953713364.jpg', alt: 'Image 2'},
    {src: 'https://backend.tkti.uz/uploads/file-1680953240671.jpg', alt: 'Image 3'},
    
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <h1
        className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
      >
        Partners
      </h1>
      <div
        className="h-96 flex justify-center items-center"
        style={{
          position: "relative",
          // opacity: "0.65",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1680956180674.jpg")`,
        }}
      >
        <div className="container w-[80%] mx-auto">
        <Slider {...settings}>
      {images.map(image => (
        <div key={image.src}>
          <img className="w-[80%]" src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
        </div>
        
      </div>
    </>
  );
};
