"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  Clock,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Tag,
  Eye,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ajaxCall from "@/helpers/ajaxCall";
import RelatedArticles from "../RelatedArticles/RelatedArticles";

const useBlogData = (slug) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await ajaxCall(`/post/${slug}/`, { method: "GET" });
        setBlog(response.data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load the blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  return { blog, loading, error };
};

const useRelatedBlogs = (category) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (!category) return;

    const fetchRelated = async () => {
      try {
        const response = await ajaxCall(
          `/posts-category/?site_domain=unplugwell.com&category_name=${category}`,
          { method: "GET" }
        );
        setRelatedBlogs(response.data.results);
      } catch (err) {
        console.error("Error fetching related blogs:", err);
      }
    };

    fetchRelated();
  }, [category]);

  return relatedBlogs;
};

const useReadingProgress = (targetRef) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const scrollableHeight = scrollHeight - clientHeight;
      if (scrollableHeight <= 0) {
        setProgress(100);
        return;
      }
      const currentProgress = (scrollTop / scrollableHeight) * 100;
      setProgress(currentProgress);
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => element.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  return progress;
};

export default function NewBlogDetail({ slug }) {
  const { blog, loading, error } = useBlogData(slug);
  const categoryName = useMemo(() => blog?.category?.name, [blog]);
  const relatedBlogs = useRelatedBlogs(categoryName);

  const mainContentRef = useRef(null);
  const readingProgress = useReadingProgress(mainContentRef);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [slug]);

  const getAuthorInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const socialShareLinks = {
    facebook:
      "https://www.facebook.com/people/Unplugwell-DigitalDetox/61570893369070/",
    twitter: "https://x.com/unplugwell/",
    instagram: "https://www.instagram.com/unplugwell5/",
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-full">
          <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-red-600">
          <AlertCircle className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">An Error Occurred</h2>
          <p>{error}</p>
        </div>
      );
    }

    if (!blog) {
      return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <span
              className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium"
              itemProp="articleSection"
            >
              {blog.category?.name}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={blog.published_at} itemProp="datePublished">
                {moment(blog.published_at).format("ll")}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{moment(blog.published_at).fromNow()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" aria-hidden="true" />
              <span itemProp="interactionCount">
                {blog.view_count || 0} views
              </span>
            </div>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
            itemProp="headline"
          >
            {blog.title}
          </h1>
          <p className="text-lg text-gray-700" itemProp="description">
            {blog.excerpt}
          </p>
        </div>

        {blog.featured_image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-8 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={blog.featured_image}
              alt={blog.image_alt || blog.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              width="1200"
              height="630"
              itemProp="image"
              loading="eager"
              fetchpriority="high"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="prose prose-lg max-w-none prose-indigo p-6 bg-gradient-to-br from-indigo-50/50 to-pink-50/50 rounded-xl shadow-lg"
          itemProp="articleBody"
        />

        <RelatedArticles relatedBlogs={relatedBlogs} />
      </motion.div>
    );
  };

  return (
    <main className="h-screen flex flex-col bg-slate-50 overflow-hidden pt-16">
      <div className="fixed top-16 left-0 w-full z-50 h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(readingProgress)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Reading progress"
        />
      </div>
      <div className="flex-grow flex overflow-hidden">
        <article
          ref={mainContentRef}
          className="flex-grow h-full overflow-y-auto pb-16 bg-white scroll-smooth"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </article>

        <aside className="hidden lg:block w-80 p-6 border-l border-gray-200 flex-shrink-0 overflow-y-auto bg-white">
          <div className="sticky top-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
              className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl p-6 shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-indigo-600 mr-2" /> Share this
                article
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <SocialLink
                  href={socialShareLinks.facebook}
                  brandColor="#1877F2"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </SocialLink>
                <SocialLink
                  href={socialShareLinks.twitter}
                  brandColor="#1DA1F2"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </SocialLink>
                <SocialLink
                  href={socialShareLinks.instagram}
                  brandColor="#0A66C2"
                  aria-label="Share on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </SocialLink>
              </div>
            </motion.div>

            {blog?.tags?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.7 } }}
                className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl p-6 shadow-md"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="h-5 w-5 text-indigo-600 mr-2" /> Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/tag/${tag.slug}`}
                      className="inline-block px-3 py-1.5 rounded-full bg-white text-indigo-700 text-sm font-medium hover:bg-indigo-100 hover:shadow-md transition-all duration-200"
                      itemProp="keywords"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {blog?.author && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
                className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl p-6 shadow-md"
                itemScope
                itemType="https://schema.org/Person"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  About the Author
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {getAuthorInitials(blog.author.full_name)}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-gray-900"
                      itemProp="name"
                    >
                      {blog.author.full_name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}

const SocialLink = ({
  href,
  "aria-label": ariaLabel,
  brandColor,
  children,
}) => (
  <motion.a
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center p-3 rounded-lg transition-colors"
    style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
    aria-label={ariaLabel}
  >
    {children}
  </motion.a>
);
