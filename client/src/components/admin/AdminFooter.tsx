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

// const AdminFooter = () => {
//   return (
//     <footer className="bg-[#164e63] text-white py-20 mt-auto">
//       <div className="container-wide">

//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-4">

//           {/* Brand */}
//           <div>
//             <Link to="/admin/dashboard" className="w-fit block mb-6">
//               <img
//                 src={logo}
//                 alt="Pendora Glamps Logo"
//                 className="h-[100px] w-auto object-contain"
//               />
//             </Link>

//             <div className="flex items-center gap-6 text-sm tracking-wide">
//               <span className="font-semibold uppercase">
//                 ADMIN PANEL
//               </span>
//             </div>
//           </div>

//           {/* Admin Navigation */}
//           <div>
//             <h4 className="text-sm uppercase tracking-widest mb-6">
//               Admin Navigation
//             </h4>

//             <ul className="space-y-3 text-sm">
//               {[
//                 { name: "Dashboard", path: "/admin/dashboard" },
//                 { name: "Experiences", path: "/admin/admin-experience" },
//                 { name: "Calendar", path: "/admin/calendar" },
//                 { name: "Profile", path: "/admin/profile" },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className="text-white/80 hover:text-white hover:underline transition-all"
//                   >
//                     {item.name}
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

//             <ul className="space-y-3 text-sm text-white/80">
//               <li>info@pendoraglamps.com</li>
//               <li>+91 75580 10107</li>
//               <li>+91 90610 12312</li>
//               <li>
//                 Pendora Glamps <br />
//                 Aruppukadu <br />
//                 Vagamon P.O <br />
//                 Vagamon <br />
//                 Idukki <br />
//                 Kerala 685503
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-10 border-t border-white/20 gap-10">

//           <p className="text-sm text-white/60 max-w-xl">
//             Admin Dashboard © 2026 Pendora Glamps. All rights reserved.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-8 text-white">

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

// export default AdminFooter;



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

const AdminFooter = () => {
  return (
    <footer className="bg-[#164e63] text-white py-10 mt-auto">
      <div className="container-wide">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-3">

          {/* Brand */}
          <div>
            <Link to="/admin/dashboard" className="w-fit block mb-3">
              <img
                src={logo}
                alt="Pendora Glamps Logo"
                className="h-[70px] w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-3 text-xs tracking-wide">
              <span className="font-semibold uppercase">
                ADMIN PANEL
              </span>
            </div>
          </div>

          {/* Admin Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-3">
              Admin Navigation
            </h4>

            <ul className="space-y-1.5 text-xs">
              {[
                { name: "Dashboard", path: "/admin/dashboard" },
                { name: "Experiences", path: "/admin/admin-experience" },
                { name: "Calendar", path: "/admin/calendar" },
                { name: "Profile", path: "/admin/profile" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white hover:underline transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-3">
              Contact
            </h4>

            <ul className="space-y-1.5 text-xs text-white/80">
              <li>info@pendoraglamps.com</li>
              <li>+91 75580 10107</li>
              <li>+91 90610 12312</li>
              <li>
                Pendora Glamps <br />
                Aruppukadu <br />
                Vagamon P.O <br />
                Vagamon <br />
                Idukki <br />
                Kerala 685503
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-5 border-t border-white/20 gap-4">

          <p className="text-xs text-white/60 max-w-lg">
            Admin Dashboard © 2026 Pendora Glamps. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white">

            <a href="#" className="hover:opacity-60 transition">
              <FaInstagram className="w-4 h-4" />
            </a>

            {/* <a href="#" className="hover:opacity-60 transition">
              <FaTiktok className="w-4 h-4" />
            </a> */}

            {/* <a href="#" className="hover:opacity-60 transition">
              <FaSpotify className="w-4 h-4" />
            </a> */}

            <a href="#" className="hover:opacity-60 transition">
              <FaYoutube className="w-4 h-4" />
            </a>

            {/* <a href="#" className="hover:opacity-60 transition">
              <FaPinterest className="w-4 h-4" />
            </a> */}

            <a href="#" className="hover:opacity-60 transition">
              <FaFacebookF className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default AdminFooter;