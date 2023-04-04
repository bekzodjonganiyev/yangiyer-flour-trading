import { useAppContext } from "../../context/app.contex";

export const ContactUs = () => {
  const { colors } = useAppContext();
  return (
    <div className="container mx-auto">
      <h1
        className={`${colors.lightTextColor2} font-bold text-3xl text-center my-8`}
      >
        Contact Us
      </h1>
      <div
        className={`${colors.lightBgColor1} py-10`}
      >
        <form className="w-[70%] mx-auto">
          <h3 className={`${colors.lightTextColor2} text-3xl font-semibold mb-3`}>
            Yangiyer flour treading
          </h3>
          <p className={`${colors.lightTextColor2} mb-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            veritatis, recusandae
          </p>
          <label className="block ">
            <input
              type="text"
              required
              className="required  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Name"
            />
          </label>
          <label className="block  ">
            <input
              type="number"
              required
              className="  mt-8  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="+(998) --- -- -- "
            />
          </label>
          <label className="block ">
            <input
              type="email"
              required
              className="  mt-8 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email"
            />
          </label>

          <div className="mx-auto w-[100%] my-5 flex justify-between gap-10  transition-all"></div>

          <label className="block ">
            <textarea
              cols="30"
              required
              rows="10"
              className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Your message"
            ></textarea>
          </label>

          <label className="block ">
            <input
              
              type="file"
              className="  mt-8 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="F.I.O."
            />
          </label>

          <button
            type="submit"
            className={`rounded bg-primary px-6 py-2.5  mt-5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg  w-full focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light ${colors.lightBgColor2}`}
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};
