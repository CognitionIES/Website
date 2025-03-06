"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import IndustrySelect from "./IndustrySelect";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

const PDF = "@/constants/pdf/brochure.pdf"; // Ensure this path is correct

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().min(2, "Company name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  industry: z.string().min(1, "Please select an industry"),
  country: z.string().min(1, "Please select a country"),
  marketingConsent: z.boolean().default(false),
});

export default function RightSection() {
  const { TITLE, PRIVACY_LINK, CONSENT_TEXT, COUNTRIES } =
    BROCHURE_CONSTANTS.RIGHT_CONTENT;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketingConsent: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Prepare email content
      const emailBody = `
        New Form Submission:
        First Name: ${values.firstName}
        Last Name: ${values.lastName}
        Email: ${values.email}
        Company Name: ${values.companyName}
        Job Title: ${values.jobTitle}
        Industry: ${values.industry}
        Country: ${values.country}
        Marketing Consent: ${values.marketingConsent ? "Yes" : "No"}
      `.replace(/\n/g, "%0D%0A");

      // Open email client
      const mailtoLink = `mailto:it_support@cognitionies.com?subject=New%20Form%20Submission&body=${encodeURIComponent(
        emailBody
      )}`;
      window.open(mailtoLink, "_self");

      // Display PDF in new tab
      const pdfUrl = PDF;
      window.open(pdfUrl, "_blank");

      toast.success("Form submitted! Please check your email client and PDF.");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-[45%] bg-[#0c1d44]">
      <div className="px-12 py-12">
        <h3 className="text-3xl font-bold text-white mb-8">{TITLE}</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {" "}
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">First Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John"
                        {...field}
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Last Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Doe"
                        {...field}
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Business E-Mail *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@company.com"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Company Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company Ltd."
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Job Title *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Senior Engineer"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-6">
              <IndustrySelect />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Select Country *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="- Select -" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {COUNTRIES.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="marketingConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-[#23dce1] data-[state=checked]:bg-[#23dce1] data-[state=checked]:text-[#0c1d44]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-white text-sm font-normal">
                      {CONSENT_TEXT}
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div className="text-sm text-white">
              By clicking Submit, you agree to the{" "}
              <a href={PRIVACY_LINK} className="text-[#23dce1] hover:underline">
                Privacy Policy
              </a>
            </div>
            <Button
              type="submit"
              className="w-32 bg-[#23dce1] hover:bg-white text-[#0c1d44] text-base font-medium rounded-md transition-transform"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
