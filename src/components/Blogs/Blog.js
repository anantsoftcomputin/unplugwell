"use client";
import { useEffect, useState } from "react";
import {
  Search,
  Tag,
  Clock,
  BookCheck,
  ChevronDown,
  X,
  Sparkles,
  ChevronRight,
  BookOpen,
  ChevronLeft,
  Ellipsis,
} from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { motion } from "framer-motion";
import ajaxCall from "@/helpers/ajaxCall";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categories, setCategories] = useState(["All"]);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [error, setError] = useState(null);

  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await ajaxCall(
          "/all-posts/?site_domain=unplugwell.com",
          { method: "GET" }
        );

        if (response?.data?.results?.length > 0) {
          console.log(`Found ${response.data.results.length} blogs`);
          setFeaturedBlog(response.data.results[0]);
          setBlogs(response.data.results.slice(1));
        } else {
          setError("No blog posts found. Please check the API response.");
          setBlogs([]);
        }
      } catch (error) {
        setError("No blog posts found. Please check the API response.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ajaxCall(
          "/get-categories/?site=unplugwell.com",
          { method: "GET" }
        );
        if (response?.data?.results?.length > 0) {
          setCategories((prev) => [
            "All",
            ...response.data.results.map((category) => category.name),
          ]);
        } else {
          console.log("No categories found or invalid response");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (blog) => blog.category.name === selectedCategory
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.category.name.toLowerCase().includes(query) ||
          (blog.tags &&
            blog.tags.some((tag) => tag.name.toLowerCase().includes(query))) ||
          (blog.author && blog.author.full_name.toLowerCase().includes(query))
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, blogs]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  const PaginationControls = () => {
    const maxVisiblePages = 5;

    if (totalPages <= 1) return null;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstBlog + 1}-
          {Math.min(indexOfLastBlog, filteredBlogs.length)} of{" "}
          {filteredBlogs.length} articles
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" aria-hidden="true" />
          </button>
          {startPage > 1 && (
            <>
              <button
                onClick={() => paginate(1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === 1
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50"
                } shadow-md`}
                aria-label={`Go to page 1`}
              >
                1
              </button>
              {startPage > 2 && (
                <span className="px-2 text-gray-500" aria-hidden="true">
                  <Ellipsis className="w-5 h-5" />
                </span>
              )}
            </>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
            <button
              key={startPage + i}
              onClick={() => paginate(startPage + i)}
              className={`w-10 h-10 rounded-full ${
                currentPage === startPage + i
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 hover:bg-purple-50"
              } shadow-md`}
              aria-label={`Go to page ${startPage + i}`}
            >
              {startPage + i}
            </button>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-2 text-gray-500" aria-hidden="true">
                  <Ellipsis className="w-5 h-5" />
                </span>
              )}
              <button
                onClick={() => paginate(totalPages)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === totalPages
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50"
                } shadow-md`}
                aria-label={`Go to page ${totalPages}`}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight
              className="w-5 h-5 text-gray-600"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="py-10 min-h-screen">
      <section
        aria-labelledby="blog-hero-heading"
        className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div
          className="absolute -inset-x-0 top-0 h-40 bg-[url('/pattern-light.svg')] opacity-10"
          aria-hidden="true"
        />
        <div
          className="absolute -inset-x-0 bottom-0 h-40 bg-[url('/pattern-light.svg')] opacity-10"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1
              id="blog-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Explore Our Blog
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Discover insights and strategies for maintaining digital wellness
              in today's connected world.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 md:py-5 rounded-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  aria-label="Search blogs"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    aria-label="Clear search query"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
              <div className="flex justify-center gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex p-1 rounded-full bg-white/10 border border-white/20"
                >
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-4 py-1 rounded-full text-sm ${
                      viewMode === "grid"
                        ? "bg-white text-purple-900"
                        : "text-white"
                    } transition-all duration-300`}
                    aria-label="View blogs as grid"
                    aria-pressed={viewMode === "grid"}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-4 py-1 rounded-full text-sm ${
                      viewMode === "list"
                        ? "bg-white text-purple-900"
                        : "text-white"
                    } transition-all duration-300`}
                    aria-label="View blogs as list"
                    aria-pressed={viewMode === "list"}
                  >
                    List
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        aria-label="Blog categories"
        className="sticky top-16 z-10 bg-white shadow-md"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="md:hidden w-full">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg"
                aria-expanded={isCategoryOpen}
                aria-controls="mobile-categories"
              >
                <span>Categories</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isCategoryOpen && (
                <motion.div
                  id="mobile-categories"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 space-y-2"
                >
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left rounded-full text-sm font-semibold transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                          : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                      }`}
                      aria-label={`View articles in ${category} category`}
                      aria-current={
                        selectedCategory === category ? "true" : "false"
                      }
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  }`}
                  aria-label={`View articles in ${category} category`}
                  aria-current={
                    selectedCategory === category ? "true" : "false"
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {!searchQuery && selectedCategory === "All" && featuredBlog && (
        <section
          aria-labelledby="featured-post-heading"
          className="container mx-auto px-4 sm:px-6 py-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-purple-600" aria-hidden="true" />
            <h2
              id="featured-post-heading"
              className="text-2xl font-bold text-gray-900"
            >
              Featured Post
            </h2>
          </div>
          <Link
            href={`/${featuredBlog.slug}`}
            aria-label={`Read the featured article: ${featuredBlog.title}`}
            className="block"
          >
            <motion.article
              itemScope
              itemType="https://schema.org/BlogPosting"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <img
                    src={featuredBlog.featured_image}
                    alt={featuredBlog.image_alt || featuredBlog.title}
                    className="w-full h-full object-cover"
                    itemProp="image"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full bg-white/90 text-purple-600 text-sm font-medium"
                      itemProp="articleSection"
                    >
                      {featuredBlog.category.name}
                    </span>
                  </div>
                </div>

                <div className="md:w-1/2 p-6 md:p-8 bg-white flex flex-col">
                  <h2
                    itemProp="headline"
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-purple-600"
                  >
                    {featuredBlog.title}
                  </h2>
                  <p
                    itemProp="description"
                    className="text-gray-600 text-lg mb-4 line-clamp-3"
                  >
                    {featuredBlog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredBlog.tags.slice(0, 3).map((tag, index) => (
                      <Link
                        key={index}
                        href={`/tag/${tag.slug}`}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full border-2 border-purple-100 bg-purple-100 text-purple-600 text-sm"
                        aria-label={`View all posts tagged ${tag.name}`}
                        itemProp="keywords"
                      >
                        <Tag className="h-3 w-3" aria-hidden="true" />{" "}
                        {tag.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div
                      className="flex items-center gap-3 mb-4"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-purple-100 flex items-center justify-center bg-purple-100 text-purple-600 font-semibold">
                        {featuredBlog.author.full_name.includes(" ")
                          ? `${featuredBlog.author.full_name.split(" ")[0][0]}${
                              featuredBlog.author.full_name.split(" ")[1][0]
                            }`
                          : featuredBlog.author.full_name.substring(0, 2)}
                      </div>
                      <div>
                        <p
                          itemProp="name"
                          className="text-sm font-medium text-gray-900"
                        >
                          {featuredBlog.author.full_name}
                        </p>
                        <time
                          itemProp="datePublished"
                          dateTime={moment(featuredBlog.published_at).format()}
                          className="text-sm text-gray-500"
                        >
                          {moment(featuredBlog.published_at).format("ll")}
                        </time>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <BookCheck
                          className="h-4 w-4 text-pink-500"
                          aria-hidden="true"
                        />
                        {featuredBlog.estimated_reading_time} min read
                      </span>

                      <span className="inline-flex items-center gap-1 px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium hover:bg-purple-200 transition-colors">
                        Read Article{" "}
                        <ChevronRight
                          className="h-4 w-4 ml-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        </section>
      )}

      <section
        aria-labelledby="blog-list-heading"
        className="container mx-auto px-4 sm:px-6 py-12"
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            id="blog-list-heading"
            className="text-2xl font-bold text-gray-900 flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5 text-purple-600" aria-hidden="true" />
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : selectedCategory !== "All"
              ? `${selectedCategory} Articles`
              : "All Articles"}
          </h2>

          <div className="text-sm text-gray-600">
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"}
          </div>
        </div>
        {loading ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
            aria-live="polite"
            aria-busy="true"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={`loading-${index}`}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                aria-label="Loading blog post"
              >
                <div
                  className={`relative ${
                    viewMode === "list" ? "md:w-1/3 h-48" : "h-48"
                  } bg-gray-200 animate-pulse`}
                ></div>
                <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-2/3"></div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[...Array(3)].map((_, tagIndex) => (
                      <div
                        key={`loading-tag-${tagIndex}`}
                        className="h-6 w-16 bg-gray-200 rounded-md animate-pulse"
                      ></div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            role="alert"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="h-8 w-8 text-red-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{error}</h3>
            <p className="text-gray-600 mb-6">
              There was an issue loading the blog posts. This might be due to a
              network issue or API configuration.
            </p>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 mb-6">
              <p className="font-medium">Developer Information:</p>
              <p>
                Check browser console for detailed error messages. Make sure
                your API endpoint is correct and accessible.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </motion.div>
        ) : filteredBlogs.length > 0 ? (
          <div>
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-8"
              }
              role="list"
            >
              {currentBlogs.map((blog, index) => (
                <Link
                  key={index}
                  href={`/${blog.slug}`}
                  aria-label={`Read article: ${blog.title}`}
                  className="block"
                >
                  <motion.article
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className={`h-full flex flex-col ${
                      viewMode === "list" ? "md:flex-row" : ""
                    } bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group`}
                    role="listitem"
                  >
                    <div
                      className={`relative ${
                        viewMode === "list" ? "md:w-1/3 h-64" : "h-48"
                      }`}
                    >
                      <img
                        src={blog.featured_image}
                        alt={blog.image_alt || blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        itemProp="image"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-full bg-white/90 text-purple-600 text-sm font-medium"
                          itemProp="articleSection"
                        >
                          {blog.category.name}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-6 flex flex-col flex-1 ${
                        viewMode === "list" ? "md:w-2/3" : ""
                      }`}
                    >
                      <h2
                        itemProp="headline"
                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors"
                      >
                        {blog.title}
                      </h2>

                      <p
                        itemProp="description"
                        className="text-gray-600 mb-4 line-clamp-2"
                      >
                        {blog.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags &&
                          blog.tags.slice(0, 3).map((tag, index) => (
                            <Link
                              key={index}
                              href={`/tag/${tag.slug}`}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-full border-2 border-purple-100 bg-purple-100 text-purple-600 text-sm"
                              aria-label={`View all posts tagged ${tag.name}`}
                              itemProp="keywords"
                            >
                              <Tag className="h-3 w-3" aria-hidden="true" />{" "}
                              {tag.name}
                            </Link>
                          ))}
                        {blog.tags && blog.tags.length > 3 && (
                          <span className="px-2 py-1 rounded-md text-sm text-gray-500">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="mt-auto">
                        <div
                          className="flex items-center gap-3 mb-3"
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-100 flex items-center justify-center bg-purple-100 text-purple-600 font-semibold">
                            {blog.author.full_name.includes(" ")
                              ? `${blog.author.full_name.split(" ")[0][0]}${
                                  blog.author.full_name.split(" ")[1][0]
                                }`
                              : blog.author.full_name.substring(0, 2)}
                          </div>
                          <div>
                            <p
                              itemProp="name"
                              className="text-xs sm:text-sm font-medium text-gray-900"
                            >
                              {blog.author && blog.author.full_name}
                            </p>
                            <time
                              itemProp="datePublished"
                              dateTime={moment(blog.published_at).format()}
                              className="text-xs sm:text-sm text-gray-500"
                            >
                              {moment(blog.published_at).format("ll")}
                            </time>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center justify-between text-xs sm:text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <BookCheck
                              className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500"
                              aria-hidden="true"
                            />
                            {blog.estimated_reading_time} min read
                          </span>

                          <span className="flex items-center gap-1">
                            <Clock
                              className="h-3 w-3 sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            {moment(blog.published_at)
                              .startOf("hour")
                              .fromNow()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
            <PaginationControls />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            role="status"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-purple-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Articles Found
            </h3>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </section>
    </main>
  );
}
