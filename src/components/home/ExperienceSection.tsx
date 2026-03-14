import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "@/assets/ABC03893 (1).jpg";
import img2 from "@/assets/ABC04000 (1).jpg";
import img3 from "@/assets/couple-looking-each-other-singing (1).jpg";
import img4 from "@/assets/ABC04045 (1).jpg";
import img5 from "@/assets/ABC04163 (1).jpg";

const experiences = [
  {
    title: "Luxury Stay",
    desc: "Enjoy a premium glamping experience surrounded by nature.",
    img: img1,
  },
  {
    title: "Mountain View",
    desc: "Wake up to breathtaking mountain scenery every morning.",
    img: img2,
  },
  {
    title: "Camp Fire Nights",
    desc: "Relax with cozy campfire nights under the stars.",
    img: img3,
  },
  {
    title: "Nature Walk",
    desc: "Explore beautiful trails and lush green surroundings.",
    img: img4,
  },
  {
    title: "Forest Camping",
    desc: "Experience peaceful nights deep inside nature.",
    img: img5,
  },
];

function ExperienceSection() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
      setIndex(0);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 24); // 24px gap
    }
  }, [visibleCards]);

  const nextSlide = () => {
    if (index < experiences.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center text-[#164e63]">
          Signature Experiences
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              animate={{ x: -(index * cardWidth) }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              {experiences.map((item, i) => (
                <motion.div
                  ref={i === 0 ? cardRef : null}
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative min-w-full sm:min-w-[50%] lg:min-w-[33.333%] overflow-hidden shadow-lg group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Left */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-200 z-10"
          >
            ‹
          </button>

          {/* Right */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-200 z-10"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center mt-14">
          <Link
            to="/experience"
            className="flex items-center gap-2 px-8 py-3 border border-[#164e63] text-[#164e63] tracking-wide transition-all duration-300 hover:bg-[#164e63] hover:text-white"
          >
            View All Experiences
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;