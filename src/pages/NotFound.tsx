import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div id="not-found-page" className="w-full min-h-[70vh] bg-[#FFF9F7] dark:bg-[#1E120F] flex flex-col items-center justify-center px-4 py-16 text-center space-y-6">
      <Compass className="w-16 h-16 text-[#8D5A4D] animate-pulse" />

      <div className="space-y-2">
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-[#5B3428] dark:text-white">
          404
        </h1>
        <h2 className="font-serif font-bold text-lg sm:text-xl text-[#8D5A4D]">
          This Page Has Been Repaired
        </h2>
        <p className="text-xs text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
          The skincare resource, blog link, or clinical treatment page you followed has been archived or relocated.
        </p>
      </div>

      <div className="w-12 h-0.5 bg-[#C79284]"></div>

      <Link
        to="/"
        className="bg-[#5B3428] hover:bg-[#8D5A4D] text-white text-xs font-semibold px-8 py-3.5 rounded-full shadow-md flex items-center gap-1.5 transition"
      >
        <span>Back to Clinical Portal</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
