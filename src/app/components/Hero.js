// components/Hero.js

import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-center bg-cover  h-screen" style={{backgroundImage: "url('hero.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative flex items-center justify-center h-full text-center">
        <h1 className="text-4xl font-bold text-white">Experience the Gold Coast!</h1>
      </div>
    </div>
  );
};

export default Hero;
