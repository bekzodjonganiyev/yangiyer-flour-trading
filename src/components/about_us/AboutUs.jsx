import React,{useState} from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app.contex";


export const AboutUs = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();

  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
   
     <div className="container-fluid mx-auto  w-[100%]  ">
    
     <div className="w-[95%] mx-auto  mt-[100px] mb-[70px] ">
  <h2 className={`${colors.lightTextColor2} text-center text-4xl font-bold my-4 `}>
  {t("Header.name")}
            <span className={`${colors.lightTextColor3}`}> {t("Header.name2")}</span>
          </h2>
          <div className="mx-5 font-normal">
            <p className={`${colors.lightTextColor2} text-xl mb-2`}>
             
            </p>

            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
            {t("about.title")}
            </p>
           
          </div>
        </div>
     <div
        className="container-fluid rounded-md  "
        style={{
          width:"100vw",
          height:"50vh",
        
          position: "relative",
          borderRadius:"10px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "container",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1682455807124.png")`,
        }}
      >
        {isModal && (
        <div
          className=" w-[100vw] absolute top-[-200px]  h-full   backdrop-blur-sm z-50 py-[500px] px-[100px] flex justify-center items-center "
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
                className="absolute top-20 right-10  p-10 z-[9999]"
                onClick={() => setIsModal(true)}
              >
                kjhgkhgkj
              </button>
            )}
            <iframe  width="100%" height="506" src="https://www.youtube.com/embed/G0zm9TybxpU" title="Firma uchun video" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      )}

<div className="container-fluid mx-auto w-[90%]  flex justify-center items-center ">
        <div>
         
          <div className="container w-[full] mx-auto  relative ">
           
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
</div>
    
   
    </>
  );
};
