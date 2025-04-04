import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import {
  Briefcase,
  Users,
  Clock,
  CheckCircle,
  BarChart,
  ShieldCheck,
} from "lucide-react";

const EmployersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenu />

      <main className="flex-grow">
      

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0098af]-[#E6F0F5] via-[#0098af]-[#E6F0F5] to-white py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0098af]-[#003C46] mb-4 leading-tight drop-shadow-sm">
                  Find Top Talent for Your Business
                </h1>
                <p className="text-xl text-[#5b5b5b] mb-8">
                  Connect with qualified candidates who match your
                  company&apos;s needs and culture.
                </p>
                <Button
                  size="lg"
                  className="bg-[#0098af] hover:bg-[#0098af]-[#003C46] text-white font-semibold shadow-lg px-8 py-6 text-lg rounded-xl"
                >
                  Post a Job Now
                </Button>
              </div>
              <div className="md:w-1/3 hidden md:block">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform rotate-3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#0098af]-[#E6F0F5] rounded-full flex items-center justify-center">
                      <Users className="text-[#0098af] h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0098af]-[#003C46]">
                        Hire faster
                      </h3>
                      <p className="text-sm text-gray-500">
                        Reduce time-to-hire by 30%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform -rotate-2 -mt-4 ml-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#0098af]-[#E6F0F5] rounded-full flex items-center justify-center">
                      <CheckCircle className="text-[#0098af] h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0098af]-[#003C46]">
                        Quality matches
                      </h3>
                      <p className="text-sm text-gray-500">
                        Pre-screened candidates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4 text-[#0098af]-[#003C46]">
              Our Hiring Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-7xl mx-auto">
              Tailored recruitment services to meet your specific business needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-[#0098af]-[#E6F0F5] rounded-full flex items-center justify-center mb-6 text-[#0098af] group-hover:bg-[#0098af] group-hover:text-white transition-colors duration-300">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-[#0098af]-[#003C46]">
                  Permanent Staffing
                </h3>
                <p className="text-gray-600 mb-6">
                  Find the perfect full-time employees who will contribute to
                  your company&apos;s long-term success.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0098af] mr-2" />
                    <span className="text-gray-700">
                      Access to pre-screened candidates
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0098af] mr-2" />
                    <span className="text-gray-700">
                      Industry-specific expertise
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0098af] mr-2" />
                    <span className="text-gray-700">
                      Customized recruitment process
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-[#0098af] text-white">
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-[#0098af]-[#E6F0F5] rounded-full flex items-center justify-center mb-6 text-[#0098af] group-hover:bg-[#0098af] group-hover:text-white transition-colors duration-300">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-[#0098af]-[#003C46]">
                  Contract Staffing
                </h3>
                <p className="text-gray-600 mb-6">
                  Access skilled professionals for project-based work with
                  flexible engagement models.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0098af] mr-2" />
                    <span className="text-gray-700">
                      Reduced administrative burden
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0098af] mr-2" />
                    <span className="text-gray-700">
                      Flexible staffing options
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0098af] mr-2" />
                    <span className="text-gray-700">
                      Quick deployment of talent
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-[#0098af] text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4 text-[#0098af]-[#003C46]">
              Why Choose StaffSync
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Partner with us for a seamless recruitment experience and
              exceptional results
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="text-[#0098af]" size={24} />,
                  title: "Quality Candidates",
                  description:
                    "Pre-screened candidates who match your requirements",
                },
                {
                  icon: <CheckCircle className="text-[#0098af]" size={24} />,
                  title: "Fast Hiring",
                  description:
                    "Reduce time-to-hire with our streamlined process",
                },
                {
                  icon: <Briefcase className="text-[#0098af]" size={24} />,
                  title: "Industry Expertise",
                  description: "Specialized recruiters for your industry",
                },
                {
                  icon: <Clock className="text-[#0098af]" size={24} />,
                  title: "Dedicated Support",
                  description:
                    "End-to-end assistance throughout the hiring process",
                },
                {
                  icon: <BarChart className="text-[#0098af]" size={24} />,
                  title: "Data-Driven Approach",
                  description:
                    "Analytics to optimize your recruitment strategy",
                },
                {
                  icon: <ShieldCheck className="text-[#0098af]" size={24} />,
                  title: "Compliance Assurance",
                  description:
                    "All hiring practices compliant with regulations",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#0098af]-[#E6F0F5] rounded-full flex items-center justify-center mb-4 text-[#0098af]">
                    {item.icon}
                  </div>
                  <h3 className="font-medium mb-2 text-[#0098af]-[#003C46]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EmployersPage;
