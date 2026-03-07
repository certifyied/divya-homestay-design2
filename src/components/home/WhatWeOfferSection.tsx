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
import {
  Sparkles,
  Utensils,
  Users,
  Mountain,
  Car,
  Baby,
  Flame,
  Waves,
  Dumbbell,
} from "lucide-react";

const amenities = [
  { icon: Sparkles, title: "Ayurvedic Spa" },
  { icon: Utensils, title: "Exclusive Dining" },
  { icon: Users, title: "Meetings & Events" },
  { icon: Mountain, title: "360-Degree Tea Plantation View" },
  { icon: Car, title: "Free Parking" },
  { icon: Baby, title: "Kids Play Area" },
  { icon: Flame, title: "Campfire with Music" },
  { icon: Waves, title: "Swimming Pool" },
  { icon: Dumbbell, title: "Gym" },
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
          Hotel Amenities
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

        {/* Amenities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-16">

          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <item.icon className="w-12 h-12 text-[#164e63] mb-4" />

              {/* Title */}
              <h3 className="text-lg font-serif text-gray-700">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatWeOfferSection;