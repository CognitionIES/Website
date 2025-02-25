import Image from "next/image";
import { FiHome, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/ui/fadeIn"
export default function Hero() {
  return (
    <div>
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=2000&q=80"
          alt="Mobility Industry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/90 to-[#00A4B4]/80" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-center items-center text-white">
            <nav className="self-start mb-8 flex items-center space-x-2">
              <Link
                href="/"
                className="hover:text-primary-foreground/80 flex items-center"
              >
                <FiHome className="mr-1" /> Home
              </Link>
              <FiChevronRight />
              <Link
                href="/industries"
                className="hover:text-primary-foreground/80"
              >
                Industries
              </Link>
              <FiChevronRight />
              <span>Mobility</span>
            </nav>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              {...fadeIn}
            >
              Driving the Future of Mobility
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-center max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Smart, efficient, and sustainable solutions for modern
              transportation.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
