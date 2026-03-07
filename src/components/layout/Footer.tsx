// import { Link } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

// const Footer = () => {
//   return (
//     <footer className="bg-foreground text-primary-foreground py-16 md:py-24">
//       <div className="container-wide">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <Link to="/" className="flex items-center mb-6">
//               <img
//                 src={logo}
//                 alt="Pendora Glamps Logo"
//                 className="h-[120px] w-auto object-contain"
//               />
//             </Link>
//             <p className="text-primary-foreground/70 max-w-md leading-relaxed">
//               We design with heart — walking every step of the journey alongside our clients,
//               from first sketch to final handover.
//             </p>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Navigation</h4>
//             <ul className="space-y-3">
//               {['Home', 'About Us', 'Benefits', 'Projects', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
//                     className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Contact</h4>
//             <ul className="space-y-3 text-primary-foreground/70">
//               <li>hello@innerform.studio</li>
//               <li>+1 (555) 123-4567</li>
//               <li>
//                 123 Design District<br />
//                 New York, NY 10001
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
//           <p className="text-primary-foreground/50 text-sm">
//             © 2025 INNERFORM. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6 mt-4 md:mt-0">
//             {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
//               <a
//                 key={social}
//                 href="#"
//                 className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-1"
//               >
//                 {social}
//                 <ArrowUpRight className="w-3 h-3" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Link } from "react-router-dom";
// import {
//   FaInstagram,
//   FaTiktok,
//   FaSpotify,
//   FaYoutube,
//   FaPinterest,
//   FaFacebookF,
// } from "react-icons/fa";
// import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-black py-20">
//       <div className="container-wide">

//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-4">

//           {/* Brand */}
//           <div>
//             <Link to="/" className="w-fit block mb-6">
//               <img
//                 src={logo}
//                 alt="Pendora Glamps Logo"
//                 className="h-[100px] w-auto object-contain"
//               />
//             </Link>

//             <div className="flex items-center gap-6 text-sm tracking-wide">
//               <span className="font-semibold uppercase">
//                 INDIA (Rs.)
//               </span>
//               {/* <button className="underline uppercase hover:opacity-70 transition">
//                 Change Region
//               </button> */}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h4 className="text-sm uppercase tracking-widest mb-6">
//               Navigation
//             </h4>
//             <ul className="space-y-3 text-sm">
//               {['Home', 'About Us', 'Benefits', 'Projects', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
//                     className="text-black/70 hover:text-black transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm uppercase tracking-widest mb-6">
//               Contact
//             </h4>
//             <ul className="space-y-3 text-sm text-black/70">
//               <li>hello@pendoraglamps.com</li>
//               <li>+91 7856984521</li>
//               <li>
//                 Calicut, Kerala<br />
//                 India
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-10 border-t border-black/10 gap-10">

//           <p className="text-sm text-black/60 max-w-xl">
//             The content of this site is copyright-protected and is the property of Pendora Glamps.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-8 text-black">

//             <a href="#" className="hover:opacity-60 transition">
//               <FaInstagram className="w-5 h-5" />
//             </a>

//             <a href="#" className="hover:opacity-60 transition">
//               <FaTiktok className="w-5 h-5" />
//             </a>

//             <a href="#" className="hover:opacity-60 transition">
//               <FaSpotify className="w-5 h-5" />
//             </a>

//             <a href="#" className="hover:opacity-60 transition">
//               <FaYoutube className="w-5 h-5" />
//             </a>

//             <a href="#" className="hover:opacity-60 transition">
//               <FaPinterest className="w-5 h-5" />
//             </a>

//             <a href="#" className="hover:opacity-60 transition">
//               <FaFacebookF className="w-5 h-5" />
//             </a>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaPinterest,
  FaFacebookF,
} from "react-icons/fa";
import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

const Footer = () => {
  return (
    <footer className="bg-[#164e63] text-white py-20">
      <div className="container-wide">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-4">

          {/* Brand */}
          <div>
            <Link to="/" className="w-fit block mb-6">
              <img
                src={logo}
                alt="Pendora Glamps Logo"
                className="h-[100px] w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-6 text-sm tracking-wide">
              <span className="font-semibold uppercase">
                INDIA (Rs.)
              </span>
            </div>
          </div>

          {/* Navigation */}
          {/* Navigation */}
<div>
  <h4 className="text-sm uppercase tracking-widest mb-6">
    Navigation
  </h4>
  <ul className="space-y-3 text-sm">
    {["Home", "About Us", "Benefits", "Projects", "Contact"].map(
      (item) => (
        <li key={item}>
          <Link
            to={
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(" ", "-")}`
            }
            className="text-white/80 hover:text-white hover:underline transition-all"
          >
            {item}
          </Link>
        </li>
      )
    )}
  </ul>
</div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>hello@pendoraglamps.com</li>
              <li>+91 7856984521</li>
              <li>
                Calicut, Kerala
                <br />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-10 border-t border-white/20 gap-10">

          <p className="text-sm text-white/60 max-w-xl">
            The content of this site is copyright-protected and is the property
            of Pendora Glamps.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-8 text-white">

            <a href="#" className="hover:opacity-60 transition">
              <FaInstagram className="w-5 h-5" />
            </a>

            <a href="#" className="hover:opacity-60 transition">
              <FaTiktok className="w-5 h-5" />
            </a>

            <a href="#" className="hover:opacity-60 transition">
              <FaSpotify className="w-5 h-5" />
            </a>

            <a href="#" className="hover:opacity-60 transition">
              <FaYoutube className="w-5 h-5" />
            </a>

            <a href="#" className="hover:opacity-60 transition">
              <FaPinterest className="w-5 h-5" />
            </a>

            <a href="#" className="hover:opacity-60 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;