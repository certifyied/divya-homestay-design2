import React from "react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/ABC03931 (1).jpg";
import expImg1 from "@/assets/ABC03895 (1).jpg";
import expImg2 from "@/assets/ABC04000 (1).jpg";
import expImg3 from "@/assets/couple-looking-each-other-singing-cpoy.jpg";
import expImg4 from "@/assets/ABC04045 (1).jpg";
import expImg5 from "@/assets/ABC04163 (1).jpg";

import Layout from "@/components/layout/Layout";

const experiences = [
  {
    img: expImg1,
    title: "Luxury Stay",
    desc: "Enjoy a premium glamping experience surrounded by nature.",
  },
  {
    img: expImg2,
    title: "Mountain View",
    desc: "Wake up to breathtaking mountain scenery every morning.",
  },
  {
    img: expImg3,
    title: "Camp Fire Nights",
    desc: "Relax with cozy campfire nights under the stars.",
  },
  {
    img: expImg4,
    title: "Nature Walk",
    desc: "Explore beautiful trails and lush green surroundings.",
  },
  {
    img: expImg5,
    title: "Forest Camping",
    desc: "Experience peaceful nights deep inside nature.",
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