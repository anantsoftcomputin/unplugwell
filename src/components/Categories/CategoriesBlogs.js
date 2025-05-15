"use client";
import { useEffect, useState } from "react";
import { Clock, Search, X } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import moment from "moment";
import Link from "next/link";
import { motion } from "framer-motion";
import ajaxCall from "@/helpers/ajaxCall";

export default function CategoriesBlogs({ slug }) {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      if (!slug) return;
      try {
        const response = await ajaxCall(
          `/posts-category/?site_domain=unplugwell.com&category_slug=${slug}`,
          { method: "GET" }
        );
        setRelatedBlogs(response.data.results);
        setFilteredBlogs(response.data.results);

        // Set formatted category name for SEO
        const formattedName = slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        setCategoryName(formattedName);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, [slug]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = relatedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(relatedBlogs);
    }
  }, [searchQuery, relatedBlogs]);

  return (
    <main className="py-12 min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {categoryName}'s Blogs
            </h1>
            <p className="text-xl text-purple-100 mb-8">
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
                  placeholder={`Search ${categoryName} blogs...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 md:py-5 rounded-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  aria-label="Search category blogs"
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
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {filteredBlogs.map((blog, index) => (
              <SwiperSlide key={blog.id}>
                <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href={`/${blog.slug}`} className="group">
                    <div className="relative h-48">
                      <img
                        src={blog.featured_image}
                        alt={blog.image_alt || blog.title}
                        className="w-full h-full object-cover"
                        loading={index > 2 ? "lazy" : "eager"}
                        width={400}
                        height={250}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">{blog.excerpt}</p>
                      <div className="flex items-center gap-3 my-3">
                        <div className="w-8 h-8 rounded-full border-2 border-purple-100 flex items-center justify-center bg-purple-100 text-purple-600 font-semibold">
                          {blog.author.full_name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900">
                            {blog.author.full_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            <time
                              dateTime={moment(blog.published_at).format(
                                "YYYY-MM-DD"
                              )}
                            >
                              {moment(blog.published_at).format("ll")}
                            </time>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {moment(blog.published_at).startOf("hour").fromNow()}
                        </span>
                        <span className="text-purple-600">Read More</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-600">
            <h2>No Blogs Available</h2>
          </div>
        )}
      </section>
    </main>
  );
}
