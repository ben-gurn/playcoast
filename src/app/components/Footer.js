import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-black bg-slate-50 py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Theme Parks</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sea-world">Sea World</Link>
              </li>
              <li>
                <Link href="/movie-world">Movie World</Link>
              </li>
              <li>
                <Link href="/dreamworld">Dream World</Link>
              </li>
              <li>
                <Link href="wet-n-wild">Wet &apos;n&apos; Wild</Link>
              </li>
              <li>
                <Link href="whitewater-world">WhiteWater World</Link>
              </li>
              <li>
                <Link href="paradise-country">Paradise Country</Link>
              </li>
              <li>
                <Link href="tickets.playcoast.com.au">Tickets</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Park Passes</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#">Village Roadshow Theme Parks</Link>
              </li>
              <li>
                <Link href="#">Dreamworld, WhiteWater World & Skypoint</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Play Coast. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
