import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-kitchen.jpg';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h1 className="text-display-xl">Invented</h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <p className="text-body-lg max-w-lg">
              <span className="text-foreground font-medium">We design with heart</span> — walking every step of the journey 
              alongside our clients, from first sketch to final handover, 
              because <span className="text-foreground font-medium">we deeply care about the spaces you call home.</span>
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[2/1]">
            <img
              src={heroImage}
              alt="Modern luxury kitchen and dining interior"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
