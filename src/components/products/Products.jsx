import { useEffect, useContext } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Spinner } from "flowbite-react";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LeftChevron, RigthChevron } from "../../assets/icons";

import apiClient from "../../utils/apiClient";
import { baseUrl } from "../../context";

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
  const [products, setProducts] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const getData = async () => {
    const res = await apiClient.get("media/all");
    if (res.status === 200) {
      setProducts({
        data: res.data.filter((item) => item.link?.split(".")[1] === "png"),
        isLoading: false,
        error: "",
      });
    } else {
      setProducts({ data: [], isLoading: false, error: "Nimadir xato" });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#F0F0F0] py-10 mb-20">
      <div className="container mx-auto w-[90%] mb-10 ">
        <h1 className="text-secondary_color text-4xl font-bold mb-10 text-center">
          Bizning maxsulotlarimiz
        </h1>
        {products.isLoading ? (
          <Spinner
            color="info"
            aria-label="Extra large spinner example"
            size="xl"
          />
        ) : (
          <Slider {...settings}>
            {products.data.map((item) => (
              <Slide direction="right" key={item._id}>
                <div key={item} className="px-3">
                  <LazyLoadImage
                    src={`${baseUrl}/${item.link}`}
                    alt={item.name}
                    effect={"blur"}
                    className="w-full img-lazy rounded mb-4"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </Slide>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
