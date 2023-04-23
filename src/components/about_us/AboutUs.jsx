import React,{useState} from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app.contex";
import tringle from "../../assets/images/tringle.png"

export const AboutUs = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();

  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
   
     <div className="container mx-auto w-[90%] my-5 flex  justify-between items-center max-xl:flex-col ">
      
     <div
        className="container-fluid rounded-lg  "
        style={{
          width:"100vw",
          height:"90vh",
         
          position: "relative",
         
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1681051159262.png")`,
        }}
      >
        {isModal && (
        <div
          className=" w-[90vw] absolute top-0 left-[0%] h-full   backdrop-blur-sm z-50 py-[300px] px-[100px] flex justify-center items-center"
          onClick={() => setIsModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative  w-[100vw] mx-auto shadow-2xl z-20  "
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
            <iframe  width="100%" height="506" src="https://www.youtube.com/embed/G0zm9TybxpU" title="Firma uchun video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      )}

<div className="container-fluid w-[600px] items-center flex justify-center mx-auto">
        <div>
         
          <div className="container mx-auto  relative ">
           
            <div className="container mx-auto w-[90%] h-[400px] my-1  ">
          
              <div
                className="w-full mx-4 pt-10"
                onClick={() => setIsModal(true)}
              >
                <div className=" w-full gap-6 rounded-md ">
             
                <span className="glightbox_video">
                  <span className={`play-btn-inner`}></span>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

         
      </div>
  <div className="w-full  mx-3">
  <h2 className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-8`}>
            Yangiyer flour{" "}
            <span className={`${colors.lightTextColor3}`}>trading</span>
          </h2>
          <div className="mx-5">
            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
             
            </p>

            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
            {t("about.title")}
            </p>
            <ul className="mb-6">
              {[1, 2].map((item) => (
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
