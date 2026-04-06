// import { useParams, Link } from 'react-router-dom';
// import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
// import { Calendar } from "lucide-react";
// import Layout from '@/components/layout/Layout';
// import projectNatural from '@/assets/ABC03860 (1).jpg';
// import projectBlack from '@/assets/ABC03979 (2).jpg';
// import projectWhite from '@/assets/ROOM03868s (1).jpeg';
// import projectWood from '@/assets/ABC03867 (1) (1).jpg';
// import heroImage from '@/assets/ROOM03868s (1).jpeg';
// import projectLast from '@/assets/ABC03895 (1).jpg';
// import washroom from '@/assets/WASHROOM03921 (1).jpg';
// import roomLight from '@/assets/AC03900 (1).jpg';
// import roomCloset from '@/assets/CLOSET03915 (1).jpg';
// import { useNavigate } from "react-router-dom";


// const projectsData: Record<string, {
//   title: string;
//   // category: string;
//   // year: string;
//   // location: string;
//   description: string;
//   // area: string;
//   // duration: string;
//   images: string[];
//   materials: string[];
// }> = {
//   'natural-luxury': {
//     title: 'Forest Haven Dome',
//     description:
//       'A stunning mountain retreat that seamlessly blends modern design with natural elements. Floor-to-ceiling windows frame breathtaking forest views while warm wood tones and organic textures create an inviting atmosphere.',
//     // area: '4,500 sq ft',
//     // duration: '18 months',
//     images: [projectNatural],
//     materials: ['Reclaimed Oak', 'Natural Stone', 'Linen Textiles', 'Brass Fixtures'],
//   },

//   'modern-black': {
//     title: 'Golden Mist Dome',
//     description:
//       'A luxurious dome retreat designed for serene hilltop experiences. Warm lighting, elegant textures, and panoramic surroundings create a perfect escape for relaxation in Vagamon.',
//     // area: '3,200 sq ft',
//     // duration: '14 months',
//     images: [projectBlack],
//     materials: ['Black Marble', 'Velvet Upholstery', 'Smoked Glass', 'Matte Black Steel'],
//   },

//   'wood-mode': {
//     title: 'Midnight Luxe Dome',
//     description:
//       'A stylish dome designed for peaceful nights under the stars. The space blends warm wood finishes with modern luxury elements to create a cozy yet elegant glamping experience.',
//     // area: '2,800 sq ft',
//     // duration: '10 months',
//     images: [projectWood],
//     materials: ['Japanese Cedar', 'White Oak', 'Rice Paper Screens', 'Copper Accents'],
//   },

//   'urban-retreat': {
//     title: 'Serenity Horizon Dome',
//     description:
//       'A peaceful dome retreat set in the misty hills of Vagamon. Designed for relaxation, the space combines panoramic views, warm interiors, and natural textures to create a calm luxury glamping experience.',
//     // area: '3,000 sq ft',
//     // duration: '12 months',
//     images: [heroImage],
//     materials: ['Natural Wood Panels', 'Panoramic Glass', 'Soft Linen Fabrics', 'Ambient Lighting'],
//   },

//   'coastal-modern': {
//     title: 'Sunset Haven Dome',
//     description:
//       'A stunning dome designed to capture the magical sunset views of Vagamon. With cozy interiors and elegant textures, it creates the perfect romantic getaway surrounded by nature.',
//     // area: '3,100 sq ft',
//     // duration: '12 months',
//     images: [projectLast],
//     materials: ['Oak Wood', 'Glass Panels', 'Soft Textiles', 'Ambient Lighting'],
//   },

//   'minimalist-office': {
//     title: 'The Alpine Luxury Dome',
//     description:
//       'A beautifully designed luxury dome located in the scenic hills of Vagamon. Featuring elegant interiors, panoramic views, and cozy textures, this alpine-inspired retreat offers guests a peaceful and premium glamping experience surrounded by nature.',
//     // area: '3,200 sq ft',
//     // duration: '14 months',
//     images: [projectWhite],
//     materials: ['Panoramic Glass Panels', 'Natural Wood Interiors', 'Luxury Bedding', 'Warm Ambient Lighting'],
//   },

