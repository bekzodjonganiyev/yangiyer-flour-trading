import { useEffect, useContext } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  infinite: true,
  slidesToShow: 4,
  speed: 500,
  nextArrow: <SampleNextArrow />,
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
  // const { photos } = useContext(UsersContext);
  // useEffect(() => {
  //   smallActions.getPhotos("photo/all");
  // }, []);

  const photos = [
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707213624.png ",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707193861.png",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707175779.png",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707153127.png",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707213624.png",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707193861.png",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707175779.png",
    "https://tkti-back-lexde.ondigitalocean.app/uploads/file-1683707153127.png",
  ];

  return (
    <div className="bg-[#F0F0F0] py-10 mb-20">
      <div className="container mx-auto w-[90%] mb-10 ">
        <h1 className="text-secondary_color text-4xl font-bold mb-10 text-center">
          Bizning maxsulotlarimiz
        </h1>
        <Slider {...settings}>
          {photos.map((item) => (
            <div key={item} className="px-3">
              <LazyLoadImage
                src={item}
                alt={item.name}
                effect={"blur"}
                className="w-full img-lazy rounded mb-4"
                width={"100%"}
                height={"100%"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
