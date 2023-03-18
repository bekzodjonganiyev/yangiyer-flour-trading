import React from "react";

import fakeVerstka4 from "../../assets/images/fake_verstka4.png";

import { useAppContext } from "../../context/app.contex";

export const Partners = () => {
  const { colors } = useAppContext();
  return (
    <div
      className="h-96"
      style={{
        position: "relative",
        opacity: "0.65",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("https://images.unsplash.com/photo-1592492167227-1c82a4514d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
      }}
    >
      <div className="container mx-auto">
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
