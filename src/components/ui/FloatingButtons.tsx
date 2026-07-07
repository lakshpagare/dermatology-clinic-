import React, { useState, useEffect } from "react";
import { MessageCircle, Calendar, ArrowUp } from "lucide-react";
import { clinicData } from "../../data/clinicData";
import { useClinic } from "../../context/ClinicContext";

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { setBookingModalOpen } = useClinic();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5">
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-white hover:bg-[#5B3428] text-[#5B3428] hover:text-white p-3 rounded-full shadow-lg border border-[#F0E6E2] transition-all duration-300 transform hover:scale-110 active:scale-95 animate-fadeIn"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Book Appointment floating button */}
      <button
        onClick={() => setBookingModalOpen(true)}
        className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 hover:rotate-3"
        aria-label="Quick appointment booking"
        id="book-btn-float"
      >
        <Calendar className="w-5.5 h-5.5" />
      </button>

      {/* WhatsApp floating button with pulse wave effect */}
      <a
        href={clinicData.whatsapp}
        target="_blank"
        referrerPolicy="no-referrer"
        className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat with clinical staff on WhatsApp"
        id="whatsapp-btn-float"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
        <MessageCircle className="w-5.5 h-5.5 relative z-10 fill-current" />
      </a>
    </div>
  );
};
