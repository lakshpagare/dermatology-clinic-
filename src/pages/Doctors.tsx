import React from "react";
import { Link } from "react-router-dom";
import { Award, BookOpen, GraduationCap, Users, Calendar, Check, Star, ShieldCheck } from "lucide-react";
import { doctors, testimonials } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const Doctors: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const dr = doctors[0]; // Chief specialist

  return (
    <div id="doctors-profile-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Our Chief Dermatologist" />

      {/* 1. HERO BIO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Column: Portrait, Education, Awards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-[#C79284]/20 shadow-xl relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src={dr.imageUrl}
                alt={dr.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/95 dark:bg-black/90 backdrop-blur px-3 py-1 rounded-full border border-[#C79284]/20 text-[10px] font-mono tracking-widest font-semibold text-[#8D5A4D] dark:text-[#C79284] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>USFDA CERTIFIED</span>
              </div>
            </div>

            {/* Quick Credentials Block */}
            <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 p-6 rounded-2xl space-y-4">
              <h3 className="font-serif font-bold text-sm text-[#5B3428] dark:text-[#C79284] uppercase tracking-wider">
                Clinical Certifications
              </h3>
              <ul className="text-xs text-gray-500 dark:text-gray-300 space-y-3 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Board Certified Medical Dermatologist</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Laser Therapy Fellowship - Munich, Germany</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Advanced Dermal Sculpting - Restylane Academy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Column: Detailed Bio sheet */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
                MEDICAL LEADERSHIP
              </span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#5B3428] dark:text-white leading-tight">
                {dr.name}
              </h1>
              <p className="text-xs md:text-sm text-[#8D5A4D] dark:text-[#C79284] uppercase tracking-widest font-semibold">
                {dr.title}
              </p>
              <div className="w-16 h-0.5 bg-[#C79284] my-2"></div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {dr.bio}
              </p>
            </div>

            {/* Qualifications / Education list */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#8D5A4D]" />
                <span>Education & Qualifications</span>
              </h3>
              <ul className="space-y-3 pl-1">
                {dr.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#5B3428]/10 text-[#5B3428] dark:text-[#C79284] flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-200 font-light">
                      {edu}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements & Awards */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8D5A4D]" />
                <span>Awards & Achievements</span>
              </h3>
              <ul className="space-y-3 pl-1">
                {dr.awards.map((aw, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-50 dark:bg-yellow-950/20 text-yellow-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-200 font-light">
                      {aw}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Memberships */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8D5A4D]" />
                <span>Medical Associations & Memberships</span>
              </h3>
              <ul className="space-y-3.5 pl-1">
                {dr.memberships.map((memb, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C79284] shrink-0 mt-2"></div>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-200 font-light leading-relaxed">
                      {memb}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Patient Endorsements */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2">
                Dermatology Patient Endorsements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {testimonials.slice(0, 2).map((t) => (
                  <div key={t.id} className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/20 p-5 rounded-2xl space-y-2.5 shadow-sm">
                    <div className="flex gap-0.5 text-amber-400">
                      ★★★★★
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-300 italic font-light line-clamp-3">
                      "{t.review}"
                    </p>
                    <p className="text-[11px] font-sans font-bold text-gray-800 dark:text-[#FFF9F7] uppercase tracking-wide">
                      - {t.name}, {t.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA Action */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-semibold text-xs py-4 px-8 rounded-full shadow-lg transition flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation Slot with Dr. Vaishali</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
