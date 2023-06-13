import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-center bg-cover"
      style={{
        backgroundImage: "url('hero.jpg')",
        height: "40vh",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative flex flex-col items-center justify-evenly h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-12">Experience the Gold Coast!</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">
          Let&apos;s Play
        </button>
      </div>
    </div>
  );
};

export default Hero;
