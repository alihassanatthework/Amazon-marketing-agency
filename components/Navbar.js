import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-[#262626]">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/sellerova-logo.png"
            alt="Sellerova Logo"
            width={220}
            height={64}
            priority
            className="h-[60px] md:h-[68px] w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-8 md:gap-10 text-base md:text-[18px] text-gray-300">
          <Link href="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/services" className="hover:text-white transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}