import React from "react";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const Terms: React.FC = () => {
  return (
    <div id="terms-conditions-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Terms & Conditions" />

      <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-6">
        <h1 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white">Terms & Conditions</h1>
        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Last Updated: July 2026</p>

        <div className="w-16 h-0.5 bg-[#C79284]"></div>

        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed space-y-4">
          <p>
            Welcome to Belle Skin & Hair Clinic. By scheduling consultations or accessing our aesthetic procedures, you agree to comply with the following clinical standards and terms of usage.
          </p>
          <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white pt-2">1. Consultation Scheduling</h3>
          <p>
            All appointments booked online represent slot requests and must be verified by our clinic phone receptionist to confirm actual specialist availability.
          </p>
          <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white pt-2">2. Rescheduling & Cancellations</h3>
          <p>
            We require at least 24 hours notice for any session cancellations or rescheduling to avoid slot wastage and enable other acute skin patients to claim vacancy blocks.
          </p>
          <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white pt-2">3. Medical Liability Disclaimer</h3>
          <p>
            Aesthetic treatments (such as chemical peels, Q-switched lasers, hair GFC) yield varying individual results based on lifestyle factors, metabolic cycles and sunscreen compliance. Our specialists prescribe safe clinical procedures but do not guarantee uniform response timelines.
          </p>
        </div>
      </section>
    </div>
  );
};
