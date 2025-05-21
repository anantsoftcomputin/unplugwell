"use client";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import ajaxCall from "@/helpers/ajaxCall";
import { Calendar, Clock, Tag } from "lucide-react";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await ajaxCall(
          "/posts-latest/?site_domain=unplugwell.com",
          { method: "GET" }
        );
        setBlogs(response.data.results);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      aria-labelledby="latest-blogs-heading"
      className="py-20 bg-gradient-to-r from-indigo-50 to-pink-50"
    >
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1
            id="latest-blogs-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            Latest Insights on Digital Wellness
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our newest articles on digital wellness and mindful
            technology use. Stay up-to-date with the latest trends and
            perspectives.
          </p>
        </header>

        {loading ? (
          <div
            role="status"
            aria-live="polite"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {[...Array(4)].map((_, index) => (
              <article
                key={`loading-${index}`}
                className="overflow-hidden rounded-2xl shadow-lg flex flex-col h-full bg-white"
                aria-label="Blog post loading"
              >
                <div
                  className="aspect-[4/3] bg-gray-200 animate-pulse"
                  aria-hidden="true"
                ></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div
                    className="h-6 bg-gray-200 rounded animate-pulse mb-4"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded animate-pulse mb-2"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded animate-pulse mb-2"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-2/3"
                    aria-hidden="true"
                  ></div>
                  <div className="flex items-center gap-3 mb-4 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"
                      aria-hidden="true"
                    ></div>
                    <div className="flex-1">
                      <div
                        className="h-4 bg-gray-200 rounded animate-pulse mb-2"
                        aria-hidden="true"
                      ></div>
                      <div
                        className="h-3 bg-gray-200 rounded animate-pulse w-1/2"
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div
                      className="h-4 w-24 bg-gray-200 rounded animate-pulse"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="h-4 w-24 bg-gray-200 rounded animate-pulse"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
              </article>
            ))}
            <span className="sr-only">Loading latest blog posts...</span>
          </div>
        ) : blogs.length > 0 ? (
          <div
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {blogs.map((blog, index) => (
              <article
                key={blog.id || index}
                role="listitem"
                itemScope
                itemType="https://schema.org/BlogPosting"
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 flex flex-col h-full bg-white hover:shadow-xl"
              >
                <Link
                  href={`/${blog.slug}`}
                  aria-label={`Read more about ${blog.title}`}
                  className="flex flex-col h-full"
                  itemProp="url"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={blog.featured_image}
                      alt={blog.image_alt || blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      itemProp="image"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 text-purple-600 text-sm font-medium"
                        itemProp="articleSection"
                      >
                        <Tag className="h-3 w-3" aria-hidden="true" />
                        {blog.category.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                      <span itemProp="headline">{blog.title}</span>
                    </h2>
                    <p
                      className="text-gray-600 mb-4 flex-grow line-clamp-3"
                      itemProp="description"
                    >
                      {blog.excerpt}
                    </p>
                    <div
                      className="flex items-center gap-3 mb-3"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-100 flex items-center justify-center bg-purple-100 text-purple-600 font-semibold">
                        {blog.author.full_name.charAt(0)}
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-gray-900"
                          itemProp="name"
                        >
                          {blog.author.full_name}
                        </p>
                        <time
                          className="text-xs text-gray-500"
                          dateTime={moment(blog.published_at).format()}
                          itemProp="datePublished"
                        >
                          {moment(blog.published_at).format("ll")}
                        </time>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center justify-between text-xs text-gray-500">
                      <time
                        className="flex items-center gap-1"
                        dateTime={moment(blog.published_at).format()}
                        itemProp="datePublished"
                      >
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {moment(blog.published_at).format("ll")}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {moment(blog.published_at).startOf("hour").fromNow()}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div
            role="status"
            className="text-center text-gray-600"
            aria-label="No blog posts available"
          >
            No Latest Blogs Available.
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
