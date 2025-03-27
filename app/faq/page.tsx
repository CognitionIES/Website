// app/faq/page.tsx
import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import workInProgress from "@/constants/images/work-in-progress.gif";
import Image from "next/image";

export default function FAQPage() {
  return (
    <div>
        <MegaMenu />
    <div className="min-h-screen bg-[#0098af] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">FAQ</h1>
        <p className="text-white mb-6">Welcome to the FAQ page!</p>
        <Image
          src={workInProgress}
          width={500}
          height={500}
          alt="Work in progress"
          className="mx-auto"
        />
      </div>
    </div>
        <Footer />
    </div>
  );
}