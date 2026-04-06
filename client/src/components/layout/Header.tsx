// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Calendar, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

// const Header = () => {
//   const navigate = useNavigate();

//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isBookingOpen, setIsBookingOpen] = useState(false);

//   /* Guest Info */
//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState("");

//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   /* Booking Dates */
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");

//   const [checkInError, setCheckInError] = useState("");
//   const [checkOutError, setCheckOutError] = useState("");

//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);

//   /* Today Date (for min date restriction) */
//   const today = new Date().toISOString().split("T")[0];

//   const location = useLocation();
//   const validateName = () => {
//     if (name.trim() === "") {
//       setNameError("Full name is required");
//       return false;
//     }
//     return true;
//   };

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);

//     if (!value.trim()) {
//       setEmailError("Email is required");
//     } else if (!/\S+@\S+\.\S+/.test(value)) {
//       setEmailError("Invalid email format");
//     } else {
//       setEmailError("");
//     }
//   };

//   const validateEmail = () => {
//     if (!email.trim()) {
//       setEmailError("Email is required");
//       return false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError("Invalid email format");
//       return false;
//     } else {
//       setEmailError("");
//       return true;
//     }
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

//   const bookingMessage = `Hello, I would like to book a stay at Pendora Glamps.

// Name: ${name}
// Email: ${email || "Not provided"}
// Check-in Date: ${checkIn || "Not selected"}
// Check-out Date: ${checkOut || "Not selected"}
// Adults: ${adults}
// Children: ${children}
// `;

//   const validateGuests = () => {
//     if (adults < 1) {
//       alert("At least 1 adult required");
//       return false;
//     }
//     return true;
//   };

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

//   /* Scroll Hide / Show */
//   useEffect(() => {
//     const controlNavbar = () => {
//       if (window.scrollY > lastScrollY && window.scrollY > 100) {
//         setShowNav(false);
//       } else {
//         setShowNav(true);
//       }

//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", controlNavbar);
//     return () => window.removeEventListener("scroll", controlNavbar);
//   }, [lastScrollY]);

//   /* Close Mobile On Route Change */
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   /* Lock Background Scroll + ESC Close */
//   useEffect(() => {
//     if (isBookingOpen) {
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.documentElement.style.overflow = "unset";
//     }

//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setIsBookingOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEsc);

//     return () => {
//       document.documentElement.style.overflow = "unset";
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [isBookingOpen]);

//   const navLinks = [
//     { name: "HOME", path: "/" },
//     { name: "GALLERY", path: "/gallery" },
//     { name: "ABOUT", path: "/about" },
//     { name: "BLOGS", path: "/blogs" },
//     { name: "DISCOVER", path: "/facilities" },
//     { name: "EXPERIENCE", path: "/experience" },
//     { name: "CONTACT US", path: "/contact" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
//           }`}
//       >
//         <div className="container-wide">
//           <nav className="flex items-center justify-between h-[70px] md:h-[110px] lg:h-[120px]">

//             {/* Logo */}
//             <Link to="/" className="flex items-center flex-shrink-0">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-[90px] sm:h-[65px] md:h-[140px] lg:h-[180px] w-auto object-contain"
//               />
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-4 xl:gap-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="relative font-serif text-[13px] uppercase tracking-tight text-black-600 hover:text-black transition-colors group whitespace-nowrap"
//                 >
//                   {link.name}

