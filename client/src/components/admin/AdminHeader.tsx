import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Calendar, Home } from "lucide-react";
import { FaPlusCircle } from "react-icons/fa";
import API from "@/utils/axios";
import logo from "@/assets/logo PENDORA GLAMPS logo 5-01.png";

const AdminHeader = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll hide/show */
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

  const navLinks = [
    { name: "HOME", path: "/admin/dashboard" },
    { name: "EXPERIENCE", path: "/admin/admin-experience" },
    { name: "CALENDAR", path: "/admin/calendar" },
  ];

  /* Logout Function */
  const handleLogout = async () => {
    try {
      await API.post("/admin-logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-[70px] md:h-[100px] px-3 md:px-4 w-full">

          {/* Logo */}
          <Link
            to="/admin/dashboard"
            className="flex items-center flex-shrink-0"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-[90px] md:h-[80px] lg:h-[160px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
  <Link
    key={link.name}
    to={link.path}
    className="relative font-serif text-[13px] uppercase tracking-tight text-gray-700 hover:text-black transition-colors group"
  >
    {link.name}

    <span
      className={`absolute left-0 -bottom-1 h-[1px] bg-[#164e63] transition-all duration-300 ${
        location.pathname === link.path
          ? "w-full"
          : "w-0 group-hover:w-full"
      }`}
    />
  </Link>
))}

            <Link
              to="/admin/profile"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#164e63] text-white"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-3">
            <Link to="/admin/dashboard">
              <Home className="w-5 h-5 text-black" />
            </Link>

            <Link to="/admin/admin-experience">
              <FaPlusCircle className="w-5 h-5 text-black" />
            </Link>

            <Link to="/admin/calendar">
              <Calendar className="w-5 h-5 text-black" />
            </Link>

            <Link to="/admin/profile">
              <User className="w-5 h-5 text-black" />
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;