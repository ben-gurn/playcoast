import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import themeParksData from '../data/themeParks.json';

const ThemeParksSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {themeParksData.map((park, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300"
              style={{ width: '100%', maxWidth: '280px', margin: '10px auto' }}
            >
              <Image
                src={park.img}
                alt={park.title}
                className="w-full h-48 object-cover mb-4 rounded"
                width={500}
                height={300}
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2">{park.title}</h3>
                  <p className="mb-4 text-gray-700">{park.description}</p>
                </div>
                <div className="mt-auto">
                  <Link href={park.link}>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeParksSection;
