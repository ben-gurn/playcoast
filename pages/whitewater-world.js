import React from 'react';
import Head from 'next/head';

const WhiteWaterWorldPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Play Coast - WhiteWater World, Gold Coast</title>
      </Head>
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('/whitewaterworld/hero.jpg')",
          height: "40vh",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex flex-col items-center justify-evenly h-full text-center">
          <h1 className="text-7xl font-bold text-white mb-12">WhiteWater World</h1>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-12">
        <section>
          <p className="font-bold mb-6">
            Dive into a world of aquatic adventures and refreshing fun at WhiteWater World. Located in Coomera, Gold Coast, this water park offers a thrilling and immersive experience for visitors of all ages.
          </p>
          <p className="mb-6">
            WhiteWater World features a variety of exhilarating water slides and attractions that will make a splash. From heart-pounding drops to twisting turns, you&apos;ll find slides that cater to every level of thrill-seeker. Don&apos;t miss iconic slides like The Wedgie, The Green Room, and Super Tubes Hydrocoaster.
          </p>
          <p className="mb-6">
            For those looking for a more relaxed experience, WhiteWater World offers tranquil pools and lazy rivers where you can unwind and soak up the sun. Take a leisurely float along the Cave of Waves or enjoy the calming waters of The Little Rippers.
          </p>
          <p className="mb-6">
            Families with young children can enjoy dedicated play areas like Wiggle Bay and Pipeline Plunge, featuring interactive water play structures, shallow pools, and mini slides. These areas are perfect for little ones to splash around and have a blast.
          </p>
          <p className="mb-6">
            WhiteWater World also offers dining options to satisfy your hunger and keep you energized throughout the day. From quick bites to delicious meals, there&apos;s something for everyone&apos;s taste buds. Don&apos;t forget to explore the merchandise stores for souvenirs and water park essentials.
          </p>
          <p className="mb-6">
            Whether you&apos;re seeking adrenaline-pumping slides or a relaxing day by the water, WhiteWater World promises a wet and wild adventure that will create lasting memories.
          </p>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-4xl mb-8">Tickets</h2>
            <ol className="list-decimal">
              <li className="mb-4">
                Single Day Pass: This ticket provides admission to WhiteWater World for a single day. Visitors can enjoy unlimited access to all slides and attractions during operating hours.
              </li>
              <li className="mb-4">
                Season Pass: If you plan to visit WhiteWater World multiple times throughout the season, a Season Pass offers unlimited entry. With a Season Pass, you can make a splash whenever you like and take advantage of exclusive benefits.
              </li>
            </ol>
            <p className="text-sm italic mt-4">
              Please note that ticket options, pricing, and availability may vary. It&apos;s advisable to check the official WhiteWater World website or contact their customer service for the most up-to-date information. Additionally, consider checking for any special promotions or packages that may provide additional value and enhance your water park experience.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-4xl mb-8">How to Get There</h2>
            <ol className="list-decimal">
              <li className="mb-4">
                Public Bus: TransLink operates regular bus services that connect various locations to WhiteWater World. Check the TransLink website or mobile app for the most up-to-date bus schedules and routes.
              </li>
              <li className="mb-4">
                Train and Bus Combination: Take the train to Coomera Station, then transfer to Bus Route TX7, which provides direct service to WhiteWater World. This option combines the convenience of the train with a bus connection.
              </li>
              <li className="mb-4">
                Taxi or Rideshare: Taxis and rideshare services like Uber or Ola are readily available in the area. Simply request a ride and provide the driver with the address of WhiteWater World. This option offers convenience and direct transportation.
              </li>
              <li className="mb-4">
                Shuttle Service: Several companies provide shuttle services specifically catering to tourists traveling between major attractions like WhiteWater World. These services usually require advance booking and offer round-trip transportation.
              </li>
              <li className="mb-4">
                Self-Drive: If you have access to a car, you can drive to WhiteWater World. Follow the signs and directions to Pacific Motorway (M1) and take Exit 54 to WhiteWater World. On-site parking is available for free.
              </li>
            </ol>
            <p>
              When planning your trip, consider factors such as cost, convenience, and the number of people in your group to choose the transportation option that best suits your needs. It&apos;s recommended to check the latest schedules, routes, and availability of each option for a smooth and enjoyable journey.
            </p>
          </div>
        </section>

        <div className="map-container py-10">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.2169214121373!2d153.30948189332952!3d-27.864606114450147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9113e6bb744be7%3A0x8818005423016ac!2sWhiteWater%20World!5e0!3m2!1sen!2sau!4v1687502519615!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhiteWaterWorldPage;
