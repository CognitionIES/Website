import { motion } from "framer-motion";
import { services } from "./constants";
import { fadeIn } from "@/components/ui/fadeIn"
import { ServiceCard } from "@/components/ui/ServiceCard";


export default function Services(){
    return(
        <>
            <section className="py-12 md:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003C46]">
              Our Mobility Engineering Services
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Innovative solutions for automotive, aerospace, rail, marine, and
              logistics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}