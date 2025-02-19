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
import { toast } from "sonner";
import { Button } from "../ui/button";
import { z } from "zod";


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
export default function Right(){
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        }
      };
    
    return (
        <div className="w-[45%] bg-[#0c1d44]">
        <div className="px-12 py-12">
          <h3 className="text-3xl font-bold text-white mb-8">
            Download Brochure
          </h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="bg-white" />
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
                        <Input placeholder="Doe" {...field} className="bg-white" />
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
                    <FormLabel className="text-white">Business E-Mail *</FormLabel>
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
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Select Industry *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="- Select -" />
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
                      <FormLabel className="text-white">Select Country *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="- Select -" />
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
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-[#23dce1] data-[state=checked]:bg-[#23dce1] data-[state=checked]:text-[#0c1d44]"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white text-sm font-normal">
                        I would like to receive communications from LTTS about its
                        products, resources, services, events, webinars, marketing
                        events etc.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <div className="text-sm text-white">
                By clicking Submit, you agree to the{" "}
                <a href="/privacy-policy" className="text-[#23dce1] hover:underline">
                  Privacy Policy
                </a>
              </div>

              <Button
                type="submit"
                className="w-32 bg-[#23dce1] hover:bg-white text-[#0c1d44] font-semibold"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    )

}