import { HomeHero } from "./s-hero";
import { HomeInsights } from "./s-insights";
import { HomeProducts } from "./s-products";
import { HomeService } from "./s-services";

export default function Page() {
  return (
    <>
      <HomeHero /> 
      <HomeService />
      <HomeProducts />
      <HomeInsights />
      <div className="h-[300px]" />
    </>
  );
}
