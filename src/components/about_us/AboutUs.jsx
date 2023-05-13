import React from "react";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

import "./AboutUs.css";

export const AboutUs = () => {
  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between gap-10 container mx-auto w-[90%] mb-20 max-md:flex-col">
      <Slide className="w-1/2 max-md:w-full" direction="left">
        <div className="">
          <h1 className="text-secondary_color text-4xl font-bold mb-10 max-md:mb-4 max-md:text-xl">
            Biz haqimizda
          </h1>
          <p className="text-secondary_color text-2xl max-md:text-lg">
            “Yangiyer Flour Trading” MChJ mustaqil, oilaviy kompaniya
            hisoblanadi. 1991 yildan beri faoliyat yuritadi. Markaziy Osiyoning
            markazida joylashgan. "Yangiyer Flour Trading" MChJ o'z maqsadi
            bo'yicha birinchi navli undan ikkinchi va uchinchi navgacha eng
            sifatli bug'doy unini ishlab chiqarish va raqobatbardosh narxlarda
            hech kimdan kam bo'lmagan xizmat ko'rsatish uchun qurilgan. Ulgurji
            va ishlab chiqarish bozori sohasida 30 yildan ortiq tajribaga ega.
            Bizning xodimlarimiz o'zlarining tajriba va bilimlarini mijozlarga
            har kuni yangi mahsulotlarni to'plash yoki yetkazib berishga yordam
            berish uchun ishlatadilar.Ulgurji va ishlab chiqarish bozori
            sohasida 30 yildan ortiq tajribaga ega. Bizning xodimlarimiz
            o'zlarining tajriba va bilimlarini mijozlarga har kuni{" "}
          </p>
        </div>
      </Slide>

      <div
        onClick={() => setIsModal(true)}
        className={`w-1/2 max-md:w-full cursor-pointer max-md:h-96 rounded-2xl ${ !isModal ? "relative" : ""}`}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "container",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1682455807124.png")`,
        }}
      >
        <span className="glightbox_video">
          <span className={"play-btn"} href="#"></span>
        </span>
        {isModal && (
          <div
            className="mx-auto w-screen h-screen absolute top-0 right-0 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsModal(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-2/3 max-md:w-full relative bg-black"
              onMouseEnter={() => {
                setVisible(true);
                console.log("enter");
              }}
              onMouseLeave={() => {
                setVisible(false);
                console.log("leave");
              }}
            >
              {visible && (
                <button
                  className="bg-red-600 w-16 h-16 absolute right-2 top-2 z-50 text-white font-bold text-xl rounded-full"
                  onClick={() => setIsModal(false)}
                >
                  X
                </button>
              )}
              <iframe
                width="100%"
                height="506"
                src="https://www.youtube.com/embed/G0zm9TybxpU"
                title="Firma uchun video"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
