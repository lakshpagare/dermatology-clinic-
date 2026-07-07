import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Clock, RefreshCw, IndianRupee, ArrowRight, Shield } from "lucide-react";
import { treatments, services } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const Treatments: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTreatments = treatments.filter(
    (t) => activeFilter === "all" || t.serviceId === activeFilter
  );

  return (
    <div id="treatments-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Clinical Treatments" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          SPECIALIZED PATHWAYS
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Specialized Clinical Treatments
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Explore our targeted clinical procedures. Every treatment is designed to restore structural health, resolve blemishes and deliver beautiful, scientifically proven results.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. CAT FILTER */}
      <section className="pb-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setActiveFilter("all")}
            className={`font-sans font-semibold text-xs py-2 px-5 rounded-full border transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-[#8D5A4D] text-white border-transparent shadow"
                : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/35 text-gray-700 dark:text-gray-300 hover:bg-[#FFF9F7] dark:hover:bg-gray-800"
            }`}
          >
            All Treatments
          </button>
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveFilter(svc.id)}
              className={`font-sans font-semibold text-xs py-2 px-5 rounded-full border transition-all duration-300 ${
                activeFilter === svc.id
                  ? "bg-[#8D5A4D] text-white border-transparent shadow"
                  : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/35 text-gray-700 dark:text-gray-300 hover:bg-[#FFF9F7] dark:hover:bg-gray-800"
              }`}
            >
              {svc.title}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GRID OF PROCEDURES */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTreatments.map((tr) => (
            <div
              key={tr.id}
              className="bg-white dark:bg-[#251815] rounded-3xl border border-[#F0E6E2] dark:border-[#5B3428]/20 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-2 border border-gray-100 dark:border-gray-800">
                  <img
                    src={tr.imageUrl}
                    alt={tr.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#C79284]/20 text-[10px] font-mono tracking-wider font-semibold text-[#5B3428] dark:text-[#C79284] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C79284]" />
                    <span>Clinical standard</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#8D5A4D] font-bold">
                    {services.find((s) => s.id === tr.serviceId)?.title || "Specialty"}
                  </span>
                  <h3 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-[#FFF9F7] leading-snug">
                    {tr.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                    {tr.shortDesc}
                  </p>
                </div>

                {/* Meta details */}
                <div className="grid grid-cols-3 gap-3 bg-[#FFF9F7] dark:bg-[#1E120F] border border-[#F0E6E2]/50 dark:border-[#5B3428]/20 rounded-xl p-3.5 text-[11px] text-gray-600 dark:text-gray-300 font-light">
                  <div className="flex items-center gap-1.5 justify-center">
                    <Clock className="w-3.5 h-3.5 text-[#8D5A4D]" />
                    <span>{tr.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-x border-[#F0E6E2]/60 dark:border-[#5B3428]/25 justify-center">
                    <RefreshCw className="w-3.5 h-3.5 text-[#8D5A4D]" />
                    <span className="truncate" title={tr.recoveryTime}>
                      {tr.recoveryTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 justify-center font-medium text-[#5B3428] dark:text-[#C79284]">
                    <IndianRupee className="w-3 h-3 text-[#C79284]" />
                    <span className="truncate">Premium Rate</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
                <Link
                  to={`/treatments/${tr.id}`}
                  className="text-xs font-semibold text-[#5B3428] dark:text-[#C79284] hover:underline flex items-center gap-1"
                >
                  <span>View Full Protocol &rarr;</span>
                </Link>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-semibold text-[10px] uppercase py-2 px-4.5 rounded-full tracking-wider shadow-sm transition"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
