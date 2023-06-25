// pages/page.tsx
import React from "react";
import Hero from "../src/app/components/Hero";
import ThemeParkSection from "../src/app/components/ThemeParkSection"
import ParkPasses from "../src/app/components/ParkPasses"
import { scroller } from 'react-scroll';

// Import the Link and Element components from react-scroll
import { Link, Element } from "react-scroll";

const HomePage = () => {
  return (
    <div className="bg-white">
      
      <Hero />

      <Element name="gold-coast-theme-parks">
        <ThemeParkSection />
      </Element>

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

export default HomePage;
