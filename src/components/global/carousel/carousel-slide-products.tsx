import Image from "next/image";

export function CarouselSlideProducts() {
  return (
    <div className="flex w-full h-full overflow-hidden p-6 lg:p-12 bg-[#c9e5df]">
      <div className="animate-slideCarousel flex gap-32 whitespace-nowrap p-4">
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
        <Image
          src="/NovasceLogo.svg"
          width={250}
          height={300}
          quality={100}
          alt=""
        />
      </div>
    </div>
  );
}
