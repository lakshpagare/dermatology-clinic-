import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  title: string;
  parentName?: string;
  parentPath?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, parentName, parentPath }) => {
  return (
    <nav className="w-full bg-[#FFF9F7] dark:bg-[#1C100D] py-4 border-b border-[#F0E6E2]/50 dark:border-[#5B3428]/20 mb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-[11px] md:text-xs font-sans text-gray-500 dark:text-gray-400 font-medium">
        <Link to="/" className="flex items-center gap-1 hover:text-[#5B3428] dark:hover:text-white transition">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {parentName && parentPath && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={parentPath} className="hover:text-[#5B3428] dark:hover:text-white transition">
              {parentName}
            </Link>
          </>
        )}

        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-[#5B3428] dark:text-[#C79284] font-semibold">{title}</span>
      </div>
    </nav>
  );
};
