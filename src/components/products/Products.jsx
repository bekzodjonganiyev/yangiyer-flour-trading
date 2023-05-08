import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LeftChevron, RigthChevron } from "../../assets/icons";
import { baseUrl, smallActions, UsersContext } from "../../context";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        background: "#EEAD0F",
        width: "40px",
        height: "40px",
        padding: "5px",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <RigthChevron />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        background: "#EEAD0F",
        width: "40px",
        height: "40px",
        padding: "5px",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <LeftChevron />
    </div>
  );
}

const settings = {
  className: "center",
  infinite: true,
  slidesToShow: 4,
  speed: 500,
  nextArrow: <SampleNextArrow className="" />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Products = () => {
  const { photos } = useContext(UsersContext);
  useEffect(() => {
    smallActions.getPhotos("photo/all");
  }, []);

  return (
    <div className="bg-[#F0F0F0] py-10 mb-20">
      <div className="container mx-auto w-[90%] mb-10 ">
        <h1 className="text-secondary_color text-4xl font-bold mb-10 text-center">
          Bizning maxsulotlarimiz
        </h1>
        <Slider {...settings} className="">
          {photos.map((item) => (
            <div key={item._id} className="h-[600px] w-[400px] px-3">
              <img
                src={baseUrl + "/" + item.photo}
                alt={item.width}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
