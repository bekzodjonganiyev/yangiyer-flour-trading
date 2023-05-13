import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { baseUrl } from "../../context";
import apiClient from "../../utils/apiClient";

export const Partners = () => {
  const [partners, setPartners] = useState({
    data: [],
    isLoading: true,
    error: null,
  });
  const [images, setImages] = useState([]);

  const getData = async () => {
    const res = await apiClient.get("student_bolim/all");
    if (res.status === 200) {
      setPartners({
        data: res.data,
        isLoading: false,
        error: "",
      });
    } else {
      setPartners({ data: [], isLoading: false, error: "Nimadir xato" });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (partners.data.length < 3)
    partners.data = [...partners.data, ...partners.data, ...partners.data];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    delay: 300,
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

  return (
    <div className="mt-[120px] mb-[60px]">
      <h1
        className={`text-secondary_color text-4xl font-bold text-center my-3`}
      >
        Hamkorlarimiz
      </h1>
      <div className=" flex justify-center items-center ">
        <div className="partners container-fluid w-[100%] mx-auto ">
          <Slider {...settings}>
            {partners.data.map((image, id) => (
              <div key={id} className="h-40">
                <div className="bg-[#F0F0F0] m-4 py-4 h-40 rounded-xl cursor-pointer flex items-center justify-center">
                  <img
                    className=""
                    src={image.icon}
                    alt={image.title_uz}
                    title={image.title_uz}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
