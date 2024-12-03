import Link from "next/link";

export function HomeAbout() {
    return (
        <section className="bg-petroleum_green p-6 pt-16 mb-20">
            <div className="max-w-[1440px] mx-auto p-6 lg:p-0" data-aos="fade-up">
                <div className="flex flex-col gap-8">
                <h1 className="uppercase text-white font-bold text-3xl" data-aos="fade-down">SOBRE NÓS</h1>
                <div className="max-w-[800px] flex justify-center lg:justify-start">
                <p className="text-white text-light text-sm md:text-base" data-aos="fade-down" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <button className="rounded-2xl text-center p-2 bg-[#102032] w-[300px] lg:w-[350px] text-white font-medium text-xl transition-all duration-700 cursor-pointer hover:scale-[1.1] hover:shadow-lg">
                <Link href="#">Saiba mais</Link>
                </button>
                </div>
                <div className="mt-10 lg:mt-20">
                    <h1 className="uppercase text-white font-bold text-3xl mb-4" data-aos="fade-up">VALORES</h1>
                    <div className="max-w-[800px] flex justify-center lg:justify-start">
                <p className="text-white text-light text-sm md:text-base" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                </div>
            </div>
        </section>
    )
}