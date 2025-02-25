import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/components/ui/fadeIn"

export default function About() {
return (
    <>
        <section className="py-12 md:py-16 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003C46]">
                Mobility Industry Solutions
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-4">
                We engineer smarter ways to move people and goods. Our solutions
                enhance efficiency, sustainability, and safety in
                transportation.
              </p>
              <p className="text-lg text-[#4A4A4A]">
                From electric vehicles and aerospace to rail and marine, we
                create next-gen mobility solutions tailored for the future.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80"
                alt="Mobility Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    
    </>

    )
}