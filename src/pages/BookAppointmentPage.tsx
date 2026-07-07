import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Phone, Mail, Clock, ShieldCheck, Sparkles, Check, ChevronRight } from "lucide-react";
import { services, treatments, doctors } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useClinic } from "../context/ClinicContext";

export const BookAppointmentPage: React.FC = () => {
  const { bookAppointment } = useClinic();
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [selectedService, setSelectedService] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "12:15 PM",
    "02:00 PM",
    "03:30 PM",
    "04:45 PM",
    "06:00 PM"
  ];

  const handleNextStep = () => {
    if (step === 1 && (!selectedService || !selectedTreatment)) return;
    if (step === 2 && (!appointmentDate || !appointmentTime)) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) return;

    bookAppointment({
      name: fullName,
      email,
      phone,
      service: treatments.find((t) => t.id === selectedTreatment)?.title || "Consultation",
      date: appointmentDate,
      time: appointmentTime,
      message: notes
    });
    setFormSubmitted(true);
  };

  return (
    <div id="booking-planner-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Book An Appointment" />

      {/* Hero */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          SCHEDULE SLOTS
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Select Your Diagnostic Path
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Book your USFDA approved clinical skin analysis or GFC hair growth consultation slot instantly. No queuing required.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* Main Multi-Step Section */}
      <section className="pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-[#251815] rounded-[2.5rem] border border-[#F0E6E2] dark:border-[#5B3428]/35 shadow-lg overflow-hidden">
          {/* Step indicators */}
          <div className="bg-[#FFF9F7] dark:bg-[#1E120F] border-b border-[#F0E6E2] dark:border-[#5B3428]/20 px-8 py-4.5 flex justify-between items-center text-[11px] uppercase tracking-widest font-mono font-bold text-gray-400">
            <span className={step >= 1 ? "text-[#8D5A4D]" : ""}>1. Specialty</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className={step >= 2 ? "text-[#8D5A4D]" : ""}>2. Date & Time</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className={step >= 3 ? "text-[#8D5A4D]" : ""}>3. Personal Info</span>
          </div>

          <div className="p-8 md:p-12">
            {formSubmitted ? (
              /* Confirmation State */
              <div className="text-center py-10 space-y-6 max-w-md mx-auto animate-fadeIn">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-950/20 text-green-500 rounded-full flex items-center justify-center mx-auto shadow">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-[#5B3428] dark:text-white">
                    Appointment Requested!
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                    Thank you <strong className="font-semibold text-gray-700 dark:text-white">{fullName}</strong>. Your clinical request for <strong className="font-semibold text-gray-700 dark:text-white">{treatments.find((t) => t.id === selectedTreatment)?.title}</strong> is logged. Our administrative desk will call your number to finalize the calendar slot.
                  </p>
                </div>

                {/* Booking summary ticket */}
                <div className="bg-[#FFF9F7] dark:bg-[#1E120F] border border-[#F0E6E2] dark:border-[#5B3428]/20 rounded-2xl p-5 text-left text-xs text-gray-600 dark:text-gray-300 font-light space-y-2">
                  <p><strong>Dermatologist:</strong> {selectedDoctor}</p>
                  <p><strong>Target Date:</strong> {appointmentDate}</p>
                  <p><strong>Target Session:</strong> {appointmentTime}</p>
                  <p><strong>Contact phone:</strong> {phone}</p>
                </div>

                <div className="pt-4">
                  <Link
                    to="/"
                    className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white text-xs font-semibold px-8 py-3.5 rounded-full shadow transition"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              /* Steps Content */
              <div className="space-y-8">
                {/* Step 1: Select Specialty and Treatment */}
                {step === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-white">
                        Choose Specialty Concerns
                      </h3>
                      <p className="text-xs text-gray-400 font-light">
                        Select a broader clinical category followed by your specific targeted therapy.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Service Category Selection */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          1. Broad Category
                        </label>
                        <select
                          required
                          value={selectedService}
                          onChange={(e) => {
                            setSelectedService(e.target.value);
                            setSelectedTreatment("");
                          }}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                        >
                          <option value="" className="dark:text-[#2B2B2B]">Select a category...</option>
                          {services.map((svc) => (
                            <option key={svc.id} value={svc.id} className="dark:text-[#2B2B2B]">
                              {svc.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Specific Treatment Selection */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          2. Targeted Treatment
                        </label>
                        <select
                          required
                          disabled={!selectedService}
                          value={selectedTreatment}
                          onChange={(e) => setSelectedTreatment(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white disabled:opacity-50"
                        >
                          <option value="" className="dark:text-[#2B2B2B]">Select a procedure...</option>
                          {treatments
                            .filter((t) => t.serviceId === selectedService)
                            .map((tr) => (
                              <option key={tr.id} value={tr.id} className="dark:text-[#2B2B2B]">
                                {tr.title}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex justify-end">
                      <button
                        onClick={handleNextStep}
                        disabled={!selectedService || !selectedTreatment}
                        className="bg-[#5B3428] hover:bg-[#8D5A4D] disabled:opacity-50 text-white font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition"
                      >
                        Continue to Date Selection &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-white">
                        Select Target Date & Session Slot
                      </h3>
                      <p className="text-xs text-gray-400 font-light">
                        Appointments are subject to doctor availability check. Sunday is closed.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Date */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          Target Date
                        </label>
                        <input
                          type="date"
                          required
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                        />
                      </div>

                      {/* Doctor choice */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          Specialist Dermatologist
                        </label>
                        <select
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                        >
                          {doctors.map((d) => (
                            <option key={d.name} value={d.name} className="dark:text-[#2B2B2B]">
                              {d.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Time slots grid */}
                    <div className="space-y-3">
                      <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                        Select Preferred Session Time
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setAppointmentTime(slot)}
                            className={`py-2.5 rounded-xl text-center text-xs font-semibold border transition ${
                              appointmentTime === slot
                                ? "bg-[#8D5A4D] text-white border-transparent shadow"
                                : "bg-transparent border-gray-200 dark:border-[#5B3428]/40 text-gray-600 dark:text-gray-300 hover:bg-[#FFF9F7] dark:hover:bg-gray-800"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex justify-between">
                      <button
                        onClick={handlePrevStep}
                        className="bg-transparent text-gray-400 font-sans font-semibold text-xs py-3.5 px-6 rounded-full transition"
                      >
                        &larr; Back
                      </button>
                      <button
                        onClick={handleNextStep}
                        disabled={!appointmentDate || !appointmentTime}
                        className="bg-[#5B3428] hover:bg-[#8D5A4D] disabled:opacity-50 text-white font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition"
                      >
                        Proceed to Contact Details &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Information & Confirm */}
                {step === 3 && (
                  <form onSubmit={handleConfirmBooking} className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-white">
                        Enter Personal Contact Information
                      </h3>
                      <p className="text-xs text-gray-400 font-light">
                        Double-check your mobile digits so our team can send SMS validation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          Active Mobile Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter 10 digit mobile"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                        />
                      </div>

                      {/* Notes */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                          Allergies or Skin Notes (Optional)
                        </label>
                        <textarea
                          placeholder="e.g. skin dryness, prior laser treatments..."
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="bg-[#FFF9F7] dark:bg-[#1E120F] border border-green-200/50 p-4 rounded-2xl flex items-start gap-2.5 text-xs text-gray-500 dark:text-gray-400 font-light">
                      <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <p>
                        Your details are protected under standard clinical doctor-patient confidentiality codes. We never sell, leak, or spam your communication lines.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="bg-transparent text-gray-400 font-sans font-semibold text-xs py-3.5 px-6 rounded-full transition"
                      >
                        &larr; Back
                      </button>
                      <button
                        type="submit"
                        className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-sans font-bold text-xs py-3.5 px-8 rounded-full shadow transition"
                      >
                        Confirm Clinical Booking Slot
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
