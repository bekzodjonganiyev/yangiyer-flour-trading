import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Spinner } from "flowbite-react";
import { JackInTheBox, Fade } from "react-awesome-reveal";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { HeroIcon } from "../../assets/icons";

import { baseUrl } from "../../context";
import apiClient from "../../utils/apiClient";

export const Hero = () => {
  const [banner, setBanner] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const [motto, setMotto] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const getData = async (url) => {
    const res = await apiClient.get(url);
    if (res.status === 200) {
      url === "xalqaro_aloqa/all"
        ? setMotto({
            data: res.data.filter((item) => item.category === "b"),
            isLoading: false,
            error: "",
          })
        : setBanner({ data: res.data, isLoading: false, error: "" });
    } else {
      url === "xalqaro_aloqa/all"
        ? setMotto({
            data: [],
            isLoading: false,
            error: "Nimadir xato",
          })
        : setBanner({ data: [], isLoading: false, error: "Nimadir xato" });
    }
  };
  useEffect(() => {
    getData("banner/get/all");
    getData("xalqaro_aloqa/all");
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-24">
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={2000}
        fade={true}
        pauseOnHover={false}
      >
        {banner.isLoading ? (
          <Spinner
            color="info"
            aria-label="Extra large spinner example"
            size="xl"
            className="ml-20"
          />
        ) : banner.error ? (
          <h1 className="text-center text-2xl p-56 bg-black text-white">
            Xatolik
          </h1>
        ) : (
          banner.data.map((item) => (
            <div
              className="w-full h-[700px] max-md:h-auto relative -z-30"
              key={item._id}
            >
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-50 max-md:hidden">
                <h1 className="text-5xl font-bold text-white text-center">
                  YANGIYER FLOUR{" "}
                  <span className="text-primary_color">TRADING</span>
                </h1>
                <p className="text-xl text-white text-center">
                  Un keyinchalik non, makaron va non mahsulotlari kabi turli
                  oziq-ovqat mahsulotlarida foydalanish uchun qadoqlanishi va
                  sotilishi mumkin. Un zavodlari turli bozorlarning
                  ehtiyojlarini qondirish uchun butun bug'doy, glyutensiz yoki
                  organik un kabi maxsus unlarni ham ishlab chiqarishi mumkin.
                </p>
              </div>
              <LazyLoadImage
                src={baseUrl + "/" + item.banner_img}
                alt={item.title}
                effect={"blur"}
                className="w-full img-lazy opacity-5"
                placeholder={
                  <Spinner
                    color="info"
                    aria-label="Extra large spinner example"
                    size="xl"
                  />
                }
                width={"100%"}
                height={"100%"}
              />
            </div>
          ))
        )}
      </Slider>
      <div className="flex max-md:flex-col max-md:gap-10 justify-between bg-white rounded-3xl py-10 px-20 md:shadow-md md:w-[90%] md:-mt-32 mx-auto relative container">
        {motto.isLoading ? (
          <div className="w-[30%]">
            <HeroIcon />
            <h2 className="text-2xl text-secondary_color  font-bold my-4">
              <Spinner
                color="info"
                aria-label="Extra large spinner example"
                size="xl"
              />
            </h2>
            <p className="text-secondary_color text-xl">
              <Spinner
                color="info"
                aria-label="Extra large spinner example"
                size="xl"
              />
            </p>
          </div>
        ) : (
          motto?.data?.slice(0, 3).map((item) => (
            <Fade key={item._id}>
              <div className="md:w-[30%] max-md:rounded-3xl max-md:shadow-md max-md:py-10 max-md:px-20">
                <HeroIcon />
                <h2 className="text-2xl text-secondary_color  font-bold my-4">
                  {item.title_uz}
                </h2>
                <p className="text-secondary_color text-xl">{item.body_uz}</p>
              </div>
            </Fade>
          ))
        )}
      </div>
    </div>
  );
};