//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-[#164e63] transition-all duration-300 ${location.pathname === link.path
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                       }`}
//                   ></span>
//                 </Link>
//               ))}
//             </div>

//             {/* Book Now Button */}
//             <div className="hidden lg:block ml-4 xl:ml-6">
//               <button
//                 onClick={() => setIsBookingOpen(true)}
//                 className="font-serif bg-[#164e63] border border-[#155e75] text-white px-6 py-4 uppercase text-[13px] tracking-[0.2em] whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-[#155e75]"
//               >
//                 Book Now
//               </button>
//             </div>

//             {/* Mobile Toggle */}
//             <button
//               className="lg:hidden p-2 flex items-center justify-center"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>

//           </nav>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden bg-white border-t"
//             >
//               <div className="container-wide py-6 space-y-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="block font-serif text-md uppercase tracking-wide"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}

//                 <button
//                   onClick={() => setIsBookingOpen(true)}
//                   className="font-serif bg-[#164e63] border border-[#155e75] text-white px-4 py-2 uppercase text-[13px] tracking-[0.2em] whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-[#155e75]"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Booking Modal */}

//       <AnimatePresence>
//         {isBookingOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsBookingOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 40 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 40 }}
//               transition={{ duration: 0.35 }}
//               className="fixed inset-0 z-[60] flex items-center justify-center p-4"
//             >
//               <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="relative w-full max-w-xl bg-[#f3f3f1] shadow-2xl p-10 rounded-2xl"
//               >
//                 {/* Close */}
//                 <button
//                   onClick={() => setIsBookingOpen(false)}
//                   className="absolute top-6 right-6 text-gray-500 hover:text-black"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 {/* Heading */}
//                 <h2 className="text-4xl font-serif text-gray-900 mb-10">
//                   Reserve Your Stay
//                 </h2>

//                 <form className="space-y-3 text-[12px] md:text-[13px]">

//                   {/* Name */}
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Full Name"
//                       value={name}
//                       onChange={handleNameChange}
//                       className={`w-full bg-white border px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none text-sm
//         ${nameError ? "border-red-500" : "border-gray-300"}`}
//                     />
//                     {nameError && (
//                       <p className="text-red-500 text-[10px] mt-1">{nameError}</p>
//                     )}
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <input
//                       type="email"
//                       placeholder="Email Address"
//                       value={email}
//                       onChange={handleEmailChange}
//                       className={`w-full bg-white border px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none text-sm
//         ${emailError ? "border-red-500" : "border-gray-300"}`}
//                     />
//                     {emailError && (
//                       <p className="text-red-500 text-[10px] mt-1">{emailError}</p>
//                     )}
//                   </div>

//                   {/* Check-in */}
//                   <div>
//                     <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
//                       CHECK-IN DATE
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         value={checkIn}
//                         min={today}
//                         onChange={(e) => setCheckIn(e.target.value)}
//                         className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
//                       />
//                       <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
//                     </div>
//                     {checkInError && (
//                       <p className="text-red-500 text-[10px] mt-1">{checkInError}</p>
//                     )}
//                   </div>

//                   {/* Check-out */}
//                   <div>
//                     <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
//                       CHECK-OUT DATE
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         value={checkOut}
//                         min={checkIn || today}
//                         onChange={(e) => setCheckOut(e.target.value)}
//                         className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
//                       />
//                       <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
//                     </div>
//                     {checkOutError && (
//                       <p className="text-red-500 text-[10px] mt-1">{checkOutError}</p>
//                     )}
//                   </div>

//                   {/* Guests */}
//                   <div className="grid grid-cols-2 gap-2">
//                     {/* Adults */}
//                     <div>
//                       <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
//                         ADULTS
//                       </label>
//                       <select
//                         value={adults}
//                         onChange={(e) => setAdults(Number(e.target.value))}
//                         className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
//                       >
//                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                           <option key={num} value={num}>
//                             {num}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Children */}
//                     <div>
//                       <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
//                         CHILDREN
//                       </label>
//                       <select
//                         value={children}
//                         onChange={(e) => setChildren(Number(e.target.value))}
//                         className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
//                       >
//                         {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                           <option key={num} value={num}>
//                             {num}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Check Availability */}
//                   <button
//                     type="button"
//                     onClick={() => navigate("/availability")}
//                     className="w-full border border-[#164e63] text-[#164e63] py-2 uppercase tracking-[0.15em] text-[11px] hover:bg-[#164e63] hover:text-white transition"
//                   >
//                     Check Availability
//                   </button>

