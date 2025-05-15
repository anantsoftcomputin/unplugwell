"use client";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ajaxCall from "@/helpers/ajaxCall";
import { Mail, Send, User, MapPin, ArrowRight, Briefcase } from "lucide-react";

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await ajaxCall("/message/message/", {
        method: "POST",
        data: { ...data, site: "2" },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully! 🎉 We'll be in touch soon.");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20">
          <div
            className="absolute inset-0 bg-grid-white/[0.05]"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="inline-block border border-purple-600 py-1 px-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent font-medium text-sm mb-4 shadow-sm">
                GET IN TOUCH
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
                We're Here to Support Your Digital Wellness Journey
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about digital detox or need personalized
                guidance? Our team is ready to help you create a healthier
                relationship with technology.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-start">
              <section
                aria-labelledby="form-heading"
                className="md:col-span-7 bg-white rounded-3xl shadow-xl p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl"
              >
                <h2
                  id="form-heading"
                  className="text-2xl font-bold text-gray-800 mb-6"
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div
                          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                          aria-hidden="true"
                        >
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <Controller
                          name="name"
                          control={control}
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              id="name"
                              autoComplete="name"
                              className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                              placeholder="Jane Doe"
                              aria-required="true"
                              aria-invalid={errors.name ? "true" : "false"}
                              aria-describedby={
                                errors.name ? "name-error" : undefined
                              }
                            />
                          )}
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            className="text-red-500 text-sm mt-1"
                            role="alert"
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div
                          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                          aria-hidden="true"
                        >
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              id="email"
                              autoComplete="email"
                              className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                              placeholder="you@example.com"
                              aria-required="true"
                              aria-invalid={errors.email ? "true" : "false"}
                              aria-describedby={
                                errors.email ? "email-error" : undefined
                              }
                            />
                          )}
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="text-red-500 text-sm mt-1"
                            role="alert"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject (Optional)
                    </label>
                    <div className="relative">
                      <div
                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                        aria-hidden="true"
                      >
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            id="subject"
                            autoComplete="off"
                            className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="How can we help you?"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="message"
                      control={control}
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <textarea
                          {...field}
                          id="message"
                          rows="5"
                          className="w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                          placeholder="Tell us how we can help with your digital wellness journey..."
                          aria-required="true"
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={
                            errors.message ? "message-error" : undefined
                          }
                        />
                      )}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-500 text-sm mt-1"
                        role="alert"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Send Message
                    <Send
                      className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              </section>

              <aside className="md:col-span-5 space-y-8">
                <section
                  aria-labelledby="contact-info-heading"
                  className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-gray-800 transform transition-all duration-500 hover:scale-105"
                >
                  <h3
                    id="contact-info-heading"
                    className="text-xl font-bold mb-6"
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 p-3 bg-purple-600 rounded-full mr-4"
                        aria-hidden="true"
                      >
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Email us at</p>
                        <a
                          href="mailto:support@unplugwell.com"
                          className="text-gray-700 hover:text-purple-600 hover:underline"
                        >
                          support@unplugwell.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 p-3 bg-purple-600 rounded-full mr-4"
                        aria-hidden="true"
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">
                          Visit our office
                        </p>
                        <address className="not-italic text-gray-700">
                          Alkapuri, Vadodara, Gujarat, India 390007
                        </address>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  aria-labelledby="faq-heading"
                  className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 transform transition-all duration-500 hover:shadow-xl"
                >
                  <h3
                    id="faq-heading"
                    className="text-xl font-bold text-gray-800 mb-4"
                  >
                    Frequently Asked Questions
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/"
                        className="flex items-center text-gray-700 hover:text-purple-600 group"
                      >
                        <ArrowRight
                          className="h-4 w-4 mr-2 text-gray-500 transform transition-transform group-hover:translate-x-1 group-hover:text-purple-500"
                          aria-hidden="true"
                        />
                        <span>How do I create a digital detox plan?</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center text-gray-700 hover:text-purple-600 group"
                      >
                        <ArrowRight
                          className="h-4 w-4 mr-2 text-gray-500 transform transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                        <span>Digital wellness solutions for workplaces</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center text-gray-700 hover:text-purple-600 group"
                      >
                        <ArrowRight
                          className="h-4 w-4 mr-2 text-gray-500 transform transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                        <span>Managing children's screen time</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center text-gray-700 hover:text-purple-600 group"
                      >
                        <ArrowRight
                          className="h-4 w-4 mr-2 text-gray-500 transform transition-transform group-hover:translate-x-1 group-hover:text-purple-500"
                          aria-hidden="true"
                        />
                        <span>How to subscribe to our newsletter</span>
                      </a>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>

            <section
              aria-labelledby="map-heading"
              className="mt-16 bg-white rounded-3xl shadow-lg p-6 overflow-hidden transform transition-all duration-500 hover:shadow-xl"
            >
              <h3
                id="map-heading"
                className="text-xl font-bold text-gray-800 mb-6"
              >
                Find Us Here
              </h3>
              <div className="h-80 rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                <iframe
                  title="Unplugwell Office Location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.619858908374!2d73.16840231530986!3d22.29245498532701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5fde296b767%3A0x71CAD589A75D1C7D!2sAlkapuri%2C%20Vadodara%2C%20Gujarat%20390007!5e0!3m2!1sen!2sin!4v1678886450123!5m2!1sen!2sin" // Example valid URL for Alkapuri, Vadodara
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
