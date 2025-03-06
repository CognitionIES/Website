"use client";

// This component shows contact info and a form to send messages
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { TITLE, DESCRIPTION, LOCATION, PHONE, EMAIL } =
    CONTACT_CONSTANTS.CONTACT;
  const { STAGGER_CHILDREN } = CONTACT_CONSTANTS.ANIMATIONS;

  // Handles form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData); // Replace with real form submission logic
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CHILDREN}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Info */}
          <div className="space-y-8 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B5B5B] mb-6 tracking-tight">
              {TITLE}
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-700 relative">
              {DESCRIPTION}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "20%" }}
                transition={{ duration: 1 }}
                className="absolute -top-[30px] left-0 h-[3px] bg-[#0098AF] opacity-50"
              />
            </p>
            {/* Location */}
            <div className="flex items-center space-x-4">
              <FiMapPin className="h-6 w-6 text-[#0098AF]" />
              <div>
                <h3 className="text-lg font-medium text-[#5B5B5B]">
                  {LOCATION.TITLE}
                </h3>
                <p className="text-gray-700 font-light">{LOCATION.ADDRESS}</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FiPhone className="h-6 w-6 text-[#0098AF]" />
              <div>
                <h3 className="text-lg font-medium text-[#5B5B5B]">
                  {PHONE.TITLE}
                </h3>
                {PHONE.NUMBERS.map((number, index) => (
                  <p key={index} className="text-gray-700 font-light">
                    {number}
                  </p>
                ))}
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FiMail className="h-6 w-6 text-[#0098AF]" />
              <div>
                <h3 className="text-lg font-medium text-[#5B5B5B]">
                  {EMAIL.TITLE}
                </h3>
                <p className="text-gray-700 font-light">{EMAIL.ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-[#0098AF]/30 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
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
              {/* Email field */}
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
              {/* Subject field */}
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
              {/* Message field */}
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
              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-[#0098AF] text-white hover:bg-[#007A8C] rounded-full py-3"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
