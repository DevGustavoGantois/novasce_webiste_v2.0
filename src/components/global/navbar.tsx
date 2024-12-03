import Image from "next/image";
import { Button } from "../ui/button";
import { NavbarMobile } from "./navbar-mobile";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="max-w-[1440px] mx-auto p-6 lg:p-0 mt-10">
            <div className="hidden lg:flex justify-around items-center">
                <div data-aos="fade-right">
                    <Image src="/NovasceLogo.svg" width={250} height={300} alt="" />
                </div>
                <ul className="flex justify-center gap-12">
                <Link
                data-aos="fade-left"
            href="#Home"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
          data-aos="fade-left"
            href="#SobreNos"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Sobre Nós
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
          data-aos="fade-left"
            href="#Servicos"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Serviços
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
          data-aos="fade-left"
            href="#Produtos"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Produtos
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
          data-aos="fade-left"
            href="#Comunidade"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Comunidade
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
          data-aos="fade-left"
            href="#Carreira"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Carreira
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
                </ul>
                <div data-aos="fade-right">
                    <Button variant="novasce_outline">
                        <Link href="#Contato">Contato</Link>
                    </Button>
                </div>
            </div>
            <div className="flex lg:hidden">
                <NavbarMobile />
            </div>
        </header>
    )
}