import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check, MessageSquare, ShieldCheck } from "lucide-react";
import { clinicData } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div id="contact-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Contact Us" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          GET IN TOUCH
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Connect With Our Specialists
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Have an inquiry about skin clearing, laser toning, GFC session pricing, or directions to our Nashik center? Reach out to us.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. SPEC SHEET & MAP & FORM */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Channels */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
              Clinical Desk Channels
            </h3>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center justify-center shrink-0 text-[#8D5A4D] shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] uppercase tracking-wider">Our Address</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                  {clinicData.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center justify-center shrink-0 text-[#8D5A4D] shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] uppercase tracking-wider">Phone Lines</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-light font-mono">
                  {clinicData.phone}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center justify-center shrink-0 text-[#8D5A4D] shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] uppercase tracking-wider">Email Support</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-light font-mono">
                  {clinicData.email}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 flex items-center justify-center shrink-0 text-[#8D5A4D] shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#5B3428] dark:text-[#C79284] uppercase tracking-wider">Clinical Hours</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                  {clinicData.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-transparent p-5 rounded-2xl shadow-sm space-y-2 flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#8D5A4D] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-xs text-[#5B3428] dark:text-white">USFDA Audited Facility</h4>
              <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                Belle Skin & Hair Clinic is fully compliant with state pollution boards and certified bio-waste management standard checks.
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Map directions */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
            Location Map
          </h3>
          <div className="rounded-[2.5rem] overflow-hidden border border-[#F0E6E2] dark:border-transparent shadow-md aspect-square lg:aspect-[4/5] bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m18!1m2!1s0x3bdd9140a83fdfff%3A0xe5a3c031853d9fbb!2sAhilyadevi%20Holkar%20Marg%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692234000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Google Map location directions Belle Skin Clinic"
            ></iframe>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 rounded-3xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-[#5B3428] dark:text-[#C79284]">
              <MessageSquare className="w-4.5 h-4.5" />
              <h3 className="font-serif font-bold text-base">Send Instant Message</h3>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Fill out your parameters and our team will revert within 24 operational hours.
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300 text-xs p-4 rounded-xl border border-green-100 flex items-start gap-2.5 animate-fadeIn">
                <Check className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Message Logged!</p>
                  <p className="font-light mt-0.5">Your inquiry is noted. We will contact you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone digits"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Laser price quote, Appointment"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Message Details
                  </label>
                  <textarea
                    required
                    placeholder="State your concerns..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-semibold text-xs py-3.5 rounded-full shadow transition uppercase tracking-wide flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
