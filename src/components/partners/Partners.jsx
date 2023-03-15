import React from "react";

import fakeVerstka4 from "../../assets/images/fake_verstka4.png";

import { useAppContext } from "../../context/app.contex";

export const Partners = () => {
  const { colors } = useAppContext();
  return (
    <div className="container mx-auto ">
      <div>
        <h1
          className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
        >
          Partners
        </h1>
        <div>
          <img src={fakeVerstka4} alt="" />
        </div>
      </div>
    </div>
  );
};
