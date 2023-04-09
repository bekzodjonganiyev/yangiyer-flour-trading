import { useAppContext } from "../../context/app.contex";
import tringle from "../../assets/images/tringle.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
export const Products = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();
  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <div className="">
      <div className="mt-[50px]">
      <h2 className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-4`}>
            Yangiyer flour{" "}
            <span className={`${colors.lightTextColor3}`}>trading brends</span>
          </h2>
          </div>
          <p className="text-center text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi dolorem, nemo ex eum ipsum repellat dignissimos iusto iure recusandae?</p>
        <div
        className="container w-[80%] mx-auto   my-5  justify-between items-center flex flex-wrap  "
       
      >
         <div className=" w-[250px] h-full m-2">
          <LazyLoadImage src="https://backend.tkti.uz/uploads/file-1681043316631.png" 
          />
</div>
            <div className="  w-[250px] h-full m-2"><LazyLoadImage src="https://backend.tkti.uz/uploads/file-1681043362030.png"  /></div>
            <div className="  w-[250px] h-full m-2"><LazyLoadImage src="https://backend.tkti.uz/uploads/file-1681043403804.png"  /></div>
            <div className="  w-[250px] h-full m-2"><LazyLoadImage src="https://backend.tkti.uz/uploads/file-1681043430632.png"  /></div>
              
     
      </div>
      <div
        className="container-fluid   "
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
          className=" absolute top-0 left-0 h-full w-full backdrop-blur-sm z-50 p-10 flex justify-center items-center"
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
            <iframe width="100%" height="506" src="https://www.youtube.com/embed/G0zm9TybxpU" title="Firma uchun video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                {/* <img
                  className="rounded-md relative"
                  src="https://backend.tkti.uz/uploads/file-1680953777534.jpg"
                  alt="moshina"
                /> */}
                <span className="glightbox_video">
                  <span className={`play-btn-inner`}></span>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="justify-between items-center flex flex-wrap mx-auto   my-2 ">

     

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-[300px] mx-auto m-2  h-[200px]  bg-slate-300" 
            style={{
              position: "relative",
              

              backgroundPosition: "center",
              backgroundSize: "cover",

              
            }}
          >
            <h1 className=" text-center text-d text-5xl text-[#FFBC13] font-bold mt-10">
              25 +
            </h1>
            <p className="text-center text-white text-xl">
              Years of experience
            </p>
          </div>
        ))}
           </div>
      </div>

      
    </div>
  );
};
