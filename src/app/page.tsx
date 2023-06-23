// pages/index.js
import React from "react";
import Hero from "./components/Hero";
import ThemeParkSection from "./components/ThemeParkSection"
import ParkPasses from "./components/ParkPasses"

const HomePage = () => {

  return (
      <div className="bg-white">
        <Hero />
        <ThemeParkSection />
        <ParkPasses />

        <section className="bg-teal-400 py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
            <h2 className="text-3xl text-center font-bold tracking-normal text-white mb-6">
              YOUR HOME FOR GOLD COAST THEME PARKS
            </h2>
            <p className="text-lg text-white text-center leading-loose">
              Unlock endless fun and savings with Play Coast, your ticket to discounted prices on theme park adventures,
              allowing you to experience the thrill of world-class attractions without breaking the bank.
            </p>
          </div>
        </section>
      </div>
  );
};
HomePage.layoutProps = {
  title: "Play Coast",
  description: "Find the Best Deals for Gold Coast Theme Parks"
};


export default HomePage;
