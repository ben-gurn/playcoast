import React from 'react';

const ParadiseCountryPage = () => {
  return (
    <div className="bg-white">
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('paradisecountry/hero.jpg')",
          height: "40vh",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex flex-col items-center justify-evenly h-full text-center">
          <h1 className="text-7xl font-bold text-white mb-12">Paradise Country</h1>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-12">
        <section>
          <p className="font-bold mb-6">
            Immerse yourself in the rustic charm of Australian farm life at Paradise Country. Located in Oxenford, Gold Coast, this unique attraction offers an authentic outback experience that showcases Australian wildlife, farm activities, and cultural heritage.
          </p>
          <p className="mb-6">
            Paradise Country allows you to interact with a wide range of animals, including kangaroos, koalas, and farmyard friends. Feed kangaroos and wallabies, cuddle a koala for a memorable photo, or learn about farm animals through interactive experiences and demonstrations.
          </p>
          <p className="mb-6">
            Experience the thrill of sheep shearing and watch skilled stockmen and women showcase their whip-cracking and boomerang-throwing skills. Enjoy live shows that highlight Australian traditions, such as the Stockman and Sheep Dog Show, where you can witness the incredible bond between stockmen and their loyal working dogs.
          </p>
          <p className="mb-6">
            Paradise Country also offers unique dining options that celebrate Australian cuisine. Indulge in a traditional Aussie barbecue, savor billy tea and damper, or enjoy a hearty meal at the Farmhouse Restaurant. Don&apos;t forget to explore the gift shop for souvenirs and Australian-made products.
          </p>
          <p className="mb-6">
            Whether you&apos;re seeking hands-on animal encounters, cultural experiences, or simply a taste of the Australian outback, Paradise Country delivers a memorable and educational adventure for visitors of all ages.
          </p>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-4xl mb-8">Tickets</h2>
            <p className="mb-6">
              Paradise Country offers various ticket options to suit different preferences and interests. Some of the available tickets include:
            </p>
            <ol className="list-decimal">
              <li className="mb-4">
                General Admission: This ticket provides entry to Paradise Country, allowing you to explore the farm and enjoy the scheduled shows and demonstrations.
              </li>
              <li className="mb-4">
                Koala Experience: Enhance your visit with a Koala Experience ticket, which includes a cuddle and photo opportunity with a koala, as well as access to the farm and shows.
              </li>
              <li className="mb-4">
                VIP Farm Tour: For a more immersive experience, consider the VIP Farm Tour ticket. This guided tour offers behind-the-scenes access, up-close animal encounters, and the opportunity to learn about farm operations and Australian wildlife conservation efforts.
              </li>
            </ol>
            <p className="text-sm italic mt-4">
              Please note that ticket options, pricing, and availability may vary. It&apos;s recommended to check the official Paradise Country website or contact their customer service for the most up-to-date information and to book tickets in advance.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-4xl mb-8">How to Get There</h2>
            <ol className="list-decimal">
              <li className="mb-4">
                Public Bus: TransLink operates regular bus services that connect various locations to Paradise Country. Check the TransLink website or mobile app for the most up-to-date bus schedules and routes.
              </li>
              <li className="mb-4">
                Train and Bus Combination: Take the train to Helensvale Station, then transfer to Bus Route 745, which provides direct service to Paradise Country. This option combines the convenience of the train with a bus connection.
              </li>
              <li className="mb-4">
                Taxi or Rideshare: Taxis and rideshare services like Uber or Ola are readily available in the area. Simply request a ride and provide the driver with the address of Paradise Country. This option offers convenience and direct transportation.
              </li>
              <li className="mb-4">
                Self-Drive: If you have access to a car, you can drive to Paradise Country. Follow the signs and directions to Pacific Motorway (M1) and take Exit XYZ to Paradise Country. On-site parking is available for free.
              </li>
            </ol>
            <p>
              When planning your visit, consider factors such as transportation options, travel time, and the number of people in your group to choose the option that best suits your needs. It&apos;s recommended to check the latest schedules, routes, and availability of each option for a smooth and enjoyable journey.
            </p>
          </div>
        </section>

        <div className="map-container py-10">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.6413988225104!2d153.302246277116!3d-27.912975876065307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9111213d3cc993%3A0xf9c0a6ae9cdc375f!2sParadise%20Country!5e0!3m2!1sen!2sau!4v1687502843699!5m2!1sen!2sau"
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

export default ParadiseCountryPage;
