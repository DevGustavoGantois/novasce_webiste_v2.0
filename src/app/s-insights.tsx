import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export function HomeInsights() {
  return (
    <section className="max-w-[1500px] mx-auto p-6 lg:p-0 mt-10 lg:mt-40">
      <div className="flex flex-col lg:flex-row lg: justify-between">
        <div className="flex justify-center lg:justify-start mb-8 lg:mb-16">
          <Image src="/TitleInsights.svg" width={600} height={200} alt="" />
        </div>
        <div className="flex justify-center lg:justify-start items-center gap-3 mt-3 mb-3 transition-all duration-700 group  cursor-pointer hover:text-petroleum_green">
          <span className="text-xl lg:text-2xl font-light text-deep_blue transition-all duration-700 group-hover:text-petroleum_green">
            VEJA MAIS
          </span>
          <FiArrowRight className="transition-all duration-700 group-hover:text-petroleum_green" />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row gap-6 lg:gap-12">
        <div className="p-6 md:p-8 lg:p-12 bg-bg-card-api bg-cover bg-center text-white rounded-lg w-full h-[250px] lg:h-[520px] relative">
          <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-lg p-4 rounded-b-lg">
            <Button variant="novasce_secondary">02/10/2024</Button>
            <p className="lg:text-start font-light mt-4 text-left flex-1">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-12 bg-bg-card-api bg-cover bg-center text-white rounded-lg w-full h-[250px] lg:h-[520px] relative">
          <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-lg p-4 rounded-b-lg">
            <Button variant="novasce_secondary">02/10/2024</Button>
            <p className="lg:text-start font-light mt-4 text-left flex-1">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-12 bg-bg-card-api bg-cover bg-center text-white rounded-lg w-full h-[250px] lg:h-[520px] relative">
          <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-lg p-4 rounded-b-lg">
            <Button variant="novasce_secondary">02/10/2024</Button>
            <p className="lg:text-start font-light mt-4 text-left flex-1">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