//   'room-spa': {
//     title: 'Private Spa Ensuite',
//     description:
//       'A luxurious spa-style bathroom designed with elegant fixtures and calming aesthetics, offering guests a refreshing and relaxing wellness experience.',
//     // area: '1,200 sq ft',
//     // duration: '6 months',
//     images: [washroom],
//     materials: ['Premium Tiles', 'Glass Shower Panels', 'Chrome Fixtures', 'Soft Lighting'],
//   },

//   'room-suite': {
//     title: 'Climate Comfort Suite',
//     description:
//       'A modern luxury suite designed for maximum comfort with climate-controlled interiors, cozy bedding, and stylish furnishings for a relaxing stay.',
//     // area: '1,500 sq ft',
//     // duration: '6 months',
//     images: [roomLight],
//     materials: ['Luxury Bedding', 'Wood Panels', 'Soft Lighting', 'Modern Furniture'],
//   },

//   'room-closet': {
//     title: 'Modern Minimalist Restroom Design',
//     description:
//       'A sleek minimalist restroom featuring clean lines, modern fittings, and elegant materials that reflect contemporary luxury design.',
//     // area: '1,000 sq ft',
//     // duration: '5 months',
//     images: [roomCloset],
//     materials: ['Ceramic Tiles', 'Matte Fixtures', 'Glass Panels', 'Minimalist Lighting'],
//   },
// };

// const ProjectDetail = () => {

//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [nameError, setNameError] = useState("");

//   const { id } = useParams<{ id: string }>();
//   const [isOpen, setIsOpen] = useState(false);

//   const [checkInError, setCheckInError] = useState("");
//   const [checkOutError, setCheckOutError] = useState("");

//   const today = new Date().toISOString().split("T")[0];

//   const project = projectsData[id || ''] || projectsData['natural-luxury'];
//   const validateName = () => {
//     if (name.trim() === "") {
//       setNameError("Full name is required");
//       return false;
//     }
//     setNameError("");
//     return true;
//   };

//   const validateDates = () => {
//     let valid = true;

//     if (!checkIn) {
//       setCheckInError("Check-in date is required");
//       valid = false;
//     } else if (checkIn < today) {
//       setCheckInError("Check-in must be a future date");
//       valid = false;
//     } else {
//       setCheckInError("");
//     }

//     if (!checkOut) {
//       setCheckOutError("Check-out date is required");
//       valid = false;
//     } else if (checkOut <= checkIn) {
//       setCheckOutError("Check-out must be after check-in");
//       valid = false;
//     } else {
//       setCheckOutError("");
//     }

//     return valid;
//   };

//   const bookingMessage = `Hello, I would like to reserve a stay at Pendora Glamps.

// Name: ${name}
// Email: ${email}
// Check-in Date: ${checkIn || "Not selected"}
// Check-out Date: ${checkOut || "Not selected"}
// `;

//   const whatsappLink = `https://wa.me/919061012312?text=${encodeURIComponent(
//     bookingMessage
//   )}`;

//   const emailLink = `mailto:info@pendoraglamps.com?subject=Room Booking Request&body=${encodeURIComponent(
//     bookingMessage
//   )}`;

//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     setName(value);

//     if (value.trim() === "") {
//       setNameError("Full name is required");
//     } else {
//       setNameError("");
//     }
//   };

//   return (
//     <Layout>
//       {/* Back Link */}
//       <section className="pt-28 md:pt-32">
//         <div className="container-wide">
//           {/* <Link
//             to="/projects"
//             className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Projects
//           </Link> */}
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

