import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeHero } from "./s-hero";
import { HomeInsights } from "./s-insights";
import { HomeProducts } from "./s-products";
import { HomeService } from "./s-services";

export default function Page() {
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
