'use client'

import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-6 px-10 bg-white shadow-md">
      <div className="flex space-x-10 items-center">
        <Link href="/">
          <Image
            src="/playcoastLogo.png"
            alt="Play Coast Logo"
            width={250}
            height={50}
            className="cursor-pointer"
          />
        </Link>
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
