import React from "react";
import { Helmet } from "react-helmet-async";

import { AboutUs } from "../../components/about_us";
import { Gallary } from "../../components/gallary/Gallary";
import { LidershipCard } from "../../components/lidership_card/LidershipCard";
import { Products } from "../../components/products";
import { Carusel } from "../../components/slider";
import { Statistics } from "../../components/statistics/Statistics";
import { Partners } from '../../components/partners'
import {ContactUs} from '../contact_us/ContactUs'

import { useAppContext } from "../../context/app.contex";

export const Home = () => {
  const { colors } = useAppContext();

  return (
    <div>  
      <Helmet>
        <title>Yangiyerflourtrading - Home</title>
      </Helmet>
      <Carusel />
      <AboutUs />
      <Products />
      <Statistics />
      <Gallary />
      <Partners />
      <ContactUs />
    </div>
  );
};
