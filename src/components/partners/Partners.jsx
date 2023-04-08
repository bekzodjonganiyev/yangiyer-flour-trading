import React from "react";

import "./Partners.css"

import fakeVerstka4 from "../../assets/images/fake_verstka4.png";

import { useAppContext } from "../../context/app.contex";

export const Partners = () => {
  const { colors } = useAppContext();
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
          opacity: "0.65",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1680956180674.jpg")`,
        }}
      >
        <div className="container mx-auto">
          <div className="relative">
            <img src={fakeVerstka4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
