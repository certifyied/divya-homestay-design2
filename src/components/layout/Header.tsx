// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isBookingOpen, setIsBookingOpen] = useState(false);

//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   const navLinks = [
//     { name: 'HOME', path: '/' },
//     { name: 'ABOUT', path: '/about' },
//     { name: 'SERVICES', path: '/services' },
//     { name: 'ROOMS', path: '/projects' },
//     { name: 'CONTACT US', path: '/contact' },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//         ? "bg-white/95 backdrop-blur-md shadow-md"
//         : "bg-transparent"
//         }`}
//     >
//       <div className="container-wide">
//         <nav className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-[110px] w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-10">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`text-sm uppercase tracking-wider transition-colors ${location.pathname === link.path
//                   ? "text-black"
//                   : "text-gray-600 hover:text-black"
//                   }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Book Now Button */}
//           <div className="hidden md:block">
//             <button
//               onClick={() => setIsBookingOpen(true)}
//               className="border border-black text-black px-8 py-3 uppercase text-xs tracking-[0.25em] transition-all duration-300 hover:bg-black hover:text-white"
//             >
//               Book Now
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-t"
//           >
//             <div className="container-wide py-6 space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="block text-lg uppercase tracking-wide"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <button
//                 onClick={() => setIsBookingOpen(true)}
//                 className="border-2 border-black text-black px-6 py-3 uppercase text-sm tracking-[0.25em] mt-4"
//               >
//                 Book Now
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Premium Booking Modal */}
//       <AnimatePresence>
//         {isBookingOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsBookingOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.92, y: 40 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.92, y: 40 }}
//               transition={{ duration: 0.35 }}
//               className="fixed inset-0 flex items-center justify-center z-50 p-4"
//             >
//               <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl p-10"
//               >
//                 <button
//                   onClick={() => setIsBookingOpen(false)}
//                   className="absolute top-6 right-6"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <h2 className="text-3xl font-semibold mb-6 tracking-wide">
//                   Reserve Your Stay
//                 </h2>

//                 <form className="space-y-5">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//                   />

//                   {/* Booking Start Date */}
//                   <div>
//                     <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
//                       Check-in Date
//                     </label>
//                     <input
//                       type="date"
//                       value={startDate}
//                       min={new Date().toISOString().split("T")[0]}
//                       onChange={(e) => {
//                         setStartDate(e.target.value);
//                         if (endDate && e.target.value > endDate) {
//                           setEndDate("");
//                         }
//                       }}
//                       className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//                     />
//                   </div>

//                   {/* Booking End Date */}
//                   <div>
//                     <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
//                       Check-out Date
//                     </label>
//                     <input
//                       type="date"
//                       value={endDate}
//                       min={startDate || new Date().toISOString().split("T")[0]}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//                     />
//                   </div>

//                   {/* Divider */}
//                   <div className="flex items-center my-6">
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                     <span className="px-4 text-sm text-gray-500 uppercase tracking-widest">
//                       Book Via
//                     </span>
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                   </div>

//                   {/* WhatsApp + Email Buttons */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                     {/* WhatsApp */}
//                     <a
//                       href="https://wa.me/918136951157"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="border-2 border-green-500 text-green-600 py-3 text-center uppercase text-sm tracking-widest hover:bg-green-500 hover:text-white transition-all duration-300"
//                     >
//                       Via WhatsApp
//                     </a>

//                     {/* Email */}
//                     <a
//                       href="mailto:booking@pendoraglamps.com"
//                       className="border-2 border-black text-black py-3 text-center uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
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
//     </header>
//   );
// };

// export default Header;





import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const location = useLocation();

  /* ================= Scroll Effect ================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Close Mobile On Route Change ================= */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  /* ================= Lock Background Scroll + ESC Close ================= */
  useEffect(() => {
    if (isBookingOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsBookingOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.documentElement.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isBookingOpen]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "EXPERIENCE", path: "/projects" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
          }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-[60px] md:h-[120px]">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-[90px] md:h-[180px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-sm uppercase tracking-tight text-gray-600 hover:text-black transition-colors group"
                >
                  {link.name}

                  {/* Animated Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#164e63] transition-all duration-300 ${location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Book Now Button */}
            <div className="hidden md:block">
              {/* <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-sm tracking-widest uppercase transition-all duration-500 hover:bg-transparent  hover:text-black border border-black"
              >
                Book Now
                <ArrowUpRight className="w-4 h-4" />
              </button> */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#164e63] border border-[#155e75] text-white px-6 py-3 uppercase text-sm tracking-[0.25em] flex items-center gap-1 transition-all duration-300 hover:bg-[#155e75]"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container-wide py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-md uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-transparent border border-black text-black px-4 py-2 uppercase text-sm tracking-[0.25em] flex items-center gap-1 transition-all duration-300 hover:text-gray-900"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= Premium Booking Modal ================= */}
      <AnimatePresence>
        {isBookingOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsBookingOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            />

            {/* Modal Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl p-8"
              >
                {/* Close */}
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-3xl font-semibold mb-6 tracking-wide">
                  Reserve Your Stay
                </h2>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />

                  {/* Check-in */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        if (endDate && e.target.value > endDate) {
                          setEndDate("");
                        }
                      }}
                      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  {/* Check-out */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      min={startDate || new Date().toISOString().split("T")[0]}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  {/* Divider */}
                  <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-sm text-gray-500 uppercase tracking-widest">
                      Book Via
                    </span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="https://wa.me/918136951157"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-500 text-green-600 py-3 text-center uppercase text-sm tracking-widest hover:bg-green-500 hover:text-white transition-all duration-300"
                    >
                      Via WhatsApp
                    </a>

                    <a
                      href="mailto:booking@pendoraglamps.com"
                      className="border-2 border-black text-black py-3 text-center uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
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
    </>
  );
};

export default Header;
