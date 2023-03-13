import { LazyLoadImage } from "react-lazy-load-image-component";

import "./LidershipCard.css";

import { FacebookIcon, TelegramIcon, InstagramIcon } from "../../assets/icons";
import { useAppContext } from "../../context/app.contex";

export const LidershipCard = () => {
  const { colors } = useAppContext();
  return (
    <div className="lidership-card">
      <LazyLoadImage
        src="https://media.istockphoto.com/id/1400865154/photo/insurance-and-risk-management-concept.jpg?b=1&s=170667a&w=0&k=20&c=txTSImC8-K3Py8sLhNdq6i_38D4gyGSzKOVW5KgmGPY="
        alt={`Image Alt`}
        className=" h-full img-scale object-cover transition"
        effect="" // opacity | black-and-white
      />
      <div
        className={`${colors.lightBgColor2} ${colors.lightTextColor1} py-4 px-2`}
      >
        <p className="text-2xl">Jonh Doe</p>
        <span>Job title</span>
      </div>

      <div className="hidden-info">
        <div className="flex gap-2">
          <span className="bg-[#082A58] text-white p-2"><InstagramIcon color="white"/></span>
          <span className="bg-[#082A58] text-white p-2"><FacebookIcon color="white"/></span>
          <span className="bg-[#082A58] text-white p-2"><TelegramIcon color="white"/></span>
        </div>
      </div>
    </div>
  );
};
