"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaPhone,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const WHATSAPP_NUMBER = "6282191868371";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const services = [
    {
      title: "Web Development",
      description:
        "Build fast, responsive, and fully integrated websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <FaLaptopCode className="text-4xl text-vscode-modified" />,
    },
    {
      title: "Tech Writer",
      description:
        "Create clear, concise, and well-structured technical documentation that improves product understanding and user onboarding.",
      icon: <FaPaintBrush className="text-4xl text-vscode-modified" />,
    },
    {
      title: "Firebase Expert",
      description:
        "Implement scalable backend services with Firebase, including real-time databases, authentication, cloud functions, and hosting.",
      icon: <SiFirebase className="text-4xl text-vscode-modified" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Develop Android and iOS mobile apps using Flutter for native performance and modern UI.",
      icon: <FaMobileAlt className="text-4xl text-vscode-modified" />,
    },
  ];

  const portfolio = [
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive online store built with Next.js and Tailwind CSS, featuring payment integration and user authentication.",
      url: "https://ecommerce.example.com",
    },
    {
      title: "Technical Documentation",
      description:
        "Clear and detailed technical docs for a SaaS product, improving onboarding and reducing support tickets.",
      url: "https://docs.example.com",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking app built with Flutter, featuring real-time stats and social sharing.",
      url: "https://fitnessapp.example.com",
    },
  ];

  const pricing = [
    {
      plan: "Basic",
      price: "$500",
      features: [
        "Simple static website",
        "Responsive design",
        "Basic SEO setup",
      ],
    },
    {
      plan: "Standard",
      price: "$1,500",
      features: [
        "Dynamic web app",
        "Custom UI/UX design",
        "SEO & performance optimization",
      ],
    },
    {
      plan: "Premium",
      price: "$3,000+",
      features: [
        "Full-stack development",
        "Backend & database integration",
        "Ongoing support & maintenance",
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const text = `Hello! My name is ${name}.\nEmail: ${email}\nMessage: ${message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Services Section */}
      <section id="services" className="mb-20">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        <p className="text-center text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-16">
          Discover the range of services I offer — from crafting responsive
          websites to building scalable mobile apps. Each solution is tailored
          to help your business grow digitally with elegance and performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="dark:bg-stone-900 bg-stone-100 p-8 rounded-xl shadow border dark:border-stone-700 hover:border-blue-400 cursor-pointer transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-lg font-semibold mb-3">{service.title}</h2>
              <p className="text-stone-600 dark:text-stone-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <p className="text-center text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-16">
          Every project tells a story of innovation and precision. Here’s a
          glimpse into the ideas I’ve brought to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border rounded-lg shadow hover:shadow-lg dark:border-stone-700 transition-shadow dark:bg-stone-900 bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-stone-600 dark:text-stone-300">
                {item.description}
              </p>
              <p className="mt-4 text-blue-600 hover:underline">
                View Project →
              </p>
            </a>
          ))}
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl shadow border dark:border-stone-700 dark:bg-stone-900 bg-white flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.plan}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2 flex-grow">
                {plan.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-stone-600 dark:text-stone-300"
                  >
                    <FaCheckCircle className="text-green-500" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="mb-20 max-w-5xl mx-auto md:px-4 px-0">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Descriptive + contact info */}
          <div className="space-y-6 text-stone-600 dark:text-stone-400">
            <p className="text-lg">
              Let’s build something great together! If you have a project in
              mind, a question to ask, or just want to say hi — feel free to
              reach out.
            </p>
            <p>
              I’m currently open for freelance projects, collaborations, or
              full-time opportunities.
            </p>
            <div className="space-y-4">
              <Link
                href=" mailto:mitrasurya7@gmail.com"
                className="flex items-center gap-3"
              >
                <FaEnvelope className="text-blue-600" />
                <span>mitrasurya7@gmail.com</span>
              </Link>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600" />
                <span>+62 82191868371</span>
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <form
            className="bg-stone-100 dark:bg-stone-900 p-6 rounded-xl shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-1 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border dark:border-stone-700 border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-stone-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border dark:border-stone-700 border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-stone-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border dark:border-stone-700 border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-stone-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
