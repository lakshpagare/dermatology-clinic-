import React from "react";
import { Check, Info, Sparkles, Calendar, Heart } from "lucide-react";
import { pricingPlans } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const Pricing: React.FC = () => {
  const { setBookingModalOpen } = useClinic();

  const packages = [
    {
      title: "Gold Skin Radiance Program",
      price: "₹15,000",
      savings: "Save ₹3,000",
      features: [
        "3 Sessions Q-Switched Nd:YAG Laser",
        "1 Deluxe HydraFacial with Oxygen Dome",
        "1 Clinical Chemical Peel",
        "Free Visia Digital Skin Analysis",
        "Custom clinical-grade home care kit"
      ]
    },
    {
      title: "Advanced GFC Hair Rejuvenation",
      price: "₹26,000",
      savings: "Save ₹4,000",
      features: [
        "4 Sessions GFC (Pure Growth Factor)",
        "2 Sessions Low Level Laser Therapy",
        "Trichoscopy root health audits",
        "Clinical peptide booster serums",
        "Dermatologist diet & shampoo logs"
      ],
      popular: true
    }
  ];

  return (
    <div id="pricing-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Pricing & Packages" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          TRANSPARENT RATES
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Pricing & Treatment Packages
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Explore our standard clinical treatment rates and custom curated aesthetic programs designed for long-term skin and hair wellness.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. PLANS SECTION */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: General rate sheet */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8D5A4D]" />
            <span>Standard Clinical Rates</span>
          </h2>

          <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/20 rounded-3xl p-5 md:p-8 space-y-4 shadow-sm">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-50 dark:border-gray-800/60 last:border-0 gap-2"
              >
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm md:text-base text-gray-800 dark:text-[#FFF9F7]">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-400 font-light">
                    Duration: {plan.duration} | {plan.description}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-serif font-bold text-base text-[#5B3428] dark:text-[#C79284]">
                    {plan.price}
                  </span>
                  <span className="text-[10px] text-gray-400 block font-light">Per Session</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="bg-[#FFF9F7] dark:bg-[#1A0F0D] border border-amber-200/50 dark:border-amber-950/20 p-4 rounded-2xl flex items-start gap-2.5 text-xs text-gray-500 dark:text-gray-400 font-light">
            <Info className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              *All listed prices represent standard rate boundaries and are subject to change based on actual medication requirements, customized area coverage, and clinical audits.
            </p>
          </div>
        </div>

        {/* Right: Bundled packages */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
            Premium Curated Programs
          </h2>

          <div className="space-y-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 md:p-8 border relative ${
                  pkg.popular
                    ? "bg-[#5B3428] text-white border-transparent shadow-xl"
                    : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/25 text-[#2B2B2B] dark:text-[#FFF9F7]"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 right-6 bg-[#C79284] text-white text-[10px] font-sans font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <span className={`text-[10px] uppercase font-mono tracking-widest font-bold ${pkg.popular ? "text-[#C79284]" : "text-[#8D5A4D]"}`}>
                      Value Bundle
                    </span>
                    <h3 className="font-serif font-bold text-base md:text-lg mt-0.5 leading-tight">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-serif font-bold text-2xl md:text-3xl">{pkg.price}</span>
                    <span className={`text-xs ${pkg.popular ? "text-green-300" : "text-green-600 dark:text-green-400"} font-semibold`}>
                      ({pkg.savings})
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-xs pt-2 border-t border-gray-100/10 font-light">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.popular ? "bg-white/10 text-white" : "bg-green-50 dark:bg-green-950/20 text-green-500"}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={pkg.popular ? "text-gray-100" : "text-gray-600 dark:text-gray-300"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className={`w-full py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-wide transition ${
                      pkg.popular
                        ? "bg-[#C79284] hover:bg-white hover:text-[#5B3428] text-white"
                        : "bg-[#5B3428] hover:bg-[#8D5A4D] text-white"
                    }`}
                  >
                    Request Program Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA CONVERTER */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#5B3428] text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left max-w-lg">
            <h3 className="font-serif font-bold text-xl md:text-2xl">
              Unsure Which Treatment Fits You?
            </h3>
            <p className="text-xs text-gray-200 font-light leading-relaxed">
              Book a digital Visia skin analyzer consultation with Dr. Vaishali Belle to evaluate deep pigment deposits and collagen gaps.
            </p>
          </div>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition shrink-0"
          >
            Book Free Skin Scan &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
