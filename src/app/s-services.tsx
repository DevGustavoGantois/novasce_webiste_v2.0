import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // Importando o ícone da seta

export function HomeService() {
  return (
    <section className="bg-white max-w-[1500px] mx-auto h-full p-6 lg:p-0 mt-10 lg:mt-20 cursor-pointer">
      <div className="flex justify-center lg:justify-start">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
          <div>
            <Image src="/TitleService.svg" width={600} height={200} alt="" />
          </div>
          <div className="text-center lg:text-end">
            Aqui ficará o carrosel
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col justify-center lg:flex-row gap-8 lg:gap-16">
    
          <div className="group flex flex-col gap-8 p-4 lg:p-10 bg-petroleum_green rounded-2xl lg:h-[450px] w-full transition-all duration-700 hover:bg-deep_blue">
            <h1 className="text-white font-bold text-2xl lg:text-3xl mt-10 lg:mt-20 text-center group-hover:text-white">
              Websites
            </h1>
            <div className="flex justify-center items-center">
            <p className="font-light text-sm lg:text-base text-white mt-2 lg:mt-8 group-hover:text-white lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
           
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 group-hover:text-white  transition-all duration-500">
              <Link href="#" className="flex items-center text-white font-medium">
                Saiba mais
                <FiArrowRight className="ml-2 text-lg" />
              </Link>
            </div>
          </div>

          <div className="group flex flex-col gap-8 p-4 lg:p-10 bg-petroleum_green rounded-2xl lg:h-[450px] w-full transition-all duration-700 hover:bg-deep_blue">
            <h1 className="text-white font-bold text-2xl lg:text-3xl mt-10 lg:mt-20 text-center group-hover:text-white">
              Aplicativos
            </h1>
            <div className="flex justify-center items-center">
            <p className="font-light text-sm lg:text-base text-white mt-2 lg:mt-8 group-hover:text-white lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              <Link href="#" className="flex items-center text-white font-medium">
                Saiba mais
                <FiArrowRight className="ml-2 text-lg" />
              </Link>
            </div>
          </div>
          <div className="group flex flex-col gap-8 p-4 lg:p-10 bg-petroleum_green rounded-2xl lg:h-[450px] w-full transition-all duration-700 hover:bg-deep_blue">
            <h1 className="text-white font-bold text-2xl lg:text-3xl mt-10 lg:mt-20 text-center group-hover:text-white">
              Sistemas
            </h1>
            <div className="flex justify-center items-center">
            <p className="font-light text-sm lg:text-base text-white mt-2 lg:mt-8 group-hover:text-white lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 group-hover:text-white  transition-all duration-500">
              <Link href="#" className="flex items-center text-white font-medium">
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
