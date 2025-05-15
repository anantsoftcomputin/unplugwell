export const metadata = {
  title: "Digital Detox Blog | UnplugWell - Tips, Insights, and Inspiration",
  description:
    "Stay informed with the UnplugWell blog. Dive into expert articles, personal stories, and practical tips to embrace a balanced, tech-free lifestyle.",
  openGraph: {
    title: "Digital Detox Blog | UnplugWell - Tips, Insights, and Inspiration",
    description:
      "Stay informed with the UnplugWell blog. Dive into expert articles, personal stories, and practical tips to embrace a balanced, tech-free lifestyle.",
    images: [
      {
        url: "https://unplugwell.com/unplugwell.png",
        width: 800,
        height: 600,
        alt: "UnplugWell Logo",
      },
    ],
    siteName: "UnplugWell",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Detox Blog | UnplugWell - Tips, Insights, and Inspiration",
    description:
      "Stay informed with the UnplugWell blog. Dive into expert articles, personal stories, and practical tips to embrace a balanced, tech-free lifestyle.",
    images: [
      {
        url: "https://unplugwell.com/unplugwell.png",
        width: 800,
        height: 600,
        alt: "UnplugWell Logo",
      },
    ],
  },
};

import Blog from "@/components/Blogs/Blog";

export default function Blogs() {
  return <Blog />;
}
