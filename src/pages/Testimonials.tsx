import React, { useState } from "react";
import { Star, Quote, MessageSquare, Check, Sparkles } from "lucide-react";
import { testimonials } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const Testimonials: React.FC = () => {
  const { setBookingModalOpen } = useClinic();
  const [localReviews, setLocalReviews] = useState(testimonials);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    location: "Nashik",
    rating: 5,
    treatment: "",
    review: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.review || !reviewForm.treatment) return;

    const newReview = {
      id: `local-r-${Date.now()}`,
      name: reviewForm.name,
      location: reviewForm.location,
      rating: reviewForm.rating,
      review: reviewForm.review,
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      treatment: reviewForm.treatment
    };

    setLocalReviews([newReview, ...localReviews]);
    setFormSubmitted(true);
    setReviewForm({ name: "", location: "Nashik", rating: 5, treatment: "", review: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div id="testimonials-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Patient Testimonials" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          PATIENT VOICES
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Hear From Our Happy Patients
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Read real patient reviews and testimonials about our skincare, anti-aging, pigmentation and GFC hair restoration treatments.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. REVIEWS INDEX GRID */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Testimonial cards */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {localReviews.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-[#251815] rounded-3xl border border-[#F0E6E2] dark:border-[#5B3428]/25 p-6 shadow-sm hover:shadow-md transition duration-300 relative flex flex-col justify-between min-h-[220px]"
              >
                <Quote className="absolute right-6 top-6 w-8 h-8 text-[#8D5A4D]/10 shrink-0 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400 text-xs">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 italic font-light leading-relaxed">
                    "{t.review}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-50 dark:border-gray-800/60 mt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800">
                    <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-gray-800 dark:text-[#FFF9F7]">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-[#8D5A4D] dark:text-[#C79284] font-medium uppercase tracking-widest">
                      {t.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Write a review form */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 rounded-3xl p-6 shadow-sm space-y-6 sticky top-28">
            <div className="flex items-center gap-2 text-[#5B3428] dark:text-[#C79284]">
              <MessageSquare className="w-4.5 h-4.5" />
              <h3 className="font-serif font-bold text-base">Share Your Experience</h3>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              We value your clinical feedback. Share your skin or hair journey to help other patients.
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300 text-xs p-4 rounded-xl border border-green-100 flex items-start gap-2.5 animate-fadeIn">
                <Check className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Review Submitted Successfully!</p>
                  <p className="font-light mt-0.5">Thank you for sharing your dermatology journey with Belle Clinic.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>

                {/* Treatment Undertaken */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Treatment Received
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. GFC Hair, HydraFacial"
                    value={reviewForm.treatment}
                    onChange={(e) => setReviewForm({ ...reviewForm, treatment: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>

                {/* Stars Dropdown */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Select Rating
                  </label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                    className="w-full bg-white dark:bg-[#1E120F] border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3/5 Average)</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Your Review Notes
                  </label>
                  <textarea
                    required
                    placeholder="Share your skin clearing or hair thickness results..."
                    rows={3}
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-semibold text-xs py-3 rounded-full transition shadow-sm uppercase tracking-wide"
                >
                  Post Review Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. CONVERTING FOOTER BAR */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#5B3428] text-[#FFF9F7] p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif font-bold text-xl md:text-2xl">
              Become Our Next Success Story
            </h3>
            <p className="text-xs text-gray-200 font-light leading-relaxed">
              We have helped over 10,000 patients achieve beautiful, healthy, and blemish-free skin. Book your consultation today.
            </p>
          </div>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-white hover:bg-[#FFF9F7] text-[#5B3428] font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition shrink-0"
          >
            Schedule Appointment &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
