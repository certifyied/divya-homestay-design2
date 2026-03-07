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
          blending modern amenities with stunning natural beauty. Positioned
          for panoramic views of lush tea plantations, this premier resort near
          Chithirapuram is perfect for travelers seeking a unique stay.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          With 18 room categories, guests enjoy diverse, opulent accommodations.
          The resort features a multi-cuisine restaurant serving a variety of
          delectable dishes, a spa offering rejuvenating treatments, and
          well-equipped banquet facilities for events. Parakkat Nature Hotel &
          Resorts is more than a stay; it’s a destination that combines leisure,
          luxury, and adventure in the heart of Munnar’s picturesque tea
          country.
        </p>

      </div>

      {/* New Cards Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Card 1 */}
        <div className="text-center">
          <img
            src="/src/assets/best-tourist-destinations-to-visit-in-maharashtra-india-1.jpg"
            alt="Nature"
            className="w-full h-72 object-cover mb-5"
          />
          <h3 className="text-xl font-serif text-gray-900 mb-3">
            Natural Beauty Abounds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Pendora Glamps is nestled amidst lush green tea plantations,
            offering breathtaking views of the surrounding hills and nature.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <img
            src="/src/assets/Featured-image-Tea-garden-in-Munnar-hills-station-India-1244x700.jpg"
            alt="Ambience"
            className="w-full h-72 object-cover mb-5"
          />
          <h3 className="text-xl font-serif text-gray-900 mb-3">
            Tranquil Ambiance
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The resort's serene atmosphere coupled with the gentle sounds
            of nature creates a peaceful and relaxing environment.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <img
            src="/src/assets/1725966377230_thekkady5.webp"
            alt="Luxury"
            className="w-full h-72 object-cover mb-5"
          />
          <h3 className="text-xl font-serif text-gray-900 mb-3">
            Luxurious Accommodations
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Stylish and comfortable rooms provide a luxurious retreat
            for guests to unwind and rejuvenate.
          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center">
          <img
            src="/src/assets/87da99b67e69cee29f9fc43b8ab21f69.webp"
            alt="Amenities"
            className="w-full h-72 object-cover mb-5"
          />
          <h3 className="text-xl font-serif text-gray-900 mb-3">
            World-Class Amenities
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From spa treatments to swimming pool relaxation, Pendora
            Glamps offers a range of amenities for a perfect stay.
          </p>
        </div>

      </div>
    </section>
  );
}

export default SecondHeroSection;