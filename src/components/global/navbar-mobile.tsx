import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export function NavbarMobile() {
  return (
    <nav className="mb-20 flex justify-between items-center">
      {/*<div className="absolute top-8 left-3">
                <Image
                src="/NovasceLogo.svg"
                width={180}
                height={150}
                alt=""
                 />
            </div>*/}
      <Sheet>
        <SheetTrigger className="fixed top-6 right-0 backdrop-blur-2xl w-full bg-white/30 rounded-full p-3">
          <FaBars className="text-petroleum_green text-3xl transition-all duration-700 hover:scale-[1.1]" />
        </SheetTrigger>
        <SheetContent className="bg-white/90 pt-16">
          <SheetHeader className="mt-12 flex justify-center items-center">
            <SheetTitle>
              <Image src="/NovasceLogo.svg" width={200} height={200} alt="" />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center gap-6 mt-12">
            <SheetTitle>
              <Link
                href="#Home"
                className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </SheetTitle>
            <SheetTitle>
              <Link
                href="#SobreNos"
                className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group"
              >
                Sobre Nós
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </SheetTitle>
            <SheetTitle>
              <Link
                href="#Servicos"
                className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group"
              >
                Serviços
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </SheetTitle>
            <SheetTitle>
              <Link
                href="#Produtos"
                className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group"
              >
                Produtos
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </SheetTitle>
            <SheetTitle>
              <Link
                href="#Comunidade"
                className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group"
              >
                Comunidade
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </SheetTitle>
            <SheetTitle>
              <Link
                href="#Carreira"
                className="relative text-petroleum_green font-medium transition-all duration-500 ease-in-out group"
              >
                Carreira
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-petroleum_green transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </SheetTitle>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
