"use client";

// This file puts together all parts of the brochure page
import { MegaMenu } from "@/components/ui/MegaMenu";
import Banner from "./Banner";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Footer from "@/components/footer";

export default function BrochurePage() {
  return (
    <main className="min-h-screen">
      {/* Top navigation */}
      <MegaMenu />

      {/* Banner section */}
      <Banner />

      {/* Main content with left and right sections */}
      <div className="min-h-screen flex">
        <LeftSection />
        <RightSection />
      </div>
      <div className="w-full h-[4px] bg-gradient-to-r from-[#0098AF] via-[#0098AF] to-[#0098AF] relative z-10" />

      <Footer />
    </main>
  );
}
/* 
      <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Left Column - Service Details 
              <div className="lg:w-5/12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Engineering for efficient projects & plants
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    Our engineering solutions create strong market
                    differentiation with offerings for efficient, safe, and
                    sustainable production facilities.
                  </p>
                  <p> We bring excellence in
                    engineering and operation through comprehensive service
                    portfolios.</p>
                    <br></br>
                    <br></br>
                    <br></br>
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
                    
                    <br></br>
                    <br></br>
                    <br></br>
                  <p>
                  Download our brochure for more information.
                  </p>


                </div>
              </div>

              {/* Right Column - Contact Form
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
*/
