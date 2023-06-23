import React from 'react';

const WetnWildPage = () => {
  return (
    <div className="bg-white">
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('wetnwild/hero.jpg')",
          height: "40vh",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex flex-col items-center justify-evenly h-full text-center">
          <h1 className="text-7xl font-bold text-white mb-12">Wet &apos;n&apos; Wild</h1>
        </div>
      </div>

      <section className="w-4/5 mx-auto py-12">
        <p className="font-bold mb-6">
          Dive into a world of aquatic fun and excitement at Wet &apos;n&apos; Wild Gold Coast. Located in Oxenford, Gold Coast, this thrilling water park offers a wide range of slides, pools, and attractions that will make your visit unforgettable.
        </p>
        <p className="mb-6">
          Wet &apos;n&apos; Wild is the perfect destination for water lovers of all ages. Take on adrenaline-pumping slides like the Tornado, Blackhole, and Kamikaze, where you can experience thrilling drops and twists. Enjoy a relaxing float along the Calypso Beach or take a dip in the Giant Wave Pool, where you can experience the rush of the ocean right in the heart of the park.
        </p>
        <p className="mb-6">
          For younger visitors, Wet &apos;n&apos; Wild offers dedicated areas like Buccaneer Bay and Wet &apos;n&apos; Wild Junior, where they can splash around and have a blast. From interactive play structures to gentle slides and water sprays, there&apos;s plenty of fun for the whole family.
        </p>
        <p className="mb-6">
          Beyond the slides and pools, Wet &apos;n&apos; Wild also features exciting shows and entertainment. Catch the Dive &apos;n&apos; Movies, where you can enjoy a movie screening while floating in the wave pool. Don&apos;t miss the interactive live performances and character appearances that add an extra element of fun to your day.
        </p>
        <p className="mb-6">
          When it&apos;s time to refuel, Wet &apos;n&apos; Wild offers a variety of dining options, from casual eateries to snack kiosks. You can grab a quick bite or sit down for a satisfying meal to recharge your energy.
        </p>
        <p className="mb-6">
          To make the most of your visit, plan your day ahead and check the show schedules and ride wait times. Don&apos;t forget to bring sunscreen, towels, and swimwear. Locker rentals are available if you need a secure place to store your belongings.
        </p>
        <p className="mb-6">
          Wet &apos;n&apos; Wild Gold Coast promises a day of wet and wild fun for everyone. Whether you&apos;re seeking thrilling slides, relaxing pools, or family-friendly activities, this water park is the ultimate destination for aquatic adventures.
        </p>

      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl mb-8">Tickets</h2>
          <ol className="list-decimal">
            <li className="mb-4">
              Single Day Pass: This ticket provides admission to Wet &apos;n&apos; Wild for a single day. Visitors can enjoy unlimited access to all slides, pools, and attractions during operating hours.
            </li>
            <li className="mb-4">
              Season Pass: If you&apos;re a frequent visitor or planning multiple trips, the Season Pass offers unlimited entry to Wet &apos;n&apos; Wild throughout the season. With a Season Pass, you can come and go as often as you like and enjoy exclusive perks and discounts.
            </li>
            <li className="mb-4">
              VIP Experience: Enhance your visit with a VIP Experience, which includes skip-the-line access to slides and attractions, reserved seating, and additional benefits. The VIP Experience ensures a premium and hassle-free water park visit.
            </li>
          </ol>
          <p className="text-sm italic mt-4">
            Please note that ticket options, pricing, and availability are subject to change. It&apos;s advisable to check the official Wet &apos;n&apos; Wild website or contact their customer service for the most up-to-date information. Additionally, consider purchasing tickets online in advance to secure your spot and avoid queues on the day of your visit.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl mb-8">How to Get There</h2>
          <ol className="list-decimal">
            <li className="mb-4">
              Public Bus: TransLink operates regular bus services that connect various locations to Wet &apos;n&apos; Wild. Check the TransLink website or mobile app for the most up-to-date bus schedules and routes.
            </li>
            <li className="mb-4">
              Train and Bus Combination: Take the train to Helensvale Station, then transfer to Bus Route XYZ, which provides direct service to Wet &apos;n&apos; Wild. This option combines the convenience of the train with a bus connection.
            </li>
            <li className="mb-4">
              Taxi or Rideshare: Taxis and rideshare services like Uber or Ola are readily available in the area. Simply request a ride and provide the driver with the address of Wet &apos;n&apos; Wild. This option offers convenience and direct transportation.
            </li>
            <li className="mb-4">
              Self-Drive: If you have access to a car, you can drive to Wet &apos;n&apos; Wild. Follow the signs and directions to Pacific Motorway (M1) and take Exit XYZ to Wet &apos;n&apos; Wild. On-site parking is available for a fee.
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.6038984880292!2d153.3151787271161!3d-27.914126226064745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91112089f09671%3A0xa2515da1d2ba0149!2sWet&apos;n&apos;Wild%20Gold%20Coast!5e0!3m2!1sen!2sau!4v1687502271678!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          ></iframe>
      </div>
          </section>
    </div>
  );
};

export default WetnWildPage;
