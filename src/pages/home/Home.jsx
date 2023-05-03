import React from "react";


import { AboutUs } from "../../components/about_us";
import { Gallary } from "../../components/gallary/Gallary";

import { Products } from "../../components/products";

import { Partners } from '../../components/partners'
import {ContactUs} from '../contact_us/ContactUs'

import { useAppContext } from "../../context/app.contex";
import BannerVideo from "../../components/bannerVideo/BannerVideo";
import { Carusel } from "../../components/slider/Carusel";

export const Home = () => {
  console.log("Home");
  const { colors } = useAppContext();

  return (
    <div>
     <Carusel />
     {/* <BannerVideo /> */}
      <AboutUs />
    
      <Products />
      
      
     
    
      <Gallary />
      <Partners />
      <ContactUs />
    </div>
  );
};
