import { CarouselSlideProducts } from "@/components/global/carousel/carousel-slide-products";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function HomeProducts() {
    return (
        <section id="Produtos" className="overflow-hidden">
            <div className="max-w-[1440px] mx-auto p-6 lg:p-0 mt-20 lg:mt-40">
            <div className="flex justify-center lg:justify-start mt-10 lg:mt-20 mb-10 lg:mb-20" data-aos="fade-down">
                <Image src="/TitleProducts.svg" width={600} height={300} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
                    <Image src="/LogoSOPEC.svg" width={450} height={300} alt="" data-aos="fade-right" />
                    <div className="p-6 lg:p-12 bg-light_mint_green md:flex-1 rounded-lg md:h-[420px]">
                        <h1 className="text-3xl lg:text-5xl text-deep_blue uppercase font-extrabold">SOPEC</h1>
                        <p className="mt-14 text-deep_blue font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <div className="mt-5 lg:mt-10 flex items-center gap-4">
                            <Link href="#" className="text-deep_blue transition-all duration-700 hover:border-b hover:border-deep_blue hover:scale-[1.1]" >Saiba mais</Link>
                            <FiArrowRight className="transition-all duration-700 group-hover:text-petroleum_green" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:flex-row-reverse justify-center items-center">
                    <Image src="/LogoRiseTec.svg" width={450} height={600} alt="" data-aos="fade-left" />
                    <div className="p-6 lg:p-12 bg-light_mint_green md:flex-1 rounded-lg md:h-[420px]">
                        <h1 className="text-3xl lg:text-5xl text-deep_blue uppercase font-extrabold">SOPEC</h1>
                        <p className="mt-14 text-deep_blue font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <div className="mt-5 lg:mt-10 flex items-center gap-4">
                            <Link href="#" className="text-deep_blue transition-all duration-700 hover:border-b hover:border-deep_blue hover:scale-[1.1]">Saiba mais</Link>
                            <FiArrowRight className="transition-all duration-700 group-hover:text-petroleum_green" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="mt-32 mb-32">
                <CarouselSlideProducts />
            </div>
        </section>
    )
}