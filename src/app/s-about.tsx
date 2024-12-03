'use client';
import Link from "next/link";
import { motion } from 'framer-motion';
import { useState } from "react";

const cardInteractionsData = [
        {
            number: '01',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            number: '02',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            number: '03',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            number: '04',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',        
        }
]

export function HomeAbout() {
    const [ index ,setIndex] = useState(0);
    return (
        <section className="bg-petroleum_green p-6 pt-16 mb-20 ">
            <div className="max-w-[1440px] mx-auto p-6 lg:p-0" data-aos="fade-up">
                <div className="flex flex-col gap-8">
                    <h1 className="uppercase text-white font-bold text-3xl" data-aos="fade-down">SOBRE NÓS</h1>
                    <div className="max-w-[800px] flex justify-center lg:justify-start">
                        <p className="text-white text-light text-sm md:text-base" data-aos="fade-down" data-aos-delay="200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
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
            <div className="hidden lg:flex lg:flex-col lg:gap-12 lg:mt-12">
                {[1, 2, 3, 4].map((_, i) => (
                    <motion.div
                        key={i}
                        onViewportEnter={() => setIndex(index)}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className={`lg:w-[450px] h-[520px] flex items-center p-6 lg:p-24 bg-deep_blue rounded-2xl 
                            ${i % 2 === 0 ? 'self-end' : 'self-start'}`}
                    >
                        <div className="w-full">
                            <h1 className="mb-4 text-3xl font-bold text-white">{`0${i + 1}`}</h1>
                            <h2 className="text-white text-2xl font-bold mb-4">Lorem Ipsum</h2>
                            <p className="text-white text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden"> 
                {cardInteractionsData.map((item, index) => {
                    return (
                        <div className="lg:w-[450px] h-[520px] flex items-center flex-col justify-center p-6 lg:p-24 bg-deep_blue rounded-2xl" key={index} data-aos="fade-up">
                            <h1 className="mb-4 text-3xl font-bold text-white">{item.number}</h1>
                            <h2 className="text-white text-2xl font-bold mb-4">{item.title}</h2>
                            <p className="text-white text-base text-center max-w-[500px]">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