//             <h1 className="text-display-lg">{project.title}</h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="overflow-hidden aspect-[16/9] rounded-2xl"
//           >
//             <img
//               src={project.images[0]}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Details */}
//       <section className="pb-16 md:pb-24">
//         <div className="container-wide">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               <h2 className="text-section-title mb-6">About the Project</h2>
//               <p className="text-body-lg leading-relaxed">
//                 {project.description}
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="space-y-6"
//             >
//               {/* <div>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
//                   Area
//                 </p>
//                 <p className="text-xl font-medium">{project.area}</p>
//               </div>
//               <div>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
//                   Duration
//                 </p>
//                 <p className="text-xl font-medium">{project.duration}</p>
//               </div> */}
//               {/* <div>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">
//                   Materials
//                 </p>
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
//               </div> */}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       {/* <section className="pb-16 md:pb-24">
//         <div className="container-wide">
//           <h2 className="text-section-title mb-8">Gallery</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {project.images.slice(1).map((image, index) => (
//               <div
//                 key={index}
//                 className="rounded-2xl overflow-hidden aspect-[4/3]"
//               >
//                 <img
//                   src={image}
//                   alt={`${project.title} gallery ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* CTA */}
//       <section className="py-16 md:py-24" style={{ backgroundColor: "#e6f2f5" }}>
//         <div className="container-wide text-center">
//           <h2 className="text-display-md mb-6">
//             Ready to start your project?
//           </h2>

//           <p className="text-body-lg max-w-lg mx-auto mb-8">
//             Book a private consultation and let’s bring your vision to life.
//           </p>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white text-sm tracking-widest uppercase transition-all duration-500 hover:bg-transparent hover:text-black border border-black"
//           >
//             Book Now
//             <ArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>
//       </section>

//       {/* Modal */}
//       {/* Modal */}
//       {/* Premium Modal */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.94, y: 40 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.94, y: 40 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="fixed inset-0 flex items-center justify-center z-50 p-4"
//             >
//               <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="relative w-full max-w-xl bg-[#f8f8f6] shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-8"
//               >
//                 {/* Close */}
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>

//                 {/* Heading */}
//                 <h2 className="text-3xl font-serif mb-8 tracking-tight">
//                   Reserve Your Stay
//                 </h2>

//                 <form className="space-y-4 sm:space-y-5">

//                   {/* Name */}
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Full Name"
//                       value={name}
//                       onChange={handleNameChange}
//                       className={`w-full bg-transparent border px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl placeholder-gray-400 focus:outline-none ${nameError ? "border-red-500" : "border-gray-300"
//                         }`}
//                     />

//                     {nameError && (
//                       <p className="text-red-500 text-xs mt-1">{nameError}</p>
//                     )}
//                   </div>

//                   {/* Email */}
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full bg-transparent border border-gray-300 rounded-lg sm:rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-black transition"
//                   />

//                   {/* Check-in */}
//                   <div>
//                     <label className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-gray-500 mb-1 sm:mb-2">
//                       CHECK-IN DATE
//                     </label>

//                     <div className="relative">
//                       <input
//                         type="date"
//                         value={checkIn}
//                         min={today}
//                         onChange={(e) => setCheckIn(e.target.value)}
//                         className="w-full bg-transparent border border-gray-300 rounded-lg sm:rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm focus:outline-none"
//                       />

//                       <Calendar className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />

//                       {checkInError && (
//                         <p className="text-red-500 text-xs mt-1">{checkInError}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Check-out */}
//                   <div>
//                     <label className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-gray-500 mb-1 sm:mb-2">
//                       CHECK-OUT DATE
//                     </label>

//                     <div className="relative">
//                       <input
//                         type="date"
//                         value={checkOut}
//                         min={checkIn}
//                         onChange={(e) => setCheckOut(e.target.value)}
//                         className="w-full bg-transparent border border-gray-300 rounded-lg sm:rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm focus:outline-none"
//                       />

//                       <Calendar className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />

