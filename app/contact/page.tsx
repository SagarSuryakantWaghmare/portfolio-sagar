"use client";

import { GridWrapper } from "../components/GridWrapper";
import { HorizontalLine } from "../components/HorizontalLine";
import siteMetadata from "../data/siteMetadata";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ fullName: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="relative mt-14">
      <div className="relative space-y-10 md:space-y-16">
        {/* Header Section */}
        <GridWrapper className="space-y-8">
          <div className="text-center">
            <div className="mb-4 text-sm font-medium text-orange-primary">
              <span> Connect with me</span>
            </div>
            <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
              Let&apos;s Talk
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Got a project or idea? I&apos;m always up for discussing opportunities and brainstorming together.
            </p>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-32 -translate-x-1/2 -translate-y-1/2">
          <HorizontalLine />
        </span>

        {/* Main Content Section */}
        <GridWrapper>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form - Left Side */}
            <div className="h-full order-2 lg:order-1">
              <div className="flex h-full flex-col rounded-2xl border border-border-primary bg-white p-8 md:p-10">
                <h2 className="mb-8 text-2xl font-semibold text-text-primary">
                  Send me a message
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-6">
                  <div className="flex-1 space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-text-primary"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-border-primary bg-bg-primary px-4 py-3 text-text-primary outline-none transition-all placeholder:text-text-tertiary focus:border-orange-primary focus:bg-white focus:ring-2 focus:ring-orange-primary/20"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-text-primary"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-border-primary bg-bg-primary px-4 py-3 text-text-primary outline-none transition-all placeholder:text-text-tertiary focus:border-orange-primary focus:bg-white focus:ring-2 focus:ring-orange-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-1 flex-col">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-text-primary"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="flex-1 w-full resize-none rounded-lg border border-border-primary bg-bg-primary px-4 py-3 text-text-primary outline-none transition-all placeholder:text-text-tertiary focus:border-orange-primary focus:bg-white focus:ring-2 focus:ring-orange-primary/20"
                        placeholder="Tell me about your project or just say hi..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-lg bg-dark-primary px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </button>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`rounded-lg p-4 text-sm ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* About & Social - Right Side */}
            <div className="h-full order-1 lg:order-2">
              <div className="flex h-full flex-col rounded-2xl border border-border-primary bg-white p-8 md:p-10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                    <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-secondary">
                      Status
                    </div>
                    <div className="text-lg font-semibold text-text-primary">
                      Available for work
                    </div>
                  </div>
                </div>

                <div className="mb-8 h-40 w-40 mx-auto overflow-hidden rounded-full border-4 border-border-primary">
                  <Image
                    src="/images/Sagar/photo1.jpg"
                    alt="Sagar Waghmare"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <p className="mb-8 text-center text-base leading-relaxed text-text-secondary">
                    Let&apos;s connect! I&apos;m open to discussing projects, collaborations, or just having a chat. Drop me a message and I&apos;ll respond as soon as possible.
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={siteMetadata.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LeetCode"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-primary text-gray-400 transition-all hover:text-gray-300"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path>
                        <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
                      </svg>
                    </a>
                    <a
                      href={siteMetadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-primary text-gray-400 transition-all hover:text-gray-300"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10.75 11.75V16.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.75 11.75V16.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.75 9.25V8.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-primary text-gray-400 transition-all hover:text-gray-300"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </div>
  );
}
