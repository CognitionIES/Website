import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/constants/home/faqs";

export default function AccordionDemo() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-8">
          Why Choose Cognition IES?
        </h2>
        <p className="text-lg text-gray-600 max-w-7xl mx-auto mb-10">
          The right engineering partner isn’t just about technical
          expertise—it’s about working with a team that understands your
          industry, your challenges, and the pressure to stay ahead. We don’t
          just solve problems. We build solutions that make a difference.
        </p>
        <Accordion type="single" collapsible className="text-gray-600">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-[#99D5DF]/20"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl text-[#003C46] hover:text-[#0098AF]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
