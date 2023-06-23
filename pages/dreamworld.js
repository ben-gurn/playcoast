import React from 'react';

const DreamWorldPage = () => {
  return (
    <div className='bg-white'>
      <div
        className="relative bg-top bg-cover"
        style={{
          backgroundImage: "url('dreamworld/hero.jpg')",
          height: "40vh",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex flex-col items-center justify-evenly h-full text-center">
          <h1 className="text-7xl font-bold text-white mb-12">Dreamworld</h1>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-12">
      <section >
        <p className="font-bold mb-6">
          Step into the magical world of dreams and embark on an unforgettable adventure at Dreamworld. Located in Coomera, Gold Coast, this enchanting theme park offers a wide array of thrilling rides, captivating shows, and delightful attractions that will create lasting memories for visitors of all ages.
        </p>
        <p className="mb-6">
          Dreamworld is home to exhilarating roller coasters, such as the Big Drop and the Cyclone, that will get your adrenaline pumping. Dive into the world of DreamWorks Animation with attractions like Kung Fu Panda: Land of Awesomeness and Madagascar Madness. For a heartwarming experience, don&apos;t miss the Tiger Island show, where you can witness majestic tigers in action.
        </p>
        <p className="mb-6">
          Apart from the rides, Dreamworld presents captivating live shows and performances. Be sure to catch the captivating Illusion Magic Show and the dazzling High Dive Stunt Show, featuring talented performers showcasing their skills. The Dream Parade is a must-see spectacle, bringing beloved characters to life in a vibrant procession.
        </p>
        <p className="mb-6">
          For animal lovers, Dreamworld offers unique wildlife experiences. Explore the Australian Wildlife Experience, where you can encounter native animals such as kangaroos, koalas, and wombats. Get up close to adorable penguins at Penguin Encounter, or immerse yourself in the world of crocodiles at Crocodile Island.
        </p>
        <p className="mb-6">
          To make the most of your visit, plan your day ahead and check the show schedules to ensure you don&apos;t miss any of the incredible performances. Take time to explore themed areas like DreamWorks Experience and Gold Rush Country, where you can meet your favorite characters and indulge in delicious treats and snacks.
        </p>
        <p className="mb-6">
          Dreamworld also offers a variety of dining options, ranging from quick bites to full meals, catering to different tastes and preferences. Don&apos;t forget to explore the souvenir shops and take home cherished mementos of your Dreamworld adventure.
        </p>
        <p className="mb-6">
          Dreamworld is an immersive experience that guarantees a day filled with wonder and excitement. Whether you&apos;re seeking thrilling rides, captivating shows, or up-close animal encounters, this theme park promises a world of dreams brought to life.
        </p>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl mb-8">Tickets</h2>
          <ol className="list-decimal">
            <li className="mb-4">
              Single Day Entry: This ticket provides admission to Dreamworld for a single day. Visitors can enjoy all the rides, shows, and attractions within the park during operating hours.
            </li>
            <li className="mb-4">
              Multi-Day Pass: If you want to extend your visit and explore Dreamworld over multiple days, you can opt for a multi-day pass. These passes generally allow entry for a specified number of consecutive or non-consecutive days, giving you the flexibility to enjoy the park at your own pace.
            </li>
            <li className="mb-4">
              Annual Pass: An annual pass grants unlimited entry to Dreamworld for an entire year from the date of purchase. This option is perfect for frequent visitors or locals who want to experience the park multiple times throughout the year. Annual passholders often receive additional benefits, such as discounts on merchandise, food, and special events.
            </li>
            <li className="mb-4">
              VIP Experience: Dreamworld offers VIP experiences that provide an enhanced visit. These experiences may include behind-the-scenes tours, priority access to rides and shows, meet-and-greets with characters, and other exclusive perks. VIP experiences offer a more personalized and immersive visit to Dreamworld.
            </li>
          </ol>
          <p className="text-sm italic mt-4">
            Please note that ticket options, pricing, and availability are subject to change. It&apos;s advisable to check the official Dreamworld website or contact their customer service for the most up-to-date information. Additionally, keep an eye out for any special promotions, packages, or combination passes that may offer access to multiple parks or attractions in the area, allowing you to maximize your entertainment options.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl mb-8">How to Get There</h2>
          <ol className="list-decimal">
            <li className="mb-4">
              Public Bus: TransLink operates regular bus services that connect various locations to Dreamworld. Check the TransLink website or mobile app for the most up-to-date bus schedules and routes.
            </li>
            <li className="mb-4">
              Train and Bus Combination: Take the train to Coomera Station, then transfer to Bus Route XYZ, which provides direct service to Dreamworld. This option combines the convenience of the train with a bus connection.
            </li>
            <li className="mb-4">
              Taxi or Rideshare: Taxis and rideshare services like Uber or Ola are readily available in the area. Simply request a ride and provide the driver with the address of Dreamworld. This option offers convenience and direct transportation.
            </li>
            <li className="mb-4">
              Shuttle Service: Several companies provide shuttle services specifically catering to tourists traveling between major attractions like Dreamworld. These services usually require advance booking and offer round-trip transportation.
            </li>
            <li className="mb-4">
              Self-Drive: If you have access to a car, you can drive to Dreamworld. Follow the signs and directions to Pacific Motorway (M1) and take Exit XYZ to Dreamworld. On-site parking is available for free.
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.2526735511915!2d153.31048949678956!3d-27.863507599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9113e68399507d%3A0x4458ef1ca6e08d32!2sDreamworld!5e0!3m2!1sen!2sau!4v1687501115077!5m2!1sen!2sau"
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

export default DreamWorldPage;
