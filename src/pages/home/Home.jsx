import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";

import { Hero } from "../../components/hero/Hero";
import { AboutUs } from "../../components/about_us/AboutUs";
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
      <div className="container w-[90%] mx-auto mb-20">
        <h1 className="text-secondary_color text-4xl font-bold mb-10 text-center">
          Tez-tez so'raladigan savollar
        </h1>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};
