import { CarouselSlideHero } from "@/components/global/carousel/carousel-slide-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeHero() {
    return (
        <section className="bg-green-gradient mt-2 lg:mt-20" id="Home">
                <div className="max-w-[1440px] mx-auto h-full p-6 lg:p-0">
                <div className="flex justify-center items-center flex-col">
                   <div className="flex justify-center max-w-[850px] mt-0 lg:mt-32">
                   <h1 className="text-deep_blue text-3xl md:text-5xl lg:text-6xl font-bold text-center" data-aos="flip-up">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</h1>
                   </div>
                    <div className="mt-12 flex justify-center flex-col items-center">
                    <p className="text-center max-w-[500px] font-semibold text-sm md:text-base" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-12" data-aos="fade-up">
                        <Button variant="novasce">
                            <Link href="#Contato">Contato</Link>
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 lg:mt-60">
                <CarouselSlideHero />
            </div>
        </section>
    )
}