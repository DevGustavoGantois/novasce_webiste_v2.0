import { HomeHero } from "./s-hero";
import { HomeService } from "./s-services";

export default function Page() {
  return (
    <>
     <HomeHero /> 
      <HomeService />
      <div className="h-[300px]" />
    </>
  );
}
