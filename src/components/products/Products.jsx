import { useAppContext } from "../../context/app.contex";
import Slider from "react-slick";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "./Products.css";

export const Products = () => {
  const { t } = useTranslation();
  const { colors } = useAppContext();

  const images = [
    {
      src: "https://new-tkti-back.herokuapp.com/uploads/photo-1682483616007.png",
      alt: "Image 1",
    },
    {
      src: "https://new-tkti-back.herokuapp.com/uploads/photo-1682483561838.png",
      alt: "Image 3",
    },
    {
      src: "https://new-tkti-back.herokuapp.com/uploads/photo-1682483597485.png",
      alt: "Image 2",
    },
    {
      src: "https://new-tkti-back.herokuapp.com/uploads/photo-1682483580131.png",
      alt: "Image 1",
    },
  ];
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
          slidesToShow: 2,
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

  return (
    <div className="container-fluid w-[100vw] py-10">
      <div className=" mt-12">
        <h2
          className={`${colors.lightTextColor2} text-center text-4xl font-bold mb-4`}
        >
          Yangiyer flour
          <span className={`${colors.lightTextColor3}`}>trading brends</span>
        </h2>
      </div>

      <div className="container w-[80%] mx-auto">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="image" key={image.src}>
              <div id="zoom-In flex">
                <img
                  className="w-[90%] py-5 rounded-md cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
