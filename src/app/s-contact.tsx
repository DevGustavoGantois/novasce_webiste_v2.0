import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HomeContact() {
  return (
    <section className="p-6 lg:p-12 bg-petroleum_green mt-12 lg:mt-32" id="Contato">
      <div className="max-w-[1440px] mx-auto p-6 lg:p-0">
        <div className="flex flex-col justify-center gap-12">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col justify-center lg:justify-between lg:flex-row gap-12">
              <div className="bg-light_mint_green p-6 rounded-lg">
                <p className="tex-start text-deep_blue flex-1 font-semibold text-base lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim
                </p>
                <div className="mt-16 mb-16 flex justify-center items-center">
                  <Button variant="novasce_tertiary" className="p-8">
                    <Link href="#" target="_blank">
                      ENTRE EM CONTATO
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center items-center">
                <Button variant="blue_btn_novasce" className="p-6">
                  <Link href="" target="_blank">
                    discord
                  </Link>
                </Button>
                <Button variant="blue_btn_novasce" className="p-6">
                  <Link href="" target="_blank">
                    whatsapp
                  </Link>
                </Button>
                <Button variant="blue_btn_novasce" className="p-6">
                  <Link href="" target="_blank">
                    instagram
                  </Link>
                </Button>
                <Button variant="blue_btn_novasce" className="p-6">
                  <Link href="" target="_blank">
                    linkedin
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-center lg:justify-between lg:flex-row gap-6 lg:gap-24">
              <div className="flex flex-col gap-8 justify-start">
                <div className="mt-6 lg:mt-0">
                  <Image
                    src="/NovasceLogoWhite.svg"
                    width={300}
                    height={300}
                    alt="Logo Novasce Contact"
                  />
                </div>
                <ul className="flex flex-col justify-center items-center gap-4">
                  <Link
                    href="#Home"
                    className="text-md lg:text-xl text-white font-bold transition-transform duration-500 hover:scale-105 hover:underline"
                  >
                    Home
                  </Link>

                  <Link
                    href="#SobreNos"
                    className="text-md lg:text-xl text-white font-bold transition-transform duration-500 hover:scale-105 hover:underline"
                  >
                    Sobre Nós
                  </Link>

                  <Link
                    href="#Servicos"
                    className="text-md lg:text-xl text-white font-bold transition-transform duration-500 hover:scale-105 hover:underline"
                  >
                    Serviços
                  </Link>

                  <Link
                    href="#Produtos"
                    className="text-md lg:text-xl text-white font-bold transition-transform duration-500 hover:scale-105 hover:underline"
                  >
                    Produtos
                  </Link>

                  <Link
                    href="#Comunidade"
                    className="text-md lg:text-xl text-white font-bold transition-transform duration-500 hover:scale-105 hover:underline"
                  >
                    Comunidade
                  </Link>

                  <Link
                    href="#Carreiras"
                    className="text-md lg:text-xl text-white font-bold transition-transform duration-500 hover:scale-105 hover:underline"
                  >
                    Carreiras
                  </Link>
                </ul>
              </div>
              <div className="bg-light_mint_green p-6 rounded-lg">
                <p className="tex-start text-deep_blue flex-1 font-semibold text-base lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim
                </p>
                <div className="mt-16 mb-16 flex justify-center items-center">
                  <Button variant="novasce_tertiary" className="p-8">
                    <Link
                      href=""
                      target="_blank"
                    >
                     ACESSE NOSSAS VAGAS!
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
