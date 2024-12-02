import { HomeHero } from "./s-hero";
import { HomeInsights } from "./s-insights";
import { HomeService } from "./s-services";

export default function Page() {
  return (
    <>
     <HomeHero /> 
      <HomeService />
      <HomeInsights />
      <div className="h-[300px]" />
    </>
  );
}
