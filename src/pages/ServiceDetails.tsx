import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronLeft, Calendar, Shield, Sparkles, AlertCircle } from "lucide-react";
import { services } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setBookingModalOpen } = useClinic();

  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!service) {
    return (
      <div className="py-24 px-4 md:px-8 text-center max-w-md mx-auto space-y-6">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        <h2 className="font-serif font-bold text-2xl text-[#5B3428]">Service Not Found</h2>
        <p className="text-xs text-gray-500 font-light leading-relaxed">
          The skincare or hair service you are looking for doesn't exist or has been relocated.
        </p>
        <Link
          to="/services"
          className="inline-block bg-[#5B3428] text-white text-xs font-semibold px-6 py-3 rounded-full transition"
        >
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div id="service-details-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title={service.title} parentName="Services" parentPath="/services" />

      {/* Main Container */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs text-[#8D5A4D] hover:text-[#5B3428] font-semibold mb-8 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column: Media & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-gray-100 dark:border-[#5B3428]/30 shadow-md aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tech Used Card */}
            <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#5B3428] dark:text-[#C79284]">
                <Sparkles className="w-4.5 h-4.5" />
                <h4 className="font-serif font-bold text-sm">Target Clinical Technologies</h4>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                We employ USFDA approved, medical-grade diagnostic platforms to carry out this service:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-sans font-semibold text-[#8D5A4D] bg-[#FFF9F7] dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-transparent px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Information Sheet */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FFF9F7] dark:bg-[#251815] border border-[#C79284]/25 px-3 py-1 rounded-full">
                <Shield className="w-3.5 h-3.5 text-[#8D5A4D]" />
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8D5A4D] dark:text-[#C79284]">
                  Clinical Portfolio
                </span>
              </div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#5B3428] dark:text-white leading-tight">
                {service.title}
              </h2>
              <div className="w-16 h-0.5 bg-[#C79284] my-2"></div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2">
                Expected Treatment Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Steps */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] border-b border-gray-100 dark:border-gray-800 pb-2">
                Procedural Walkthrough Steps
              </h3>
              <div className="space-y-3.5 pl-1">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#5B3428] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
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

            {/* Interactive CTAs */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-semibold text-xs py-3.5 px-8 rounded-full shadow-md flex items-center gap-2 transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
              </button>
              <Link
                to="/contact"
                className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] dark:bg-[#251815] dark:hover:bg-gray-800 border border-[#F0E6E2] dark:border-[#5B3428]/30 font-sans font-semibold text-xs py-3.5 px-8 rounded-full shadow-sm transition"
              >
                Inquire Rates & Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
