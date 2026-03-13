// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ArrowUpRight } from 'lucide-react';
// import Layout from '@/components/layout/Layout';
// import projectNatural from '@/assets/project-natural-luxury.jpg';
// import projectBlack from '@/assets/project-modern-black.jpg';
// import projectWood from '@/assets/project-wood-mode.jpg';
// import heroImage from '@/assets/hero-kitchen.jpg';

// const projectsData: Record<string, {
//   title: string;
//   category: string;
//   year: string;
//   location: string;
//   description: string;
//   area: string;
//   duration: string;
//   images: string[];
//   materials: string[];
// }> = {
//   'natural-luxury': {
//     title: 'Natural Luxury',
//     category: 'Residential',
//     year: '2025',
//     location: 'Aspen, Colorado',
//     description: 'A stunning mountain retreat that seamlessly blends modern design with natural elements. Floor-to-ceiling windows frame breathtaking forest views while warm wood tones and organic textures create an inviting atmosphere.',
//     area: '4,500 sq ft',
//     duration: '18 months',
//     images: [projectNatural, heroImage, projectWood],
//     materials: ['Reclaimed Oak', 'Natural Stone', 'Linen Textiles', 'Brass Fixtures'],
//   },
//   'modern-black': {
//     title: 'Modern Black',
//     category: 'Residential',
//     year: '2024',
//     location: 'New York, NY',
//     description: 'A bold urban penthouse that embraces darkness as a design feature. Deep charcoal tones, dramatic lighting, and luxurious textures create a sophisticated sanctuary in the heart of Manhattan.',
//     area: '3,200 sq ft',
//     duration: '14 months',
//     images: [projectBlack, projectNatural, heroImage],
//     materials: ['Black Marble', 'Velvet Upholstery', 'Smoked Glass', 'Matte Black Steel'],
//   },
//   'wood-mode': {
//     title: 'Wood Mode',
//     category: 'Commercial',
//     year: '2024',
//     location: 'Portland, Oregon',
//     description: 'A Japanese-inspired commercial space that celebrates the beauty of natural wood. Every surface tells a story through carefully selected timber, creating a warm and grounding work environment.',
//     area: '2,800 sq ft',
//     duration: '10 months',
//     images: [projectWood, projectBlack, projectNatural],
//     materials: ['Japanese Cedar', 'White Oak', 'Rice Paper Screens', 'Copper Accents'],
//   },
// };

// const ProjectDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const project = projectsData[id || ''] || projectsData['natural-luxury'];

//   return (
//     <Layout>
//       {/* Back Link */}
//       <section className="pt-28 md:pt-32">
//         <div className="container-wide">
//           <Link
//             to="/projects"
//             className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Projects
//           </Link>
//         </div>
//       </section>

//       {/* Hero */}
//       <section className="pt-8 pb-16 md:pb-24">
//         <div className="container-wide">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-12"
//           >
//             <div className="flex flex-wrap items-center gap-4 mb-4">
//               <span className="text-muted-foreground">{project.category}</span>
//               <span className="text-muted-foreground">•</span>
//               <span className="text-muted-foreground">{project.location}</span>
//               <span className="text-muted-foreground">•</span>
//               <span className="text-muted-foreground">{project.year}</span>
//             </div>
//             <h1 className="text-display-lg">{project.title}</h1>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="rounded-3xl overflow-hidden aspect-[16/9]"
//           >
//             <img
//               src={project.images[0]}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Details Grid */}
//       <section className="pb-16 md:pb-24">
//         <div className="container-wide">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Description */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               <h2 className="text-section-title mb-6">About the Project</h2>
//               <p className="text-body-lg leading-relaxed">{project.description}</p>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="space-y-6"
//             >
//               <div>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Area</p>
//                 <p className="text-xl font-medium">{project.area}</p>
//               </div>
//               <div>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Duration</p>
//                 <p className="text-xl font-medium">{project.duration}</p>
//               </div>
//               <div>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">Materials</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.materials.map((material) => (
//                     <span
//                       key={material}
//                       className="px-3 py-1 bg-secondary rounded-full text-sm"
//                     >
//                       {material}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="pb-16 md:pb-24">
//         <div className="container-wide">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-section-title mb-8"
//           >
//             Gallery
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {project.images.slice(1).map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.15 }}
//                 className="rounded-2xl overflow-hidden aspect-[4/3]"
//               >
//                 <img
//                   src={image}
//                   alt={`${project.title} gallery ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 md:py-24 bg-secondary">
//         <div className="container-wide text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-display-md mb-6">Ready to start your project?</h2>
//             <p className="text-body-lg max-w-lg mx-auto mb-8">
//               Let's discuss how we can transform your space into something extraordinary.
//             </p>
//             <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
//               Get in Touch
//               <ArrowUpRight className="w-4 h-4" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default ProjectDetail;



import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
import { Calendar } from "lucide-react";
import Layout from '@/components/layout/Layout';
import projectNatural from '@/assets/ABC03860.jpg';
import projectWhite from '@/assets/round-rug.jpg';
import projectBlack from '@/assets/project-modern-black.jpg';
import projectWood from '@/assets/project-wood-mode.jpg';
import heroImage from '@/assets/hero-kitchen.jpg';

