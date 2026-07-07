import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, RefreshCw, Sparkles, CheckCircle2, ChevronLeft, Calendar, HelpCircle, ArrowRight } from "lucide-react";
import { treatments, services } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const TreatmentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setBookingModalOpen } = useClinic();

  const treatment = treatments.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!treatment) {
    return (
      <div className="py-24 px-4 md:px-8 text-center max-w-md mx-auto space-y-6">
        <Sparkles className="w-16 h-16 text-yellow-500 mx-auto" />
        <h2 className="font-serif font-bold text-2xl text-[#5B3428]">Treatment Not Found</h2>
        <p className="text-xs text-gray-500 font-light leading-relaxed">
          The specific clinical procedure you are seeking was not found. Explore our full catalog of dermatological services.
        </p>
        <Link
          to="/treatments"
          className="inline-block bg-[#5B3428] text-white text-xs font-semibold px-6 py-3 rounded-full transition"
        >
          View All Treatments
        </Link>
      </div>
    );
  }

  // Related treatments under the same service
  const related = treatments.filter((t) => t.serviceId === treatment.serviceId && t.id !== treatment.id);

  return (
    <div id="treatment-details-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title={treatment.title} parentName="Treatments" parentPath="/treatments" />

      {/* Main Container */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Link
          to="/treatments"
          className="inline-flex items-center gap-1.5 text-xs text-[#8D5A4D] hover:text-[#5B3428] font-semibold mb-8 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Treatments</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info Card */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#8D5A4D] bg-[#FFF9F7] dark:bg-[#251815] px-3 py-1 rounded-full border border-[#C79284]/20 font-bold">
                {services.find((s) => s.id === treatment.serviceId)?.title || "Specialty"}
              </span>
              <h1 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white leading-tight">
                {treatment.title}
              </h1>
              <div className="w-16 h-0.5 bg-[#C79284] my-2"></div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#251815] p-5 rounded-2xl border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#8D5A4D]" />
                <div>
                  <h4 className="text-[10px] uppercase text-gray-400 font-mono tracking-wider">Session Duration</h4>
                  <p className="text-xs md:text-sm font-bold text-[#5B3428] dark:text-white">{treatment.duration}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#251815] p-5 rounded-2xl border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-[#8D5A4D]" />
                <div>
                  <h4 className="text-[10px] uppercase text-gray-400 font-mono tracking-wider">Recovery Time</h4>
                  <p className="text-xs md:text-sm font-bold text-[#5B3428] dark:text-white">{treatment.recoveryTime}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#251815] p-5 rounded-2xl border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#8D5A4D]" />
                <div>
                  <h4 className="text-[10px] uppercase text-gray-400 font-mono tracking-wider">Clinical Grade</h4>
                  <p className="text-xs md:text-sm font-bold text-[#5B3428] dark:text-white">USFDA Certified</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2">
                Core Clinical Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {treatment.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure Steps */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2">
                The Treatment Protocol Steps
              </h3>
              <div className="space-y-4 pl-1">
                {treatment.procedureSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#5B3428] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-700 dark:text-gray-200 font-light leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Specific FAQs */}
            {treatment.faqs && treatment.faqs.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2">
                  Treatment FAQ Answer Key
                </h3>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, i) => (
                    <div key={i} className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 p-5 rounded-2xl space-y-2">
                      <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#5B3428] dark:text-[#FFF9F7]">
                        <HelpCircle className="w-4 h-4 text-[#8D5A4D] shrink-0" />
                        <span>{faq.q}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-300 font-light pl-6 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2.5">
                Book Appointment
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                Secure your consultation for this advanced procedure with Dr. Vaishali Nahata Belle.
              </p>

              {treatment.price && (
                <div className="bg-[#FFF9F7] dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-[#5B3428]/20 rounded-xl p-4 text-center">
                  <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Premium Rate Range</span>
                  <p className="text-base font-serif font-bold text-[#5B3428] dark:text-[#C79284] mt-1">{treatment.price}</p>
                  <p className="text-[9px] text-gray-400 italic mt-1">*Consultation charges separate</p>
                </div>
              )}

              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full bg-[#5B3428] hover:bg-[#8D5A4D] text-white text-xs font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 shadow transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Slot</span>
              </button>
            </div>

            {/* Related Treatments list */}
            {related.length > 0 && (
              <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-sm text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                  Related Clinical Procedures
                </h3>
                <ul className="space-y-3.5">
                  {related.map((t) => (
                    <li key={t.id}>
                      <Link
                        to={`/treatments/${t.id}`}
                        className="group flex justify-between items-center text-xs text-gray-600 dark:text-gray-300 hover:text-[#5B3428] dark:hover:text-[#C79284] transition"
                      >
                        <span className="font-medium line-clamp-1">{t.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
