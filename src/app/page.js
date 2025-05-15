import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Unplugwell",
    url: "https://unplugwell.com",
    logo: "https://unplugwell.com/unplugwell.png",
    sameAs: [
      "https://www.facebook.com/unplugwelldigitaldetox/",
      "https://www.instagram.com/unplugwell/",
      "https://x.com/unplugwell",
    ],
    description:
      "Unplugwell offers mindful digital detox tips, wellness guides, and resources for tech-life balance and mental well-being.",
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="blob-container">
        <Hero />
        <TrendingBlogs />
        <LatestBlogs />
        <NewsLetter />
      </div>
    </>
  );
}
