export const metadata = {
  title: "About Us | UnplugWell - Your Digital Detox Partner",
  description:
    "Learn about UnplugWell, your trusted source for digital detox solutions. Our mission is to help you create a healthier relationship with technology and embrace mindful living.",
  openGraph: {
    title: "About Us | UnplugWell - Your Digital Detox Partner",
    description:
      "Learn about UnplugWell, your trusted source for digital detox solutions. Our mission is to help you create a healthier relationship with technology and embrace mindful living.",
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
    title: "About Us | UnplugWell - Your Digital Detox Partner",
    description:
      "Learn about UnplugWell, your trusted source for digital detox solutions. Our mission is to help you create a healthier relationship with technology and embrace mindful living.",
    images: [
      {
        url: "https://unplugwell.com/unplugwell.png",
        width: 800,
        height: 600,
        alt: "UnplugWell Logo",
      },
    ]
  }
};

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}
