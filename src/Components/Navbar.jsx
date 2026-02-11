import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowNav(y < lastScrollY || y < 10);
      setScrolled(y > 40);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const active = (p) => location.pathname === p;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
          ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500
            ${scrolled
              ? "bg-black/50 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.04)]"
              : "bg-transparent"
            }`}
        />

        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 "
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
                  ${active(l.path)
                    ? "text-white bg-white/10"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] w-7 py-2"
            aria-label="Menu"
          >
            <span
              className={`h-[1.5px] rounded bg-white transition-all duration-300
                ${open ? "rotate-45 translate-y-[6.5px] w-full" : "w-full"}`}
            />
            <span
              className={`h-[1.5px] rounded bg-white transition-all duration-200
                ${open ? "opacity-0 w-0" : "w-3/5"}`}
            />
            <span
              className={`h-[1.5px] rounded bg-white transition-all duration-300
                ${open ? "-rotate-45 -translate-y-[6.5px] w-full" : "w-4/5"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500
          ${open ? "visible" : "invisible pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-500
            ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <div className="relative h-full flex flex-col items-center justify-center gap-3 px-6">
          {links.map((l, i) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`w-full max-w-xs text-center py-3 rounded-2xl text-xl font-light transition-all duration-500
                ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                ${active(l.path)
                  ? "text-white bg-white/[0.06]"
                  : "text-white/35 hover:text-white hover:bg-white/[0.03]"
                }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;