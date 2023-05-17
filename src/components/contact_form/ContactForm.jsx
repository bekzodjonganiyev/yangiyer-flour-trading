import React from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Alert } from "flowbite-react";
import i18next from "i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    const obj = {
      fullName: e.target.fullName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    fetch("https://tkti-back-lexde.ondigitalocean.app/send", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        token: localStorage.getItem("token"),
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert("Your message successfully sent")
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-white mb-10">
      <div className="container mx-auto w-[90%] flex justify-between lg:flex-row max-md:flex-col ">
        <Slide className="w-1/2 max-md:w-full" direction="left">
          <div className="">
            <form onSubmit={sendEmail} className="container h-[full] my-3 ">
              <div className="mx-auto w-[95%] ">
                <h2 className="text-5xl font-bold text-[#0B2A5A] my-5" id="contactus">
                {t("Header.ContactUs")}
                </h2>
                <label className="">
                  <input
                    type="text"
                    required
                    name="fullName"
                    className="required  px-3 py-2  my-5   bg-[#FFF]  border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder={t("contact.name")}
                  />
                </label>

                <label className="block  ">
                  <input
                    type="number"
                    name="phone"
                    required
                    className=" px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="+(998) --- -- -- "
                  />
                </label>
                <label className="block ">
                  <input
                    type="email"
                    required
                    name="email"
                    className="  my-5 px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58] placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Email"
                  />
                </label>

                <label className="block ">
                  <textarea
                    minLength={20}
                    cols="30"
                    required
                    rows="10"
                    name="message"
                    className="  mt-1 px-3 py-2 bg-[#FFF]   border shadow-sm border-[#082A58]  placeholder-[#082A58] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Your message"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  value="send"
                  className="rounded bg-primary  px-10 py-3 text-white my-5 text-xs font-medium uppercase leading-tight text-white-500 bg-[#EEAD0F] shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg   focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </Slide>

        {/* <div className="max-md:w-full w-full rounded-3xl"> */}
        <iframe
          className="w-1/2 rounded-3xl max-md:w-full max-md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.971617605521!2d69.2168139758326!3d41.287722171312694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzE1LjgiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2s!4v1682497109753!5m2!1sru!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* </div> */}
      </div>
    </div>
  );
};
