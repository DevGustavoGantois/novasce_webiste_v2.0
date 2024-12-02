import Image from "next/image";
import { Button } from "../ui/button";
import { NavbarMobile } from "./navbar-mobile";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="max-w-[1440px] mx-auto p-6 lg:p-0 mt-10">
            <div className="hidden lg:flex justify-around items-center">
                <div>
                    <Image src="/NovasceLogo.svg" width={250} height={300} alt="" />
                </div>
                <ul className="flex justify-center gap-12">
                <Link
            href="#Home"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            href="#SobreNos"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Sobre Nós
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            href="#Servicos"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Serviços
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            href="#Produtos"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Produtos
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            href="#Comunidade"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Comunidade
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            href="#Carreira"
            className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group">
            Carreira
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
                </ul>
                <div>
                    <Button variant="novasce_outline">
                        <Link href="#Contato">Contato</Link>
                    </Button>
                </div>
            </div>
            <div className="flex md:hidden">
                <NavbarMobile />
            </div>
        </header>
    )
}