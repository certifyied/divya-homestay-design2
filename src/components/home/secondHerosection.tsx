import React from "react";

function SecondHeroSection() {
  return (
    <section className="bg-[#f5f5f3] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#164e63] leading-tight mb-8">
          Pendora Glamps: Elevate Your Escape in
          Munnar's Panoramic Paradise
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          Pendora Glamps in Munnar offers a luxurious escape
          blending modern amenities with stunning natural beauty.
          Positioned for panoramic views of lush tea plantations,
          this premier resort near Chithirapuram is perfect for
          travelers seeking a unique stay.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          With 18 room categories, guests enjoy diverse, opulent
          accommodations. The resort features a multi-cuisine
          restaurant serving a variety of delectable dishes, a
          spa offering rejuvenating treatments, and well-equipped
          banquet facilities for events.
        </p>

      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Card 1 */}
        <div className="text-center">
          <div className="relative">
            <img
              src="/src/assets/ABC04057 (1) (1).jpg"
              alt="Nature"
              className="w-full h-[420px] object-cover"
            />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f3] to-transparent"></div>
          </div>

          <h3 className="text-xl font-serif text-gray-900 mt-4 mb-2">
            Scenic Hilltop Dome Retreat
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Experience a unique stay in a beautifully designed dome nestled in the hills, offering breathtaking night views and a peaceful atmosphere surrounded by nature.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="relative">
            <img
              src="/src/assets/ABC04008.jpg"
              alt="Ambience"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f3] to-transparent"></div>
          </div>

          <h3 className="text-xl font-serif text-gray-900 mt-4 mb-2">
            Elevated Panorama Deck
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Relax on a spacious elevated deck with stunning panoramic views of the surrounding greenery, creating the perfect spot to unwind and enjoy the serenity of nature.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <div className="relative">
            <img
              src="/src/assets/ABC04045.jpg"
              alt="Luxury"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f3] to-transparent"></div>
          </div>

          <h3 className="text-xl font-serif text-gray-900 mt-4 mb-2">
            Peaceful Nature Walkways
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Take a refreshing walk along scenic pathways that wind through lush tea plantations, offering guests a calm and rejuvenating connection with nature.
          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center">
          <div className="relative">
            <img
              src="/src/assets/ABC04088.jpg"
              alt="Amenities"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f3] to-transparent"></div>
          </div>

          <h3 className="text-xl font-serif text-gray-900 mt-4 mb-2">
            Premium Resort Facilities
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Enjoy thoughtfully designed facilities set within picturesque landscapes, combining modern comfort with the natural beauty of the surrounding hills.
          </p>
        </div>

      </div>
    </section>
  );
}

export default SecondHeroSection;