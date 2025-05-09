import AboutUs from "@/components/AboutUs/AboutUs";

export const metadata = {
  title: "About Us | UnplugWell - Your Digital Detox Partner",
  description:
    "Learn about UnplugWell, your trusted source for digital detox solutions. Our mission is to help you create a healthier relationship with technology and embrace mindful living.",
};

export default function AboutPage() {
  const aboutPageSchema = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutUs />
    </>
  );
}
