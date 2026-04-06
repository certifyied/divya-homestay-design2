// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Layout from '@/components/layout/Layout';
// import projectNatural from '@/assets/ABC03860 (1).jpg';
// import projectBlack from '@/assets/ABC03979 (2).jpg';
// import projectWhite from '@/assets/ABC03995 (1).jpg';
// import projectWood from '@/assets/ABC03867 (1) (1).jpg';
// import heroImage from '@/assets/ROOM03868s (1).jpeg';
// import projectLast from '@/assets/ABC03895 (1).jpg';
// import washroom from '@/assets/WASHROOM03921 (1).jpg';
// import roomLight from '@/assets/AC03900 (1).jpg';
// import roomCloset from '@/assets/CLOSET03915 (1).jpg';

// const rooms = [
//   {
//     id: 'forest-haven-dome',
//     title: 'Forest Haven Dome',
//     location: 'Vagamon',
//     images: [
//       projectNatural,
//       projectBlack,
//       projectWood,
//       heroImage,
//     ],
//   },
//   {
//     id: 'alpine-luxury-dome',
//     title: 'Alpine Luxury Dome',
//     location: 'Vagamon',
//     images: [
//       projectWhite,
//       projectLast,
//       washroom,
//       roomLight,
//       roomCloset,
//     ],
//   },
// ];

// const Projects = () => {
//   return (
//     <Layout>
//       {/* Hero Section */}
//       {/* Hero Section with Wide Image */}
//       <section className="relative w-full h-[80vh] overflow-hidden">

//         {/* Background Image */}
//         <img
//           src={heroImage}
//           alt="Glamping Retreat"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Text Content */}
//         <div className="relative z-10 h-full flex items-center">
//           <div className="container-wide">

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-2xl text-white"
//             >
//               <h1 className="text-display-lg mb-6">
//                 Elegant Glamping Retreats
//               </h1>

//               <p className="text-body-lg text-white/90">
//                 Discover our collection of luxury glamping suites designed for comfort,
//                 style, and unforgettable experiences in nature.
//               </p>

//             </motion.div>

//           </div>
//         </div>

//       </section>
//       <div className="container-wide py-6">
//         <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
//           <Link to="/" className="hover:text-black">
//             Home
//           </Link>
//           <span className="mx-2">&gt;</span>
//           <span className="text-[#164e63]">Rooms</span>
//         </p>
//       </div>

//       {/* Intro Section */}
//       <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-semibold text-[#164e63] mb-6">
//           Our Luxury Glamping Suites
//         </h2>

//         {/* Description */}
//         <p className="text-lg text-muted-foreground leading-relaxed">
//           Discover a perfect blend of nature and comfort at our luxury glamping retreat.
//           Each dome is thoughtfully designed to provide modern amenities while allowing
//           you to stay immersed in the beauty of the surrounding landscape. Whether you're
//           planning a romantic getaway, a peaceful retreat, or a memorable stay with family
//           and friends, our glamping suites offer a unique experience that combines
//           relaxation, elegance, and adventure.
//         </p>

//       </div>
//       {/* Projects Grid */}
//       <section className="pb-16 md:pb-24">
//         <div className="container-wide">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {rooms.map((room) => (
//               <motion.div
//                 key={room.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="rounded-3xl overflow-hidden shadow-lg bg-white"
//               >
//                 {/* Hero Image */}
//                 <div className="relative h-80 md:h-96 overflow-hidden">
//                   <img
//                     src={room.images[0]}
//                     alt={room.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
//                     <p className="text-white/80 text-sm mb-1">{room.location}</p>
//                     <h3 className="text-white text-2xl font-semibold">{room.title}</h3>
//                     <Link to={`/projects/${room.id}`}>
//                       <button className="mt-3 px-5 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition">
//                         Explore Room
//                       </button>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Mini Gallery */}
//                 <div className="grid grid-cols-2 md:grid-cols-2 gap-2 p-4">
//                   {room.images.slice(1).map((img, idx) => (
//                     <div key={idx} className="h-32 md:h-36 overflow-hidden rounded-xl">
//                       <img
//                         src={img}
//                         alt={`${room.title} ${idx + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Projects;


import { ChangeEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import projectNatural from '@/assets/012.jpg';
import projectBlack from '@/assets/ABC03979 (2).jpg';
import projectWhite from '@/assets/ABC03995 (1).jpg';
import projectWood from '@/assets/ABC03867 (1) (1).jpg';
import heroImage from '@/assets/ROOM03868s (1).jpeg';
import projectLast from '@/assets/ABC03895 (1).jpg';
import washroom from '@/assets/WASHROOM03921 (1).jpg';
import roomLight from '@/assets/AC03900 (1).jpg';
import roomCloset from '@/assets/CLOSET03915 (1).jpg';

interface BookingFormData {
  showBookingModal: boolean;
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}

const BOOKING_FORM_STORAGE_KEY = 'projectsBookingFormData';

const rooms = [
  {
    id: 'forest-haven-dome',
    title: 'Forest Haven Dome',
    images: [projectNatural, projectBlack, projectWood, heroImage],
  },
  {
    id: 'alpine-luxury-dome',
    title: 'Alpine Luxury Dome',
    images: [projectWhite, projectLast, washroom, roomLight, roomCloset],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  // Booking Modal
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [checkInError, setCheckInError] = useState('');
  const [checkOutError, setCheckOutError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = window.sessionStorage.getItem(BOOKING_FORM_STORAGE_KEY);
    if (!saved) return;

    try {
      const data = JSON.parse(saved) as Partial<BookingFormData>;

      if (typeof data.showBookingModal === 'boolean') {
        setShowBookingModal(data.showBookingModal);
      }
      if (typeof data.name === 'string') setName(data.name);
      if (typeof data.email === 'string') setEmail(data.email);
      if (typeof data.checkIn === 'string') setCheckIn(data.checkIn);
      if (typeof data.checkOut === 'string') setCheckOut(data.checkOut);
      if (typeof data.adults === 'number') setAdults(data.adults);
      if (typeof data.children === 'number') setChildren(data.children);
    } catch {
      window.sessionStorage.removeItem(BOOKING_FORM_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const data: BookingFormData = {
      showBookingModal,
      name,
      email,
      checkIn,
      checkOut,
      adults,
      children,
    };

    window.sessionStorage.setItem(BOOKING_FORM_STORAGE_KEY, JSON.stringify(data));
  }, [showBookingModal, name, email, checkIn, checkOut, adults, children]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!e.target.value.trim()) setNameError('Full name is required');
    else setNameError('');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value.trim()) setEmailError('Email is required');
    else setEmailError('');
  };

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Full name is required');
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    }
    return true;
  };

  const validateDates = () => {
    let valid = true;

    if (!checkIn) {
      setCheckInError('Check-in date is required');
      valid = false;
    } else if (checkIn < today) {
      setCheckInError('Check-in must be a future date');
      valid = false;
    } else setCheckInError('');

    if (!checkOut) {
      setCheckOutError('Check-out date is required');
      valid = false;
    } else if (checkOut <= checkIn) {
      setCheckOutError('Check-out must be after check-in');
      valid = false;
    } else setCheckOutError('');

    return valid;
  };

  const validateGuests = () => {
    return adults > 0;
  };

  const bookingMessage = `Hello, I would like to book a stay at Pendora Glamps.
Name: ${name}
Email: ${email}
Check-in: ${checkIn || 'Not selected'}
Check-out: ${checkOut || 'Not selected'}
Adults: ${adults}
Children: ${children}`;

  const whatsappLink = `https://wa.me/919061012312?text=${encodeURIComponent(bookingMessage)}`;
  const emailLink = `mailto:info@pendoraglamps.com?subject=Room Booking Request&body=${encodeURIComponent(
    bookingMessage
  )}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[460px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Glamping Retreat"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-6 md:px-12 max-w-3xl text-white">

            <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
              Elegant Glamping Retreats
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Discover our collection of luxury glamping suites designed for comfort,
              style, and unforgettable experiences in nature.
            </p>

          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container-wide py-6">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#164e63]">Glamps</span>
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#164e63] mb-6">Our Luxury Glamping Suites</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Discover a perfect blend of nature and comfort at our luxury glamping retreat. Each dome is thoughtfully designed to provide modern amenities while allowing you to stay immersed in the beauty of the surrounding landscape.
        </p>
      </div>

      {/* Rooms Grid */}
      <section className="pb-16 md:pb-24">
        <div className="px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {rooms.map((room) => (
            <motion.div key={room.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden shadow-lg bg-white">
              <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <img src={room.images[0]} alt={room.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center text-center">
                  {/* <p className="text-white/80 text-sm mb-1">{room.location}</p> */}
                  <h3 className="text-white text-2xl font-semibold">{room.title}</h3>
                  <Link to={`/projects/${room.id}`}>
                    <button className="font-serif mt-3 px-5 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition">EXPLORE ROOM</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Book Now Button */}
        <div className="flex justify-center mt-10">
          <button onClick={() => setShowBookingModal(true)} className="px-6 py-3 bg-[#164e63] text-white uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-[#164e63] border border-[#164e63] transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 relative">
            <button onClick={() => setShowBookingModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black">✕</button>
            <h2 className="text-lg font-semibold mb-3">Book Your Stay</h2>

            {/* Booking Form */}
            <form className="space-y-3 text-[12px] md:text-[13px]">
              {/* Name */}
              <div>
                <input type="text" placeholder="Full Name" value={name} onChange={handleNameChange} className={`w-full bg-white border px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none text-sm ${nameError ? 'border-red-500' : 'border-gray-300'}`} />
                {nameError && <p className="text-red-500 text-[10px] mt-1">{nameError}</p>}
              </div>

              {/* Email */}
              <div>
                <input type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} className={`w-full bg-white border px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none text-sm ${emailError ? 'border-red-500' : 'border-gray-300'}`} />
                {emailError && <p className="text-red-500 text-[10px] mt-1">{emailError}</p>}
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-[9px] tracking-widest text-gray-500 mb-1">CHECK-IN DATE</label>
                <div className="relative">
                  <input type="date" value={checkIn} min={today} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none" />
                  <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                {checkInError && <p className="text-red-500 text-[10px] mt-1">{checkInError}</p>}
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-[9px] tracking-widest text-gray-500 mb-1">CHECK-OUT DATE</label>
                <div className="relative">
                  <input type="date" value={checkOut} min={checkIn || today} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none" />
                  <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                {checkOutError && <p className="text-red-500 text-[10px] mt-1">{checkOutError}</p>}
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] tracking-widest text-gray-500 mb-1">ADULTS</label>
                  <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] tracking-widest text-gray-500 mb-1">CHILDREN</label>
                  <select value={children} onChange={(e) => setChildren(Number(e.target.value))} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>
              </div>

              {/* Check Availability Button Above Divider */}
              <button type="button" onClick={() => navigate('/availability')} className="w-full border border-[#164e63] text-[#164e63] py-2 uppercase tracking-[0.15em] text-[11px] hover:bg-[#164e63] hover:text-white transition">
                Check Availability
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-2 text-[9px] tracking-widest text-gray-500">BOOK VIA</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* WhatsApp & Email Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a href={whatsappLink} target="_blank" onClick={(e) => { if (!validateName() || !validateEmail() || !validateDates() || !validateGuests()) e.preventDefault() }} className="border border-green-600 text-green-600 py-2 text-center uppercase tracking-[0.15em] text-[10px] hover:bg-green-600 hover:text-white transition rounded-md">Via WhatsApp</a>

                <a href={emailLink} onClick={(e) => { if (!validateName() || !validateEmail() || !validateDates() || !validateGuests()) e.preventDefault() }} className="border border-black text-black py-2 text-center uppercase tracking-[0.15em] text-[10px] hover:bg-black hover:text-white transition rounded-md">Via Email</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;