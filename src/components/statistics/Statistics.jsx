import React from "react";

import fakeVerstka3 from "../../assets/images/fake_verstka3.png";

import { useAppContext } from "../../context/app.contex";

export const Statistics = () => {
  const { colors } = useAppContext();

  return (
    <div className="my-10 container mx-auto ">
      <h1
        className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
      >
        Statistical Data
      </h1>
      <div className="object-cover bg-no-repeat bg-center">
        {/* {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`${colors.lightBgColor2} w-32 h-32 fle items-center justify-start text-4xl text-white font-extrabold`}
          >
            <p>300+</p>
          </div>
        ))} */}
        <img src={fakeVerstka3} alt="fake versta 3" />
      </div>
    </div>
  );
};
