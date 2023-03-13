import { useState } from "react";
import { TelegramIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from "../../assets/icons";

import { useAppContext } from "../../context/app.contex";

export const TopHeader = () => {
  const { colors } = useAppContext();
  const [socials, setSocials] = useState(localStorage.getItem("socials") || {})
  console.log(socials)
  return (
    <div
      className={`${colors.lightBgColor1} ${colors.lightTextColor1}`}
    >
      <div className="py-4 container mx-auto flex items-center justify-between">
        {/* Social networks */}
        <div className="flex items-center gap-3 w-3/12">
          <a href="#"><FacebookIcon color="#000" /></a>
          <a href="#"><TelegramIcon color="#000" /></a>
          <a href="#"><InstagramIcon color="#000" /></a>
          <a href="#"><YouTubeIcon color="#000" /></a>
        </div>

        <div className="flex justify-between w-9/12">
          <p className="font-semibold">Call Us:{" "} <span className={`font-semibold ${colors.darkTextColor1}`}>+8998898989</span></p>
          <p className="font-semibold">Email Us:{" "} <span className={`font-semibold ${colors.darkTextColor1}`}>info@ytf.uz</span></p>
          <p className="font-semibold">Open Hours:{" "} <span className={`font-semibold ${colors.darkTextColor1}`}>Mon-Fri: 9 am - 6 am</span></p>
        </div>
      </div>
    </div>
  );
};
