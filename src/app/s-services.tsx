import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function HomeService() {
  return (
    <section
      className="bg-white max-w-[1440px] mx-auto h-full p-6 lg:p-0 mt-10 lg:mt-40 cursor-pointer"
      id="Servicos"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex justify-start w-full lg:w-1/2">
          <Image src="/TitleService.svg" width={600} height={200} alt="" />
        </div>
        <div className="flex justify-end lg:w-1/2 text-center lg:text-end">
          <div className="flex items-center gap-4">
            <div className="backdrop-blur-2xl w-full bg-[#f5f5f5] rounded-full p-5 transition-all duration-700 hover:bg-petroleum_green hover:text-white hover:scale-[1.1]">
              <ArrowLeft className="text-petroleum_green transition-all duration-700 hover:text-white" />
            </div>
            <div className="backdrop-blur-2xl w-full bg-[#f5f5f5] rounded-full p-5 transition-all duration-700 hover:bg-petroleum_green hover:text-white hover:scale-[1.1]">
              <ArrowRight className="text-petroleum_green transition-all duration-700 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col justify-center lg:flex-row gap-8 lg:gap-16">
          <div className="group flex flex-col gap-8 p-4 lg:p-10 bg-petroleum_green rounded-2xl lg:h-[520px] w-full transition-all duration-700 hover:bg-deep_blue">
            <h1 className="text-white font-bold text-2xl lg:text-3xl mt-10 lg:mt-20 text-center group-hover:text-white">
              Websites
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-light text-sm lg:text-base text-white mt-2 lg:mt-8 group-hover:text-white lg:max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              <Link
                href="#"
                className="flex items-center text-white font-medium"
              >
                Saiba mais
                <FiArrowRight className="ml-2 text-lg" />
              </Link>
            </div>
          </div>
          <div className="group flex flex-col gap-8 p-4 lg:p-10 bg-petroleum_green rounded-2xl lg:h-[520px] w-full transition-all duration-700 hover:bg-deep_blue">
            <h1 className="text-white font-bold text-2xl lg:text-3xl mt-10 lg:mt-20 text-center group-hover:text-white">
              Aplicativos
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-light text-sm lg:text-base text-white mt-2 lg:mt-8 group-hover:text-white lg:max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              <Link
                href="#"
                className="flex items-center text-white font-medium"
              >
                Saiba mais
                <FiArrowRight className="ml-2 text-lg" />
              </Link>
            </div>
          </div>
          <div className="group flex flex-col gap-8 p-4 lg:p-10 bg-petroleum_green rounded-2xl lg:h-[520px] w-full transition-all duration-700 hover:bg-deep_blue">
            <h1 className="text-white font-bold text-2xl lg:text-3xl mt-10 lg:mt-20 text-center group-hover:text-white">
              Sistemas
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-light text-sm lg:text-base text-white mt-2 lg:mt-8 group-hover:text-white lg:max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              <Link
                href="#"
                className="flex items-center text-white font-medium"
              >
                Saiba mais
                <FiArrowRight className="ml-2 text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
