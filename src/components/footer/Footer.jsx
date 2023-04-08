import React, { useState } from "react";
import {
  TelegramIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  LeftIcon,
} from "../../assets/icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { useAppContext } from "../../context/app.contex";
export const Footer = () => {
  const { t } = useTranslation();
  const { colors } = useAppContext();
  return (
    <>
     
  
    <footer className={`${colors.lightBgColor3}`}>
      <div className="container-fluid mx-auto w-[90%] my-5 flex  justify-between items-center max-md:flex-col">
        <div className="lg:flex md:flex   gap-4 items-end justify-between">
        <div className="container lg:w-2/12 xl:w-4/12 md-w-1/2 sm:w-full ">
          <Link to="/">
            <div className="flex items-center ">
              <img src={logo} alt="Main logo" className="w-30 h-24" />
              <p className={`${colors.lightTextColor2} lg:text-2xl xl:text-xl md:text-lg md:w-1/2 font-bold`}>
                YANGIYER FLOUR <br />
                <span className={`${colors.lightTextColor3} ml-1`}>
                  TRADING
                </span>
              </p>
        
            </div>
            <div>
              <p className="text-sky-900 mb-2  lg:text-xl xl:text-sm">
                Address: Republic of Uzbekistan, Sirdaryo region, Yangiyer city,
                industrial area
              </p>
            </div>
            <div className="icons">
              <div className="flex items-center gap-3 lg:w-3/12 xl:w-4/12 md:w-1/2 sm-w-full">
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  {" "}
                  <FacebookIcon
                    className={`flex items-center justify-center mx-auto`}
                    color="#000"
                  />
                </a>
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  <TelegramIcon color="#000" />
                </a>
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  <InstagramIcon color="#000" />
                </a>
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  <YouTubeIcon color="#000" />
                </a>
              </div>
            </div>
          </Link>
        </div>
        <div className={` items-center justify-between ${colors.lightTextColor2} font-bold xl:text-base lg:w-3/12 md:w-1/2 `}
        >
          <h3 className="text-2xl my-3 mx-auto">Quick Links</h3>
          <NavLink className={`flex items-center my-2 mx-2`} to="about-us">
            <LeftIcon />
            <span className="mx-3">About Us</span>{" "}
          </NavLink>
          <NavLink className={`flex items-center my-2 mx-2`} to="products">
            {" "}
            <LeftIcon />
            <span className="mx-3">Products</span>{" "}
          </NavLink>
          <NavLink className={`flex items-center my-2 mx-2`} to="lidership">
            <LeftIcon />
            <span className="mx-3">Lidership</span>
          </NavLink>
          <NavLink className={`flex items-center my-2 mx-2`} to="partners">
            {" "}
            <LeftIcon />
            <span className="mx-3">Partners</span>
          </NavLink>
          <a href={"#"} className={`flex items-center my-2 mx-2`}>
            {" "}
            <LeftIcon />
            <span className="mx-3">Contact Us</span>
          </a>
        </div>

        <div className={` items-center justify-between ${colors.lightTextColor2} font-bold lg:tex-3/12 md:w-1/2 mx-auto `}
        >
          <h3 className="text-2xl my-2">Contacts</h3>
          <div className={`flex items-center `}>
            <a
              href="#"
              className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2 "
            >
              <span className="text-2xl flex items-center justify-center mx-auto">
                P
              </span>{" "}
            </a>
            <span className="mx-4"> +998 71 875 64 56</span>
          </div>
          <div className={`flex items-center `}>
            <a
              href="#"
              className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"
            >
              <span className="text-2xl flex items-center justify-center mx-auto">
                E
              </span>
            </a>{" "}
            <span className="mx-4"> Yangiyerflour@gmail.com</span>
          </div>
          <div className={`flex items-center `}>
            <a
              href="#"
              className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"
            >
              <span className="text-2xl flex items-center justify-center mx-auto">
                O
              </span>
            </a>{" "}
            <span className="mx-4"> Mon -Fri 9 am 6 pm</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s"
            allowFullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-xl h-56 w-80"
          ></iframe>
        </div>
        </div>
      </div>
    </footer>
    </>
  );
};
