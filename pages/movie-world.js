import React from 'react';

const MovieWorldPage = () => {
  return (
    <div className='bg-white'>
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: "url('movieworld/hero.jpg')",
          height: "40vh",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex flex-col items-center justify-evenly h-full text-center">
          <h1 className="text-7xl font-bold text-white mb-12">Movie World</h1>
        </div>
      </div>

      <section className="w-4/5 mx-auto py-12">
        <p className="font-bold mb-6">
          Step into the magical world of movies and experience a day of thrills, entertainment, and Hollywood magic at Movie World Gold Coast. Located in Helensvale, Gold Coast, this iconic theme park offers an immersive cinematic experience that will delight visitors of all ages.
        </p>
        <p className="mb-6">
          Movie World is renowned for its exhilarating rides and attractions. Strap yourself in for the adrenaline-pumping Superman Escape roller coaster, where you&apos;ll feel the rush of flying at super speeds. For a unique and interactive adventure, don&apos;t miss the Justice League 3D - The Ride, where you can join forces with your favorite superheroes to save the day.
        </p>
        <p className="mb-6">
          Beyond the rides, Movie World also showcases spectacular live shows and performances. Be sure to catch the Hollywood Stunt Driver show, featuring thrilling car stunts and high-octane action. The All-Star Parade is another must-see, where you can catch a glimpse of beloved characters and superheroes marching through the streets in a vibrant parade.
        </p>
        <p className="mb-6">
          For movie enthusiasts, the Warner Bros. Studio Tour provides a behind-the-scenes look at the making of blockbuster films. Explore authentic movie sets, learn about special effects, and witness the magic of movie-making up close.
        </p>
        <p className="mb-6">
          To make the most of your visit, it&apos;s recommended to arrive early and plan your day in advance. Check the show schedules to ensure you don&apos;t miss any of the live performances. Take breaks to explore the park&apos;s themed areas, such as Main Street and DC Comics Super-Villains Unleashed, where you can meet iconic characters and snap memorable photos.
        </p>
        <p className="mb-6">
          When it comes to dining, Movie World offers a range of options to suit every taste, from quick bites to full meals. Don&apos;t forget to browse the merchandise stores for movie-themed souvenirs and memorabilia.
        </p>
        <p className="mb-6">
          Movie World Gold Coast is a thrilling and immersive experience that brings the magic of Hollywood to life. Whether you&apos;re seeking adrenaline-pumping rides, captivating shows, or behind-the-scenes movie adventures, this theme park promises a day of unforgettable entertainment. Prepare to be transported into the world of movies like never before.
        </p>

      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl mb-8">Tickets</h2>
          <ol className="list-decimal">
            <li className="mb-4">
              Single Day Entry: This ticket provides admission to Movie World for a single day. Visitors can enjoy all the rides, shows, and attractions within the park during operating hours.
            </li>
            <li className="mb-4">
              Multi-Day Pass: If you want to extend your visit and explore Movie World over multiple days, you can opt for a multi-day pass. These passes generally allow entry for a specified number of consecutive or non-consecutive days, giving you the flexibility to enjoy the park at your own pace.
            </li>
            <li className="mb-4">
              Annual Pass: An annual pass grants unlimited entry to Movie World for an entire year from the date of purchase. This option is perfect for frequent visitors or locals who want to experience the park multiple times throughout the year. Annual passholders often receive additional benefits, such as discounts on merchandise, food, and special events.
            </li>
            <li className="mb-4">
              VIP Experience: Movie World offers VIP experiences that provide an enhanced visit. These experiences may include behind-the-scenes tours, priority access to rides and shows, meet-and-greets with characters, and other exclusive perks. VIP experiences offer a more personalized and immersive visit to Movie World.
            </li>
          </ol>
          <p className="text-sm italic mt-4">
            It&apos;s important to note that ticket options, pricing, and availability may change, so it&apos;s advisable to check the official Movie World website or contact their customer service for the most up-to-date information. Additionally, keep an eye out for any special promotions, packages, or combination passes that may provide access to multiple parks or attractions in the area, allowing you to maximize your entertainment options.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl mb-8">How to Get There</h2>
          <ol className="list-decimal">
            <li className="mb-4">
              Public Bus: TransLink operates regular bus services that connect Surfers Paradise to Movie World. Check the TransLink website or mobile app for the most up-to-date bus schedules and routes. Routes 720 and 740 are commonly used to reach Movie World.
            </li>
            <li className="mb-4">
              Tram and Bus Combination: Take the G:link light rail from Surfers Paradise to Helensvale Station. From there, transfer to Bus Route 720, which provides direct service to Movie World. This option combines the convenience of the tram with a bus connection.
            </li>
            <li className="mb-4">
              Taxi or Rideshare: Taxis and rideshare services like Uber or Ola are readily available in Surfers Paradise. Simply request a ride and provide the driver with the address of Movie World. This option offers convenience and direct transportation.
            </li>
            <li className="mb-4">
              Shuttle Service: Several companies provide shuttle services specifically catering to tourists traveling between Surfers Paradise and major attractions like Movie World. These services usually require advance booking and offer round-trip transportation.
            </li>
            <li className="mb-4">
              Self-Drive: If you have access to a car, you can drive from Surfers Paradise to Movie World. Follow the signs and directions to Pacific Motorway (M1) heading southbound. Take Exit 60 to Entertainment Road, where Movie World is located. On-site parking is available for free.
            </li>
          </ol>
          <p>
            When planning your trip, consider factors such as cost, convenience, and the number of people in your group to choose the transportation option that best suits your needs. It&apos;s recommended to check the latest schedules, routes, and availability of each option for a smooth and enjoyable journey.
          </p>
        </div>

      <div className="map-container py-10">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.8375861632994!2d153.31053537711588!3d-27.906956976068866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9111264c525139%3A0xf02a35bd7207180!2sWarner%20Bros.%20Movie%20World!5e0!3m2!1sen!2sau!4v1687500208374!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          ></iframe>
      </div>
          </section>
          </section>
    </div>
  );
};

export default MovieWorldPage;
