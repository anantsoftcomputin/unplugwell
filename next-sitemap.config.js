const { default: ajaxCall } = require("@/helpers/ajaxCall");

module.exports = {
  siteUrl: "https://unplugwell.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  transform: async (config, path) => {
    // Set specific priorities based on routes
    const priorityMap = {
      "/": 1.0,
      "/blogs": 0.9,
      "/aboutUs": 0.8,
      "/contactUs": 0.8,
      "/categories": 0.8,
    };

    // Check if the path has a specific priority assigned
    if (priorityMap.hasOwnProperty(path)) {
      return {
        loc: path,
        changefreq: "daily",
        priority: priorityMap[path],
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: "daily",
      priority: 0.7, // Default priority for other static pages
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async () => {
    try {
      const blogResponse = await ajaxCall(
        "/all-posts/?site_domain=unplugwell.com",
        { method: "GET" }
      );
      const blogPosts = blogResponse.data.results;

      const categoryResponse = await ajaxCall(
        "/get-categories/?site=unplugwell.com",
        { method: "GET" }
      );
      const categories = categoryResponse.data.results;

      const blogPaths = blogPosts.map((post) => ({
        loc: `/${encodeURIComponent(post.slug)}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.9,
      }));

      const categoryPaths = categories.map((category) => ({
        loc: `/categories/${encodeURIComponent(category.slug)}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.9,
      }));

      return [...blogPaths, ...categoryPaths];
    } catch (error) {
      console.error("Error fetching data for sitemap:", error);
      return [];
    }
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
