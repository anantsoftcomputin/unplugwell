export const metadata = {
  title: "Explore Digital Detox Topics & Tips | UnplugWell",
  description:
    "Expert tips on digital detox, mindfulness, and tech-free living. Explore UnplugWell’s top categories for a balanced, healthier lifestyle.",
  openGraph: {
    title: "Explore Digital Detox Topics & Tips | UnplugWell",
    description:
      "Expert tips on digital detox, mindfulness, and tech-free living. Explore UnplugWell’s top categories for a balanced, healthier lifestyle.",
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
    title: "Explore Digital Detox Topics & Tips | UnplugWell",
    description:
      "Expert tips on digital detox, mindfulness, and tech-free living. Explore UnplugWell’s top categories for a balanced, healthier lifestyle.",
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

import Categories from "@/components/Categories/Categories";

export default function Category() {
  return <Categories />;
}
