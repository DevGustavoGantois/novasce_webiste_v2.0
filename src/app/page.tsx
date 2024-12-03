'use client';
import { useEffect } from "react";
import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeHero } from "./s-hero";
import { HomeInsights } from "./s-insights";
import { HomeProducts } from "./s-products";
import { HomeService } from "./s-services";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 950
    })
  }, [])

  return (
    <>
      <HomeHero /> 
      <HomeAbout />
      <HomeService />
      <HomeProducts />
      <HomeInsights />
      <HomeContact />
    </>
  );
}
