import React, { useState } from "react";
import { Briefcase, MapPin, Clock, Send, Check, UploadCloud } from "lucide-react";
import { careers } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const Career: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: ""
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setResumeName("");
    setFormData({ name: "", email: "", phone: "", position: "", coverLetter: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  return (
    <div id="career-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Careers" />

      {/* 1. HERO BANNER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          JOIN OUR PANEL
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Grow Your Aesthetic Career
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Belle Skin & Hair Clinic is Nashik's leading dermatology specialist center. Join our expanding team of professional nurses, therapists, and medical coordinators.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. OPENINGS LIST */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Careers listings */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif font-bold text-lg md:text-xl text-[#5B3428] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
            Active Job Openings
          </h2>

          <div className="space-y-6">
            {careers.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/25 p-6 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div>
                    <h3 className="font-serif font-bold text-base md:text-lg text-[#5B3428] dark:text-white">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 font-mono uppercase tracking-wider font-semibold mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="bg-[#FFF9F7] dark:bg-[#1E120F] border border-[#C79284]/25 px-3 py-1 rounded-full text-[10px] font-sans font-bold text-[#8D5A4D] shrink-0 self-start sm:self-center">
                    Experience: {job.experience}
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-sans font-bold text-gray-800 dark:text-[#FFF9F7]">
                    Primary Key Qualifications:
                  </h4>
                  <ul className="text-xs text-gray-500 dark:text-gray-400 pl-4 list-disc space-y-1 font-light">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Apply online Form */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 rounded-3xl p-6 shadow-sm space-y-6 sticky top-28">
            <div className="flex items-center gap-2 text-[#5B3428] dark:text-[#C79284]">
              <Briefcase className="w-4.5 h-4.5" />
              <h3 className="font-serif font-bold text-base">Submit Application Online</h3>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Fill out the form below and attach your comprehensive medical CV. Our administrative desk will review details.
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300 text-xs p-4 rounded-xl border border-green-100 flex items-start gap-2.5 animate-fadeIn">
                <Check className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Application Logged Successfully!</p>
                  <p className="font-light mt-0.5">Thank you for applying. We will reach out if credentials match.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
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

                {/* Position */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Target Role Position
                  </label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-white dark:bg-[#1E120F] border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  >
                    <option value="">Select a role...</option>
                    <option value="dermatologist">Consultant Dermatologist</option>
                    <option value="nurse">Clinical Nurse & Therapist</option>
                    <option value="admin">Clinic Receptionist</option>
                  </select>
                </div>

                {/* File Upload Resume */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Upload Resume (PDF/DOC)
                  </label>
                  <div className="relative border-2 border-dashed border-gray-200 dark:border-[#5B3428]/40 rounded-xl p-4 text-center cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800 transition">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-1 text-center">
                      <UploadCloud className="w-8 h-8 text-gray-400 mx-auto" />
                      <p className="text-[11px] text-gray-500 font-light">
                        {resumeName ? (
                          <strong className="text-[#8D5A4D] font-bold">{resumeName}</strong>
                        ) : (
                          "Drag CV here or browse files"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cover letter */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Short Introduction Cover Note
                  </label>
                  <textarea
                    placeholder="Briefly state your key training or aesthetic credentials..."
                    rows={3}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full bg-transparent border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-semibold text-xs py-3.5 rounded-full shadow transition uppercase tracking-wide flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application cv</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
