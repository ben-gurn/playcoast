import React from 'react';
import Image from 'next/image';

const ParkPasses = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-600 to-blue-500"
      style={{
        backgroundImage: "url('park-pass-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            Do it all with a multi-park pass
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/village-pass.png"
                alt="Village Roadshow Pass"
                className="w-full h-48 object-cover mb-4 rounded"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">
                Village Roadshow Theme Parks
              </h3>
              <p className="text-gray-700 mb-4">
                Unlock unlimited thrills and endless fun with the Multi Park
                Pass for Village Theme Parks Gold Coast, granting you access to
                multiple world-class attractions, including Movie World, Sea
                World and Wet&apos;n&apos;Wild, for the ultimate adventure-packed
                experience!
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">
                View Passes
              </button>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/dreamworld-pass.jpg"
                alt="DreamWorld Pass"
                className="w-full h-48 object-cover mb-4 rounded"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">
                Dreamworld, WhiteWater World &amp; Skypoint
              </h3>
              <p className="text-gray-700 mb-4">
                Double the fun and dive into a world of excitement with the
                Multi Park Pass for DreamWorld and WhiteWater World Gold Coast,
                granting you unlimited access to two premier theme parks, where
                thrilling rides, water slides, and unforgettable adventures
                await!
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">
                View Passes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkPasses;
