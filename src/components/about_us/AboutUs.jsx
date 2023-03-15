import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useAppContext } from "../../context/app.contex";
import tringle from "../../assets/images/tringle.png"

export const AboutUs = () => {
  const { colors } = useAppContext();
  console.log(colors);
  return (
    <div className="relative py-20 container mx-auto">
      <h1
        className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
      >
        About <span className={`${colors.lightTextColor3}`}>Us</span>
      </h1>
      <div className="flex justify-between gap-32">
        {/* Images */}
        <div className="grid grid-cols-2 gap-10 w-1/2">
          {[1, 2, 3, 4].map((item) => (
            <LazyLoadImage
              key={item}
              src="https://media.istockphoto.com/id/1400865154/photo/insurance-and-risk-management-concept.jpg?b=1&s=170667a&w=0&k=20&c=txTSImC8-K3Py8sLhNdq6i_38D4gyGSzKOVW5KgmGPY="
              alt={`Image Alt`}
              className="w-96 h-64"
              effect="" // opacity | black-and-white
            />
          ))}
        </div>

        {/* Info */}
        <div className="w-1/2">
          <h2 className={`${colors.lightTextColor2} text-3xl font-bold mb-8`}>
            Yangiyer flour{" "}
            <span className={`${colors.lightTextColor3}`}>trading</span>
          </h2>
          <div>
            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              magnam accusantium deleniti debitis minus aspernatur est quis
              quaerat iure unde.
            </p>

            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              magnam accusantium deleniti debitis minus aspernatur est quis
              quaerat iure unde.
            </p>
            <ul className="mb-8">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <li
                  key={item}
                  className={`${colors.lightTextColor2} font-semibold mb-3 flex items-center`}
                >
                  <img src={tringle} alt="list style type" className="rotate-90 w-10"/>
                  <p>Some servises</p>
                </li>
              ))}
            </ul>
            <button
              className={`${colors.lightBgColor1} ${colors.lightTextColor2} py-2 px-4 font-bold `}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
