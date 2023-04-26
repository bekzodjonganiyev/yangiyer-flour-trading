import { useAppContext } from "../../context/app.contex";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactImg from '../../assets/images/5138237.jpg'
import i18next from "i18next";
export const ContactUs = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();
  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-white">
      <div className="container mx-auto w-[90%] flex lg:flex-row flex-col  max-md:flex-col  ">
      <div className="container ">
    <img className="w-[100%]" src={ContactImg} alt="" />
   </div>
  <div
        className="w-[1/2] container  p-8"
     
        
      ><form className="container h-[full] my-3   bg-slate-800 "
      style={{
        // background:"rgba(253, 247, 250, 0.52)"
      }} >
      <div className="mx-auto w-[80%] ">

    
      <h3 className="text-2xl font-semibold text-[#fff] text-center mb-3">
      {/* {t("Header.name")} {t("Header.name2")} */} Contact Us
      </h3>
      
      <label className="block ">
        <input
          type="text"
          required
          className="required  px-3 py-2  my-5   bg-slate-300  border shadow-sm border-white placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={t("contact.name")}
        />
      </label>
      <label className="block  ">
        <input
          type="number"
          required
          className="  my-5  px-3 py-2 bg-slate-300  border shadow-sm border-white placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="+(998) --- -- -- "
        />
      </label>
      <label className="block ">
        <input
          type="email"
          required
          className="  my-5 px-3 py-2 bg-slate-300  border shadow-sm border-white placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Email"
        />
      </label>

     

      <label className="block ">
        <textarea
          cols="30"
          required
          rows="10"
          className="  mt-1 px-3 py-2 bg-slate-300  border shadow-sm border-white placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Your message"
        ></textarea>
      </label>

      <label className="block ">
        <input
          type="file"
          className="  mt-8 px-3 py-2 bg-slate-300  border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="F.I.O."
        />
      </label>

      <button
        type="submit"
        className="rounded bg-primary px-6 py-2.5 text-white my-5 text-xs font-medium uppercase leading-tight text-white-500 bg-sky-900 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg  w-full focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
         {t("contact.send")}
      </button>
      </div>
    </form>
       
        
      </div>
      </div>
   
    </div>
  );
};
