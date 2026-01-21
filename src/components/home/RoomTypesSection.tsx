import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import roomKitchen from '@/assets/room-kitchen.png';
import roomBedroom from '@/assets/room-bedroom.png';
import roomLiving from '@/assets/room-living.png';
import roomAnteroom from '@/assets/room-anteroom.png';

const rooms = [
  { name: 'Kitchen', image: roomKitchen },
  { name: 'Bed-Room', image: roomBedroom },
  { name: 'Living-Room', image: roomLiving },
  { name: 'Ante-Room', image: roomAnteroom },
];

const RoomTypesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section-title"
          >
            Choose Type Room
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/projects" className="link-arrow mt-4 md:mt-0">
              See All Rooms
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-room group"
            >
              <div className="aspect-square relative overflow-hidden rounded-xl bg-sand/50 mb-4">
                <img
                  src={room.image}
                  alt={`${room.name} isometric illustration`}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm md:text-base font-medium uppercase tracking-wider">
                {room.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-border" />
      </div>
    </section>
  );
};

export default RoomTypesSection;
