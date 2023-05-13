import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Hero } from "../../components/hero/Hero";
import { Accardion } from "../../components/faq/Accardion";
import { AboutUs } from "../../components/about_us/AboutUs";
import { ContactForm } from "../../components/contact_form/ContactForm";
import { ImageGallary } from "../../components/image_gallary/ImageGalary";
import { Products } from "../../components/products/Products";
import { Card } from "../../components/card/Card";
import { LeftArrow } from "../../assets/icons";

import { newsActions, UsersContext } from "../../context";
import { Partners } from "../../components/partners/Partners";

export const Home = () => {
  const { news, vacancys } = useContext(UsersContext);

  useEffect(() => {
    newsActions.getNews("news/all");
    newsActions.getNews("elon/all");
  }, []);

  return (
    <div>
      <Hero />
      <AboutUs />
      <ImageGallary />
    
      <div className="container w-[90%] mx-auto mb-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-secondary_color text-2xl md:text-4xl font-bold">
            O'rganmoqchi bo'lgan mavzuni tanlang
          </h1>
          <Link
            to={"news"}
            className="bg-primary_color py-2 px-6 rounded-md text-white flex items-center gap-2 max-md:hidden"
          >
            Barchasi{" "}
            <span>
              <LeftArrow />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-1 gap-6">
          {news.slice(0, 4).map((item) => (
            <Card
              className={""}
              key={item._id}
              imgSrc={item.photo}
              imgAlt={item.title_uz}
              title={item.title_uz}
              description={item.body_uz}
            />
          ))}
        </div>
        <Link
          to={"news"}
          className="bg-primary_color py-2 px-6 mt-7 text-center rounded-md text-white hidden items-center justify-center gap-2 max-md:flex"
        >
          <p className="gap-2 flex items-center">
            {" "}
            Barchasi{" "}
            <span>
              <LeftArrow />
            </span>
          </p>
        </Link>
      </div>

      <Products />

      <div className="container w-[90%] mx-auto mb-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-secondary_color text-2xl md:text-4xl font-bold">
            Vakansiyalar
          </h1>
          <Link
            to={"vacancies"}
            className="bg-primary_color py-2 px-6 rounded-md text-white flex items-center gap-2 max-md:hidden"
          >
            Barchasi{" "}
            <span>
              <LeftArrow />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {vacancys.slice(0, 3).map((item) => (
            <Card
              key={item._id}
              imgSrc={item.photo}
              imgAlt={item.title_uz}
              title={item.title_uz}
              description={item.body_uz}
            />
          ))}
        </div>
        <Link
          to={"vacancies"}
          className="bg-primary_color py-2 px-6 mt-7 text-center rounded-md text-white hidden items-center justify-center gap-2 max-md:flex"
        >
          <p className="gap-2 flex items-center">
            {" "}
            Barchasi{" "}
            <span>
              <LeftArrow />
            </span>
          </p>
        </Link>
      </div>

      <Accardion />
      <Partners />
      <ContactForm />
    </div>
  );
};
