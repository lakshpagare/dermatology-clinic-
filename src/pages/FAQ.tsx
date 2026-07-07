import React, { useState } from "react";
import { Search, HelpCircle, Sparkles, MessageCircle, Info } from "lucide-react";
import { faqs, clinicData } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { useClinic } from "../context/ClinicContext";

export const FAQ: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredFaqs = faqs.filter((f) => {
    const matchesSearch =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || f.category.toLowerCase() === activeTab.toLowerCase();
    return matchesSearch && matchesTab;
  });

  const tabs = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General Clinic" },
    { id: "appointments", label: "Booking Slots" },
    { id: "treatments", label: "Lasers & Peels" },
    { id: "hair care", label: "Scalp & Hair" }
  ];

  return (
    <div id="faq-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Frequently Asked Questions" />

      {/* 1. HERO BANNER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          HELP CENTER
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Search our comprehensive knowledge database to learn about USFDA approved treatments, recovery periods, pricing scales and appointment procedures.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. SEARCH BAR AND FILTER TABS */}
      <section className="pb-10 px-4 md:px-8 max-w-3xl mx-auto space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions about lasers, acne, hair growth..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 text-xs pl-12 pr-4 py-3.5 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white shadow-sm"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans font-semibold text-xs py-2 px-4.5 rounded-full border transition ${
                activeTab === tab.id
                  ? "bg-[#5B3428] text-white border-transparent shadow-sm"
                  : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/25 text-gray-700 dark:text-gray-300 hover:bg-[#FFF9F7]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ACCORDION RESULTS */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        {filteredFaqs.length > 0 ? (
          <FAQAccordion items={filteredFaqs} />
        ) : (
          <div className="text-center py-16 max-w-md mx-auto space-y-4">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
            <h4 className="font-serif font-bold text-lg text-gray-700">No Matching Questions Found</h4>
            <p className="text-xs text-gray-400 font-light">
              We couldn't find any FAQs matching "{searchQuery}". Try searching for other terms like "laser" or "GFC".
            </p>
          </div>
        )}
      </section>

      {/* 4. CONVERTING CALL CARD */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#5B3428] text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left max-w-lg">
            <h3 className="font-serif font-bold text-xl md:text-2xl">
              Still Have Questions?
            </h3>
            <p className="text-xs text-gray-200 font-light leading-relaxed">
              Dr. Vaishali Belle's clinical team is always available to resolve your questions. Chat with us on WhatsApp or schedule a physical consultation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] font-sans font-bold text-xs py-3.5 px-6 rounded-full shadow transition"
            >
              Book Consultation
            </button>
            <a
              href={clinicData.whatsapp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-sans font-bold text-xs py-3.5 px-6 rounded-full flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
