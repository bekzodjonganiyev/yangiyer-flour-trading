import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";



import { LangIcon } from "../../assets/icons";
import logo from "../../assets/images/logo.png";
import { UsersContext } from "../../context";

const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate()
  
  const [isOpen, setOpen] = useState({ hamburger: false, lang: false });
  const language = [
    {
      code: "en",
      name: "En",
     
      conuntry_code: "gb",
    },
    {
      code: "uz",
      name: "Uz",
      conuntry_code: "uz",
    },
    {
      code: "ru",
      name: "Ru",
      conuntry_code: "ru",
    },
  ];

  const toggleHamburger = () => {
    setOpen({ hamburger: !isOpen.hamburger });
  };

  const changeLanguage = (code) => {
    let pathnameLang = "uz"
    if (pathname.split("/")[1] === "uz") pathnameLang = "uz"
    if (pathname.split("/")[1] === "ru") pathnameLang = "ru"
    if (pathname.split("/")[1] === "en") pathnameLang = "en"
    navigate(pathname.replace(pathnameLang, code));
    i18next.changeLanguage(code);
  };
  return (
    <header
      className={`py-4 
       text-white  transition-opacity ${
         pathname === "/" ? "absolute w-full" : ""
       }
       ${pathname !== "/" ? "sticky top-0" : ""} w-full  z-10`}
    >
      <div className="flex items-center justify-between container mx-auto w-[85%]">
        <div className="w-2/6">
          <Link to="/" className="flex">
            <img src={logo} alt="" width={"100"} height={"20"} className="" />
            <div className="text-center text-[20px] font-bold">
              <div className="text-[#ffffff]">YANGIYER FLOUR </div>
              <div className="text-[#EEAD0F]">TRADING</div>
            </div>
          </Link>
        </div>
        <div
          className={`w-3/6 xl:flex justify-between ${
            isOpen.hamburger
              ? "xl:static absolute top-0 left-0 max-xl:w-full max-xl:h-screen xl:bg-inherit bg-[rgba(0,0,0,0.96)] max-xl:flex max-xl:flex-col max-xl:justify-start max-xl:pt-24"
              : "hidden"
          }`}
        >
          <Link
            to="/"
            className="max-xl:block hidden pl-14 -mt-16 mb-14"
            onClick={() => toggleHamburger()}
          >
            <img src={logo} alt="" width={"120"} height={"20"} className="" />
          </Link>

          <Link
            to={``}
            className="text-[18px] text-[#Ffffff] font-bold max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            About Us
          </Link>
          <Link
            to={``}
            className="text-[18px] text-[#Ffffff] font-bold max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            Products
          </Link>
          <Link
            to={``}
            className="text-[18px] text-[#Ffffff] font-bold max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            Partners
          </Link>
          <Link
            to={``}
            className="text-[18px] text-[#Ffffff] font-bold max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            Contact us
          </Link>
          <div className="max-xl:flex gap-4 hidden pl-14 mt-8">
            {" "}
            {language.map((item) => (
              <button 
                key={item.code}
                className="bg-[#F2F2F2] text-black rounded p-2"
                onClick={() => {
                  changeLanguage(item.code);
                  toggleHamburger();
                }}
              >
                {item.name}
               
              </button>
            ))}
          </div>
        </div>
        <div className="w-2/6 flex items-center justify-end gap-3">
          <div className="text-[18px] text-[#Ffffff] font-bold flex items-center gap-2 max-[779px]:hidden">
            
            <span> +998 94 332 00 16 </span>
          </div>
          <div
            className="items-center gap-3 text-black bg-[#F2F2F2] ml-10 p-2.5 rounded cursor-pointer xl:flex hidden relative"
            onClick={() => setOpen({ ...isOpen, lang: !isOpen.lang })}
          >
            <LangIcon />
            {isOpen.lang && (
              <ul className="absolute bg-[#F2F2F2] pb-2 text-black top-10 left-0 w-full rounded">
                {language.map((item) => (
                  <li
                    key={item.code}
                    className="px-2.5 hover:bg-black hover:text-white"
                    onClick={() => {
                      changeLanguage(item.code);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="xl:hidden block">
            <Hamburger
              toggled={isOpen.hamburger}
              toggle={() => toggleHamburger()}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


