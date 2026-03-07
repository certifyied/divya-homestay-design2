// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import roomKitchen from '@/assets/room-kitchen.png';
// import roomBedroom from '@/assets/room-bedroom.png';
// import roomLiving from '@/assets/room-living.png';
// import roomAnteroom from '@/assets/room-anteroom.png';

// const rooms = [
//   { name: 'Kitchen', image: roomKitchen },
//   { name: 'Bed-Room', image: roomBedroom },
//   { name: 'Living-Room', image: roomLiving },
//   { name: 'Ante-Room', image: roomAnteroom },
// ];

// const RoomTypesSection = () => {
//   return (
//     <section className="py-16 md:py-24">
//       <div className="container-wide">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-section-title"
//           >
//             Choose Type Room
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             {/* <Link to="/projects" className="link-arrow mt-4 md:mt-0">
//               See All Rooms
//               <ArrowUpRight className="w-4 h-4" />
//             </Link> */}
//           </motion.div>
//         </div>

//         {/* Room Cards Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {rooms.map((room, index) => (
//             <motion.div
//               key={room.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="card-room group"
//             >
//               <div className="aspect-square relative overflow-hidden rounded-xl bg-sand/50 mb-4">
//                 <img
//                   src={room.image}
//                   alt={`${room.name} isometric illustration`}
//                   className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <p className="text-sm md:text-base font-medium uppercase tracking-wider">
//                 {room.name}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RoomTypesSection;


import React from "react";

const rooms = [
  {
    title: "Jacuzzi 180 Degree Suite",
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    title: "Premium Club Suite",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
  },
  {
    title: "Classic AC Room",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
];

function RoomTypesSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-14 text-[#164e63]">
          Our Room Types
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-lg"
            >

              {/* Image */}
              <img
                src={room.img}
                alt={room.title}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Default bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Hover Bottom Fade Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-24 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#164e63] via-[#164e63]/80 to-transparent transition-all duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 text-white text-2xl font-serif z-10">
                {room.title}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default RoomTypesSection;