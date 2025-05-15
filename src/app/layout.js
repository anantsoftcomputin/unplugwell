import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "UnplugWell: Your Guide to Mindful Digital Detox and Wellness",
  description:
    "Discover the benefits of digital detox with UnplugWell. Explore expert tips, resources, and strategies to disconnect, recharge, and find balance in a tech-driven world.",
  icons: {
    icon: [
      { url: "/unplugwell.png" },
      { url: "/unplugwell.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/unplugwell.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "UnplugWell: Your Guide to Mindful Digital Detox and Wellness",
    description:
      "Discover the benefits of digital detox with UnplugWell. Explore expert tips, resources, and strategies to disconnect, recharge, and find balance in a tech-driven world.",
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
    title: "UnplugWell: Your Guide to Mindful Digital Detox and Wellness",
    description:
      "Discover the benefits of digital detox with UnplugWell. Explore expert tips, resources, and strategies to disconnect, recharge, and find balance in a tech-driven world.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
