"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useCallback } from "react";
import Link from "next/link";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

const Product_PDF_PATH = "/pdf/COGNITION_Brochure_Product.pdf";
const Plant_PDF_PATH = "/pdf/COGNITION_Brochure_Plant.pdf";

export default function RightSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    industry: "",
    country: "",
    marketingConsent: false,
  });
  
  const [selectedBrochure, setSelectedBrochure] = useState("product"); // Default to product
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_ACCESS_KEY = "aba4ac86-a28e-496a-86bb-e3c981356299";
  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

  const { TITLE, PRIVACY_LINK, CONSENT_TEXT, COUNTRIES } = BROCHURE_CONSTANTS.RIGHT_CONTENT;

  const industryOptions = BROCHURE_CONSTANTS.INDUSTRIES.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      value: subcategory,
      label: subcategory,
    }))
  );

  const handleInputChange = useCallback(
    (field: string, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const isFormValid = useCallback(() => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.companyName.trim() !== "" &&
      formData.jobTitle.trim() !== "" &&
      formData.industry !== "" &&
      formData.country !== "" &&
      formData.marketingConsent
    );
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting || !isFormValid()) return;

      setIsSubmitting(true);
      setStatus("");

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "New Brochure Download Request",
            from_name: "Your Company Website",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            companyName: formData.companyName,
            jobTitle: formData.jobTitle,
            industry: formData.industry,
            country: formData.country,
            marketingConsent: formData.marketingConsent ? "Yes" : "No",
            brochureType: selectedBrochure, // Add brochure type to form submission
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          const pdfPath = selectedBrochure === "product" ? Product_PDF_PATH : Plant_PDF_PATH;
          window.open(pdfPath, "_blank");
          setStatus("Success! Check the new tab for your brochure.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            jobTitle: "",
            industry: "",
            country: "",
            marketingConsent: false,
          });
        } else {
          throw new Error(result.message || "Form submission failed");
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setStatus("Error submitting form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, isFormValid, selectedBrochure]
  );

  return (
    <div className="w-full lg:w-1/2 py-12 pl-4 lg:pl-8">
      <div className="bg-[#1e3a5f] p-6 rounded-md shadow-md">
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl font-bold text-white"
        >
          {TITLE}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-base text-gray-300 leading-relaxed mb-6"
        >
          Fill out the form below to receive our latest brochure.
        </motion.p>

        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium text-white ${
                selectedBrochure === "product"
                  ? "bg-[#0098af]"
                  : "bg-gray-700 hover:bg-gray-600"
              } rounded-l-md`}
              onClick={() => setSelectedBrochure("product")}
            >
              Product Brochure
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium text-white ${
                selectedBrochure === "plant"
                  ? "bg-[#0098af]"
                  : "bg-gray-700 hover:bg-gray-600"
              } rounded-r-md`}
              onClick={() => setSelectedBrochure("plant")}
            >
              Plant Brochure
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rest of the form fields remain the same */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                First Name *
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full bg-white border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Last Name *
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full bg-white border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Business E-Mail *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-white border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Company Name *
              </label>
              <Input
                id="companyName"
                type="text"
                placeholder="Company Ltd."
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full bg-white border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Job Title *
            </label>
            <Input
              id="jobTitle"
              type="text"
              placeholder="Senior Engineer"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              className="w-full bg-white border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Select Industry *
              </label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleInputChange("industry", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full bg-white border-none rounded-md text-sm py-2 px-3 text-[#5b5b5b]">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none rounded-md shadow-md">
                  {industryOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-sm py-1.5 px-3 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-150"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Select Country *
              </label>
              <Select
                value={formData.country}
                onValueChange={(value) => handleInputChange("country", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full bg-white border-none rounded-md text-sm py-2 px-3 text-[#5b5b5b]">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none rounded-md shadow-md">
                  {COUNTRIES.map((country) => (
                    <SelectItem
                      key={country}
                      value={country}
                      className="text-sm py-1.5 px-3 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-150"
                    >
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="marketingConsent"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) =>
                handleInputChange("marketingConsent", !!checked)
              }
              className="h-4 w-4 border-gray-300 text-[#0098af] focus:ring-[#0098af] rounded transition-colors duration-200"
              disabled={isSubmitting}
            />
            <label
              htmlFor="marketingConsent"
              className="text-sm text-white leading-tight"
            >
              {CONSENT_TEXT} By clicking Submit, you agree to the{" "}
              <Link
                href={PRIVACY_LINK}
                className="text-[#0098af] hover:underline"
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
              className={`text-sm font-medium text-center ${
                status.includes("Error") ? "text-red-500" : "text-green-600"
              }`}
            >
              {status}
            </motion.p>
          )}
          <Button
            type="submit"
            className="w-full bg-[#0098af] hover:bg-white text-white hover:text-[#0098af] text-base font-medium rounded-md transition-transform disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
            disabled={isSubmitting || !isFormValid()}
          >
            {isSubmitting ? "Submitting..." : "Download Brochure"}
          </Button>
        </form>
      </div>
    </div>
  );
}