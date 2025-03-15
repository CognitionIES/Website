import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const constants = [
  {
    title: "Advanced Projects",
    description:
      "Work on cutting-edge engineering solutions that shape industries.",
  },
  {
    title: "Global Exposure",
    description:
      "Collaborate with international teams and clients across continents.",
  },
  {
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement opportunities.",
  },
];

export default function WorkWithUs() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#003C46] text mb-12">
          Why Work With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {constants.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
