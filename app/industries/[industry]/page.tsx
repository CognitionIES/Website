import { notFound } from 'next/navigation';
import { industries } from '@/constants/industries';
import HeroSection from '@/components/industries/HeroSection';
import ServiceHighlights from '@/components/industries/ServiceHighlights';
import ClientSection from '@/components/industries/ClientSection';
import ContactCTA from '@/components/industries/ContactCTA';
import Breadcrumb from '@/components/Breadcrumb';
import ExpertiseSection from '@/components/industries/ExpertiseSection';
import ProcessSection from '@/components/industries/ProcessSection';
import StatisticsSection from '@/components/industries/StatisticsSection';
import CaseStudies from '@/components/industries/CaseStudies';
import InnovationSection from '@/components/industries/InnovationSection';
export default function IndustryPage({
  params,
  
}: {
  params: { industry: string };
  searchParams?: { [key: string]: string | string[] };
}) {
  const industry = industries.find((ind) => ind.id === params.industry);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="relative">
        <Breadcrumb industry={industry.title} />
        <HeroSection industry={industry} />
      </div>
      <div className="space-y-24 pb-24">
        <ExpertiseSection industry={industry} />
        <StatisticsSection industry={industry} />
        <ServiceHighlights industry={industry} />
        <InnovationSection industry={industry} />
        <ProcessSection />
        <CaseStudies industry={industry} />
        <ClientSection industry={industry} />
        <ContactCTA />
      </div>
    </main>
  );
}
