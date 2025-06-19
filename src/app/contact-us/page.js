export const metadata = {
  title: "Contact Us | UnplugWell - Reach Out for Digital Detox Support",
  description:
    "Have questions about digital detox or need assistance? Contact UnplugWell today. We’re here to help you unplug and thrive in a hyper-connected world.",
  openGraph: {
    title: "Contact Us | UnplugWell - Reach Out for Digital Detox Support",
    description:
      "Have questions about digital detox or need assistance? Contact UnplugWell today. We’re here to help you unplug and thrive in a hyper-connected world.",
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
    title: "Contact Us | UnplugWell - Reach Out for Digital Detox Support",
    description:
      "Have questions about digital detox or need assistance? Contact UnplugWell today. We’re here to help you unplug and thrive in a hyper-connected world.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function contactUs() {
  return <ContactUs />;
}
