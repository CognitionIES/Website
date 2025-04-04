import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenu />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r  from-[#0098af]-[#E6F0F5] to-white py-24 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0098af]-[#003C46] mb-6 leading-tight">
                Connecting Talent with Opportunity
              </h1>
              <p className="text-xl text-[#5b5b5b] mb-8">
                StaffSync is your trusted partner in staffing and recruitment, helping businesses find top talent and job seekers discover their dream careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#0098af] hover:bg-[#0098af]-[#003C46]">
                  <Link href="/job-seekers">Find Jobs</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#0098af] text-[#0098af] hover:bg-[#0098af]-[#E6F0F5]">
                  <Link href="/employer">Hire Talent</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
