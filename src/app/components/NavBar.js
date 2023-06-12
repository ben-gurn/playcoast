// components/NavBar.js

import React from "react";
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-6 px-10 bg-white shadow-md">
      <div className="flex space-x-10">
        <Link href="/">
          <span className="cursor-pointer text-2xl font-bold">Play Coast</span>
        </Link>
        <Link href="/">
          <span className="cursor-pointer text-lg text-orange-500">Home</span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer text-lg text-gray-700">About</span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer text-lg text-gray-700">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
