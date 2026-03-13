import React from "react";
import { Link } from "react-router-dom";
import facilitiesHero from "@/assets/AB03882.jpg";
import pool from "@/assets/whatsapp-image-2024-12-17-at-11.59.21.webp";
import dining from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import games from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import travel from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import Layout from "@/components/layout/Layout";

const facilities = [
  {
    img: pool,
    title: "Plantation View Swimming Pool",
    desc: "Relax and refresh in our scenic pool surrounded by lush tea plantations and cool Vagamon breezes."
  },
  {
    img: dining,
    title: "Multi-Cuisine Restaurant",
    desc: "Enjoy delicious local and international dishes prepared with fresh ingredients by our experienced chefs."
  },
  {
    img: games,
    title: "Indoor Games & Recreation",
    desc: "Spend quality time with family and friends enjoying indoor games and entertainment facilities."
  },
  {
    img: travel,
    title: "Travel & Tour Assistance",
    desc: "Our team helps you explore Vagamon with guided trips, travel planning, and local sightseeing support."
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
          <span className="text-[#164e63]">Facilities</span>
        </p>
      </div>

      {/* Facilities Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold text-[#164e63] mb-6 uppercase tracking-[0.15em]">
            Facilities
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover a range of thoughtfully designed facilities that make your
            stay at our resort truly exceptional. From relaxing by the scenic
            plantation-side swimming pool to enjoying delicious multi-cuisine
            dining, every experience is crafted to offer comfort, leisure, and
            unforgettable moments surrounded by the beauty of Vagamon’s hills.
          </p>

        </div>
      </section>

      {/* Facilities List */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="relative h-[420px] overflow-hidden shadow-lg"
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