import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Hero } from "../../components/hero/Hero";
import { Faq } from "../../components/faq/Faq";
import { AboutUs } from "../../components/about_us/AboutUs";
import { ContactForm } from "../../components/contact_form/ContactForm";
import { ImageGallary } from "../../components/image_gallary/ImageGalary";
import { Products } from "../../components/products/Products";
import { Card } from "../../components/card/Card";
import { LeftArrow } from "../../assets/icons";

import { newsActions, UsersContext } from "../../context";

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
          <h1 className="text-secondary_color text-4xl font-bold">
            O'rganmoqchi bo'lgan mavzuni tanlang
          </h1>
          <Link
            to={"news"}
            className="bg-primary_color py-2 px-6 rounded-md text-white flex items-center gap-2"
          >
            Barchasi{" "}
            <span>
              <LeftArrow />
            </span>
          </Link>
        </div>
        <div>
          {news.map((item) => (
            <Card
              className={"w-80"}
              key={item._id}
              imgSrc={item.photo}
              imgAlt={item.title_uz}
              title={item.title_uz}
              description={item.body_uz}
            />
          ))}
        </div>
      </div>
      <Products />
      <div className="container w-[90%] mx-auto mb-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-secondary_color text-4xl font-bold">
            Vakansiyalar
          </h1>
          <Link
            to={"vacancies"}
            className="bg-primary_color py-2 px-6 rounded-md text-white flex items-center gap-2"
          >
            Barchasi{" "}
            <span>
              <LeftArrow />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-3">
          {vacancys.map((item) => (
            <Card
              key={item._id}
              imgSrc={item.photo}
              imgAlt={item.title_uz}
              title={item.title_uz}
              description={item.body_uz}
            />
          ))}
        </div>
      </div>
      <Faq />
      <ContactForm />
    </div>
  );
};
