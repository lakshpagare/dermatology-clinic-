import React from "react";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div id="privacy-policy-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Privacy Policy" />

      <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-6">
        <h1 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white">Privacy Policy</h1>
        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Last Updated: July 2026</p>

        <div className="w-16 h-0.5 bg-[#C79284]"></div>

        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed space-y-4">
          <p>
            At Belle Skin & Hair Clinic, we are committed to protecting the privacy, accuracy and confidentiality of your medical diagnostic files, trichoscopy reviews, treatment histories and personal communication parameters.
          </p>
          <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white pt-2">1. Patient Records Confidentiality</h3>
          <p>
            Your clinical photographs (including Before & After evaluation pairs) are strictly secure within our encrypted HIPAA-compliant database portals and will never be shared on social networks or third-party platforms without explicit, signed consent from you.
          </p>
          <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white pt-2">2. Information Collection</h3>
          <p>
            When scheduling appointment slots via our web forms, we collect basic fields (Name, Phone number, Email address, allergic conditions). This data is utilized purely to manage clinical calendar queues and dispatch SMS confirmation cards.
          </p>
          <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white pt-2">3. Digital Cookies</h3>
          <p>
            Our web portals employ minimal, safe cookie flags to cache dark mode preferences and local context booking states, upgrading layout loading speeds on subsequent visits.
          </p>
        </div>
      </section>
    </div>
  );
};
