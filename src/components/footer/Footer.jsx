import React, { useState } from "react";
import {
  TelegramIcon,
  InstagramIcon,
  YouTubeIcon,
  Global,
  FacebookIcon,
  TwitterIcon,
  PhoneIcon,
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
      <footer className={` bg-[#063F58] w-full `}>
        <div className="container mx-auto w-[90%] my-[20px] ">
          <div className="container  flex justify-between">
            <div className="text-center">
              <Link to="/" className="my-4 block  ">
                <div className="flex items-center ">
                  <img src={logo} alt="Main logo" className="w-24 h-24" />
                  <p
                    className={`text-white lg:text-3xl xl:text-2xl md:text-lg  md:w-[70%] font-bold`}
                  >
                    <span>
                      {t("Header.name")}
                      <br />
                    </span>
                    <span className={`${colors.lightTextColor3} ml-1`}>
                      {t("Header.name2")}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
            <div className=" lg:block hidden ">
              <div
                className={` mx-auto my-12  flex items-center justify-end text-white font-bold xl:text-base `}
              >
                <NavLink to={`${i18next.language}/about-us`}>
                  <span className="mx-3">{t("Header.about")}</span>{" "}
                </NavLink>
                <NavLink to={`${i18next.language}/products`}>
                  <span className="mx-3">{t("Header.product")}</span>{" "}
                </NavLink>

                <NavLink to={`${i18next.language}/partners`}>
                  <span className="mx-3">{t("Header.partners")}</span>
                </NavLink>
                <NavLink to={`${i18next.language}/contact-us`}>
                  <span className="mx-3">{t("Header.ContactUs")}</span>
                </NavLink>
              </div>
            </div>
          </div>
          <hr />

          <div className="flex gap-4    items-end justify-between ">
            <div className="lg:flex lg:flex-col flex-row-reverse   max-md:flex-col max-md:gap-10 ">
              <div className="flex items-center gap-2 my-3">
                <PhoneIcon />
                <span className="text-white"> +998934497434</span>
              </div>

              <div className="flex items-center gap-2 my-3">
                <Global />
                <span className="text-white"> YANGIYERFLOURTRADING.uz</span>
              </div>

              <div className="flex lg:gap-4 gap-10">
                <TelegramIcon color="white" />
                <InstagramIcon color="white" />
                <FacebookIcon color="white" />
                <YouTubeIcon color="white" />
                <TwitterIcon color="white" />
              </div>
            </div>
            <div
              className="text-[#F2F2F2] my-[55px] lg:block hidden w-[70%]"
              dangerouslySetInnerHTML={{
                __html: t("about.title"),
              }}
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
};
