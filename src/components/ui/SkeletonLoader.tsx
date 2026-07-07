import React from "react";

interface SkeletonProps {
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl ${className || "h-4 w-full"}`}
    ></div>
  );
};
