import { useContext, useState } from "react";
import { Link,NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import { useAppContext } from "../../context/app.contex";

export const MainHeader = () => {
  const {t} = useTranslation();
  const [isOpen, setOpen] = useState({ hamburger: false, lang: false });
  const language = [
   
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
    {
      code: "en",
      name: "En",
      conuntry_code: "gb",
    },
    {
      code: "ar",
      name: "Ar",
      conuntry_code: "ar",
    },
  ]
  const toggleHamburger = () => {
    setOpen({ hamburger: !isOpen.hamburger });
  };
 const changeLanguage = (code) => {
    i18next.changeLanguage(code);
    window.location.reload();
    window.location.href = `/`;
  };
  const { colors } = useAppContext();
  return (
    <>
     <header
      className={`${colors.lightBgColor3} shadow w-full  sticky top-0 z-50 lg:flex justify-between`}
    >
      <div className="flex items-center justify-between container mx-auto w-[90%]">
        <div className="">
        <Link to="/">
          <div className="flex items-center ">
            <img src={logo} alt="Main logo" className="w-30 h-24" />
            <p className={`${colors.lightTextColor2} text-2xl font-bold`}>
            {t("name.yangiyer")}{" "} <br />
              <span className={`${colors.lightTextColor3} ml-10`}>{t("name.trading")}</span>
            </p>
          </div>
        </Link>
        </div>
        <div
          className={` xl:flex   justify-between ${
            isOpen.hamburger
              ? "xl:static absolute top-0 left-0 max-xl:w-full max-xl:h-screen xl:bg-inherit bg-[rgba(0,0,0,0.96)] max-xl:flex max-xl:flex-col max-xl:justify-start max-xl:pt-24"
              : "hidden"
          } ${colors.lightTextColor2} font-bold`}
        >
          <NavLink to="about-us"  className="max-xl:pl-14 mx-5 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8">            {t("Header.about")} </NavLink>
          <NavLink to="products"  className="max-xl:pl-14 mx-5 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"  onClick={() => toggleHamburger()}>{t("Header.product")}</NavLink>

          <NavLink to="partners"  className="max-xl:pl-14 mx-5 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"  onClick={() => toggleHamburger()}>{t("Header.partners")}</NavLink>
          <NavLink to="contact-us"  className="max-xl:pl-14 mx-5 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"  onClick={() => toggleHamburger()}>{t("Header.ContactUs")}</NavLink>

          
         
         
         
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
        <div className=" flex items-center justify-end gap-3">
         
          <div
            className="items-center gap-3  text-black bg-[#F2F2F2] ml-10 p-2.5 rounded cursor-pointer xl:flex hidden relative"
            onClick={() => setOpen({ ...isOpen, lang: !isOpen.lang })}
          ><h3 className="cursor-pointer">{t("Header.language")}</h3>
            {/* <LangIcon /> */}
            {isOpen.lang && (
              <ul className="absolute bg-[#efe9e9] pb-2 text-black top-10 left-0 w-full rounded">
                
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
          <div className="xl:hidden block color:red">
            <Hamburger
              toggled={isOpen.hamburger}
              toggle={() => toggleHamburger()}
            />
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
