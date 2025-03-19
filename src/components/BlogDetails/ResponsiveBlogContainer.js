"use client";
import BlogDetails from "./BlogDetails";
import MobileBlogDetails from "./MobileBlogDetails";

export default function ResponsiveBlogContainer({ slug }) {
  return (
    <div>
      <div className="hidden md:block">
        <BlogDetails slug={slug} />
      </div>
      <div className="block md:hidden">
        <MobileBlogDetails slug={slug} />
      </div>
    </div>
  );
}