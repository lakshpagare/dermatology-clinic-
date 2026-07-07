import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Check, Copy, Gift, ShieldAlert } from "lucide-react";
import { offers } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const Offers: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div id="offers-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Special Offers" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          SEASONAL PROMOTIONS
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Limited-Time Special Offers
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Grab active clinical discount offers on our premium aesthetic skincare, HydraFacials, carbon peeling, and specialized GFC hair growth therapies.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. OFFERS GRID */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((off) => (
            <div
              key={off.id}
              className="bg-white dark:bg-[#251815] rounded-3xl border border-[#F0E6E2] dark:border-[#5B3428]/25 overflow-hidden shadow-sm hover:shadow-lg transition duration-300 grid grid-cols-1 sm:grid-cols-12"
            >
              {/* Media banner */}
              <div className="sm:col-span-5 h-52 sm:h-full relative">
                <img src={off.imageUrl} alt={off.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {off.discount}
                </div>
              </div>

              {/* Text specifics */}
              <div className="sm:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-[#FFF9F7] leading-snug">
                    {off.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                    {off.description}
                  </p>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8D5A4D]" />
                    <span>Valid until: {off.validUntil}</span>
                  </p>
                </div>

                {/* Promo Code claim action */}
                <div className="pt-4 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between gap-4">
                  <div className="bg-[#FFF9F7] dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-[#5B3428]/30 px-3.5 py-1.5 rounded-xl flex items-center justify-between w-full max-w-[160px] text-xs">
                    <span className="font-mono font-bold text-gray-700 dark:text-gray-200">{off.code}</span>
                    <button
                      onClick={() => handleCopyCode(off.code)}
                      className="text-[#8D5A4D] hover:text-[#5B3428] p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      title="Copy promo code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {copiedCode === off.code && (
                    <span className="text-[10px] text-green-500 font-medium absolute translate-y-8 animate-fadeIn">
                      Copied!
                    </span>
                  )}

                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white text-[10px] uppercase font-bold tracking-wider py-2.5 px-4 rounded-full shadow-sm transition"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CLAIM CONDITIONS */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#1A0F0D] border-t border-[#F0E6E2]/50 dark:border-[#5B3428]/25 px-4 md:px-8 mt-12">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#FFF9F7] dark:bg-[#251815] border border-[#F0E6E2] flex items-center justify-center mx-auto shadow-inner text-[#8D5A4D]">
            <Gift className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-white">
            General Terms for Clinical Claims
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            1. Discount promo codes must be declared at the billing reception desk prior to treatment starting. <br />
            2. Only one seasonal promotion can be claimed per clinical session (no compounding offers). <br />
            3. Prior appointment scheduling is strictly required to lock in the special promotional slot.
          </p>
        </div>
      </section>
    </div>
  );
};