//                       {checkOutError && (
//                         <p className="text-red-500 text-xs mt-1">{checkOutError}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Check Availability Button */}
//                   <button
//                     type="button"
//                     onClick={() => navigate("/availability")}
//                     className="w-full border border-[#164e63] text-[#164e63] py-2.5 sm:py-3 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs hover:bg-[#164e63] hover:text-white transition"
//                   >
//                     Check Availability
//                   </button>

//                   {/* Divider */}
//                   <div className="flex items-center my-6 sm:my-8">
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                     <span className="px-3 text-[10px] sm:text-xs tracking-[0.25em] text-gray-500">
//                       BOOK VIA
//                     </span>
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                     <a
//                       href={whatsappLink}
//                       onClick={(e) => {
//                         if (!validateName() || !validateDates()) {
//                           e.preventDefault();
//                         }
//                       }}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="border border-green-600 text-green-600 py-2 sm:py-2 text-center uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs transition-all duration-300 hover:bg-green-600 hover:text-white"
//                     >
//                       Via WhatsApp
//                     </a>

//                     <a
//                       href={emailLink}
//                       onClick={(e) => {
//                         if (!validateName() || !validateDates()) {
//                           e.preventDefault();
//                         }
//                       }}
//                       className="border border-black text-black py-2.5 sm:py-3 text-center uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs hover:bg-black hover:text-white transition"
//                     >
//                       Via Email
//                     </a>
//                   </div>

//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </Layout>
//   );
// };

// export default ProjectDetail;

import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

import projectNatural from '@/assets/012.jpg';
import projectBlack from '@/assets/ABC03979 (2).jpg';
import projectWood from '@/assets/ABC03867 (1) (1).jpg';
import heroImage from '@/assets/ROOM03868s (1).jpeg';
import projectWhite from '@/assets/ABC03995 (1).jpg';
import projectLast from '@/assets/ABC03895 (1).jpg';
import washroom from '@/assets/WASHROOM03921 (1).jpg';
import roomLight from '@/assets/AC03900 (1).jpg';
import roomCloset from '@/assets/CLOSET03915 (1).jpg';

// Room data
const rooms = [
  {
    id: 'forest-haven-dome',
    title: 'Forest Haven Dome',
    location: 'Vagamon',
    description:
      'Immerse yourself in nature with our Forest Haven Dome. Modern luxury meets rustic charm for the ultimate glamping experience.',
    heroImage: heroImage,
    images: [
      { id: '1', title: 'Natural View', image: projectNatural },
      { id: '2', title: 'Black Interior', image: projectBlack },
      { id: '3', title: 'Wood Accent', image: projectWood },
      { id: '4', title: 'Bedroom', image: roomLight },
    ],
  },
  {
    id: 'alpine-luxury-dome',
    title: 'Alpine Luxury Dome',
    location: 'Vagamon',
    description:
      'The Alpine Luxury Dome offers premium comfort with stylish interiors and stunning scenic views. Perfect for relaxation and elegance.',
    heroImage: heroImage,
    images: [
      { id: '1', title: 'White Dome', image: projectWhite },
      { id: '2', title: 'Sunset View', image: projectLast },
      { id: '3', title: 'Washroom', image: washroom },
      { id: '4', title: 'Closet', image: roomCloset },
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  if (!room) return <Layout><p className="text-center mt-20">Room not found</p></Layout>;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={room.heroImage}
          alt={room.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{room.title}</h1>
          <p className="text-white/90 max-w-2xl">{room.description}</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="py-6 px-4 md:px-6 lg:px-10">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
          <Link to="/" className="hover:text-black">Home</Link> &gt;
          <Link to="/projects" className="hover:text-black mx-2">Glamps</Link> &gt;
          <span className="text-[#164e63]">{room.title}</span>
        </p>
      </div>

      {/* Child images one by one */}
      <section className="px-4 md:px-6 lg:px-10 space-y-10 pb-16">
        {room.images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-[60vh] md:h-[80vh] object-cover"
            />
            <div className="py-2 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#164e63]">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
};

export default ProjectDetail;