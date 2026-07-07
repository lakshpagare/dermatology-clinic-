import React from "react";
import { MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import { clinicData } from "../../data/clinicData";

export const Topbar: React.FC = () => {
  return (
    <div id="top-info-bar" className="w-full bg-[#5B3428] text-[#FFF9F7] text-xs py-2 px-4 md:px-8 border-b border-[#8D5A4D]/20 hidden lg:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Physical Address & Schedule */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C79284]" />
            <span className="font-light tracking-wide truncate max-w-sm" title={clinicData.address}>
              Behind Tupsakhare Lawns, Ahilyabai Holkar Marg, Nashik
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C79284]" />
            <span className="font-light tracking-wide">{clinicData.workingHours}</span>
          </div>
        </div>

        {/* Contact and Social Buttons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C79284]" />
            <a href={`tel:${clinicData.phone.replace(/\s+/g, '')}`} className="font-medium hover:text-[#C79284] transition">
              {clinicData.phone}
            </a>
          </div>
          <a
            href={clinicData.whatsapp}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center gap-1.5 bg-[#FFF9F7] text-[#5B3428] px-3 py-1 rounded-full font-medium hover:bg-[#C79284] hover:text-white transition duration-300"
          >
            <MessageSquare className="w-3 h-3 text-[#5B3428]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
