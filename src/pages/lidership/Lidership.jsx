import React from "react";

import fakeVerstka2 from "../../assets/images/fake_verstka2.png"
import { LidershipCard } from "../../components/lidership_card";

import { useAppContext } from "../../context/app.contex";

export const Lidership = () => {
  const {colors} = useAppContext()
  console.log("Lidership");
  return (
    <div className="my-10">
      <h1
        className={`${colors.lightTextColor2} font-bold text-3xl mb-8 text-center`}
      >
        Lidership
      </h1>
      <div className="flex items-center">
        <div className="w-2/6">
          <img src={fakeVerstka2} alt="fake versta" />
        </div>
        <div className="w-4/6 flex gap-2 h-96">
          {[1, 2, 3, 4].map((item) => (
            <LidershipCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
