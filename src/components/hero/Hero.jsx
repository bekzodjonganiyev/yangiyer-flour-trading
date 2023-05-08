import React, { useContext, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { UsersContext, smallActions, baseUrl } from "../../context";
import { HeroIcon } from "../../assets/icons";

export const Hero = () => {
  const { banner } = useContext(UsersContext);
  useEffect(() => {
    smallActions.getBanner("banner/get/all");
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
        {banner.map((item) => (
          <div className="w-full h-[700px] relative -z-30" key={item._id}>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-50">
              <h1 className="text-5xl font-bold text-white text-center">
                YANGIYER FLOUR{" "}
                <span className="text-primary_color">TRADING</span>
              </h1>
              <p className="text-xl text-white text-center">
                Un keyinchalik non, makaron va non mahsulotlari kabi turli
                oziq-ovqat mahsulotlarida foydalanish uchun qadoqlanishi va
                sotilishi mumkin. Un zavodlari turli bozorlarning ehtiyojlarini
                qondirish uchun butun bug'doy, glyutensiz yoki organik un kabi
                maxsus unlarni ham ishlab chiqarishi mumkin.
              </p>
            </div>
            <LazyLoadImage
              src={baseUrl + "/" + item.banner_img}
              alt={item.title}
              effect={"blur"}
              className="w-full img-lazy opacity-5"
              placeholder={<h1>Loading</h1>}
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-between bg-white rounded-3xl py-10 px-20 shadow-md w-[90%] -mt-32 mx-auto relative  container">
        <div className="w-[30%]">
          <HeroIcon />
          <h2 className="text-2xl text-secondary_color  font-bold my-4">
            YANGIYER FLOUR TRADING
          </h2>
          <p className="text-secondary_color text-xl">
            Un keyinchalik non, makaron va non mahsulotlari kabi turli
            oziq-ovqat mahsulotlarida foydalanish uchun qadoqlanishi va
            sotilishi mumkin. Un zavodlari turli bozorlarning ehtiyojlarini
            qondirish uchun butun
          </p>
        </div>
        <div className="w-[30%]">
          <HeroIcon />
          <h2 className="text-2xl text-secondary_color  font-bold my-4">
            YANGIYER FLOUR TRADING
          </h2>
          <p className="text-secondary_color text-xl">
            Un keyinchalik non, makaron va non mahsulotlari kabi turli
            oziq-ovqat mahsulotlarida foydalanish uchun qadoqlanishi va
            sotilishi mumkin. Un zavodlari turli bozorlarning ehtiyojlarini
            qondirish uchun butun
          </p>
        </div>
        <div className="w-[30%]">
          <HeroIcon />
          <h2 className="text-2xl text-secondary_color font-bold my-4">
            YANGIYER FLOUR TRADING
          </h2>
          <p className="text-secondary_color text-xl">
            Un keyinchalik non, makaron va non mahsulotlari kabi turli
            oziq-ovqat mahsulotlarida foydalanish uchun qadoqlanishi va
            sotilishi mumkin. Un zavodlari turli bozorlarning ehtiyojlarini
            qondirish uchun butun
          </p>
        </div>
      </div>
    </div>
  );
};

