import React from "react";

import domeRetreat from "@/assets/009.jpg";
import panoramaDeck from "@/assets/021.jpg";
import natureWalkway from "@/assets/004.jpg";

const rooms = [
  {
    title: "Scenic Hilltop Dome Retreat",
    img: domeRetreat,
    desc: "Experience a unique stay in a beautifully designed dome nestled in the hills, offering breathtaking night views and a peaceful atmosphere surrounded by nature.",
  },
  {
    title: "Elevated Panorama Deck",
    img: panoramaDeck,
    desc: "Relax on a spacious elevated deck with stunning panoramic views of the surrounding greenery, creating the perfect spot to unwind and enjoy the serenity of nature.",
  },
  {
    title: "Peaceful Nature Walkways",
    img: natureWalkway,
    desc: "Take a refreshing walk along scenic pathways that wind through lush tea plantations, offering guests a calm and rejuvenating connection with nature.",
  },
];

function RoomTypesSection() {
  return (
    <section className="bg-[#f5f5f3] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#164e63] leading-tight mb-8">
          Pendora Glamps: Elevate Your Escape in
          Vagamon's Panoramic Paradise
        </h2>
{/* 
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          Pendora Glamps in Vagamon offers a luxurious escape immersed in nature’s calm. Set against a backdrop of misty hills and open landscapes, this glamping retreat is perfect for travelers seeking peace, privacy, and a unique outdoor experience.
        </p>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          With two premium glamping units, guests can enjoy a more private and intimate stay experience. Each glamp is thoughtfully designed to provide comfort, style, and a close connection to nature. Ideal for couples and small groups, Pendora Glamps promises a serene getaway away from the noise of the city.
        </p> */}

      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="text-center">

            <div className="relative rounded-t-md overflow-hidden group">
              <img
                src={room.img}
                alt={room.title}
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f3] to-transparent"></div>
            </div>

            <h3 className="text-xl font-serif text-gray-900 mt-4 mb-2 uppercase tracking-wide">
              {room.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {room.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default RoomTypesSection;