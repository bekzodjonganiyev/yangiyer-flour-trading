import { useAppContext } from "../../context/app.contex";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
export const ContactUs = () => {
  const { t } = useTranslation();
  const { colors } = useAppContext();
  return (
    <div>
    <div
        className="container-fluid     "
        style={{
          width:"100vw",
          height:"100vh",
         
          position: "relative",
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1680953240671.jpg")`,
        }}
      >
      
      <div
        className="container mx-auto      py-10"
        style={{
          background:"rgba(0, 0, 0, 0.4.5)"
        }}
        
      >
        <form className="container mx-auto my-3 w-[60%]">
          <h3 className="text-3xl font-semibold text-white text-center mb-3">
          {t("Header.name")} {t("Header.name2")}
          </h3>
          
          <label className="block ">
            <input
              type="text"
              required
              className="required  px-3 py-2  bg-transparent border shadow-sm border-white placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder={t("contact.name")}
            />
          </label>
          <label className="block  ">
            <input
              type="number"
              required
              className="  mt-8  px-3 py-2 bg-transparent border shadow-sm border-white placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="+(998) --- -- -- "
            />
          </label>
          <label className="block ">
            <input
              type="email"
              required
              className="  mt-8 px-3 py-2 bg-transparent border shadow-sm border-white placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email"
            />
          </label>

          <div className="mx-auto w-[100%] my-5 flex justify-between gap-10  transition-all"></div>

          <label className="block ">
            <textarea
              cols="30"
              required
              rows="10"
              className="  mt-1 px-3 py-2 bg-transparent border shadow-sm border-white placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Your message"
            ></textarea>
          </label>

          <label className="block ">
            <input
              type="file"
              className="  mt-8 px-3 py-2 bg-transparent border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="F.I.O."
            />
          </label>

          <button
            type="submit"
            className="rounded bg-primary px-6 py-2.5  mt-5 text-xs font-medium uppercase leading-tight text-white bg-sky-900 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg  w-full focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
             {t("contact.send")}
          </button>
        </form>
      </div>
    
      </div>

     
    </div>
  );
};
