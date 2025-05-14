"use client";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Search,
  Folder,
  X,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ajaxCall from "@/helpers/ajaxCall";

const gradientColors = [
  "from-pink-500 to-red-500",
  "from-green-400 to-green-700",
  "from-blue-500 to-indigo-600",
  "from-yellow-400 to-orange-500",
  "from-purple-500 to-purple-800",
  "from-teal-500 to-cyan-600",
];

export default function Categories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ajaxCall(
          "/get-categories/?site=unplugwell.com",
          { method: "GET" }
        );
        setCategories(
          response.data.results.map((item, index) => ({
            id: item.id,
            name: item.name,
            slug: item.slug,
            description: item.description,
            colorIndex: index % gradientColors.length,
          }))
        );
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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
          Showing {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, filteredCategories.length)} of{" "}
          {filteredCategories.length} categories
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
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
              >
                1
              </button>
              {startPage > 2 && (
                <span className="px-2 text-gray-500">
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
            >
              {startPage + i}
            </button>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-2 text-gray-500">
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
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="py-12 min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Categories
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Discover focused content across various aspects of digital
              wellness
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
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 md:py-5 rounded-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-2xl shadow-lg"
              >
                <div className="p-8 h-full min-h-[320px] flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gray-200 p-3 rounded-xl animate-pulse">
                      <div className="h-6 w-6"></div>
                    </div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-6 w-3/4"></div>
                  <div className="mt-auto">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-40"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((category, index) => (
                <Link key={index} href={`/categories/${category.slug}`}>
                  <div className="relative group overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        gradientColors[category.colorIndex]
                      } opacity-90`}
                    />
                    <div className="relative p-8 h-full min-h-[320px] flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Folder className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-white/90 mb-6">
                        {category.description}
                      </p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-white font-medium group/link">
                          Explore Category
                          <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <PaginationControls />
          </>
        ) : (
          <div className="flex justify-center items-center">
            <div className="text-center text-gray-600">No Category Found.</div>
          </div>
        )}
      </section>
    </main>
  );
}
