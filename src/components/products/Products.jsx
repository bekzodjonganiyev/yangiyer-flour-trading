import { useAppContext } from "../../context/app.contex";
import tringle from "../../assets/images/tringle.png";
import fakeVerstka1 from "../../assets/images/fake_verstka1.jpg";
import { useState } from "react";
export const Products = () => {
  const { colors } = useAppContext();
  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <h2
        className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-8`}
      >
        Products{" "}
      </h2> */}
      {/* <div className="container mx-auto w-[90%] my-5 flex  justify-between items-center max-xl:flex-col ">
        <div className="w-full  mx-3">
          <div className="mx-5">
            <h2
              className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-2`}
            >
              Yangiyer flour trading{" "}
              <span className={`${colors.lightTextColor3}`}>works</span>
            </h2>
            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              magnam accusantium deleniti debitis minus aspernatur est quis
              quaerat iure unde.
            </p>

            <div className="bg-red-400 w-[90%] h-24 my-4"></div>
            <div className="bg-red-400  w-[90%] h-24 my-4"></div>
            <div className="bg-red-400 w-[90%] h-24 my-4"></div>
          </div>
        </div>
        <div className="w-full">
          <div className=" w-full gap-6 rounded-md ">
            <img
              className="rounded-md w-[500px]"
              src="https://media.istockphoto.com/id/1400865154/photo/insurance-and-risk-management-concept.jpg?b=1&s=170667a&w=0&k=20&c=txTSImC8-K3Py8sLhNdq6i_38D4gyGSzKOVW5KgmGPY="
              alt=""
            />
          </div>
        </div>
      </div> */}
      {isModal && (
        <div
          className="absolute top-0 left-0 h-full w-full backdrop-blur-sm z-50 p-10 flex justify-center items-center"
          onClick={() => setIsModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[80%] mx-auto shadow-2xl z-20"
            onMouseEnter={() => {
              setVisible(true);
              console.log("enter");
            }}
            onMouseLeave={() => {
              setVisible(false);
              console.log("leave");
            }}
          >
            {visible &
            (
              <button
                className="absolute top-20 right-10 bg-red-600 p-10 z-[9999]"
                onClick={() => setIsModal(false)}
              >
                kjhgkhgkj
              </button>
            )}
            <iframe
              width="100%"
              height="506"
              src="https://www.youtube.com/embed/qx9nshX9CQQ"
              title="Micro eCommerce with Python, Django, Serverless Postgres, Stripe, TailwindCSS and more"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="container mx-auto">
        <div>
          <h1
            className={`${colors.lightTextColor2} font-bold text-3xl text-center mb-8`}
          >
            Products
          </h1>
          <div className="container mx-auto bg-[#fff9e9] p-10 relative">
            <div
              className={`${colors.lightBgColor1} absolute right-0 top-0 w-[30%] h-[50%]`}
            ></div>
            <div className="flex justify-between items-center gap-10">
              <div className="w-1/2">
                <h2
                  className={`${colors.lightTextColor2} font-bold text-3xl m-0`}
                >
                  See How We Make Our{" "}
                  <span className={`${colors.lightTextColor3}`}>Products</span>
                </h2>
                <p className={`${colors.lightTextColor2} text-xl mb-8`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  magnam accusantium deleniti debitis minus aspernatur est quis
                  quaerat iure unde.
                </p>
                <img
                  src={fakeVerstka1}
                  alt="moshina"
                  height=""
                  className="h-96 w-[500px]"
                />
              </div>
              <div
                className="w-1/2 z-10 relative"
                onClick={() => setIsModal(true)}
              >
                <img
                  className="rounded-md relative"
                  src="https://backend.tkti.uz/uploads/file-1680953777534.jpg"
                  alt="moshina"
                />
                <span className="glightbox_video">
                  <span className={`play-btn-inner`}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
