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
    <footer className="bg-[#164e63] text-white py-8"> {/* Reduced vertical padding */}
      <div className="container-wide">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3"> {/* Reduced gap and margin */}

          {/* Brand */}
          <div>
            <Link to="/" className="w-fit block mb-2"> {/* Smaller margin */}
              <img
                src={logo}
                alt="Pendora Glamps Logo"
                className="h-[90px] w-auto object-contain" // Smaller logo
              />
            </Link>

            <div className="flex items-center gap-2 text-xs tracking-wide">
              <span className="font-serif font-semibold uppercase">
                PENDORA GLAMPS
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2"> {/* Smaller font and margin */}
              Navigation
            </h4>
            <ul className="space-y-1 text-xs"> {/* Smaller spacing */}
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Blogs", path: "/blogs" },
                { name: "Discover", path: "/facilities" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                // { name: "Admin", path: "/admin-portal" },
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
            <h4 className="text-xs uppercase tracking-widest mb-2">
              Contact
            </h4>

            <ul className="space-y-1 text-xs text-white/80">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-4 border-t border-white/20 gap-4"> {/* Smaller padding and gap */}
          <p className="text-xs text-white/60 max-w-md"> {/* Smaller font and width */}
            The content of this site is copyright-protected and is the property
            of Pendora Glamps.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white"> {/* Smaller gap */}
            <a href="#" className="hover:opacity-60 transition">
              <FaInstagram className="w-4 h-4" /> {/* Smaller icons */}
            </a>
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

export default Footer;