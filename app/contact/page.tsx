"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/MegaMenu";
import Footer from "@/components/footer";
import {
  FiChevronDown,
  FiChevronRight,
  FiHome,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import WorldMapDemo from "@/components/ui/WorldMapDemo";

const heroImage = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"; // Replace with your preferred hero image

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // Replace with actual form submission logic
  };

  // Animation Variants
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />

      {/* Hero Section */}
      <section>
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Contact Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
          <div className="absolute inset-0 opacity-5 bg-[url('/images/career-pattern.jpg')] bg-repeat" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
            <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4" />
                Home
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/contact"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
            </h1>
            <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
              Reach out to us—we’re here to collaborate and turn your ideas into
              reality.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
            >
              <FiChevronDown className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Decorative Elements in Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute top-0 right-0 w-72 h-72 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 right-10 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Get in Touch */}
            <div className="space-y-8 relative">
              <h2 className="text-4xl md:text-5xl font-bold text-[#5B5B5B] mb-6 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-700 relative">
                We’d love to hear from you. Whether you have a question, a
                project idea, or just want to say hello, feel free to reach out.
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  transition={{ duration: 1 }}
                  className="absolute -top-[30px] left-0 h-[3px] bg-[#0098AF] opacity-50"
                />
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FiMapPin className="h-6 w-6 text-[#0098AF]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#5B5B5B]">
                      Our Location
                    </h3>
                    <p className="text-gray-700 font-light">
                      123 ABC, DEF HIJ, JKLM 9999
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="h-6 w-6 text-[#0098AF]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#5B5B5B]">
                      Phone
                    </h3>
                    <p className="text-gray-700 font-light">
                      +1 (847) 254-5337
                    </p>
                    <p className="text-gray-700 font-light">+91 98258-15795</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMail className="h-6 w-6 text-[#0098AF]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#5B5B5B]">
                      Email
                    </h3>
                    <p className="text-gray-700 font-light">
                      contact@company.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Dot */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-50 -left-6 w-4 h-4 bg-[#0098AF] opacity-30 rounded-full"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-[#0098AF]/30 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#5B5B5B]"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#5B5B5B]"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#5B5B5B]"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#5B5B5B]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0098AF] text-white hover:bg-[#007A8C] rounded-full py-3"
                >
                  Send Message
                </Button>
              </form>
              {/* Decorative Circle and Dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-0 right-0 w-32 h-32 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-4 right-4 w-5 h-5 bg-[#5B5B5B] opacity-30 rounded-full"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-12 right-8 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Google Maps */}
          <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977907225282!2d-122.41941708468204!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2us!4v15232382295"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Decorative Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.25, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-0 right-0 w-56 h-56 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#5B5B5B] opacity-10 rounded-full blur-3xl z-10" />
          {/* <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5B5B5B] opacity-30 rounded-full blur-3xl " /> */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-10 w-6 h-6 bg-[#000000] opacity-30 rounded-full"
          /> */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.1, rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-24 h-24 border border-[#0098AF] opacity-50 rounded-full -z-10"
          />
        </div>
          <WorldMapDemo />
      </section>
      <Footer />
    </div>
  );
}
