import React, { useState, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  title: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeUrl,
  afterUrl,
  title,
  subtitle
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="bg-white dark:bg-[#251815] rounded-2xl p-4 border border-[#F0E6E2] dark:border-[#5B3428]/25 shadow-sm">
      {/* Title */}
      <div className="mb-3.5 flex justify-between items-center px-1">
        <div>
          <h4 className="font-serif font-bold text-sm md:text-base text-[#5B3428] dark:text-[#FFF9F7]">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-light">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex gap-2 text-[10px] font-mono tracking-wider uppercase font-semibold">
          <span className="bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 px-2 py-0.5 rounded">
            Before
          </span>
          <span className="bg-green-50 text-green-600 dark:bg-green-950/20 dark:text-green-400 px-2 py-0.5 rounded">
            After
          </span>
        </div>
      </div>

      {/* Interactive slider frame */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none border border-gray-100 dark:border-gray-800"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <img
          src={afterUrl}
          alt="After Treatment clinical view"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* Before Image (Overlay with clipping) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeUrl}
            alt="Before Treatment clinical view"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            loading="lazy"
          />
        </div>

        {/* Slider line divider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#C79284] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#5B3428] border-2 border-[#C79284] shadow-md flex items-center justify-center text-[#5B3428] dark:text-white font-mono text-xs font-bold">
            &harr;
          </div>
        </div>

        {/* Floating Labels */}
        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest py-1 px-2.5 rounded-full pointer-events-none">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-[#5B3428]/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest py-1 px-2.5 rounded-full pointer-events-none">
          After
        </div>
      </div>

      <div className="mt-3 text-center text-[11px] text-gray-400 italic">
        *Results may vary. Drag slider to compare details.
      </div>
    </div>
  );
};
