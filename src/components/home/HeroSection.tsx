// import { motion } from 'framer-motion';
// import heroImage from '@/assets/m7vv0vco9kt9mia08jhaekfw.png';
// import secondImage from '@/assets/KB-Glamps-Murree-(1).jpeg';

// const HeroSection = () => {
//   return (
//     <section className="pt-24 md:pt-32 pb-16 md:pb-24">
//       <div className="container-wide">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
//           {/* Headline */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5"
//           >
//             <h1 className="text-display-xl">Invented</h1>
//           </motion.div>

//           {/* Supporting Text */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="lg:col-span-7 lg:pt-8"
//           >
//             <p className="text-body-lg max-w-lg">
//               <span className="text-foreground font-medium">We design with heart</span> — walking every step of the journey
//               alongside our clients, from first sketch to final handover,
//               because <span className="text-foreground font-medium">we deeply care about the spaces you call home.</span>
//             </p>
//           </motion.div>
//         </div>

//         {/* Hero Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="mt-12 md:mt-16"
//         >
//           <div className="relative  overflow-hidden aspect-[16/9] md:aspect-[2/1]">
//             <img
//               src={heroImage}
//               alt="Modern luxury kitchen and dining interior"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>
//         {/* <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           <div className="relative overflow-hidden aspect-[12/9]">
//             <img
//               src={heroImage}
//               alt="Modern luxury kitchen and dining interior"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="relative overflow-hidden aspect-[12/9]">
//             <img
//               src={secondImage}
//               alt="Luxury interior design"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowDown } from "lucide-react";
// import heroImage from "@/assets/DSC03642.jpg";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImage}
//           alt="Luxury homestay"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/80 mb-4"
//         >
//           Welcome to
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
//         >
//           Pendora Glamps
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           Escape to serenity. Nestled among misty mountains and lush greenery,
//           experience the warmth of home in the heart of nature.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">

//           <Link to="/projects">
//             <button className="px-8 py-3 sm:py-4 bg-[#164e63] text-white font-semibold tracking-wide transition-all duration-300 hover:bg-green-800 hover:bg-[#155e75]">
//               EXPLORE ROOMS
//             </button>
//           </Link>
//           {/* <button className="px-8 py-3 sm:py-4 border-2 border-white/70 text-white font-semibold tracking-wide transition-all duration-300 hover:bg-white/10">
//             Book Now
//           </button> */}

//         </div>

//       </div>

//       {/* Scroll Icon */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
//         <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
//       </div>

//     </section>
//   );
// };

// export default HeroSection;



// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

// import hero1 from "@/assets/DSC03642.jpg";
// import hero2 from "@/assets/202401181517465037-e51c70e2-047e-43d2-a87f-85e2d4a637fa.avif";
// import hero3 from "@/assets/KB-Glamps-Murree-(1) (1).jpeg";

// const images = [hero1, hero2, hero3];

// const HeroSection = () => {
//   const [index, setIndex] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Manual controls
//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

//       {/* Background Slider */}
//       <div className="absolute inset-0">
//         <AnimatePresence>
//           <motion.img
//             key={index}
//             src={images[index]}
//             alt="Luxury homestay"
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </AnimatePresence>

//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       LEFT BUTTON
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
//       >
//         <ChevronLeft className="text-white w-6 h-6" />
//       </button>

//       {/* RIGHT BUTTON */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
//       >
//         <ChevronRight className="text-white w-6 h-6" />
//       </button>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/80 mb-4"
//         >
//           Welcome to
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
//         >
//           Pendora Glamps
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           Escape to serenity. Nestled among misty mountains and lush greenery,
//           experience the warmth of home in the heart of nature.
//         </motion.p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link to="/projects">
//             <button className="px-8 py-3 sm:py-4 bg-[#164e63] text-white  tracking-widest transition-all duration-300 hover:bg-[#0f4c5c]">
//               EXPLORE ROOMS
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Scroll Icon */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
//         <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
//       </div>

//     </section>
//   );
// };

// export default HeroSection;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

import hero1 from "@/assets/ABC03953 (1).jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero1}
          alt="Luxury homestay"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/80 mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Pendora Glamps
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Escape to serenity. Nestled among misty mountains and lush greenery,
          experience the warmth of home in the heart of nature.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects">
            <button className="px-8 py-3 sm:py-4 bg-[#164e63] text-white tracking-widest transition-all duration-300 hover:bg-[#0f4c5c]">
              EXPLORE ROOMS
            </button>
          </Link>
        </div>

      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
      </div>

    </section>
  );
};

export default HeroSection;