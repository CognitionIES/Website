import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export default function WorkWithUs() {
  return (
    <section className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-[#5B5B5B] relative">
              Why Work With Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0 text-center">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold text-[#5B5B5B] hover:text-[#0098AF] transition-colors duration-200">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <CardDescription className="text-sm font-light text-gray-600 leading-relaxed line-clamp-2">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Subtle Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
