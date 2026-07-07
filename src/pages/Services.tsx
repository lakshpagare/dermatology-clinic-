import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, ArrowRight, Shield, Star, Check } from "lucide-react";
import { services, faqs, clinicData } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { useClinic } from "../context/ClinicContext";

export const Services: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [activeCategory, setActiveCategory] = useState<"all" | "skin" | "hair" | "aesthetic">("all");

  const filteredServices = services.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "skin", label: "Skin Care & Lasers" },
    { id: "hair", label: "Hair & Scalp Care" },
    { id: "aesthetic", label: "Aesthetic Solutions" }
  ];

  // Specific FAQs for services page
  const serviceFaqs = faqs.filter((f) => f.category === "General" || f.category === "Treatments");

  return (
    <div id="services-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Our Services" />

      {/* 1. HERO BANNER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          WHAT WE OFFER
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Our Range of Services
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          We offer a wide range of dermatology and cosmetology services for skin, hair and overall wellness. Each treatment is customized to deliver safe, effective and long-lasting results.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. FILTER MENU */}
      <section className="pb-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`font-sans font-semibold text-xs py-2.5 px-6 rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#5B3428] text-white border-transparent shadow-md"
                  : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/30 text-gray-700 dark:text-gray-300 hover:bg-[#FFF9F7] dark:hover:bg-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. RESPONSIVE CARDS GRID */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white dark:bg-[#251815] rounded-3xl border border-[#F0E6E2] dark:border-[#5B3428]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
            >
              {/* Card Left: Image */}
              <div className="sm:col-span-5 h-56 sm:h-full relative">
                <img
                  src={svc.imageUrl}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Right: Text */}
              <div className="sm:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#8D5A4D] bg-[#FFF9F7] dark:bg-[#1E120F] px-2 py-0.5 rounded">
                      {svc.category}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#C79284]" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-[#FFF9F7]">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                  <Link
                    to={`/services/${svc.id}`}
                    className="text-xs font-semibold text-[#5B3428] dark:text-[#C79284] hover:underline flex items-center gap-1"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNOLOGY & VALUE PREVIEW */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#1A0F0D] border-y border-[#F0E6E2]/50 dark:border-[#5B3428]/20 px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              OUR STANDARDS
            </span>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#5B3428] dark:text-white">
              USFDA Approved Skin & Hair Technology
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              We never cut corners on hygiene and client safety. Every laser platform, peeling formulation, and serum utilized in our clinics has undergone strict safety audits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-5 border border-gray-100 dark:border-gray-800 rounded-2xl text-center space-y-2 bg-[#FFF9F7] dark:bg-[#251815]">
              <h4 className="font-serif font-semibold text-sm text-[#5B3428] dark:text-[#C79284]">Safe & Effective</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">All treatments are safe, FDA-approved and performed by experts.</p>
            </div>
            <div className="p-5 border border-gray-100 dark:border-gray-800 rounded-2xl text-center space-y-2 bg-[#FFF9F7] dark:bg-[#251815]">
              <h4 className="font-serif font-semibold text-sm text-[#5B3428] dark:text-[#C79284]">Personalized Plans</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">Every treatment is tailored to your skin type, concerns and goals.</p>
            </div>
            <div className="p-5 border border-gray-100 dark:border-gray-800 rounded-2xl text-center space-y-2 bg-[#FFF9F7] dark:bg-[#251815]">
              <h4 className="font-serif font-semibold text-sm text-[#5B3428] dark:text-[#C79284]">Advanced Technology</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">We use the latest technology for accurate diagnosis and effective treatments.</p>
            </div>
            <div className="p-5 border border-gray-100 dark:border-gray-800 rounded-2xl text-center space-y-2 bg-[#FFF9F7] dark:bg-[#251815]">
              <h4 className="font-serif font-semibold text-sm text-[#5B3428] dark:text-[#C79284]">Holistic Care</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">We focus on long-term results and overall skin & hair wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs SEGMENT */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#5B3428] dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#C79284] mx-auto mt-2"></div>
        </div>

        <FAQAccordion items={serviceFaqs} />
      </section>

      {/* 6. CONVERTING CTA CARD */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#5B3428] text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left max-w-lg">
            <h3 className="font-serif font-bold text-xl md:text-2xl">
              Ready to Transform Your Skin & Hair?
            </h3>
            <p className="text-xs text-gray-200 font-light leading-relaxed">
              Book an appointment today and let our experts create the perfect clinical path for your skin type.
            </p>
          </div>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition shrink-0"
          >
            Book Appointment Now &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
