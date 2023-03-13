import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { useAppContext } from "../../context/app.contex";

export const MainHeader = () => {
  const { colors } = useAppContext();
  return (
    <div className={`${colors.lightBgColor3} sticky top-0 `}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Main logo" className="w-30 h-24" />
            <p className={`${colors.lightTextColor2} text-2xl font-bold`}>
              YANGIYER FLOUR{" "} <br />
              <span className={`${colors.lightTextColor3} ml-10`}>TRADING</span>
            </p>
          </div>
        </Link>
        <div className={`flex items-center justify-between w-6/12 ${colors.lightTextColor2} font-bold`}>
          <NavLink to="about-us">About Us</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="lidership">Lidership</NavLink>
          <NavLink to="partners">Partners</NavLink>
          <a href={"#"}>Contact Us</a>
          <button>Language</button>
          <div className="w-10 h-5 bg-black rounded-xl relative"></div>
        </div>
      </div>
    </div>
  );
};
