import { useAppContext } from "../../context/app.contex";
import Slider from "react-slick";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { useState } from "react";
export const Products = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();

  const images = [
    {src: 'https://backend.tkti.uz/uploads/file-1681043316631.png', alt: 'Image 1'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043362030.png', alt: 'Image 2'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043403804.png', alt: 'Image 3'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043430632.png', alt: 'Image 1'},
  
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
    <div className="container-fluid w-[100vw]  bg-[#082A58]">
      <div className="mt-[50px]">
      <h2 className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-4`}>
            Yangiyer flour{" "}
            <span className={`${colors.lightTextColor3}`}>trading brends</span>
          </h2>
          </div>
          <p className="text-center text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi dolorem, nemo ex eum ipsum repellat dignissimos iusto iure recusandae?</p>
          <div className="container w-[80%] py-5 mx-auto">
        <Slider {...settings}>
      {images.map(image => (
        <div key={image.src}>
          <img  className="w-[80%] rounded-md cursor-pointer" src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
        </div>
        
      

      
    </div>
  );
};
