import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useAppContext } from "../../context/app.contex";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2kojv7f', 'template_8awts5s', form.current, 'GrdNCjVW_D0C8mAf0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="bg-white">
      <div className="container mx-auto w-[90%] flex lg:flex-row flex-col  max-md:flex-col  ">
      <div
        className="w-[1/2] container  p-8"
     
        
      ><form ref={form} onSubmit={sendEmail} className="container h-[full] my-3 "
      >
      <div className="mx-auto w-[95%] ">
        <h2 className="text-5xl font-bold text-[#0B2A5A] my-5">Biz haqimizda</h2>
      <div className="flex justify-between ">
      <label className="block  w-[48%]">
        <input
          type="text"
          required
          name="user_name"
          className="required  px-3 py-2  my-5   bg-[#FFF]  border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={t("contact.name")}
        />
      </label>
      <label className="block  w-[48%]">
        <input
          type="text"
          name="user_lasrName"
          required
          className="required  px-3 py-2 my-5     bg-[#FFF]  border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={t("contact.name")}
        />
      </label>
      </div>
     
      <label className="block  ">
        <input
          type="number"
          name="tell"
          required
          className=" px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="+(998) --- -- -- "
        />
      </label>
      <label className="block ">
        <input
          type="email"
          required
          name="email"
          className="  my-5 px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Email"
        />
      </label>

     

      <label className="block ">
        <textarea
          cols="30"
          required
          rows="10"
          name="message"
          className="  mt-1 px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58]  placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Your message"
        ></textarea>
      </label>

      <label className="block ">
        <input
          type="file"
          name="file"
          className="  mt-8 px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58] placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="F.I.O."
        />
      </label>

      <button
        type="submit"
        value="send"
        className="rounded bg-primary  px-10 py-3 text-white my-5 text-xs font-medium uppercase leading-tight text-white-500 bg-[#EEAD0F] shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg   focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg"
        data-te-ripple-init
        data-te-ripple-color="light"
        
      >
         {t("contact.send")}
      </button>
      </div>
    </form>
       
        
      </div>

      <div className=" w-[1/2] container   my-[100px] ">
      <iframe
                className=" w-[600px] h-[450px] rounded-3xl "
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.971617605521!2d69.2168139758326!3d41.287722171312694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzE1LjgiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2s!4v1682497109753!5m2!1sru!2s"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
   </div>
 
      </div>
   
    </div>
  );
};
