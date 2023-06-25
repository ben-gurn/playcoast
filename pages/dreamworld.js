import React from 'react';

const DreamWorldPage = () => {
  return (
    <div className='bg-white'>
      <div
        className="relative bg-top bg-cover"
        style={{
          backgroundImage: "url('/dreamworld/hero.jpg')",
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
      <section>
  <p className="font-bold mb-6">
    Welcome to Dreamworld, the premier location for thrill-seekers and fun-lovers on the Gold Coast in Queensland, Australia. Prepare to enter a realm of dreams and embark on a journey you won&apos;t forget, filled with exciting rides, mesmerizing shows, and delightful attractions for all ages.
  </p>
  <p className="mb-6">
    Boasting over 40 rides and attractions, Dreamworld stands as Australia&apos;s biggest theme park. Feel the rush of adrenaline on heart-stopping roller coasters like The Claw and Pandamonium, or mingle with your beloved DreamWorks Animation characters in attractions such as Kung Fu Panda: Land of Awesomeness and Madagascar Madness. The Tiger Island show is a must-see, where the majesty of tigers will leave you spellbound.
  </p>
  <p className="mb-6">
    Dreamworld also hosts a variety of enthralling live shows and performances. Be astounded by the Illusion Magic Show and the spectacular High Dive Stunt Show, where skilled performers display their talents. Don&apos;t miss the Dream Parade, a colorful spectacle that brings your favorite characters to life.
  </p>
  <p className="mb-6">
    For wildlife enthusiasts, Dreamworld offers unique encounters with animals. Venture into the Australian Wildlife Experience and meet native animals like kangaroos, koalas, and wombats. Visit Penguin Encounter for a close-up view of charming penguins or delve into the world of crocodiles at Crocodile Island.
  </p>
  <p className="mb-6">
    Plan your day in advance and check the show schedules to maximize your visit. Take the opportunity to explore themed areas like DreamWorks Experience, ABC Kids World, and Tiger Island, where you can interact with your favorite characters and enjoy tasty treats and snacks.
  </p>
  <p className="mb-6">
    Dreamworld provides a range of dining options, from quick snacks to full meals, catering to various tastes and preferences. Make sure to visit the souvenir shops and bring home treasured keepsakes of your Dreamworld adventure.
  </p>
  <p className="mb-6">
    Dreamworld is an immersive experience that promises a day filled with awe and excitement. Whether you&apos;re in search of thrilling rides, captivating shows, or intimate animal encounters, this theme park is sure to make your dreams come true.
  </p>
</section>
<section className="py-12">
  <div className="container">
    <h2 className="text-4xl mb-8">Tickets</h2>
    <ol className="list-decimal">
      <li className="mb-4">
        Single Day Entry: This ticket grants access to Dreamworld for one day. Visitors can enjoy all the rides, shows, and attractions within the park during operating hours.
      </li>
      <li className="mb-4">
        Multi-Day Pass: If you wish to extend your adventure and explore Dreamworld over several days, consider a multi-day pass. These passes typically allow entry for a certain number of consecutive or non-consecutive days, giving you the freedom to enjoy the park at your leisure.
        </li>
      <li className="mb-4">
        Annual Pass: An annual pass provides unlimited access to Dreamworld for a whole year from the date of purchase. It&apos;s an ideal choice for regular visitors or locals who wish to visit the park multiple times throughout the year. Annual passholders often enjoy additional perks, such as discounts on merchandise, food, and special events.
      </li>
      <li className="mb-4">
        VIP Experience: Dreamworld offers VIP experiences for a more enhanced visit. These experiences may include behind-the-scenes tours, priority access to rides and shows, meet-and-greets with characters, and other exclusive benefits. VIP experiences promise a more personalized and immersive visit to Dreamworld.
      </li>
    </ol>
    <p className="text-sm italic mt-4">
      Please be aware that ticket options, pricing, and availability may change. It&apos;s recommended to check the official Dreamworld website or contact their customer service for the most current information. Also, look out for any special promotions, packages, or combination passes that may provide access to multiple parks or attractions in the area, allowing you to maximize your entertainment options.
    </p>
  </div>
</section>

<section className="py-12">
  <div className="container">
    <h2 className="text-4xl mb-8">How to Get There</h2>
    <ol className="list-decimal">
      <li className="mb-4">
        Public Bus: Dreamworld on the Gold Coast is easily accessible by public transportation. It&apos;s an official Translink bus stop and served by Surfside Buslines. The convenient TX7 theme park service connects Helensvale Station to Coomera Station, with a stop at Dreamworld. 
      </li>
      <li className="mb-4">
        Train and Bus Combination: You can take the train to Coomera Station, then transfer to bus TX7, which provides direct service to Dreamworld. This option combines the convenience of train travel with a bus connection.
      </li>
      <li className="mb-4">
        Taxi or Rideshare: Taxis and rideshare services like Uber or Ola are easily available in the area. Simply request a ride and provide the driver with the address of Dreamworld for a convenient and direct trip.
      </li>
      <li className="mb-4">
        Shuttle Service: Various companies offer shuttle services for tourists traveling between major attractions like Dreamworld. These services usually require advance booking and provide round-trip transportation.
      </li>
      <li className="mb-4">
        Self-Drive: If you have a car, you can drive to Dreamworld. Follow the signs and directions to Pacific Motorway (M1) and take exit 54 to reach Dreamworld. Free on-site parking is available.
      </li>
    </ol>
    <p>
      When planning your trip, consider factors such as cost, convenience, and the number of people in your group to choose the transportation option that best suits your needs. It&apos;s recommended to check the latest schedules, routes, and availability of each option for a smooth and enjoyable journey.
    </p>
  </div>
</section>
  </div>


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
      
    
  );
};

export default DreamWorldPage;
