"use client";

// This component shows contact info and a form to send messages
import { motion } from "framer-motion";
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
import {  FiMail } from "react-icons/fi";
import { useState, useCallback } from "react";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    interestedIn: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { TITLE, DESCRIPTION, EMAIL } =
    CONTACT_CONSTANTS.CONTACT;
  const { STAGGER_CHILDREN } = CONTACT_CONSTANTS.ANIMATIONS;

  // Memoized input change handler
  const handleInputChange = useCallback(
    (field: string, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  // Memoized form submission handler
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      setStatus("");

      const WEB3FORMS_ACCESS_KEY = "aba4ac86-a28e-496a-86bb-e3c981356299";
      const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            ...formData,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            interestedIn: "",
            message: "",
            consent: false,
          });
        } else {
          setStatus("Oops! Something went wrong.");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setStatus("Error submitting form.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting]
  );

  // Dropdown options for "Interested In"
  const interestOptions = [
    { value: "Product Engineering", label: "Product Engineering" },
    { value: "Plant Engineering", label: "Plant Engineering" },
    { value: "ServiceCPQ", label: "ServiceCPQ" },
    { value: "Others", label: "Others" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CHILDREN}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
              {TITLE}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              {DESCRIPTION}
            </p>
            <div className="space-y-4 text-gray-600 bg-white p-5 rounded-lg shadow-sm">
              {/* <div className="flex items-center space-x-3">
                <FiMapPin className="h-5 w-5 text-[#0098AF]" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {LOCATION.TITLE}
                  </h3>
                  <p className="text-sm">{LOCATION.ADDRESS}</p>
                </div>
              </div> */}
              <div className="flex items-center space-x-3">
                {/* <FiPhone className="h-5 w-5 text-[#0098AF]" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {PHONE.TITLE}
                  </h3>
                  {PHONE.NUMBERS.map((number, index) => (
                    <p key={index} className="text-sm">
                      {number}
                    </p>
                  ))}
                </div> */}
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-[#0098AF]" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {EMAIL.TITLE}
                  </h3>
                  <p className="text-sm">{EMAIL.ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0098AF] max-h-[460px] flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-3 flex-1">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 transition-all duration-200 placeholder-gray-400"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 transition-all duration-200 placeholder-gray-400"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 transition-all duration-200 placeholder-gray-400"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 transition-all duration-200 placeholder-gray-400"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Input
                id="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 transition-all duration-200 placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
              <Select
                value={formData.interestedIn}
                onValueChange={(value) =>
                  handleInputChange("interestedIn", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 transition-all duration-200 text-gray-500">
                  <SelectValue placeholder="Interested In" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300 rounded-lg shadow-md">
                  {interestOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-sm py-1.5 px-3 hover:bg-[#0098AF] transition-colors duration-150"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-sm py-2 px-3 h-20 transition-all duration-200 resize-none placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
              <div className="flex items-center gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    handleInputChange("consent", !!checked)
                  }
                  className="h-4 w-4 border-gray-300 text-[#0098AF] focus:ring-[#0098AF] rounded transition-colors duration-200"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="consent"
                  className="text-xs text-gray-600 leading-tight"
                >
                  I agree to receive further communication. See our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#0098AF] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xs font-medium text-center ${
                    status.includes("Error") || status.includes("Oops")
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {status}
                </motion.p>
              )}
              <Button
                type="submit"
                className="w-full bg-[#0098AF] text-white hover:bg-white hover:text-black rounded-lg py-2 text-base  transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] disabled:bg-[#0098AF] disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
/*
 <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-lg transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
*/
