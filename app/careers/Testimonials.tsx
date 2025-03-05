import Image from "next/image";
import {Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import testimonials from "@/constants/testimonials";
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
export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30">
     <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-gradient-to-b from-[#0098AF]/5 to-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-[#5B5B5B] relative">
              Employee Testimonials
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader className="flex flex-row gap-4 items-center p-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full w-14 h-14 object-cover shadow-sm"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold text-[#5B5B5B] hover:text-[#0098AF] transition-colors duration-200">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-light text-gray-600">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm font-light text-gray-600 italic leading-relaxed line-clamp-2">
                      &quot;{testimonial.quote}&quot;
                    </p>
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
            className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#99D5DF] opacity-20 rounded-full blur-2xl -z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
