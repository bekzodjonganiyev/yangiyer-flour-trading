import React from "react";
import { AboutUs } from "../../components/about_us/AboutUs";
import Hero from "../../components/hero/Hero";
import { ImageGallary } from "../../components/image_gallary/ImageGalary";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ImageGallary />
    </div>
  );
};
