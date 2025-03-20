import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Upload, Phone, Mail, MapPin, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: 'remote',
    message: '',
    resume: null as File | null,
    resumeBase64: '', // Added to store base64 string
    consent: false
  });

  const handleInputChange = (
    field: string, 
    value: string | boolean | File | null
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive"
        });
        return;
      }

      // Convert file to base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        setFormData(prev => ({
          ...prev,
          resume: file,
          resumeBase64: base64String.split(',')[1] // Remove data:image/pdf;base64, prefix
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent || !formData.resume || !formData.resumeBase64) {
      toast({
        title: "Missing required fields",
        description: "Please complete all required fields and upload a resume.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare form data for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
        resume_name: formData.resume.name,
        resume_data: formData.resumeBase64,
        resume_type: formData.resume.type
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_4jm4x6o', // Service ID
        'template_x7agzcz', // Template ID
        templateParams,
        'YHfV6LAgPBcm9VnHd' // Public Key
      );

      if (response.status === 200) {
        toast({
          title: "Application Submitted",
          description: "Thank you for your application! We'll be in touch soon.",
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: 'remote',
          message: '',
          resume: null,
          resumeBase64: '',
          consent: false
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="application"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#99D5DF]/5 -z-10"></div>
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-[#0098AF]/5 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium rounded-full mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl mb-4 lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center text-center">
            Apply Now
          </h2>
          <p className="section-subtitle">
            We&apos;re seeking talented individuals to join our innovative team.
            Apply now and be part of our journey!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-[#003C46] font-medium"
                  >
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                      className="pl-10 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF]"
                      placeholder="Enter your first name"
                      disabled={isSubmitting}
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-[#003C46] font-medium"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                      className="pl-10 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF]"
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#003C46] font-medium">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="pl-10 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF]"
                      placeholder="youremail@example.com"
                      disabled={isSubmitting}
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#003C46] font-medium">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      className="pl-10 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF]"
                      placeholder="+1 (555) 000-0000"
                      disabled={isSubmitting}
                    />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label
                  htmlFor="location"
                  className="text-[#003C46] font-medium"
                >
                  Preferred Location <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      handleInputChange("location", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="pl-10 border-[#5B5B5B]/30 focus:ring-[#0098AF]">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="san-francisco">
                        San Francisco, CA
                      </SelectItem>
                      <SelectItem value="new-york">New York, NY</SelectItem>
                      <SelectItem value="london">London, UK</SelectItem>
                    </SelectContent>
                  </Select>
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4 z-10" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#003C46] font-medium">
                  Tell Us About Yourself
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-32 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF]"
                  placeholder="Tell us about yourself, your experience, and why you're interested in joining our team..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <Label htmlFor="resume" className="text-[#003C46] font-medium">
                  Resume / CV <span className="text-red-500">*</span>
                </Label>
                <div className="border-2 border-dashed border-[#5B5B5B]/30 rounded-lg p-4 text-center">
                  <Input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                    disabled={isSubmitting}
                  />
                  <Label
                    htmlFor="resume"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="h-10 w-10 text-[#5B5B5B]/70 mb-2" />
                    <span className="text-[#003C46] font-medium mb-1">
                      {formData.resume
                        ? formData.resume.name
                        : "Upload your resume"}
                    </span>
                    <span className="text-[#5B5B5B] text-sm">
                      {formData.resume
                        ? `${(formData.resume.size / 1024 / 1024).toFixed(
                            2
                          )} MB`
                        : "PDF, DOC, DOCX (Max 5MB)"}
                    </span>
                  </Label>
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    handleInputChange("consent", checked === true)
                  }
                  disabled={isSubmitting}
                  className="mt-1 text-[#0098AF] border-[#5B5B5B]/50"
                />
                <div className="space-y-1 leading-none">
                  <Label
                    htmlFor="consent"
                    className="text-[#5B5B5B] text-sm cursor-pointer"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-[#0098AF] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to having my personal data processed for
                    recruitment purposes.
                  </Label>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent || !formData.resume}
                className="w-full bg-[#0098AF] hover:bg-[#007B8F] text-white py-6"
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
