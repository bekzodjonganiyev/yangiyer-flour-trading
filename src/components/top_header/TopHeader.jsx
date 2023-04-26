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
    <>
   
  

    <div
      className={`container-fluid py-5  ${colors.lightBgColor1} ${colors.lightTextColor1}`}
    >
      <div className="flex  justify-between items-center max-xl:flex-col ">
        {/* Social networks */}
        <div className="items-center flex  justify-center mx-5  ">
          <a href="# " className="mx-2 "><FacebookIcon color="#082A58" /></a>
          <a href="#" className="mx-2"><TelegramIcon color="#082A58" /></a>
          <a href="#" className="mx-2"><InstagramIcon color="#082A58" /></a>
          <a href="#" className="mx-2"><YouTubeIcon color="#082A58" /></a>
        </div>

        <div className="flex justify-between w-full mx-10">
          <div className="lg:flex   font-semibold lg:text-lg   "><p className="mx-2">{t("navHeader.call")}:</p> <a  target="_blank" href="tel:+8998898989" className={`font-semibold mx-2  ${colors.lightTextColor2}`}>+8998898989</a></div>
          <div className="lg:flex  font-semibold lg:text-lg   "><p className="mx-2">{t("navHeader.Email")}:</p> <a target="_blank" href="mailto:info@ytf.uz" className={`font-semibold mx-2 ${colors.lightTextColor2}`}>info@ytf.uz</a></div>
          <div className="lg:flex font-semibold lg:text-lg  "><p className="mx-2">{t("navHeader.Openouse")}:</p> <p className={`font-semibold mx-2 ${colors.lightTextColor2}`}>Mon-Fri: 9 am - 6 am</p></div>
        </div>
      </div>
    </div>
    </>
  );
};
