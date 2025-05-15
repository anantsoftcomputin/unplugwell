export const metadata = {
  title: "Important Disclaimer Notice | UnplugWell",
  description:
    "Read UnplugWell's Disclaimer to understand the limitations of our content, liability, and how users should interpret information on this site.",
  openGraph: {
    title: "Important Disclaimer Notice | UnplugWell",
    description:
      "Read UnplugWell's Disclaimer to understand the limitations of our content, liability, and how users should interpret information on this site.",
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
    title: "Important Disclaimer Notice | UnplugWell",
    description:
      "Read UnplugWell's Disclaimer to understand the limitations of our content, liability, and how users should interpret information on this site.",
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

export default function Disclaimer() {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="disclaimer-main-heading"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1
              id="disclaimer-main-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
            >
              Disclaimer
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: May 15, 2025
            </p>
          </div>
          <div className="space-y-6" role="list">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-general-info-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-general-info-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  1. General Information
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  The information provided on UnplugWell.com (hereinafter
                  referred to as "the Site," "we," "us," or "our") is for
                  general informational and educational purposes only. It is not
                  intended as a substitute for professional advice, including
                  but not limited to medical, psychological, or technological
                  advice.
                </p>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-digital-detox-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-digital-detox-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  2. Digital Detox and Well-being
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Individual Results May Vary :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      The strategies, tips, and recommendations related to
                      digital detox and well-being presented on this Site are
                      based on general knowledge and experience. Individual
                      results may vary, and what works for one person may not
                      work for another.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Not Medical Advice :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      The content on this Site should not be considered medical
                      advice. If you have concerns about your mental or physical
                      health, including the impact of digital device usage,
                      please consult with a qualified healthcare professional.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Personal Responsibility :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You are solely responsible for your decisions and actions
                      related to digital detox and well-being. We are not liable
                      for any consequences resulting from your use of the
                      information on this Site.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-tech-internet-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-tech-internet-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  3. Technology and Internet Use
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    No Guarantee of Accuracy :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      While we strive to provide accurate and up-to-date
                      information about technology and internet use, we make no
                      representations or warranties about the accuracy,
                      completeness, or reliability of the content.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Third-Party Products and Services :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Any mention of third-party products or services on this
                      Site does not constitute an endorsement or recommendation.
                      We are not responsible for the performance, reliability,
                      or safety of these products or services.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Internet Risks :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Internet use involves inherent risks, including but not
                      limited to malware, viruses, and data breaches. We are not
                      responsible for any damages or losses resulting from your
                      use of the internet.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-liability-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-liability-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  4. Limitation of Liability
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">As-Is Basis :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      This Site and its content are provided on an "as-is" and
                      "as-available" basis. We disclaim all warranties, express
                      or implied, including but not limited to warranties of
                      merchantability, fitness for a particular purpose, and
                      non-infringement.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    No Liability :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      To the fullest extent permitted by law, UnplugWell.com and
                      its affiliates, officers, directors, employees, and agents
                      shall not be liable for any direct, indirect, incidental,
                      consequential, or punitive damages arising out of or
                      related to your use of this Site.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-external-links-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-external-links-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  5. External Links
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Third-Party Websites :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      This Site may contain links to third-party websites. We
                      are not responsible for the content, privacy practices, or
                      accuracy of information on these websites.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    No Endorsement :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      The inclusion of external links does not imply endorsement
                      or recommendation by UnplugWell.com.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-changes-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-changes-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  6. Changes to This Disclaimer
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Modification :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      We reserve the right to modify this Disclaimer at any
                      time. We will notify you of any changes by posting the new
                      Disclaimer on this page.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">Review :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You are advised to review this Disclaimer periodically for
                      any changes. Your continued use of this Site after any
                      changes constitutes your acceptance of the new terms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-governing-law-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-governing-law-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  7. Governing Law
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This Disclaimer shall be governed by and construed in
                  accordance with the laws of Vadodara, Gujarat, India.
                </p>
              </div>
            </div>

            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="disclaimer-contact-us-heading"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="disclaimer-contact-us-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  8. Contact Us
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  If you have any questions or concerns about these Terms and
                  Conditions, please contact us at:
                </p>
                <div className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:support@unplugwell.com"
                    className="text-purple-600 hover:text-purple-700 hover:underline"
                  >
                    support@unplugwell.com
                  </a>
                  <br />
                  <address className="not-italic mt-1 text-gray-700">
                    Address: Alkapuri, Vadodara, Gujarat, India 390007.
                  </address>
                  <br />
                  <span className="text-gray-700">
                    Contact: Available on UnplugWell.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
