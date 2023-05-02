import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./Partners.css"


export const Partners = () => {
  const { t } = useTranslation();


  const images = [
    {src: 'https://tkti.uz/static/media/YI.00baa753ed5ca4fbb310.jpg', alt: 'Image 1'},
    {src: 'https://tkti.uz/static/media/YI.00baa753ed5ca4fbb310.jpg', alt: 'Image 2'},
    {src: 'https://tkti.uz/static/media/YI.00baa753ed5ca4fbb310.jpg', alt: 'Image 3'},
    {src: 'https://tkti.uz/static/media/YI.00baa753ed5ca4fbb310.jpg', alt: 'Image 1'},
    {src: 'https://tkti.uz/static/media/YI.00baa753ed5ca4fbb310.jpg', alt: 'Image 2'},
    {src: 'https://tkti.uz/static/media/YI.00baa753ed5ca4fbb310.jpg', alt: 'Image 3'},
    
  ]

  const settings = {
   
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
    <div className="mt-[120px] mb-[60px]">
      <h1
        className={ `text-[#082A58] text-5xl font-bold text-center my-3`}
      >
         Hamkorlarimiz
      </h1>
      <div
        className=" flex justify-center items-center "
       
      >
        
        <div className="partners container-fluid w-[100%] mx-auto ">
        <Slider {...settings} >
      {images.map(image => (
        <div key={image.src} className=" w-32 ">
          <div className="bg-[#B4C5CD] m-4 w-[full] " style={{
             borderRadius: "10px",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "center",
             backgroundSize: "container",
             cursor:"pointer"

          }}>

          <img  className="w-[200px] p-2 flex mx-auto justify-center"  src={image.src} alt={image.alt} />
          </div>
        </div>
      ))}
    </Slider>
        </div>
        
      </div>
    </div>
  );
};
