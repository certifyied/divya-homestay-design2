import React from "react";
import { Link } from "react-router-dom";
import facilitiesHero from "@/assets/AB03882 (1).jpg";
import AdventurePark from "@/assets/DSC_9575-scaled.webp";
import SunsetHiking from "@/assets/pexels-burakbasgoze-15365481 (1).jpg";
import Paragliding from "@/assets/pexels-photo-2132013 (1).jpeg";
import CampfireAndMusic from "@/assets/couple-looking-each-other-singing (1).jpg";

import JeepSafari from "@/assets/panorama-view-jeep-car-hawaii (2).jpg";
import VarattumeduTrekking from "@/assets/488680121_1131057205700296_379061321275003118_n (1).jpg";

import VagamonTeaLake from "@/assets/tea-lake-boating-vagamon-vagamon-picnic-spots-9puyihxh9s.avif";
import PalozhukumparaViewPoint from "@/assets/palozhukum-para-waterfalls-elappara-idukki-tourist-attraction-f00dj6xsce.avif";
import CycleRide from "@/assets/Cycling-5 (1).jpg";
import VagamonMeadows from "@/assets/Vagamon-Meadows-Lake-1-1200x675-cropped.jpg";

import Layout from "@/components/layout/Layout";

const facilities = [
  {
    img: AdventurePark,
    title: "ADVENTURE PARK",
    desc: "Experience thrilling outdoor activities and fun challenges perfect for families, friends, and adventure lovers."
  },
  {
    img: SunsetHiking,
    title: "SUNSET HIKING",
    desc: "Take a scenic hike through Vagamon’s hills and enjoy breathtaking sunset views surrounded by nature."
  },
  {
    img: Paragliding,
    title: "PARAGLIDING",
    desc: "Soar above the beautiful landscapes of Vagamon and enjoy an unforgettable aerial adventure."
  },
  {
    img: CampfireAndMusic,
    title: "CAMPFIRE AND MUSIC",
    desc: "Gather around a warm campfire in the evening with music, laughter, and memorable moments under the stars."
  },
  {
    img: JeepSafari,
    title: "JEEP SAFARI & SIGHTSEEING",
    desc: "Explore Vagamon’s rugged terrains and scenic viewpoints with an exciting jeep safari adventure."
  },
  {
    img: VarattumeduTrekking,
    title: "VARATTUMEDU TREKKING SPOT",
    desc: "Discover the beautiful Varattumedu hills with a refreshing trekking experience surrounded by nature."
  },
  {
    img: CycleRide,
    title: "SUNRISE / SUNSET CYCLE RIDE",
    desc: "Enjoy peaceful cycling through Vagamon’s misty roads during sunrise or sunset for a truly relaxing experience."
  },
  {
    img: VagamonTeaLake,
    title: "VAGAMON TEA LAKE",
    desc: "Relax beside the peaceful Tea Lake in Vagamon, surrounded by lush greenery and calm natural beauty."
  },
  {
    img: PalozhukumparaViewPoint,
    title: "PALOZHUKUMPARA VIEW POINT",
    desc: "Enjoy stunning panoramic views of Vagamon’s valleys and hills from the beautiful Palozhukumpara View Point."
  },
  {
    img: VagamonMeadows,
    title: "VAGAMON MEADOWS",
    desc: "Explore the famous Vagamon Meadows, a wide stretch of green hills perfect for relaxing walks and scenic photography."
  }
];
function Facilities() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative w-full h-[68vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
        <img
          src={facilitiesHero}
          alt="Luxury Resort Facilities"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 py-10">
          <div className="max-w-3xl text-center text-white">

            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug md:leading-tight mb-4 md:mb-6">
              Unmatched Comfort & Luxury Facilities in the Heart of Vagamon Hills
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-200 leading-relaxed">
              Surrounded by misty mountains and lush greenery, the resort offers
              world-class amenities including a scenic plantation-side pool, indoor
              games, and personalized travel assistance. Every moment here feels
              warm, welcoming, and crafted with care.
            </p>

          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container-wide py-6">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#164e63]">Nearby Activities</span>
        </p>
      </div>

      {/* Facilities Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-[#164e63] mb-6 uppercase tracking-[0.15em]">
            Our Nearby Activities
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Explore the many exciting activities waiting just moments from our resort.
            From scenic trekking trails and peaceful nature walks to paragliding,
            sightseeing, and discovering Vagamon’s beautiful valleys and viewpoints,
            there are plenty of ways to experience adventure and relaxation while
            surrounded by the breathtaking landscapes of Vagamon.
          </p>

        </div>
      </section>

      {/* Facilities List */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="relative h-[420px] overflow-hidden shadow-md rounded-2xl"
            >

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
}

export default Facilities;