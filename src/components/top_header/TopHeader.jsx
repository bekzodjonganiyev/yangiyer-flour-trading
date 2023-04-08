import { useState } from "react";
import { TelegramIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from "../../assets/icons";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app.contex";

export const TopHeader = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();
  const [socials, setSocials] = useState(localStorage.getItem("socials") || {})
  
  return (
    <div
      className={`container-fluid  ${colors.lightBgColor1} ${colors.lightTextColor1}`}
    >
      <div className="py-4 container mx-auto w-[90%] flex items-center justify-between">
        {/* Social networks */}
        <div className="items-center lg:flex sm:block grid-span-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center  md:my-3 sm:my-2 ">
          <a href="#"><FacebookIcon color="#000" /></a>
          <a href="#"><TelegramIcon color="#000" /></a>
          <a href="#"><InstagramIcon color="#000" /></a>
          <a href="#"><YouTubeIcon color="#000" /></a>
        </div>

        <div className="lg:flex md:flex justify-between lg:w-9/12 md-w-full sm:w-full">
          <p className="font-semibold lg:text-lg md:text-base  sm:text-xs  ">{t("navHeader.call")}:{" "} <span className={`font-semibold ${colors.darkTextColor1}`}>+8998898989</span></p>
          <p className="font-semibold lg:text-lg md:text-base sm:text-xs  ">{t("navHeader.Email")}:{" "} <span className={`font-semibold ${colors.darkTextColor1}`}>info@ytf.uz</span></p>
          <p className="font-semibold lg:text-lg md:text-base sm:text-xs ">{t("navHeader.Openouse")}:{" "} <span className={`font-semibold ${colors.darkTextColor1}`}>Mon-Fri: 9 am - 6 am</span></p>
        </div>
      </div>
    </div>
  );
};
