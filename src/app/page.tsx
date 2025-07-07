"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
 const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

const pricingData: Record<"monthly" | "annual", { name: string; price: string; features: string[] }[]> = {
  monthly: [
    { name: "Starter", price: "$29", features: ["1,000 SMS credits/month", "Basic analytics", "Email support"] },
    { name: "Pro", price: "$99", features: ["5,000 SMS credits/month", "Advanced analytics", "API access"] },
    { name: "Enterprise", price: "$299", features: ["25,000 SMS credits/month", "Custom integrations", "24/7 support"] }
  ],
  annual: [
    { name: "Starter", price: "$278", features: ["12,000 SMS credits/year", "Basic analytics", "Email support"] },
    { name: "Pro", price: "$950", features: ["60,000 SMS credits/year", "Advanced analytics", "API access"] },
    { name: "Enterprise", price: "$2860", features: ["300,000 SMS credits/year", "Custom integrations", "24/7 support"] }
  ]
};


  const testimonials = [
    { name: "Amit Patel", quote: "Reliable and fast SMS delivery!", rating: 5 },
    { name: "Neha Sharma", quote: "Great support and easy to use.", rating: 5 },
    { name: "Rahul Verma", quote: "Affordable and efficient messaging.", rating: 5 },
    { name: "Priya Mehta", quote: "Amazing features and great value.", rating: 5 },
    { name: "Karan Desai", quote: "Customer support is top-notch!", rating: 5 },
    { name: "Anjali Rao", quote: "UI is very intuitive and clean.", rating: 4 },
    { name: "Siddharth Joshi", quote: "Quick and reliable platform.", rating: 5 },
    { name: "Pooja Malhotra", quote: "Highly recommend this service.", rating: 5 },
    { name: "Divya Menon", quote: "Love the features and speed.", rating: 5 }
  ];

  const partners = [
    "/fastsms.png", "/msg91.png", "/kaleyra.png",
    "/2factor.png", "/exotel.png", "/smscountry.png", "/twilio.png"
  ];


  return (
    <main className="bg-[#0F0F1B] text-white scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 backdrop-blur-md sticky top-0 z-50">
        <Image src="/logo.png" alt="Logo" width={120} height={50} />
        <ul className="flex space-x-6 text-sm">
          <li><a href="#features" className="hover:text-green-400 transition">Features</a></li>
          <li><a href="#usecases" className="hover:text-green-400 transition">Use Cases</a></li>
          <li><a href="#setup" className="hover:text-green-400 transition">Setup</a></li>
          <li><a href="#pricing" className="hover:text-green-400 transition">Pricing</a></li>
        </ul>
        <div className="flex space-x-3">
          <a href="#contact"><Button variant="outline">Contact</Button></a>
          <Button>Start now</Button>
        </div>
      </nav>

      {/* Hero Section */}
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 py-12 sm:py-16 gap-8 sm:gap-10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-xl text-center md:text-left"
  >
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
      Built to Help You <br /> Reach More, <br /> Stress Less!
    </h1>
    <p className="text-gray-400 mb-6 text-sm sm:text-base">
      Send thousands of personalized SMS messages in seconds. Our platform delivers high-volume, reliable messaging with industry-leading deliverability rates.
    </p>
    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
      <a href="#contact" className="w-full sm:w-auto"><Button className="w-full sm:w-auto">Start Messaging</Button></a>
      <a href="#pricing" className="w-full sm:w-auto"><Button variant="outline" className="w-full sm:w-auto">View Pricing</Button></a>
    </div>
  </motion.div>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    <Image src="/talk.png" alt="Hero" width={400} height={300} className="mx-auto max-w-[90vw] h-auto" />
  </motion.div>
</section>

      <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-12"></div>

           {/* Scrolling Partners Section */}
      <section className="py-10 px-6 bg-[#11111C] text-center">
        <h2 className="text-2xl font-bold mb-6">Trusted by Industry Leaders</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max space-x-12 animate-scroll-x"
            style={{ animation: "scroll-x 40s linear infinite" }}
          >
            {partners.concat(partners).map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Partner ${idx}`}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">See It in Action</h2>
        <p className="text-gray-400 mb-10">Get started in minutes with our simple four-step process.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {["Sign Up", "Upload Contacts", "Send SMS", "View Analytics"].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#181826] rounded-xl p-6 shadow-md hover:shadow-xl"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto text-lg font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step}</h3>
              <p className="text-sm text-gray-400">Complete your task easily and efficiently in this step.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent my-16"></div>

         {/* Animated Testimonials */}
      <section className="bg-[#181826] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10"
            >
              <p className="text-lg italic mb-4">“{t.quote}”</p>
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-sm text-gray-300">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
        <p className="text-gray-400 mb-6">Choose the plan that fits your messaging needs. All plans include our core features.</p>
        <div className="mb-6 flex items-center justify-center space-x-3">
          <span className={billing === "monthly" ? "text-white" : "text-gray-500"}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={billing === "annual"}
              onChange={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
            />
            <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-all flex items-center justify-between px-1">
              <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-6"></div>
            </div>
          </label>
          <span className={billing === "annual" ? "text-white" : "text-gray-500"}>Annual <span className="text-green-400">Save 20%</span></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData[billing].map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#181826] rounded-xl p-8 shadow-md hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price} <span className="text-sm">{billing === "monthly" ? "/month" : "/year"}</span></p>
              <ul className="mb-4 text-gray-300 text-sm space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <Button className="w-full">Choose {plan.name}</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Solution */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-[#0F0F1B] to-[#0F1F2B] text-center">
        <h2 className="text-3xl font-bold mb-2">Need a custom solution?</h2>
        <p className="text-gray-400 mb-6">Contact our sales team for volume pricing and custom features.</p>
        <Button className="px-6">Contact Sales</Button>
      </section>

       {/* Newsletter Signup */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#0F0F1B] to-[#181826]">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-400 mb-6">Subscribe to our newsletter for product updates and tips.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 placeholder:text-gray-400 text-white"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F1B] py-14 px-6 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <Image src="/logo.png" alt="Logo" width={120} height={50} />
            <p className="max-w-xs mt-4">Powerful, reliable, and secure SMS messaging platform for businesses of all sizes. Connect with your customers instantly.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-white font-semibold mb-2">Product</h4>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow us on</h4>
            <Image src="/social.png" alt="Socials" width={100} height={30} />
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 logo. All rights reserved.</p>
          <Image src="/payments.png" alt="Payments" width={120} height={20} />
        </div>
      </footer>
    </main>
  );
}
