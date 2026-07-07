import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, Star, ArrowRight, Shield, Heart, Award, Check } from "lucide-react";
import { clinicData, services, beforeAfters, testimonials } from "../data/clinicData";
import { useClinic } from "../context/ClinicContext";
import { BeforeAfterSlider } from "../components/ui/BeforeAfterSlider";

export const Home: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Statistics listed in the reference mockup
  const stats = [
    { value: "4.9", label: "Google Rating", sub: "⭐⭐⭐⭐⭐" },
    { value: "773+", label: "Happy Patients", sub: "Tested & Verified" },
    { value: "10+", label: "Years Experience", sub: "Clinical Experts" },
    { value: "Advanced", label: "USFDA Approved", sub: "Laser Devices" }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="home-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#FFF9F7] via-white to-[#FFF9F7] dark:from-[#1E120F] dark:via-[#170E0C] dark:to-[#1E120F] overflow-hidden">
        {/* Background abstract aesthetic elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#C79284]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8D5A4D]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-[#251815] border border-[#C79284]/30 px-4 py-1.5 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-[#8D5A4D]" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-semibold text-[#8D5A4D] dark:text-[#C79284]">
                Trusted Dermatology Care in Nashik
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-[#5B3428] dark:text-white leading-none tracking-tight">
              Healthy Skin.<br />
              <span className="text-[#8D5A4D] dark:text-[#C79284]">Confident You.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Advanced dermatology & laser treatments for healthy skin, beautiful results and lasting confidence. Experience customized clinical care supervised by Nashik's top specialists.
            </p>

            {/* Core Values Bullets */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs text-gray-700 dark:text-gray-200 font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#5B3428]/10 text-[#5B3428] dark:text-[#C79284] flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>Expert Dermatologist</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#5B3428]/10 text-[#5B3428] dark:text-[#C79284] flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#5B3428]/10 text-[#5B3428] dark:text-[#C79284] flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>Personalized Care</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-semibold text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Appointment
              </button>
              <a
                href={clinicData.whatsapp}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] dark:bg-[#251815] dark:hover:bg-gray-800 border border-[#F0E6E2] dark:border-[#5B3428]/30 font-sans font-semibold text-xs sm:text-sm px-8 py-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Radiant face representing healthy skincare results"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
            </div>

            {/* Floating Trust Rating Card (from reference image) */}
            <div className="absolute -bottom-6 right-2 sm:-right-6 bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 p-4 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-[140px] animate-pulse">
              <div className="flex -space-x-2.5 mb-2">
                <img className="w-7 h-7 rounded-full border border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=50&q=80" alt="Avatar" />
                <img className="w-7 h-7 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80" alt="Avatar" />
                <img className="w-7 h-7 rounded-full border border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&q=80" alt="Avatar" />
              </div>
              <span className="text-sm font-bold text-[#5B3428] dark:text-[#FFF9F7]">4.9 / 5</span>
              <div className="flex gap-0.5 text-amber-400 text-[10px] my-0.5">★★★★★</div>
              <span className="text-[9px] text-gray-500 dark:text-gray-400 font-light font-sans uppercase tracking-widest">
                773+ Happy Patients
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR SECTION */}
      <section className="bg-white dark:bg-[#1A0F0D] py-8 border-y border-[#F0E6E2] dark:border-[#5B3428]/25 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#F0E6E2]/70 dark:divide-[#5B3428]/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 space-y-1">
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#5B3428] dark:text-[#C79284]">
                  {stat.value}
                </h3>
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                  {stat.label}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-400 uppercase tracking-widest font-mono">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE SERVICES GRID */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              OUR SERVICES
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#5B3428] dark:text-white">
              Comprehensive Skin & Hair Solutions
            </h2>
            <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              We offer a wide range of dermatology and cosmetology treatments. Each treatment is tailored to deliver safe, effective, and long-lasting clinical results.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="group relative bg-white dark:bg-[#251815] rounded-3xl border border-[#F0E6E2] dark:border-[#5B3428]/25 p-6 hover:shadow-xl dark:hover:shadow-2xl/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image header with crop */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={svc.imageUrl}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#8D5A4D] bg-[#FFF9F7] dark:bg-[#1E120F] px-2 py-1 rounded">
                      {svc.category}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#C79284]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-[#FFF9F7] group-hover:text-[#8D5A4D] transition">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-300 font-light line-clamp-3 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
                  <Link
                    to={`/services/${svc.id}`}
                    className="text-xs font-semibold text-[#5B3428] dark:text-[#C79284] hover:underline flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer view treatments button */}
          <div className="text-center mt-12">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-medium text-xs py-3.5 px-8 rounded-full shadow-md transition-all duration-300"
            >
              <span>View All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT CHIEF DERMATOLOGIST PREVIEW */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-[#1E120F] border-y border-[#F0E6E2]/50 dark:border-[#5B3428]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Doctor Photo */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-[#F0E6E2] dark:border-[#5B3428]/40 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Vaishali Nahata Belle chief dermatologist"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-[#F0E6E2]/40 text-center">
                  <h4 className="font-serif font-bold text-sm text-[#5B3428] dark:text-white">
                    Dr. Vaishali Nahata Belle
                  </h4>
                  <p className="text-[10px] text-[#8D5A4D] dark:text-[#C79284] tracking-wider uppercase font-medium">
                    Dermatologist & Laser Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Right Doctor Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
                ABOUT CHIEF DERMATOLOGIST
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#5B3428] dark:text-white">
                Where Expertise Meets Compassion
              </h2>
              <div className="w-16 h-0.5 bg-[#C79284] my-2"></div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                At Dr. Vaishali Nahata Belle's Skin Care & Laser Clinic, we believe that healthy, glowing skin is the foundation of self-assurance. We utilize cutting-edge medical diagnostics combined with advanced aesthetic procedures to deliver safe, highly ethical, and customized treatments.
              </p>

              {/* Core Features list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Personalized Treatment Plans
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">Every patient's skin and hair concerns are analyzed individually before any procedure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Advanced Technology & USFDA Safe Procedures
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">We invest in certified laser platforms and strict hygiene audits for maximum client safety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Ethical, Transparent & Patient-Focused Care
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">We explain procedural steps, expected sessions, and cost structures with total clarity.</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 bg-[#FFF9F7] text-[#5B3428] hover:bg-[#5B3428] hover:text-white dark:bg-[#251815] dark:text-[#FFF9F7] border border-[#F0E6E2] dark:border-[#5B3428]/40 px-6 py-3 rounded-full text-xs font-semibold shadow-sm transition-all duration-300"
                >
                  <span>Read Doctor Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white text-xs font-semibold px-6 py-3 rounded-full shadow transition"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE & AFTER PORTFOLIO */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              BEFORE & AFTER
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#5B3428] dark:text-white">
              Real Results. Real People.
            </h2>
            <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2"></div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light max-w-sm mx-auto">
              Drag the golden slider divider to inspect patient transformations in detail.
            </p>
          </div>

          {/* Grid of Interactive sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfters.map((ba) => (
              <BeforeAfterSlider
                key={ba.id}
                beforeUrl={ba.beforeUrl}
                afterUrl={ba.afterUrl}
                title={ba.title}
                subtitle={ba.treatmentName}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/before-after"
              className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] hover:underline"
            >
              View Full Clinical Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PATIENT TESTIMONIALS (CUSTOM SMOOTH CAROUSEL) */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-[#1A0F0D] border-t border-[#F0E6E2]/40 dark:border-[#5B3428]/25">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              PATIENTS LOVE US
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white">
              Hear From Our Happy Patients
            </h2>
            <div className="w-12 h-0.5 bg-[#C79284] mx-auto"></div>
          </div>

          {/* Carousel Frame */}
          <div className="relative bg-[#FFF9F7] dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 rounded-3xl p-6 md:p-10 shadow-sm transition">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Patient Photo */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C79284]/50 shadow">
                <img
                  src={testimonials[activeTestimonial].imageUrl}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif font-light italic text-sm md:text-lg text-[#5B3428] dark:text-gray-200 leading-relaxed max-w-2xl">
                "{testimonials[activeTestimonial].review}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="font-sans font-bold text-xs md:text-sm text-gray-800 dark:text-[#FFF9F7]">
                  - {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-[10px] text-[#8D5A4D] dark:text-[#C79284] uppercase tracking-wider font-semibold">
                  Patient for {testimonials[activeTestimonial].treatment}
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevTestimonial}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-[#5B3428]/35 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#5B3428] hover:text-white hover:border-transparent transition-all"
                aria-label="Previous review"
              >
                &larr;
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-[#5B3428]/35 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#5B3428] hover:text-white hover:border-transparent transition-all"
                aria-label="Next review"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH CONVERTING CTA */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-r from-[#5B3428] to-[#8D5A4D] text-[#FFF9F7] relative overflow-hidden">
        {/* Background graphic */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="font-serif font-bold text-3xl md:text-4xl leading-tight">
            Your Skin Deserves the Best Care
          </h2>
          <p className="text-xs md:text-sm text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Book an appointment today with Dr. Vaishali Nahata Belle to analyze your skin barrier and get your customized dermatology and hair care plan.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-[#5B3428] hover:bg-[#FFF9F7] font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Appointment Now
            </button>
            <a
              href={clinicData.whatsapp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-sans font-bold text-xs py-3.5 px-8 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          {/* Quick Info badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto border-t border-white/10 text-xs font-light text-gray-200">
            <div className="text-center">
              <p className="font-semibold text-white">Advanced</p>
              <p className="text-[10px] text-gray-300">Technology</p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="font-semibold text-white">Expert</p>
              <p className="text-[10px] text-gray-300">Dermatologist</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">Safe & Clean</p>
              <p className="text-[10px] text-gray-300">Environment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
