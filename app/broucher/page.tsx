"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { z } from "zod";
import { toast } from "sonner";

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

const industries = [
  "Manufacturing",
  "Technology",
  "Healthcare",
  "Energy",
  "Transportation",
  "Construction",
  "Other",
];

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "France",
  "Japan",
  "Australia",
  "India",
  // Add more countries as needed
];

export default function ServiceDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketingConsent: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real implementation, this would be an API call
      console.log("Form submitted:", values);
      toast.success("Form submitted successfully!");
      form.reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen ">
      {/* Header Section */}
          <div className="bg-[#f0f0f0]">
            <div className="container mx-auto px-4 py-8 md:py-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Engineering Services
                  </h1>
                  <p className="text-lg text-gray-600">
                    Comprehensive engineering solutions for the process
                    industry, delivering excellence in plant design and
                    optimization.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white rounded-base hover:bg-white border-black text-[#0c1d44] bg-[#23dce1]"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
          {/* Banner Image */}
          <div className="w-full h-[400px] relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-950/10" />
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Service Details */}
              <div className="lg:w-5/12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Engineering for efficient projects & plants
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    Our engineering solutions create strong market
                    differentiation with offerings for efficient, safe, and
                    sustainable production facilities. We bring excellence in
                    engineering and operation through comprehensive service
                    portfolios.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 mt-1 text-blue-600">→</div>
                      <p className="text-gray-700">
                        CAPEX/OPEX plant engineering E/EPCM services
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 mt-1 text-blue-600">→</div>
                      <p className="text-gray-700">
                        Engineering re-application and global rollouts
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 mt-1 text-blue-600">→</div>
                      <p className="text-gray-700">
                        Services for digital makeover of manufacturing sites
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 mt-1 text-blue-600">→</div>
                      <p className="text-gray-700">
                        Operational excellence & WAGES program
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:w-7/12">
                <div className="bg-[#0c1d44] p-6 md:p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-white">
                    Download Brochure
                  </h3>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
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
                              <FormLabel className="text-white">
                                Last Name *
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
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
                              Business Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john.doe@company.com"
                                {...field}
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
                            <FormLabel className="text-white">
                              Company Name *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Company Ltd." {...field} />
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
                            <FormLabel className="text-white">
                              Job Title *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Senior Engineer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Select Industry *
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {industries.map((industry) => (
                                    <SelectItem key={industry} value={industry}>
                                      {industry}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

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
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {countries.map((country) => (
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
                            <FormControl className="border-[#23dce1]">
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-white">
                                I would like to receive communications about
                                products, services, and events.
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="text-sm text-white ">
                        By clicking Submit, you agree to our{" "}
                        <a
                          href="/privacy-policy"
                          className="text-[#23dce1] hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </div>

                      <Button
                        type="submit"
                        className=" bg-[#23dce1] hover:bg-white text-[#0c1d44]"
                      >
                        Submit
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        
    </main>
  );
}
