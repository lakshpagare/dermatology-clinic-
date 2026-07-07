import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, User, MessageSquare, Send, Check, AlertCircle } from "lucide-react";
import { blogs } from "../data/clinicData";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogs.find((b) => b.id === id);

  const [commentsList, setCommentsList] = useState<{ name: string; date: string; text: string }[]>([]);
  const [commentForm, setCommentForm] = useState({ name: "", text: "" });
  const [submittedComment, setSubmittedComment] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (post) {
      setCommentsList(post.comments || []);
    }
  }, [id, post]);

  if (!post) {
    return (
      <div className="py-24 px-4 md:px-8 text-center max-w-md mx-auto space-y-6">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        <h2 className="font-serif font-bold text-2xl text-[#5B3428]">Article Not Found</h2>
        <p className="text-xs text-gray-500 font-light leading-relaxed">
          The skincare or medical post you are looking for doesn't exist or has been archived.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-[#5B3428] text-white text-xs font-semibold px-6 py-3 rounded-full transition"
        >
          View All Articles
        </Link>
      </div>
    );
  }

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.text) return;

    const newComment = {
      name: commentForm.name,
      date: "Today",
      text: commentForm.text
    };

    setCommentsList([...commentsList, newComment]);
    setSubmittedComment(true);
    setCommentForm({ name: "", text: "" });
    setTimeout(() => setSubmittedComment(false), 3500);
  };

  // Render content with simple line-break checks or paragraph checks
  const contentParagraphs = post.content.split("\n\n");

  return (
    <div id="blog-details-page" className="w-full bg-[#FFF9F7] dark:bg-[#1E120F] text-[#2B2B2B] dark:text-[#FFF9F7]">
      <Breadcrumb title={post.title} parentName="Blog" parentPath="/blog" />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-[#8D5A4D] hover:text-[#5B3428] font-semibold mb-8 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Clinical Journal</span>
        </Link>

        {/* Article Container */}
        <article className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8D5A4D] bg-[#FFF9F7] dark:bg-[#251815] border border-[#C79284]/20 px-3.5 py-1 rounded-full font-bold inline-block">
              {post.category}
            </span>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#5B3428] dark:text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[11px] text-gray-400 font-medium uppercase tracking-wider font-mono">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Authored by {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden aspect-[16/10] border border-gray-100 dark:border-gray-800 shadow">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Core Content */}
          <div className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed space-y-6 pt-4 border-b border-gray-100 dark:border-gray-800/60 pb-8">
            {contentParagraphs.map((para, i) => {
              if (para.startsWith("###")) {
                return (
                  <h3 key={i} className="font-serif font-bold text-base md:text-lg text-[#5B3428] dark:text-white pt-2">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              if (para.startsWith("-") || para.startsWith("*")) {
                const lines = para.split("\n");
                return (
                  <ul key={i} className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                    {lines.map((line, li) => (
                      <li key={li}>
                        {line.replace(/^-\s*/, "").replace(/^\*\s*/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        </article>

        {/* Interactive Comments Segment */}
        <section className="pt-10 space-y-8">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5.5 h-5.5 text-[#8D5A4D]" />
            <h3 className="font-serif font-bold text-lg text-[#5B3428] dark:text-white">
              Patient Comments & Discussion ({commentsList.length})
            </h3>
          </div>

          {/* Comments List */}
          {commentsList.length > 0 ? (
            <div className="space-y-5">
              {commentsList.map((comm, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/20 p-5 rounded-2xl space-y-2 animate-fadeIn shadow-sm"
                >
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                    <span className="font-sans font-bold text-gray-800 dark:text-[#FFF9F7] text-xs">
                      {comm.name}
                    </span>
                    <span>{comm.date}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    {comm.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic font-light pl-1">
              No comments posted yet. Be the first to start the discussion!
            </p>
          )}

          {/* Leave a Comment form */}
          <div className="bg-[#FFF9F7] dark:bg-[#251815] border border-[#F0E6E2] dark:border-[#5B3428]/35 p-6 rounded-3xl space-y-5 shadow-inner">
            <h4 className="font-serif font-bold text-sm text-[#5B3428] dark:text-[#FFF9F7]">
              Leave a Reply
            </h4>

            {submittedComment && (
              <div className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300 text-xs p-4 rounded-xl border border-green-100 flex items-start gap-2.5 animate-fadeIn">
                <Check className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Comment posted locally. Thank you!</span>
              </div>
            )}

            <form onSubmit={handlePostComment} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={commentForm.name}
                    onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                    className="w-full bg-white dark:bg-[#1E120F] border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                  Your Comment Notes
                </label>
                <textarea
                  required
                  placeholder="Write your diagnostic comments or review questions..."
                  rows={3}
                  value={commentForm.text}
                  onChange={(e) => setCommentForm({ ...commentForm, text: e.target.value })}
                  className="w-full bg-white dark:bg-[#1E120F] border border-gray-200 dark:border-[#5B3428]/40 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C79284] dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-[#5B3428] hover:bg-[#8D5A4D] text-white font-semibold text-xs py-2.5 px-6 rounded-full shadow-md transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Comment</span>
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};
