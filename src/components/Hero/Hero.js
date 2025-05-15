"use client";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  PhoneOff,
  Brain,
  Moon,
  Users,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    id: "stat-detox",
    icon: <PhoneOff className="h-6 w-6 text-purple-200" aria-hidden="true" />,
    bgColor: "bg-purple-600/20",
    count: "30+",
    label: "Digital Detox Ideas",
  },
  {
    id: "stat-articles",
    icon: <Moon className="h-6 w-6 text-indigo-200" aria-hidden="true" />,
    bgColor: "bg-indigo-600/20",
    count: "500+",
    label: "Mindful Tech Articles",
  },
  {
    id: "stat-experts",
    icon: <Brain className="h-6 w-6 text-violet-200" aria-hidden="true" />,
    bgColor: "bg-violet-600/20",
    count: "10+",
    label: "Expert Contributors",
  },
  {
    id: "stat-lives",
    icon: <Users className="h-6 w-6 text-pink-200" aria-hidden="true" />,
    bgColor: "bg-pink-600/20",
    count: "10K+",
    label: "Transformed Lives",
  },
];

const features = [
  {
    id: "feat-tools",
    icon: (
      <ShieldCheck className="h-6 w-6 text-purple-600" aria-hidden="true" />
    ),
    bgColor: "bg-purple-100",
    title: "Digital Wellness Tools",
    description:
      "Apps and techniques to monitor and improve your digital habits.",
  },
  {
    id: "feat-mindfulness",
    icon: <Brain className="h-6 w-6 text-purple-600" aria-hidden="true" />,
    bgColor: "bg-purple-100",
    title: "Mindfulness Practices",
    description:
      "Simple meditation and mindfulness exercises for digital balance.",
  },
  {
    id: "feat-community",
    icon: <Users className="h-6 w-6 text-purple-600" aria-hidden="true" />,
    bgColor: "bg-purple-100",
    title: "Community Support",
    description: "Connect with others on similar digital wellness journeys.",
  },
];

const Hero = () => {
  return (
    <>
      <section
        aria-labelledby="hero-main-heading"
        className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 py-20 lg:py-28"
      >
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-indigo-500/20 animate-float animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-violet-500/20 animate-float animation-delay-2000"></div>
          <div className="absolute top-20 left-20 w-28 h-28 border border-purple-300/30 rounded-lg rotate-12"></div>
          <div className="absolute bottom-32 right-10 w-20 h-20 border border-purple-300/30 rounded-full -rotate-12"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-purple-300/30 rounded-md rotate-45"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        </div>

        <div
          id="hero-content"
          className="relative container mx-auto px-6 pt-12 pb-12 text-center"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <Sparkles
                className="h-4 w-4 text-purple-200 mr-2"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">
                Digital Wellness Awaits
              </span>
            </div>

            <h1
              id="hero-main-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transform transition-all duration-700 delay-100"
            >
              Embrace the Art of Digital Free Life
            </h1>

            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto transform transition-all duration-700 delay-200">
              Discover mindful tech habits, expert strategies, and practical
              guidance to free yourself from digital overwhelm while cultivating
              a more intentional relationship with technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blogs"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all flex items-center"
              >
                Explore Articles
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/aboutUs"
                className="px-8 py-3 border border-purple-400/50 text-white rounded-lg font-medium hover:bg-purple-600/20 transition-all"
              >
                About Us
              </Link>
            </div>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
            role="list"
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                role="listitem"
                className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className={`${stat.bgColor} p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.count}
                </div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="content-section"
        aria-labelledby="features-heading"
        className="py-16 bg-purple-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              id="features-heading"
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              Digital Wellness Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple tools and practices to help balance your digital life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {features.map((featureItem) => (
              <article
                key={featureItem.id}
                aria-labelledby={`feature-title-${featureItem.id}`}
                className="p-6 bg-white rounded-xl border border-purple-200/50 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div
                  className={`${featureItem.bgColor} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
                >
                  {featureItem.icon}
                </div>
                <h3
                  id={`feature-title-${featureItem.id}`}
                  className="text-xl font-semibold text-purple-600 mb-2"
                >
                  {featureItem.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {featureItem.description}
                </p>
                <Link
                  href="/blogs"
                  aria-label={`Learn more about ${featureItem.title}`}
                  className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mt-auto"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
