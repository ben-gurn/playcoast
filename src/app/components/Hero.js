import React from "react";
import { Link, Element } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="relative bg-center bg-cover"
      style={{
        backgroundImage: "url('homepage/hero.jpg')",
        height: "50vh",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative flex flex-col items-center justify-evenly h-full text-center">
        <h1 className="text-5xl font-bold text-white mb-12">Experience the Gold Coast!</h1>
        <Link className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200"
        to="gold-coast-theme-parks"
        smooth={true}
        duration={500}
      >
        Let&apos;s Play
      </Link>
      </div>
    </div>
  );
};

export default Hero;
