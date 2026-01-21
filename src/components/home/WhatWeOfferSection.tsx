import { motion } from 'framer-motion';
import { ArrowUpRight, Sofa, Building2, PenTool, Box, Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';
import offerImage from '@/assets/offer-decor.jpg';

const services = [
  { icon: Sofa, name: 'Interior Design', count: 52 },
  { icon: Building2, name: 'Architectural Design', count: 32 },
  { icon: PenTool, name: 'Sketch & Concept Design', count: 123 },
  { icon: Box, name: '3D Visualization', count: 98 },
  { icon: Armchair, name: 'Custom & Furniture Design', count: 25 },
];

const WhatWeOfferSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={offerImage}
                alt="Decorative interior with vase"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Services List */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-section-title"
              >
                What We Offer
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/contact" className="link-arrow">
                  Contact Us
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="space-y-0">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="service-item group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-lg md:text-xl font-medium">{service.name}</span>
                  </div>
                  <span className="text-muted-foreground">({service.count})</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
