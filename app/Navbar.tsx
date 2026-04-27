import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Logo Developers Code" 
              width={80} 
              height={80} 
              className="w-20 cursor-pointer"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-[#00023f]/80">
          <Link href="/#servicios" className="font-bold hover:text-[#f36523] transition-colors">
            Servicios
          </Link>
          <Link href="/portafolio" className="font-bold hover:text-[#f36523] transition-colors">
            Portafolio
          </Link>
          {/* <Link href="/sobre-nosotros" className="font-bold hover:text-[#f36523] transition-colors">
            Sobre Nosotros
          </Link> */}
          <Link href="/#proceso" className="font-bold hover:text-[#f36523] transition-colors">
            Proceso
          </Link>
        </div>

        <Link href="/contacto">
          <button className="bg-[#00023f] text-white px-6 py-2 rounded-full hover:bg-[#19a4b7] transition-colors">
            Contacto
          </button>
        </Link>
      </div>
    </nav>
  );
}