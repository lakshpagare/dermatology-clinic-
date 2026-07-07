import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../../data/clinicData";

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "bg-[#FFF9F7] dark:bg-[#251815] border-[#C79284]/40 shadow-sm"
                : "bg-white dark:bg-[#1E120F]/60 border-[#F0E6E2] dark:border-[#5B3428]/25 hover:border-[#C79284]/50"
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-5 md:p-6 flex items-start gap-4 justify-between"
              aria-expanded={isOpen}
            >
              <div className="flex gap-3">
                <HelpCircle className="w-5 h-5 text-[#8D5A4D] shrink-0 mt-0.5" />
                <span className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7] leading-tight">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#8D5A4D] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion body with custom smooth scaling height */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-60 border-t border-[#F0E6E2]/50 dark:border-gray-800/50" : "max-h-0"
              }`}
            >
              <div className="p-5 md:p-6 text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
