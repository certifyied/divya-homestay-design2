import React, { useEffect, useState } from "react";
import API from "@/utils/axios";

import heroImg from "@/assets/021.jpg";

interface Experience {
  _id: string;
  title: string;
  description: string;
  images: string[];
}

const ExperienceContent = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const fetchExperiences = async () => {
    try {
      const res = await API.get("/experiences");
      setExperiences(res.data.data);
    } catch (error) {
      console.log("Error fetching experiences", error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img src={heroImg} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Elevate Your Stay with Exclusive Experiences
            </h1>

            <p className="text-lg text-gray-200">
              Unique Activities for Memorable Moments
            </p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">

  {experiences.map((item) => (
    <div key={item._id} className="space-y-4 md:space-y-6 mb-12 md:mb-20">

      {/* Experience Image */}
      <div className="w-full aspect-[3/2] md:aspect-[16/9] overflow-hidden">
        <img
          src={item.images?.[0]}
          className="w-full h-full object-cover"
          alt={item.title}
        />
      </div>

      {/* Experience Content */}
      <div className="max-w-3xl px-1">

        <h2 className="text-lg md:text-xl font-semibold text-[#164e63] mb-2 md:mb-4">
          {item.title}
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          {item.description}
        </p>

      </div>

    </div>
  ))}
</section>
    </div>
  );
};

export default ExperienceContent;