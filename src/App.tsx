import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClinicProvider } from "./context/ClinicContext";
import { Topbar } from "./components/layout/Topbar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingButtons } from "./components/ui/FloatingButtons";
import { BookAppointmentModal } from "./components/ui/BookAppointmentModal";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetails } from "./pages/ServiceDetails";
import { Treatments } from "./pages/Treatments";
import { TreatmentDetails } from "./pages/TreatmentDetails";
import { BeforeAfterPage } from "./pages/BeforeAfter";
import { Doctors } from "./pages/Doctors";
import { Testimonials } from "./pages/Testimonials";
import { Pricing } from "./pages/Pricing";
import { Offers } from "./pages/Offers";
import { FAQ } from "./pages/FAQ";
import { Blog } from "./pages/Blog";
import { BlogDetails } from "./pages/BlogDetails";
import { Career } from "./pages/Career";
import { Contact } from "./pages/Contact";
import { BookAppointmentPage } from "./pages/BookAppointmentPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <ClinicProvider>
      <Router>
        <div className="min-h-screen bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7] flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-[#C79284] selection:text-white">
          {/* Global Top Scroll Indicator */}
          <ScrollProgressBar />

          {/* Layout Headers */}
          <Topbar />
          <Navbar />

          {/* Core App View Stages */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/:id" element={<TreatmentDetails />} />
              <Route path="/before-after" element={<BeforeAfterPage />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-appointment" element={<BookAppointmentPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Layout Footers */}
          <Footer />

          {/* Floating Action Elements */}
          <FloatingButtons />

          {/* Persistent Lead-Capture Booking Modal Dialog */}
          <BookAppointmentModal />
        </div>
      </Router>
    </ClinicProvider>
  );
}
