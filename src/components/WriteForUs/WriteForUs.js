"use client";
import {
  BookOpen,
  PenSquare,
  Check,
  X,
  FileText,
  Mail,
  CalendarDays,
} from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="privacy-main-heading"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1
              id="privacy-main-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              Write for Us – Guest Post Guidelines
            </h1>
            <p className="text-lg text-gray-700 mx-auto">
              Contribute to UnplugWell's Mission of Mindful Tech Living
            </p>
          </div>
          <div className="space-y-6" role="list">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="policy-introduction-heading"
            >
              <div className="p-6">
                <p className="text-gray-600">
                  At UnplugWell.com, we empower readers to build healthier
                  relationships with technology through actionable insights and
                  thoughtful perspectives. If you share our passion for digital
                  wellness, mindful tech use, and intentional living, we'd love
                  to feature your work.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Why Write for Us?
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Reach an engaged audience actively seeking balance in a
                      hyperconnected world.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Showcase your expertise with a byline, author bio, and one
                      backlink (see guidelines below).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Spark meaningful conversations about unplugging,
                      productivity, and mental wellbeing.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BookOpen className="h-6 w-6 text-purple-600 mr-3" />
                  Content Submission Guidelines
                </h2>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  1. Originality
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Submit only unpublished work.</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      No repurposed articles from personal blogs or other
                      platforms.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  2. Relevance & Fresh Perspectives
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-3">Topics we prioritize:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Digital detox strategies (personal stories or
                      research-backed).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Mindful tech habits (e.g., app limits, notification
                      management).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Offline living (hobbies, analog productivity, nature
                      immersion).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Tech's impact on mental health (burnout, ADHD, social
                      media anxiety).
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-gray-800 flex items-start">
                    <X className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Avoid generic advice (e.g., "10 Tips to Use Your Phone
                      Less"). Surprise us!
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  3. Quality & Structure
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fluency: High-level, error-free English.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Readability: Use subheadings, bullet points, and short
                      paragraphs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Depth: 1,000+ words with actionable takeaways.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  4. No Promotional Content
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No embedded links to products/services.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>One do follow link.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      One contextual backlink allowed in your content OR author
                      bio (e.g., to your personal site).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  5. Evidence-Based Writing
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Support claims with data, studies, or credible sources
                      (link to research).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prioritize practical tips over opinions.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  6. Media & SEO
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Featured image: Provide one high-quality image with an alt
                      tag.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Metadata: Include meta title (≤60 chars), meta description
                      (≤160 chars), and 2–3 tags (e.g., "digital minimalism,"
                      "screen time").
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  7. Restricted Topics
                </h2>
              </div>
              <div className="p-6">
                <p className="font-medium text-gray-800">
                  We do not accept content related to:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gambling/Casino</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Adult/Porn</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Vaping/Weed</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weapons</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  8. Social Sharing
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  If published, share the post on your social media profiles.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  How to Submit
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6 text-gray-600">
                  <div>
                    <p className="mb-4">
                      Email your draft or pitch to{" "}
                      <a
                        href="mailto:unplugwell@gmail.com"
                        className="text-purple-600 hover:underline font-medium"
                      >
                        unplugwell@gmail.com
                      </a>{" "}
                      with:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Subject line:</strong> "Guest Post: [Your
                          Topic]"
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Attachments:</strong> Google Doc or Word file
                          + featured image
                        </span>
                      </li>
                      <li className="flex items-start">
                        <PenSquare className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Author bio</strong> (50 words max) + backlink
                          (if applicable)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <CalendarDays className="h-5 w-5 text-purple-600 mr-2" />
                      Editorial Review:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>We manually review all submissions.</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Response time: 2-3 days.</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No follow-up emails, please.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> We reserve the right to edit for
                      clarity or reject submissions without notice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WriteForUs;
