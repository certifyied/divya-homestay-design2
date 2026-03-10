// import { motion } from 'framer-motion';
// import { ArrowUpRight, Sofa, Building2, PenTool, Box, Armchair } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import offerImage from '@/assets/offer-decor.jpg';

// const services = [
//   { icon: Sofa, name: 'Interior Design', count: 52 },
//   { icon: Building2, name: 'Architectural Design', count: 32 },
//   { icon: PenTool, name: 'Sketch & Concept Design', count: 123 },
//   { icon: Box, name: '3D Visualization', count: 98 },
//   { icon: Armchair, name: 'Custom & Furniture Design', count: 25 },
// ];

// const WhatWeOfferSection = () => {
//   return (
//     <section className="py-16 md:py-24">
//       <div className="container-wide">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-4"
//           >
//             <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
//               <img
//                 src={offerImage}
//                 alt="Decorative interior with vase"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>

//           {/* Services List */}
//           <div className="lg:col-span-8">
//             <div className="flex items-center justify-between mb-8">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-section-title"
//               >
//                 What We Offer
//               </motion.h2>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//               >
//                 <Link to="/contact" className="link-arrow">
//                   Contact Us
//                   <ArrowUpRight className="w-4 h-4" />
//                 </Link>
//               </motion.div>
//             </div>

//             <div className="space-y-0">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="service-item group cursor-pointer"
//                 >
//                   <div className="flex items-center gap-4">
//                     <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
//                     <span className="text-lg md:text-xl font-medium">{service.name}</span>
//                   </div>
//                   <span className="text-muted-foreground">({service.count})</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeOfferSection;

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* Amenity Images */
import pool from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import restaurant from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import games from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import dinner from "@/assets/2497d151-2e7d-4570-a623-79110dfa16a0.webp";
import { Link } from "react-router-dom";

const amenities = [
  { img: pool, title: "SWIMMING POOL" },
  { img: restaurant, title: "RESTAURANT" },
  { img: games, title: "INDOOR GAMES" },
  { img: dinner, title: "FAMILY THEME DINNER" },
];

const WhatWeOfferSection = () => {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-[#164e63] mb-6"
        >
          Our Facilities
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 mb-20 leading-relaxed"
        >
          At Parakkat Nature Hotel & Resorts, we pride ourselves on offering an
          extensive selection of services that cater to the needs and luxuries
          of all our guests, ensuring a stay filled with delightful experiences
          and cherished memories.
        </motion.p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f5] via-transparent to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-10 left-0 right-0 text-center">
                <h3 className="text-[#164e63] tracking-[0.2em] text-sm font-medium">
                  {item.title}
                </h3>
                <div className="w-12 h-[2px] bg-[#164e63] mx-auto mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Link Button */}
            <Link
              to="/facilities"
              className="inline-block px-8 py-3 border border-[#164e63] text-[#164e63] uppercase tracking-[0.2em] text-sm font-medium hover:bg-[#164e63] hover:text-white transition-all duration-300"
            >
              View All Facilities
            </Link>

          </div>
        </section>

      </div>
    </section>
  );
};

export default WhatWeOfferSection;