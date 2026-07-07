import React from "react";
import { Link } from "react-router-dom";
import { Award, Shield, CheckCircle2, Heart, Star, Sparkles, BookOpen, Users, Compass } from "lucide-react";
import { clinicData, doctors } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const About: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const founder = doctors[0];

  const values = [
    {
      title: "Patient First",
      desc: "Your comfort, safety and clinical satisfaction are always our absolute top priorities.",
      icon: <Heart className="w-5 h-5 text-[#8D5A4D]" />
    },
    {
      title: "Integrity & Ethics",
      desc: "We follow honest medical practices and prescribe only what is safe and scientifically necessary for you.",
      icon: <Shield className="w-5 h-5 text-[#8D5A4D]" />
    },
    {
      title: "Advanced & Safe",
      desc: "We use state-of-the-art USFDA approved laser platforms and implement strict hygiene checks.",
      icon: <Sparkles className="w-5 h-5 text-[#8D5A4D]" />
    },
    {
      title: "Personalized Care",
      desc: "Every skin barrier is unique. We customize each treatment plan to match your skin type and concerns.",
      icon: <Compass className="w-5 h-5 text-[#8D5A4D]" />
    }
  ];

  const approachSteps = [
    "Thorough Consultation & Digital Skin Analysis",
    "Customized, Layered Treatment Plans",
    "Safe Clinical Procedures & Hygiene Audits",
    "Attentive Post-Care Follow-up & Long-term Support"
  ];

  return (
    <div id="about-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="About Us" />

      {/* 1. LUXURY HERO BANNER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              CLINIC OVERVIEW
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
              Where Expertise<br />
              Meets <span className="text-[#8D5A4D] dark:text-[#C79284]">Compassion</span>
            </h1>
            <div className="w-16 h-0.5 bg-[#C79284] mt-2"></div>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              At Dr. Vaishali Nahata Belle's Skin Care & Laser Clinic, we believe that healthy skin is the absolute foundation of your daily confidence. Our mission is to provide safe, highly effective, ethical, and personalized dermatology and trichology solutions in a comfortable, clean, and clinical environment.
            </p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Serving the Nashik community for over a decade, we have established ourselves as the premier center for laser toning, GFC hair therapy, medical facials, and anti-aging treatments.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-[#5B3428]/30 max-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Premium aesthetic clinic reception setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. MEET THE FOUNDER SECTION (matches second screenshot layout) */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white dark:bg-[#1A0F0D] border-y border-[#F0E6E2]/50 dark:border-[#5B3428]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              MEET OUR FOUNDER
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white">
              Dr. Vaishali Nahata Belle
            </h2>
            <p className="text-xs md:text-sm text-[#8D5A4D] dark:text-[#C79284] uppercase tracking-widest font-semibold">
              Chief Dermatologist & Laser Specialist
            </p>
            <div className="w-12 h-0.5 bg-[#C79284] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Image and Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-gray-100 dark:border-[#5B3428]/30 shadow-lg">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* Quick statistics */}
              <div className="bg-[#FFF9F7] dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] uppercase tracking-wider">
                  Accreditation & Quality
                </h4>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8D5A4D]" />
                    <span>USFDA Approved Lasers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8D5A4D]" />
                    <span>Sterilized and Safe Rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8D5A4D]" />
                    <span>10,000+ Completed Consultations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle Column: Biography & Narrative */}
            <div className="lg:col-span-5 space-y-6 text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              <p>{founder.bio}</p>
              <p>
                Dr. Vaishali regularly attends global aesthetic conferences in Munich, Paris, and Mumbai to bring the absolute latest advancements in laser toning, skin barrier repair, and collagen bio-stimulation directly to her patient panel in Nashik.
              </p>
              <h4 className="font-serif font-bold text-sm text-[#5B3428] dark:text-[#FFF9F7] pt-2">
                Pioneering Work in North Maharashtra
              </h4>
              <p>
                She was one of the first certified dermatologists to introduce standard Growth Factor Concentrate (GFC) therapy and triple-wavelength laser skin rejuvenation in the district, significantly upgrading local hair restoration and pigmentation standards.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-semibold text-xs px-6 py-3 rounded-full shadow transition"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Qualifications & Memberships list */}
            <div className="lg:col-span-3 space-y-6">
              {/* Qualifications */}
              <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-transparent p-6 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#5B3428] dark:text-[#C79284]">
                  <BookOpen className="w-4.5 h-4.5" />
                  <h4 className="font-serif font-bold text-sm">Qualifications</h4>
                </div>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4 font-light">
                  {founder.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-transparent p-6 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#5B3428] dark:text-[#C79284]">
                  <Users className="w-4.5 h-4.5" />
                  <h4 className="font-serif font-bold text-sm">Memberships</h4>
                </div>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4 font-light">
                  {founder.memberships.map((memb, i) => (
                    <li key={i}>{memb}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINIC VALUES SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
            OUR CORE VALUES
          </span>
          <h2 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white">
            Driven by Integrity, Defined by Quality
          </h2>
          <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#251815] p-6 rounded-2xl border border-[#F0E6E2] dark:border-[#5B3428]/25 text-center space-y-3 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF9F7] dark:bg-[#1E120F] flex items-center justify-center mx-auto shadow-sm">
                {val.icon}
              </div>
              <h3 className="font-serif font-bold text-base text-[#5B3428] dark:text-[#FFF9F7]">
                {val.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR APPROACH (matches second screenshot layout) */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white dark:bg-[#1A0F0D] border-t border-[#F0E6E2]/50 dark:border-[#5B3428]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Little gallery grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80" alt="Clinic Setup" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" alt="Clinic Setup" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80" alt="Laser Room" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#5B3428] rounded-2xl aspect-square p-4 flex flex-col justify-center text-center text-white">
                <span className="font-serif font-bold text-xl">Holistic Care</span>
                <span className="text-[10px] text-gray-300 uppercase tracking-widest font-mono mt-1">Skin & Hair</span>
              </div>
            </div>
          </div>

          {/* Right Column: Approach Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
              OUR CLINICAL APPROACH
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#5B3428] dark:text-white leading-tight">
              Science. Care. Results.
            </h2>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              We combine scientific expertise with a compassionate, gentle touch to deliver visible, natural-looking, and long-lasting results. Our diagnostics protocol ensures that we pinpoint root causes before writing prescriptions.
            </p>

            <ul className="space-y-4 pt-2">
              {approachSteps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {step}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-semibold text-xs py-3.5 px-8 rounded-full shadow transition"
              >
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
