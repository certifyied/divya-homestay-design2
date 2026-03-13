import React from "react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/ABC03931.jpg";
import expImg1 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
import expImg2 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
import expImg3 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
import expImg4 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
import expImg5 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";

import Layout from "@/components/layout/Layout";

const experiences = [
  {
    img: expImg1,
    title: "Campfire Under the Stars",
    desc: "Gather around a warm campfire and enjoy magical evenings under the starlit sky. Share stories and laughter while surrounded by peaceful hill views.",
  },
  {
    img: expImg2,
    title: "Nature Walk",
    desc: "Explore scenic trails and refreshing greenery while enjoying a peaceful nature walk through the hills.",
  },
  {
    img: expImg3,
    title: "Luxury Stay",
    desc: "Experience a relaxing luxury stay surrounded by misty mountains and serene natural beauty.",
  },
  {
    img: expImg4,
    title: "Mountain Viewpoints",
    desc: "Witness breathtaking panoramic views of the mountains and valleys during sunrise and sunset.",
  },
  {
    img: expImg5,
    title: "Outdoor Dining",
    desc: "Enjoy delicious meals in a beautiful outdoor setting with fresh air and stunning hill views.",
  },
];

function ExperiencePage() {
  return (
    <Layout>
      <div>

        {/* Hero Section */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <img
            src={heroImg}
            alt="Experience"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                Elevate Your Stay with Exclusive Experiences
              </h1>

              <p className="text-lg md:text-xl text-gray-200">
                Unique Activities for Memorable Moments
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container-wide py-6">
          <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#164e63]">Experience</span>
          </p>
        </div>

        {/* Experience Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-20">

            {experiences.map((item, index) => (
              <div key={index} className="space-y-6">

                {/* Image */}
                <div className="w-full h-[420px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="max-w-3xl">
                  <h2 className="text-xl font-semibold text-[#164e63] mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </section>

      </div>
    </Layout>
  );
}

export default ExperiencePage;