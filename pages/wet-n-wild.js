import React from 'react';
import Head from 'next/head';

const WetnWildPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Play Coast - Wet&apos;n&apos;Wild, Gold Coast</title>
      </Head>
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('/wetnwild/hero.jpg')",
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

    <div className = "w-4/5 mx-auto py-12">
      <section>
  <p className="font-bold mb-6">
    Welcome to Wet&apos;n&apos;Wild Gold Coast, Australia&apos;s premier water park where summer never ends. Enjoy a day filled with excitement, as you explore an incredible selection of pools and slides designed for both thrill-seekers and little adventurers.
  </p>
  <p className="mb-6">
    Wet&apos;n&apos;Wild Gold Coast features some of the largest and most thrilling water slides in the country. Experience the exhilaration of classics like the Aqualoop, Kamikaze, and Mammoth Falls. Whether you prefer heart-pounding adventures or a more relaxed pace, there&apos;s something for everyone.
  </p>
  <p className="mb-6">
    But Wet&apos;n&apos;Wild isn&apos;t just about the slides. Unwind in a comfortable cabana, savor a variety of dining options, and make use of the Village Roadshow Theme Parks App to navigate the park effortlessly. With this app, you can check ride wait times and make the most of your visit.
  </p>
  <p className="mb-6">
    Wet&apos;n&apos;Wild Gold Coast is conveniently situated on the Pacific Highway, offering easy access from various locations on the Gold Coast. Whether you&apos;re in Brisbane, Surfers Paradise, or anywhere else on the Gold Coast, it&apos;s the ultimate destination for your next thrilling day out!
  </p>
</section>
<section className="py-12">

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
        Train and Bus Combination: If you&apos;re traveling from Brisbane, start by taking the train to Coomera station. From there, you can transfer to bus route TX7, which will conveniently transport you to Wet&apos;n&apos;Wild Gold Coast. This option is also available from other locations on the Gold Coast. Simply take a train or bus to Coomera station and transfer to bus route TX7.
      </li>
      <li className="mb-4">
        Public Transport: Explore the Gold Coast using TransLink&apos;s integrated bus, train, and tram network. From various locations on the Gold Coast, you can reach Wet&apos;n&apos;Wild Gold Coast by catching a tram, bus, or train to Helensvale station. From Helensvale, transfer to bus route TX7, which will take you directly to the water park.
      </li>
      <li className="mb-4">
        Taxi or Rideshare: If you prefer a more convenient and direct transportation option, taxis and rideshare services like Uber or Ola are readily available in the area. Simply request a ride and provide the driver with the address of Wet&apos;n&apos;Wild Gold Coast.
      </li>
      <li className="mb-4">
        Self-Drive: For those with access to a car, you can easily reach Wet&apos;n&apos;Wild Gold Coast by driving. The park is located on the Pacific Motorway in Oxenford, Gold Coast, Queensland 4210, Australia.
      </li>
    </ol>
    <p>
      When planning your trip, consider factors such as cost, convenience, and the size of your group to choose the transportation option that best suits your needs. It&apos;s recommended to check the latest schedules, routes, and availability of each option for a smooth and enjoyable journey.
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
    </div>
  );
};

export default WetnWildPage;
