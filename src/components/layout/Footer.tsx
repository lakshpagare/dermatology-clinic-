import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Heart } from "lucide-react";
import { clinicData, services } from "../../data/clinicData";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1E120F] text-[#FFF9F7] pt-16 pb-8 border-t border-[#5B3428]/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* CLINIC BRANDING & NEWSLETTER */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#C79284] flex items-center justify-center text-white font-serif font-semibold text-lg border border-[#FFF9F7]/10">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-wide text-white">
                BELLE
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#C79284] font-medium">
                Skin & Hair Clinic
              </span>
            </div>
          </Link>
          <p className="text-xs text-gray-300 font-light leading-relaxed">
            Nashik's premier luxury dermatology center offering advanced laser-assisted skin, hair, and cosmetic medical treatments with USFDA certified excellence.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2.5">
            <label className="block text-xs uppercase tracking-widest text-[#C79284] font-bold">
              Stay in Touch
            </label>
            <div className="flex relative items-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#2E1C18] border border-[#5B3428] text-[#FFF9F7] text-xs px-4 py-3 rounded-full focus:outline-none focus:border-[#C79284] transition"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#C79284] hover:bg-white hover:text-[#5B3428] text-white p-2 rounded-full transition-all duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribed && (
              <span className="text-[11px] text-green-400 block font-medium animate-fadeIn">
                Thank you! You have subscribed successfully.
              </span>
            )}
          </form>
        </div>

        {/* SERVICES LINK */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-semibold tracking-wide text-white border-b border-[#5B3428]/50 pb-2">
            Our Services
          </h3>
          <ul className="space-y-2.5 text-xs text-gray-300 font-light">
            {services.slice(0, 6).map((svc) => (
              <li key={svc.id}>
                <Link to={`/services/${svc.id}`} className="hover:text-[#C79284] transition duration-200">
                  {svc.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-[#C79284] font-medium hover:underline">
                View All Services &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* QUICK CONTACTS */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-semibold tracking-wide text-white border-b border-[#5B3428]/50 pb-2">
            Clinic Contact
          </h3>
          <ul className="space-y-3.5 text-xs text-gray-300 font-light">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C79284] shrink-0 mt-0.5" />
              <span>Behind Tupsakhare Lawns, Ahilyabai Holkar Marg, Nashik, MH 422002</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C79284] shrink-0" />
              <a href={`tel:${clinicData.phone.replace(/\s+/g, '')}`} className="hover:text-[#C79284]">
                {clinicData.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C79284] shrink-0" />
              <a href={`mailto:${clinicData.email}`} className="hover:text-[#C79284]">
                {clinicData.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C79284] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Opening Hours:</p>
                <p className="text-[11px] text-gray-400">{clinicData.workingHours}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* GOOGLE MAP & LOCATION */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-semibold tracking-wide text-white border-b border-[#5B3428]/50 pb-2">
            Our Location Map
          </h3>
          <div className="w-full h-36 rounded-xl overflow-hidden border border-[#5B3428]/50 relative shadow-inner">
            <iframe
              title="Belle Clinic Nashik Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m18!1m2!1s0x3bdd9140a83fdfff%3A0xe5a3c031853d9fbb!2sAhilyadevi%20Holkar%20Marg%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692234000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-400 pt-2 font-mono">
            <span>Lat: 19.9975° N</span>
            <span>Lng: 73.7898° E</span>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
        <div className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} {clinicData.name}. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1.5 text-[11px] bg-[#2E1C18] px-3 py-1 rounded-full border border-gray-800 text-[#C79284]">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-[#C79284] fill-current" />
          <span>for Premium Care</span>
        </div>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