const projectsData: Record<string, {
  title: string;
  // category: string;
  // year: string;
  // location: string;
  description: string;
  area: string;
  duration: string;
  images: string[];
  materials: string[];
}> = {
  'natural-luxury': {
    title: 'Natural Luxury',
    // category: 'Residential',
    // year: '2025',
    // location: 'Aspen, Colorado',
    description:
      'A stunning mountain retreat that seamlessly blends modern design with natural elements. Floor-to-ceiling windows frame breathtaking forest views while warm wood tones and organic textures create an inviting atmosphere.',
    area: '4,500 sq ft',
    duration: '18 months',
    images: [projectNatural, heroImage, projectWood],
    materials: ['Reclaimed Oak', 'Natural Stone', 'Linen Textiles', 'Brass Fixtures'],
  },
  'modern-black': {
    title: 'Modern Black',
    // category: 'Residential',
    // year: '2024',
    // location: 'New York, NY',
    description:
      'A bold urban penthouse that embraces darkness as a design feature. Deep charcoal tones, dramatic lighting, and luxurious textures create a sophisticated sanctuary in the heart of Manhattan.',
    area: '3,200 sq ft',
    duration: '14 months',
    images: [projectBlack, projectNatural, heroImage],
    materials: ['Black Marble', 'Velvet Upholstery', 'Smoked Glass', 'Matte Black Steel'],
  },
  'minimalist-office': {
    title: 'Minimalist Office',
    // category: 'Residential',
    // year: '2024',
    // location: 'New York, NY',
    description:
      'A bold urban penthouse that embraces darkness as a design feature. Deep charcoal tones, dramatic lighting, and luxurious textures create a sophisticated sanctuary in the heart of Manhattan.',
    area: '3,200 sq ft',
    duration: '14 months',
    images: [projectWhite, projectNatural, heroImage],
    materials: ['Black Marble', 'Velvet Upholstery', 'Smoked Glass', 'Matte Black Steel'],
  },
  'wood-mode': {
    title: 'Wood Mode',
    // category: 'Commercial',
    // year: '2024',
    // location: 'Portland, Oregon',
    description:
      'A Japanese-inspired commercial space that celebrates the beauty of natural wood. Every surface tells a story through carefully selected timber, creating a warm and grounding work environment.',
    area: '2,800 sq ft',
    duration: '10 months',
    images: [projectWood, projectBlack, projectNatural],
    materials: ['Japanese Cedar', 'White Oak', 'Rice Paper Screens', 'Copper Accents'],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);

  const project = projectsData[id || ''] || projectsData['natural-luxury'];

  return (
    <Layout>
      {/* Back Link */}
      <section className="pt-28 md:pt-32">
        <div className="container-wide">
          {/* <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link> */}
        </div>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            
            <h1 className="text-display-lg">{project.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="overflow-hidden aspect-[16/9]"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-section-title mb-6">About the Project</h2>
              <p className="text-body-lg leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                  Area
                </p>
                <p className="text-xl font-medium">{project.area}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                  Duration
                </p>
                <p className="text-xl font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">
                  Materials
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {/* <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <h2 className="text-section-title mb-8">Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#e6f2f5" }}>
  <div className="container-wide text-center">
    <h2 className="text-display-md mb-6">
      Ready to start your project?
    </h2>

    <p className="text-body-lg max-w-lg mx-auto mb-8">
      Book a private consultation and let’s bring your vision to life.
    </p>

    <button
      onClick={() => setIsOpen(true)}
      className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white text-sm tracking-widest uppercase transition-all duration-500 hover:bg-transparent hover:text-black border border-black"
    >
      Book Now
      <ArrowUpRight className="w-4 h-4" />
    </button>
  </div>
</section>

      {/* Modal */}
      {/* Modal */}
      {/* Premium Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl bg-[#f8f8f6] shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-8"
              >
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Heading */}
                <h2 className="text-3xl font-serif mb-8 tracking-tight">
                  Reserve Your Stay
                </h2>

                <form className="space-y-5">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border border-gray-300 rounded-xl px-5 py-3 text-base placeholder-gray-400 focus:outline-none focus:border-black transition"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border border-gray-300 rounded-xl px-5 py-3 text-base placeholder-gray-400 focus:outline-none focus:border-black transition"
                  />

                  {/* Check-in */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] text-gray-500 mb-2">
                      CHECK-IN DATE
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full bg-transparent border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:border-black transition appearance-none"
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] text-gray-500 mb-2">
                      CHECK-OUT DATE
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full bg-transparent border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:border-black transition appearance-none"
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center my-8">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-xs tracking-[0.3em] text-gray-500">
                      BOOK VIA
                    </span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href={`https://wa.me/919876543210`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-green-600 text-green-600 py-3 text-center uppercase tracking-[0.25em] text-xs transition-all duration-300 hover:bg-green-600 hover:text-white"
                    >
                      Via WhatsApp
                    </a>

                    <a
                      href={`mailto:booking@pendoraglamps.com`}
                      className="border border-black text-black py-3 text-center uppercase tracking-[0.25em] text-xs transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      Via Email
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectDetail;