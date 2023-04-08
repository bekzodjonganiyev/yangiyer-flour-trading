import React from "react";

import { useAppContext } from "../../context/app.contex";
import tringle from "../../assets/images/tringle.png"

export const AboutUs = () => {
  const { colors } = useAppContext();

  return (
    <>
    <h2 className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-8`}>
            Yangiyer flour{" "}
            <span className={`${colors.lightTextColor3}`}>trading</span>
          </h2>
     <div className="container mx-auto w-[90%] my-5 flex  justify-between items-center max-xl:flex-col ">
      
     <div className="">
          <div  className="  gap-6 grid grid-cols-2 rounded-md ">
          
            <img className="rounded-md w-[600px]" src="https://backend.tkti.uz/uploads/file-1680958607718.jpg" alt="" />
         
          
            <img className="rounded-md w-[600px]" src="https://backend.tkti.uz/uploads/file-1680958588783.jpg" alt="" />
         
            <img className="rounded-md w-[600px]" src="https://backend.tkti.uz/uploads/file-1680958572562.jpg" alt="" />
          
          
            <img className="rounded-md w-[600px]" src="https://backend.tkti.uz/uploads/file-1680958553041.jpg" alt="" />
          

          </div>
        </div>
  <div className="w-full  mx-3">
         
          <div className="mx-5">
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
            <ul className="mb-6">
              {[1, 2, 3, 4,5].map((item) => (
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
    
   
    </>
  );
};
