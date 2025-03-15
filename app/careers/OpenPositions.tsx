"use client";

// This component shows a careers form for job applicants
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
import { FiUpload } from "react-icons/fi";
import { useState, useCallback } from "react";

export default function CareersSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    coverLetter: "",
    resume: null as File | null,
    agreeToCommunication: false,
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoized input change handler
  const handleInputChange = useCallback(
    (field: string, value: string | File | null | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  // Memoized file upload handler
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      handleInputChange("resume", file);
    },
    [handleInputChange]
  );

  // Memoized form submission handler
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (
        isSubmitting ||
        !formData.resume ||
        !formData.location ||
        !formData.agreeToCommunication
      )
        return;

      setIsSubmitting(true);
      setStatus("");

      const WEB3FORMS_ACCESS_KEY = "8c3f7423-031b-40c2-a2cb-24974d1d61d8";
      const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

      const submissionData = new FormData();
      submissionData.append("access_key", WEB3FORMS_ACCESS_KEY);
      submissionData.append("firstName", formData.firstName);
      submissionData.append("lastName", formData.lastName);
      submissionData.append("email", formData.email);
      submissionData.append("phone", formData.phone);
      submissionData.append("position", formData.position);
      submissionData.append("location", formData.location);
      submissionData.append("coverLetter", formData.coverLetter);
      if (formData.resume) {
        submissionData.append("resume", formData.resume);
      }
      submissionData.append(
        "agreeToCommunication",
        formData.agreeToCommunication.toString()
      );

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          body: submissionData,
        });

        const result = await response.json();
        if (result.success) {
          setStatus("Application submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            position: "",
            location: "",
            coverLetter: "",
            resume: null,
            agreeToCommunication: false,
          });
          (document.getElementById("resume") as HTMLInputElement).value = "";
        } else {
          console.error("Web3Forms Error:", result);
          setStatus("Oops! Something went wrong.");
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setStatus("Error submitting application.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting]
  );

  // Position options
  const positionOptions = [
    { value: "1", label: "Position 1" },
    { value: "2", label: "Position 2" },
    { value: "3", label: "Position 3" },
  ];

  // Location options
  const locationOptions = [
    { value: "usa", label: "USA" },
    { value: "india", label: "India" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#E6F0F5] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-[#0098af]/15 rounded-full blur-md -z-10" />
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-[#5b5b5b]/10 rounded-full blur-lg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-10 items-start">
          {/* Left Column: Header and Description */}
          <div className="space-y-4">
            <h2 className="tetext-3xl py-2 sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
              Join Our Team
            </h2>

            <p className="text-base sm:text-lg text-[#5b5b5b] text-justify leading-relaxed">
              We’re seeking talented individuals to join our innovative team.
              Apply now and be part of our journey!
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-6 rounded-xl border border-[#0098af]/20 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#5b5b5b]"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 bg-gray-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#5b5b5b]"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 bg-gray-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Row 2: Email Address and Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#5b5b5b]"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 bg-gray-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#5b5b5b]"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 bg-gray-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Row 3: Position and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-[#5b5b5b]"
                  >
                    Position
                  </label>
                  <Select
                    value={formData.position}
                    onValueChange={(value) =>
                      handleInputChange("position", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 text-[#5b5b5b] bg-gray-50">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-[#5b5b5b]/40 rounded-md shadow">
                      {positionOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-sm py-1.5 px-3 hover:bg-[#0098af] hover:text-white"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-[#5b5b5b]"
                  >
                    Location
                  </label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      handleInputChange("location", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 text-[#5b5b5b] bg-gray-50">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-[#5b5b5b]/40 rounded-md shadow">
                      {locationOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-sm py-1.5 px-3 hover:bg-[#0098af] hover:text-white"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-[#5b5b5b]"
                >
                  Cover Letter (Optional)
                </label>
                <Textarea
                  id="coverLetter"
                  placeholder="Why you’re a great fit..."
                  value={formData.coverLetter}
                  onChange={(e) =>
                    handleInputChange("coverLetter", e.target.value)
                  }
                  className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-2 px-3 h-20 bg-gray-50"
                  disabled={isSubmitting}
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-[#5b5b5b]"
                >
                  Upload Resume
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full border border-[#5b5b5b]/40 focus:border-[#0098af] rounded-md text-sm py-1.5 px-3 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:bg-gray-50 file:text-[#0098af] hover:file:bg-[#0098af]/10 bg-gray-50"
                    required
                    disabled={isSubmitting}
                  />
                  <FiUpload className="h-5 w-5 text-[#0098af]" />
                </div>
                {formData.resume && (
                  <p className="text-xs text-[#5b5b5b] mt-1 truncate">
                    {formData.resume.name}
                  </p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="agreeToCommunication"
                  checked={formData.agreeToCommunication}
                  onChange={(e) =>
                    handleInputChange("agreeToCommunication", e.target.checked)
                  }
                  className="h-4 w-4 text-[#0098af] border-[#5b5b5b]/40 rounded"
                  required
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="agreeToCommunication"
                  className="text-sm text-[#5b5b5b]"
                >
                  I agree to receive communication. See our{" "}
                  <a href="/privacy-policy" className="text-[#0098af]">
                    Privacy Policy
                  </a>.
                </label>
              </div>

              {/* Status Message */}
              {status && (
                <p
                  className={`text-xs font-medium text-center ${
                    status.includes("Error") || status.includes("Oops")
                      ? "text-[#5b5b5b]"
                      : "text-[#0098af]"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#0098af] text-white hover:bg-[#5b5b5b] rounded-md py-2.5 text-sm font-medium shadow-sm hover:shadow-md disabled:bg-[#5b5b5b]/60"
                disabled={
                  isSubmitting ||
                  !formData.resume ||
                  !formData.location ||
                  !formData.agreeToCommunication
                }
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}