import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: [
      { url: "/unplugwell.png" },
      { url: "/unplugwell.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/unplugwell.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T02TC97Y4Y"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T02TC97Y4Y');`}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283636579212292"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="-vEQwCv3N-7CYJlks9qASX9zmgZ-7sbhBPfH4JKkxT4"
        />
        <meta name="google-adsense-account" content="ca-pub-2283636579212292" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
