import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" },
  hover: {
    y: -2,
    boxShadow: "0 6px 12px rgba(0, 152, 175, 0.1)",
    transition: { duration: 0.2 },
  },
};

export default function Values() {
  return (
    <section className="py-16 bg-[#F5FDFF]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-[#003C46] relative">
              Our Values
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Co-Innovation",
                description: "Collaborating with clients to craft groundbreaking solutions.",
              },
              {
                title: "People-First Culture",
                description: "Empowering every voice to shape our success.",
              },
              {
                title: "Excellence in Execution",
                description: "Delivering precision and quality, every time.",
              },
              {
                title: "Sustainability & Responsibility",
                description: "Building greener solutions for a better tomorrow.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm font-light text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Subtle Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute top-1/4 right-1/3 w-32 h-32 bg-[#99D5DF] opacity-20 rounded-full blur-2xl -z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-20 w-4 h-4 bg-[#0098AF] opacity-30 rounded-full -z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
