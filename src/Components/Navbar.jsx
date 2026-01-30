import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // 🔥 Scroll logic (hide on down, show on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY) {
        setShowNav(true);
      } else if (currentY > lastScrollY && currentY > 80) {
        setShowNav(false);
      }

      setScrolled(currentY > 50);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out
          ${showNav ? "translate-y-0" : "-translate-y-full"}
          ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Don Transducers"
              className={`h-9 transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                Products
                <svg className={`w-4 h-4 transition ${productOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 transition-all
                ${productOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
                  <DropdownLink to="/products/drivers">Passive Speaker Drivers</DropdownLink>
                  <DropdownLink to="/products/crossovers">Crossovers</DropdownLink>
                  <DropdownLink to="/products/diaphragms">Diaphragms</DropdownLink>
                  <DropdownLink to="/products/cabinets">Speaker Cabinets</DropdownLink>
                </div>
              </div>
            </div>

            <NavLink to="/events">Events</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute w-full h-0.5 bg-white transition ${
                open ? "rotate-45 top-3" : "top-1"
              }`} />
              <span className={`absolute w-full h-0.5 bg-white top-3 transition ${
                open ? "opacity-0" : ""
              }`} />
              <span className={`absolute w-full h-0.5 bg-white transition ${
                open ? "-rotate-45 top-3" : "bottom-1"
              }`} />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          bg-black`}
        >
          <div className="px-6 py-6 space-y-4 text-white">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/products/drivers" onClick={() => setOpen(false)}>Drivers</MobileLink>
            <MobileLink to="/products/crossovers" onClick={() => setOpen(false)}>Crossovers</MobileLink>
            <MobileLink to="/products/diaphragms" onClick={() => setOpen(false)}>Diaphragms</MobileLink>
            <MobileLink to="/products/cabinets" onClick={() => setOpen(false)}>Cabinets</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
          </div>
        </div>
      </nav>
    </>
  );
}

/* HELPERS */

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all"
  >
    {children}
  </Link>
);

const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-lg font-medium hover:text-blue-400 transition"
  >
    {children}
  </Link>
);

export default Navbar;
