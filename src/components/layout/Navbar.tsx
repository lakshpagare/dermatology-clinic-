import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, Droplets, Droplet, Sun, Moon } from "lucide-react";
import { services, clinicData } from "../../data/clinicData";
import { useClinic } from "../../context/ClinicContext";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode, setBookingModalOpen } = useClinic();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Treatments", path: "/treatments" },
    { name: "Before & After", path: "/before-after" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF9F7]/95 dark:bg-[#1E120F]/95 backdrop-blur-md shadow-md py-3 border-b border-[#F0E6E2] dark:border-[#5B3428]/30"
          : "bg-white dark:bg-[#1E120F] py-4 border-b border-[#F0E6E2]/50 dark:border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-[#5B3428] flex items-center justify-center text-white font-serif font-semibold text-lg border border-[#C79284]/40 group-hover:scale-105 transition-all duration-300">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight tracking-wide text-[#5B3428] dark:text-[#FFF9F7]">
              BELLE
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#8D5A4D] dark:text-[#C79284] font-medium">
              Skin & Hair Clinic
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-sans font-medium text-sm transition-all duration-200 py-2 ${
                      isActive || location.pathname.startsWith("/services")
                        ? "text-[#5B3428] dark:text-[#C79284] font-semibold"
                        : "text-[#2B2B2B] dark:text-[#FFF9F7]/80 hover:text-[#5B3428] dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* MEGA MENU DROPDOWN */}
                  {megaMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-[540px] bg-white dark:bg-[#251815] shadow-xl border border-[#F0E6E2] dark:border-[#5B3428]/40 rounded-xl p-6 grid grid-cols-2 gap-4 animate-fadeIn transition-all z-50">
                      <div className="col-span-2 border-b border-gray-100 dark:border-gray-800 pb-2 mb-2">
                        <span className="text-xs uppercase tracking-widest text-[#8D5A4D] font-bold">
                          Comprehensive Skin & Hair Solutions
                        </span>
                      </div>
                      {services.map((svc) => (
                        <Link
                          key={svc.id}
                          to={`/services/${svc.id}`}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#FFF9F7] dark:hover:bg-[#1E120F] transition"
                        >
                          <div className="text-[#C79284] mt-0.5">
                            {svc.category === "skin" ? (
                              <Sparkles className="w-4 h-4" />
                            ) : (
                              <Droplet className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#5B3428] dark:text-[#FFF9F7] group-hover:text-[#8D5A4D]">
                              {svc.title}
                            </p>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                              {svc.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 bg-[#FFF9F7] dark:bg-[#1E120F] p-2.5 rounded-lg text-center">
                        <Link
                          to="/services"
                          className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] hover:underline"
                        >
                          View All Services &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans font-medium text-sm transition-all duration-200 py-2 ${
                  isActive
                    ? "text-[#5B3428] dark:text-[#C79284] font-semibold border-b-2 border-[#5B3428] dark:border-[#C79284]"
                    : "text-[#2B2B2B] dark:text-[#FFF9F7]/80 hover:text-[#5B3428] dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-600 hover:text-[#5B3428] dark:text-gray-300 dark:hover:text-[#FFF9F7] hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-medium text-xs py-2.5 px-5 rounded-full tracking-wide shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Appointment
          </button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#5B3428] dark:text-white hover:bg-[#FFF9F7] dark:hover:bg-gray-800 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1E120F] border-b border-[#F0E6E2] dark:border-[#5B3428]/30 shadow-lg p-5 z-40 animate-slideDown">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans font-medium text-base py-1.5 border-b border-gray-100 dark:border-gray-800/50 ${
                  location.pathname === link.path
                    ? "text-[#5B3428] dark:text-[#C79284] font-semibold"
                    : "text-[#2B2B2B] dark:text-[#FFF9F7]/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setBookingModalOpen(true);
              }}
              className="w-full bg-[#5B3428] text-white py-3 rounded-full text-center font-semibold text-sm shadow-md mt-2 transition"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
