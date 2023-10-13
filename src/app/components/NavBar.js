import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger menu icon and close icon

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="md:sticky top-0 z-50 flex items-center justify-between py-6 px-10 bg-white shadow-md">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/">
          <Image
            src="/playcoastLogo.png"
            alt="Play Coast Logo"
            width={250}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`md:flex ${mobileMenuOpen ? "block" : "hidden"} space-x-10 items-center`}>
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
