"use client";
import React, { useState, useEffect } from "react";
import {
  Target,
  Heart,
  Wrench,
  Clock,
  Users,
  Globe,
  BookOpen,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    id: "stat-community",
    number: "10K+",
    label: "Community Members",
    icon: <Users className="h-6 w-6 text-purple-600" aria-hidden="true" />,
    bgColor: "bg-purple-100",
  },
  {
    id: "stat-success",
    number: "500+",
    label: "Success Stories",
    icon: <Heart className="h-6 w-6 text-purple-600" aria-hidden="true" />,
    bgColor: "bg-purple-100",
  },
  {
    id: "stat-experts",
    number: "50+",
    label: "Expert Contributors",
    icon: <BookOpen className="h-6 w-6 text-purple-600" aria-hidden="true" />,
    bgColor: "bg-purple-100",
  },
  {
    id: "stat-tools",
    number: "15+",
    label: "Digital Detox Tools",
    icon: <Wrench className="h-6 w-6 text-purple-600" aria-hidden="true" />,
    bgColor: "bg-purple-100",
  },
];

const resources = [
  {
    id: "res-stories",
    IconComponent: Heart,
    title: "Success Stories",
    description:
      "Real stories from individuals who have transformed their lives through digital detox.",
  },
  {
    id: "res-tips",
    IconComponent: Wrench,
    title: "Expert Tips & Guides",
    description:
      "Professional guidance and strategies for managing your digital habits effectively.",
  },
  {
    id: "res-tools",
    IconComponent: Clock,
    title: "Digital Detox Tools",
    description:
      "Practical tools and challenges to help you unplug and maintain a healthy balance.",
  },
];

const values = [
  {
    id: "val-mindful",
    IconComponent: Target,
    title: "Mindful Technology Use",
    description:
      "We promote conscious and balanced engagement with digital tools to enhance life without letting technology control it.",
  },
  {
    id: "val-wellness",
    IconComponent: Globe,
    title: "Digital Wellness",
    description:
      "Creating awareness about how technology affects mental health and providing practical solutions for a healthier relationship with devices.",
  },
  {
    id: "val-community",
    IconComponent: MessageCircle,
    title: "Community Support",
    description:
      "Building a supportive community where individuals can share experiences and strategies for maintaining digital balance.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-12 min-h-screen bg-gray-50">
      <section
        aria-labelledby="about-hero-heading"
        className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="about-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Welcome to UnplugWell
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Your sanctuary for rediscovering balance in the digital age. We
              empower individuals to take control of their screen time and
              cultivate healthier, more fulfilling lives offline.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="stats-heading" className="py-16 bg-white">
        <h2 id="stats-heading" className="sr-only">
          Our Impact in Numbers
        </h2>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center p-6 bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-4 w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mission-heading"
        className="py-20 bg-purple-100"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2
                id="mission-heading"
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-6"
              >
                Our Mission & Values
              </h2>
              <p className="text-gray-800 text-lg mb-8">
                At UnplugWell, we are passionate about helping people achieve
                harmony between their digital and real lives. Through insightful
                content, practical strategies, and inspiring stories, we guide
                our community on a journey of mindfulness, productivity, and
                self-discovery.
              </p>
              <div className="space-y-6">
                {values.map(
                  ({ id, IconComponent, title, description }, index) => (
                    <div key={id} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg bg-purple-200 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <IconComponent className="h-6 w-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">
                          {title}
                        </h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="A diverse team collaborating in a bright, modern office, symbolizing UnplugWell's community and expert-driven approach."
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-60"
                  aria-hidden="true"
                ></div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-200 rounded-2xl -z-10 opacity-50 blur-lg"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full -z-10 opacity-50 blur-lg"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="offerings-heading" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2
            id="offerings-heading"
            className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            What We Offer
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our resources designed to help you build a healthier
            relationship with technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map(
              ({ id, IconComponent, title, description }, index) => (
                <div
                  key={id}
                  className={`bg-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 flex flex-col ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-5 flex-grow">{description}</p>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors mt-auto group"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn more
                    <ArrowRight
                      className="w-5 h-5 ml-1 transition-transform transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white mb-6">
            Join Us on the Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Together, we can unplug and thrive. Start your digital detox journey
            today and rediscover the beauty of living in the present moment.
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-900"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
