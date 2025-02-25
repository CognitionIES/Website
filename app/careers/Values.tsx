import { Building2, Users, Target, Award } from "lucide-react";

export default function Values() {
  return (
    <section className="py-16 bg-[#F5FDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#003C46] mb-12 text-center">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Co-Innovation",
              description:
                "We collaborate with clients to develop breakthrough solutions and co-patents, combining expertise with vision",
            },
            {
              icon: Users,
              title: "People-First Culture",
              description:
                "We eliminate rigid hierarchies, ensuring every team member has a voice and a direct impact on value creation.",
            },
            {
              icon: Target,
              title: "Excellence in Execution",
              description:
                "From concept to production, we are committed to delivering precision, quality, and innovation in everything we do",
            },
            {
              icon: Award,
              title: "Sustainability & Responsibility",
              description:
                "We design smarter, greener solutions that drive real impact across industries.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-[#99D5DF]/20 shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#00A4B4] mb-4">
                {value.title}
              </h3>
              <p className="text-[#4A4A4A]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
