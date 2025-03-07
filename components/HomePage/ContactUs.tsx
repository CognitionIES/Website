"use client";

// Contact Us section with form and map
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WorldMapDemo from "../ui/WorldMapDemo";
import { CONTACT_CONSTANTS } from "@/constants/home/contact";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interestedIn: "",
    requirements: "",
    consent: false,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submission logic
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={CONTACT_CONSTANTS.IMAGE}
          alt="Contact Us Scene"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative">
              {CONTACT_CONSTANTS.TITLE}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              {CONTACT_CONSTANTS.DESCRIPTION}
            </p>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="text-gray-600 font-light">
                <strong>Email:</strong> {CONTACT_CONSTANTS.EMAIL}
              </p>
              <p className="text-gray-600 font-light">
                <strong>Toll Free Phone:</strong> {CONTACT_CONSTANTS.PHONE}
              </p>
            </div>
            <div className="py-[50px] h-[300px] sm:p-6 md:h-[400px]">
              <WorldMapDemo />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#0098AF]/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10"
                  required
                />
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10"
                  required
                />
              </div>
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10"
                required
              />
              <Input
                placeholder="Phone No."
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10"
                required
              />
              <Input
                placeholder="Company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10"
                required
              />
              <Select
                value={formData.interestedIn}
                onValueChange={(value) =>
                  setFormData({ ...formData, interestedIn: value })
                }
              >
                <SelectTrigger className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10">
                  <SelectValue placeholder="Interested In" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#0098AF]/10">
                  {CONTACT_CONSTANTS.INTEREST_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Requirements"
                value={formData.requirements}
                onChange={(e) =>
                  setFormData({ ...formData, requirements: e.target.value })
                }
                className="border-[#0098AF]/20 focus:border-[#0098AF] focus:ring-[#0098AF]/10"
                rows={4}
                required
              />
              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: !!checked })
                  }
                  className="border-[#0098AF] data-[state=checked]:bg-[#0098AF]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Yes, I am OK to receive further communication over my details
                  shared here. Refer to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#0098AF] hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more info.
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0098AF] text-white hover:bg-[#007B8F] rounded-md py-3 transition-colors duration-200"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 left-1/4 w-5 h-5 bg-[#0098AF] rounded-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-[#99D5DF] rounded-full blur-2xl -z-10"
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
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#5B5B5B] rounded-full -z-10"
      />
    </section>
  );
}
