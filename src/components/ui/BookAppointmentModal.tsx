import React, { useState } from "react";
import { X, Calendar, CheckCircle2, User, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import { useClinic } from "../../context/ClinicContext";
import { services } from "../../data/clinicData";

export const BookAppointmentModal: React.FC = () => {
  const { bookingModalOpen, setBookingModalOpen, bookAppointment } = useClinic();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!bookingModalOpen) return null;

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email address.";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.service) tempErrors.service = "Please choose a service.";
    if (!formData.date) tempErrors.date = "Please select a date.";
    if (!formData.time) tempErrors.time = "Please choose a preferred time.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      bookAppointment(formData);
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1200);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setBookingModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity"
        onClick={() => !showSuccess && setBookingModalOpen(false)}
      ></div>

      {/* Modal Frame */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-[#5B3428]/35 rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Close Button */}
        {!showSuccess && (
          <button
            onClick={() => setBookingModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Dynamic Success View */}
        {showSuccess ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/20 flex items-center justify-center text-green-500 mb-5 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#5B3428] dark:text-[#FFF9F7] mb-2.5">
              Appointment Requested!
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 font-light mb-6 leading-relaxed max-w-sm">
              Thank you, <strong className="font-semibold text-gray-700 dark:text-white">{formData.name}</strong>. Dr. Vaishali Belle's desk has received your request. We will reach out to confirm your slot for <strong className="font-semibold text-[#8D5A4D]">{formData.date}</strong> at <strong className="font-semibold text-[#8D5A4D]">{formData.time}</strong>.
            </p>

            <div className="w-full bg-[#FFF9F7] dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/30 rounded-xl p-4 mb-6 text-left text-xs space-y-2">
              <p className="text-gray-600 dark:text-gray-300"><span className="font-medium text-[#5B3428] dark:text-[#C79284]">Service:</span> {services.find(s => s.id === formData.service)?.title || formData.service}</p>
              <p className="text-gray-600 dark:text-gray-300"><span className="font-medium text-[#5B3428] dark:text-[#C79284]">Phone:</span> {formData.phone}</p>
              <p className="text-gray-600 dark:text-gray-300"><span className="font-medium text-[#5B3428] dark:text-[#C79284]">Clinic:</span> Belle Skin Care, Nashik</p>
            </div>

            <button
              onClick={handleCloseSuccess}
              className="w-full bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-medium py-3 rounded-full transition shadow-md"
            >
              Close & Go Back
            </button>
          </div>
        ) : (
          /* Input Form View */
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#8D5A4D]" />
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-[#FFF9F7]">
                Book Premium Consultation
              </h3>
            </div>
            <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-light mb-6">
              Complete the quick form below to request an advanced consultation slot at Belle Clinic, Nashik.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-transparent border text-xs pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white ${
                      errors.name ? "border-red-500" : "border-gray-200 dark:border-[#5B3428]/40"
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-transparent border text-xs pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white ${
                        errors.email ? "border-red-500" : "border-gray-200 dark:border-[#5B3428]/40"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="e.g. 091462 68240"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-transparent border text-xs pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white ${
                        errors.phone ? "border-red-500" : "border-gray-200 dark:border-[#5B3428]/40"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                  Choose Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full bg-white dark:bg-[#1E120F] border text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white ${
                    errors.service ? "border-red-500" : "border-gray-200 dark:border-[#5B3428]/40"
                  }`}
                >
                  <option value="">-- Choose Skincare / Hair Service --</option>
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-[10px] text-red-500 mt-0.5">{errors.service}</p>}
              </div>

              {/* Grid: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-transparent border text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white ${
                      errors.date ? "border-red-500" : "border-gray-200 dark:border-[#5B3428]/40"
                    }`}
                  />
                  {errors.date && <p className="text-[10px] text-red-500 mt-0.5">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full bg-white dark:bg-[#1E120F] border text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white ${
                      errors.time ? "border-red-500" : "border-gray-200 dark:border-[#5B3428]/40"
                    }`}
                  >
                    <option value="">-- Choose Time Slot --</option>
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                    <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                    <option value="02:30 PM - 04:00 PM">02:30 PM - 04:00 PM</option>
                    <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM</option>
                    <option value="05:30 PM - 07:30 PM">05:30 PM - 07:30 PM</option>
                  </select>
                  {errors.time && <p className="text-[10px] text-red-500 mt-0.5">{errors.time}</p>}
                </div>
              </div>

              {/* Short Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
                  Message / Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea
                    placeholder="Tell us about your skin/hair type or history..."
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5B3428] hover:bg-[#8D5A4D] disabled:bg-gray-400 text-white font-medium py-3 rounded-full transition shadow-md flex items-center justify-center gap-2 mt-4 text-xs tracking-wide uppercase"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Requesting Slot...</span>
                  </>
                ) : (
                  <span>Book Appointment Now</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
