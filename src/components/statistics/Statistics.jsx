import React from "react";

import fakeVerstka3 from "../../assets/images/fake_verstka3.png";

import { useAppContext } from "../../context/app.contex";

export const Statistics = () => {
  const { colors } = useAppContext();

  return (
    <div className="my-10 py-6">
      <div className="container mx-auto">
        <h1
          className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
        >
          Statistical Data
        </h1>
        <div className="h-96 relative opacity-60 bg-cover bg-center bg-fixed bg-no-repeat bg-[url('https://images.unsplash.com/photo-1592492167227-1c82a4514d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]">
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
    </div>
  );
};
