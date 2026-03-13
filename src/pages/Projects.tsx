// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Layout from '@/components/layout/Layout';
// import projectNatural from '@/assets/project-natural-luxury.jpg';
// import projectBlack from '@/assets/project-modern-black.jpg';
// import projectWood from '@/assets/project-wood-mode.jpg';
// import heroImage from '@/assets/hero-kitchen.jpg';

// const allProjects = [
//   {
//     id: 'natural-luxury',
//     title: 'Natural Luxury',
//     category: 'Residential',
//     year: '2025',
//     image: projectNatural,
//     location: 'Aspen, Colorado',
//   },
//   {
//     id: 'modern-black',
//     title: 'Modern Black',
//     category: 'Residential',
//     year: '2024',
//     image: projectBlack,
//     location: 'New York, NY',
//   },
//   {
//     id: 'wood-mode',
//     title: 'Wood Mode',
//     category: 'Commercial',
//     year: '2024',
//     image: projectWood,
//     location: 'Portland, Oregon',
//   },
//   {
//     id: 'urban-retreat',
//     title: 'Urban Retreat',
//     category: 'Residential',
//     year: '2024',
//     image: heroImage,
//     location: 'San Francisco, CA',
//   },
//   {
//     id: 'coastal-modern',
//     title: 'Coastal Modern',
//     category: 'Residential',
//     year: '2023',
//     image: projectNatural,
//     location: 'Miami, Florida',
//   },
//   {
//     id: 'minimalist-office',
//     title: 'Minimalist Office',
//     category: 'Commercial',
//     year: '2023',
//     image: projectBlack,
//     location: 'Austin, Texas',
//   },
// ];

// const categories = ['All', 'Residential', 'Commercial'];

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredProjects = activeCategory === 'All'
//     ? allProjects
//     : allProjects.filter(p => p.category === activeCategory);

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="pt-32 md:pt-40 pb-16 md:pb-24">
//         <div className="container-wide">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl"
//           >
//             <h1 className="text-display-lg mb-8">Our Projects</h1>
//             <p className="text-body-lg">
//               Explore our portfolio of residential and commercial spaces. Each project 
//               tells a unique story of collaboration, creativity, and craftsmanship.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="pb-12">
//         <div className="container-wide">
//           <div className="flex gap-4 flex-wrap">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? 'bg-foreground text-background'
//                     : 'bg-secondary text-foreground hover:bg-accent'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="pb-16 md:pb-24">
//         <div className="container-wide">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 layout
//               >
//                 <Link to={`/projects/${project.id}`} className="project-card block group">
//                   <div className="aspect-[4/3] overflow-hidden rounded-2xl">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="project-card-overlay rounded-2xl" />
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="flex items-end justify-between">
//                       <div>
//                         <p className="text-primary-foreground/70 text-sm mb-1">{project.location}</p>
//                         <h3 className="text-primary-foreground text-xl md:text-2xl font-medium">
//                           {project.title}
//                         </h3>
//                       </div>
//                       <span className="text-primary-foreground/70 text-sm">{project.year}</span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Projects;




import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import projectNatural from '@/assets/ABC03860.jpg';
import projectBlack from '@/assets/ABC03979.jpg';
import projectWhite from '@/assets/ROOM03868s.jpeg';
import projectWood from '@/assets/ABC03867 (1).jpg';
import heroImage from '@/assets/ROOM03868s.jpeg';
import projectLast from '@/assets/ABC03895.jpg';
import washroom from '@/assets/WASHROOM03921.jpg';
import roomLight from '@/assets/AC03900.jpg';
import roomCloset from '@/assets/CLOSET03915.jpg';

const allProjects = [
  {
    id: 'natural-luxury',
    title: 'Forest Haven Dome',
    image: projectNatural,
    location: 'Vagamon',
  },
  {
    id: 'modern-black',
    title: 'Golden Mist Dome',
    image: projectBlack,
    location: 'Vagamon',
  },
  {
    id: 'wood-mode',
    title: 'Midnight Luxe Dome',
    image: projectWood,
    location: 'Vagamon',
  },
  {
    id: 'urban-retreat',
    title: 'Serenity Horizon Dome',
    image: heroImage,
    location: 'Vagamon',
  },
  {
    id: 'coastal-modern',
    title: 'Sunset Haven Dome',
    image: projectLast,
    location: 'Vagamon',
  },
  {
    id: 'minimalist-office',
    title: 'The Alpine Luxury Dome',
    image: projectWhite,
    location: 'Vagamon',
  },
  {
    id: 'room-spa',
    title: 'Private Spa Ensuite',
    image: washroom,
    location: 'Vagamon',
  },
  {
    id: 'room-suite',
    title: 'Climate Comfort Suite',
    image: roomLight,
    location: 'Vagamon',
  },
  {
    id: 'room-closet',
    title: 'Modern Minimalist Restroom Design',
    image: roomCloset,
    location: 'Vagamon',
  },
];
const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* Hero Section with Wide Image */}
      <section className="relative w-full h-[80vh] overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Glamping Retreat"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-display-lg mb-6">
                Elegant Glamping Retreats
              </h1>

              <p className="text-body-lg text-white/90">
                Discover our collection of luxury glamping suites designed for comfort,
                style, and unforgettable experiences in nature.
              </p>

            </motion.div>

          </div>
        </div>

      </section>
      <div className="container-wide py-6">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#164e63]">Rooms</span>
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#164e63] mb-6">
          Our Luxury Glamping Suites
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          Discover a perfect blend of nature and comfort at our luxury glamping retreat.
          Each dome is thoughtfully designed to provide modern amenities while allowing
          you to stay immersed in the beauty of the surrounding landscape. Whether you're
          planning a romantic getaway, a peaceful retreat, or a memorable stay with family
          and friends, our glamping suites offer a unique experience that combines
          relaxation, elegance, and adventure.
        </p>

      </div>
      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">

                    <p className="text-white/70 text-sm mb-1">
                      {project.location}
                    </p>

                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                      {project.title}
                    </h3>

                    <Link to={`/projects/${project.id}`}>
                      <button className="px-5 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition">
                        Explore Room
                      </button>
                    </Link>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;