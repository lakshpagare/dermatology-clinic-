import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Info, ShieldAlert, Check } from "lucide-react";
import { beforeAfters, services } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { BeforeAfterSlider } from "../components/ui/BeforeAfterSlider";
import { useClinic } from "../context/ClinicContext";

export const BeforeAfterPage: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = beforeAfters.filter(
    (item) => activeCategory === "all" || item.category.toLowerCase().includes(activeCategory.toLowerCase()) || item.title.toLowerCase().includes(activeCategory.toLowerCase())
  );

  const filterCategories = [
    { id: "all", label: "All Real Results" },
    { id: "acne", label: "Acne Clearances" },
    { id: "pigment", label: "Pigmentation" },
    { id: "laser", label: "Laser Toning" }
  ];

  return (
    <div id="before-after-gallery-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Before & After" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          PORTFOLIO OF CLINICAL OUTCOMES
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Real Results. Real People.
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          See the direct clinical proof of our dermatological and laser treatments. We follow highly ethical practices and share only verified, unretouched transformations.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. FILTERS */}
      <section className="pb-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-sans font-semibold text-xs py-2.5 px-6 rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#5B3428] text-white border-transparent shadow-md"
                  : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/35 text-gray-700 dark:text-gray-300 hover:bg-[#FFF9F7] dark:hover:bg-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SLIDERS ARCHIVE */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="space-y-4">
              <BeforeAfterSlider
                beforeUrl={item.beforeUrl}
                afterUrl={item.afterUrl}
                title={item.title}
                subtitle={item.treatmentName}
              />
              {/* Detailed clinical case notes below slider */}
              <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 p-5 rounded-2xl space-y-2.5 text-xs text-gray-600 dark:text-gray-300 font-light">
                <div className="flex items-center gap-1.5 font-semibold text-[#5B3428] dark:text-[#C79284]">
                  <Info className="w-4 h-4 text-[#8D5A4D]" />
                  <span>Clinical Study Protocol Notes</span>
                </div>
                <p className="leading-relaxed">
                  Patient underwent 4 sessions of <strong className="font-semibold text-gray-700 dark:text-white">{item.treatmentName}</strong> spaced 3 weeks apart. Balanced home skincare routines with physical sunscreen were strictly maintained.
                </p>
                <div className="flex gap-4 pt-1 text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-400">
                  <span>Sessions: 4</span>
                  <span>Duration: 12 Weeks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HONESTY GUARANTEE */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#1A0F0D] border-t border-[#F0E6E2]/50 dark:border-[#5B3428]/25 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-[#FFF9F7] dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 dark:bg-amber-950/20 text-amber-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-white">
              The Belle Clinical Honesty Guarantee
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
              We pledge to never digitally alter, filter, airbrush or manipulate any before and after photographs shown on our portals. Every transformation depicts authentic skin clearing achieved through expert prescription and advanced USFDA technology.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA PANEL */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#5B3428] text-[#FFF9F7] p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif font-bold text-xl md:text-2xl">
              Want Similar Authentic Transformations?
            </h3>
            <p className="text-xs text-gray-200 font-light leading-relaxed">
              Every skin type responds differently. Schedule a full skin trichoscopy consultation with Dr. Vaishali Belle to design your custom aesthetic path.
            </p>
          </div>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition shrink-0"
          >
            Schedule Skin Analysis &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