//                   {/* Divider */}
//                   <div className="flex items-center my-4">
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                     <span className="px-2 text-[9px] tracking-widest text-gray-500">
//                       BOOK VIA
//                     </span>
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="grid grid-cols-2 gap-2">
//                     <a
//                       href={whatsappLink}
//                       onClick={(e) => {
//                         if (!validateName() || !validateEmail() || !validateDates() || !validateGuests()) {
//                           e.preventDefault();
//                         }
//                       }}
//                       target="_blank"
//                       className="border border-green-600 text-green-600 py-2 text-center uppercase tracking-[0.15em] text-[10px] hover:bg-green-600 hover:text-white transition rounded-md"
//                     >
//                       Via WhatsApp
//                     </a>

//                     <a
//                       href={emailLink}
//                       onClick={(e) => {
//                         if (!validateName() || !validateEmail() || !validateDates() || !validateGuests()) {
//                           e.preventDefault();
//                         }
//                       }}
//                       className="border border-black text-black py-2 text-center uppercase tracking-[0.15em] text-[10px] hover:bg-black hover:text-white transition rounded-md"
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
//     </>
//   );
// };

// export default Header;




import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

interface BookingFormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}

const BOOKING_FORM_STORAGE_KEY = "bookingFormData";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const params = new URLSearchParams(location.search);
  const isBookingOpen = params.get("booking") === "true";

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [isBookingOpen, setIsBookingOpen] = useState(false);

  /* Guest Info */
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  /* Booking Dates */
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [checkInError, setCheckInError] = useState("");
  const [checkOutError, setCheckOutError] = useState("");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  /* Persist booking fields across route changes */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.sessionStorage.getItem(BOOKING_FORM_STORAGE_KEY);
    if (!saved) return;

    try {
      const data = JSON.parse(saved) as Partial<BookingFormData>;

      if (data.name) setName(data.name);
      if (data.email) setEmail(data.email);
      if (data.checkIn) setCheckIn(data.checkIn);
      if (data.checkOut) setCheckOut(data.checkOut);
      if (typeof data.adults === "number") setAdults(data.adults);
      if (typeof data.children === "number") setChildren(data.children);
    } catch {
      window.sessionStorage.removeItem(BOOKING_FORM_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const data: BookingFormData = {
      name,
      email,
      checkIn,
      checkOut,
      adults,
      children,
    };

    window.sessionStorage.setItem(BOOKING_FORM_STORAGE_KEY, JSON.stringify(data));
  }, [name, email, checkIn, checkOut, adults, children]);

  /* Today Date (for min date restriction) */
  const today = new Date().toISOString().split("T")[0];

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Full name is required");
      return false;
    }
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validateDates = () => {
    let valid = true;

    if (!checkIn) {
      setCheckInError("Check-in date is required");
      valid = false;
    } else if (checkIn < today) {
      setCheckInError("Check-in must be a future date");
      valid = false;
    } else {
      setCheckInError("");
    }

    if (!checkOut) {
      setCheckOutError("Check-out date is required");
      valid = false;
    } else if (checkOut <= checkIn) {
      setCheckOutError("Check-out must be after check-in");
      valid = false;
    } else {
      setCheckOutError("");
    }

    return valid;
  };

  const bookingMessage = `Hello, I would like to book a stay at Pendora Glamps.

Name: ${name}
Email: ${email || "Not provided"}
Check-in Date: ${checkIn || "Not selected"}
Check-out Date: ${checkOut || "Not selected"}
Adults: ${adults}
Children: ${children}
`;

  const validateGuests = () => {
    if (adults < 1) {
      alert("At least 1 adult required");
      return false;
    }
    return true;
  };

  const whatsappLink = `https://wa.me/919061012312?text=${encodeURIComponent(
    bookingMessage
  )}`;

  const emailLink = `mailto:info@pendoraglamps.com?subject=Room Booking Request&body=${encodeURIComponent(
    bookingMessage
  )}`;

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);


    if (value.trim() === "") {
      setNameError("Full name is required");
    } else {
      setNameError("");
    }
  };

  /* Scroll Hide / Show */
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  /* Close Mobile On Route Change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  /* Lock Background Scroll + ESC Close */
  useEffect(() => {
    if (isBookingOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
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
    { name: "BLOGS", path: "/blogs" },
    { name: "DISCOVER", path: "/facilities" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-[70px] md:h-[110px] lg:h-[120px]">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-[90px] sm:h-[65px] md:h-[140px] lg:h-[180px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative font-serif text-[13px] uppercase tracking-tight text-black-600 hover:text-black transition-colors group whitespace-nowrap"
                >
                  {link.name}

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
            <div className="hidden lg:block ml-4 xl:ml-6">
              <button
                onClick={() => navigate("/?booking=true")}
                className="font-serif bg-[#164e63] border border-[#155e75] text-white px-6 py-4 uppercase text-[13px] tracking-[0.2em] whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-[#155e75]"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 flex items-center justify-center"
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
              className="lg:hidden bg-white border-t"
            >
              <div className="container-wide py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block font-serif text-md uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={() => navigate("/?booking=true")}
                  className="font-serif bg-[#164e63] border border-[#155e75] text-white px-4 py-2 uppercase text-[13px] tracking-[0.2em] whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-[#155e75]"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Booking Modal */}

      <AnimatePresence>
        {isBookingOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => navigate(-1)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl bg-[#f3f3f1] shadow-2xl p-10 rounded-2xl"
              >
                {/* Close */}
                <button
                  onClick={() => navigate(-1)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Heading */}
                <h2 className="text-4xl font-serif text-gray-900 mb-10">
                  Reserve Your Stay
                </h2>

                <form className="space-y-3 text-[12px] md:text-[13px]">

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={handleNameChange}
                      className={`w-full bg-white border px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none text-sm
        ${nameError ? "border-red-500" : "border-gray-300"}`}
                    />
                    {nameError && (
                      <p className="text-red-500 text-[10px] mt-1">{nameError}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full bg-white border px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none text-sm
        ${emailError ? "border-red-500" : "border-gray-300"}`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-[10px] mt-1">{emailError}</p>
                    )}
                  </div>

                  {/* Check-in */}
                  <div>
                    <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
                      CHECK-IN DATE
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkIn}
                        min={today}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                      />
                      <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                    {checkInError && (
                      <p className="text-red-500 text-[10px] mt-1">{checkInError}</p>
                    )}
                  </div>

                  {/* Check-out */}
                  <div>
                    <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
                      CHECK-OUT DATE
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || today}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                      />
                      <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                    {checkOutError && (
                      <p className="text-red-500 text-[10px] mt-1">{checkOutError}</p>
                    )}
                  </div>

                  {/* Guests */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Adults */}
                    <div>
                      <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
                        ADULTS
                      </label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Children */}
                    <div>
                      <label className="block text-[9px] tracking-widest text-gray-500 mb-1">
                        CHILDREN
                      </label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Check Availability */}
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/availability", {
                        state: { fromBooking: true }
                      })
                    }
                    className="w-full border border-[#164e63] text-[#164e63] py-2 uppercase tracking-[0.15em] text-[11px] hover:bg-[#164e63] hover:text-white transition"
                  >
                    Check Availability
                  </button>

                  {/* Divider */}
                  <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-2 text-[9px] tracking-widest text-gray-500">
                      BOOK VIA
                    </span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={whatsappLink}
                      onClick={(e) => {
                        if (!validateName() || !validateEmail() || !validateDates() || !validateGuests()) {
                          e.preventDefault();
                        }
                      }}
                      target="_blank"
                      className="border border-green-600 text-green-600 py-2 text-center uppercase tracking-[0.15em] text-[10px] hover:bg-green-600 hover:text-white transition rounded-md"
                    >
                      Via WhatsApp
                    </a>

                    <a
                      href={emailLink}
                      onClick={(e) => {
                        if (!validateName() || !validateEmail() || !validateDates() || !validateGuests()) {
                          e.preventDefault();
                        }
                      }}
                      className="border border-black text-black py-2 text-center uppercase tracking-[0.15em] text-[10px] hover:bg-black hover:text-white transition rounded-md"
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