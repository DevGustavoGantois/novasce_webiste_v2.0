import { CarouselSlideHero } from "@/components/global/carousel/carousel-slide-hero";
import { Button } from "@/components/ui/button";

export function HomeHero() {
    return (
        <section className="bg-green-gradient mt-20" id="Home">
                <div className="max-w-[1440px] mx-auto h-full p-6 lg:p-0">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-deep_blue text-3xl md:text-5xl lg:text-6xl font-bold text-center">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</h1>
                    <div className="mt-12 flex justify-center flex-col items-center">
                    <p className="text-center max-w-[500px] font-semibold text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-12">
                        <Button variant="novasce">Contato</Button>
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