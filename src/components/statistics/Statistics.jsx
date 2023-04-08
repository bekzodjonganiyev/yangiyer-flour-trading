import React from "react";

import fakeVerstka3 from "../../assets/images/fake_verstka3.png";

import { useAppContext } from "../../context/app.contex";

export const Statistics = () => {
  const { colors } = useAppContext();

  return (
    <>
      <h1
        className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
      >
        Statistical Data
      </h1>

      <div
        className="container-fluid mx-auto py-10  my-2  justify-between items-center flex flex-wrap  "
        style={{
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1680953754646.jpg")`,
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-[300px] mx-auto m-2  h-[200px]"
            style={{
              position: "relative",
              opacity: "0.65",

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url("https://images.unsplash.com/photo-1592492167227-1c82a4514d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
            }}
          >
            <h1 className=" text-center text-d text-5xl text-amber-500 font-bold mt-10">
              25 +
            </h1>
            <p className="text-center text-white text-xl">
              Years of experience
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
