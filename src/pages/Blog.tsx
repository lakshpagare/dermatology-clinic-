import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { blogs } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  const blogCategories = [
    { id: "all", label: "All Posts" },
    { id: "skin care", label: "Skin Care Guides" },
    { id: "hair care", label: "Hair Restoration" },
    { id: "lifestyle", label: "Aesthetic Lifestyle" }
  ];

  return (
    <div id="blog-listing-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title="Clinical Blog" />

      {/* 1. HERO HEADER */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D5A4D] font-bold block">
          CLINICAL JOURNAL
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#5B3428] dark:text-white leading-tight">
          Skin & Hair Care Journal
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Read medical skincare, hair fall control advice and treatment reviews authored directly by our Chief Specialist, Dr. Vaishali Nahata Belle.
        </p>
        <div className="w-16 h-0.5 bg-[#C79284] mx-auto mt-2.5"></div>
      </section>

      {/* 2. SEARCH & FILTERS */}
      <section className="pb-10 px-4 md:px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Category buttons */}
        <div className="md:col-span-8 flex flex-wrap gap-2 justify-center md:justify-start">
          {blogCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-sans font-semibold text-xs py-2 px-4 rounded-full border transition ${
                activeCategory === cat.id
                  ? "bg-[#5B3428] text-white border-transparent shadow-sm"
                  : "bg-white dark:bg-[#251815] border-[#F0E6E2] dark:border-[#5B3428]/25 text-gray-700 dark:text-gray-300 hover:bg-[#FFF9F7]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="md:col-span-4 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 text-xs pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
          />
        </div>
      </section>

      {/* 3. BLOG POSTS GRID */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-[#251815] rounded-3xl border border-[#F0E6E2] dark:border-[#5B3428]/25 overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold text-[#8D5A4D]">
                    {post.category}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-3.5 flex-grow">
                  <div className="flex gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-semibold font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base md:text-lg text-[#5B3428] dark:text-[#FFF9F7] group-hover:text-[#8D5A4D] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-300 font-light leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Footer read link */}
                <div className="p-6 pt-0 border-t border-gray-50 dark:border-gray-800/60 mt-4 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[#5B3428] text-[9px] uppercase border">
                      VD
                    </div>
                    <span>{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#5B3428] dark:text-[#C79284] font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto space-y-4">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto" />
            <h4 className="font-serif font-bold text-lg text-gray-700">No Articles Match Your Search</h4>
            <p className="text-xs text-gray-400 font-light">
              Try searching for other skin terms or toggle the "All Posts" filter.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
