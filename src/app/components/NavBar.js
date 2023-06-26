import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex flex-col lg:flex-row items-center justify-between py-6 px-10 bg-white shadow-md">
      <div className="cursor-pointer w-60 sm:w-64 md:w-72 lg:w-80 mb-6 lg:mb-0">
        <Link href="/">
          <Image
            src="/playcoastLogo.png"
            alt="Play Coast Logo"
            width={500}
            height={100}
            layout="intrinsic"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-center lg:justify-start space-x-10 items-center">
        <Link href="/">
          <span className={`cursor-pointer text-lg hover:text-orange-500 ${pathname === '/' ? 'text-orange-500' : 'text-gray-700'}`}>Home</span>
        </Link>
        <Link href="/about">
          <span className={`cursor-pointer text-lg hover:text-orange-500 ${pathname === '/about' ? 'text-orange-500' : 'text-gray-700'}`}>About</span>
        </Link>
        <Link href="/contact">
          <span className={`cursor-pointer text-lg hover:text-orange-500 ${pathname === '/contact' ? 'text-orange-500' : 'text-gray-700'}`}>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
