import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";


export default function hero(){
    const { IMAGES, TEXT } = ABOUT_CONSTANTS;
    return (
        <section>
        <div className="relative h-[500px] overflow-hidden">
          {/* Background Image */}
          <Image
            src={IMAGES.HERO_IMAGE}
            alt="Office Environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
          <div className="absolute inset-0 opacity-5 bg-[url('/images/career-pattern.jpg')] bg-repeat" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4" /> Home
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/about"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                About Us
              </Link>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md relative">
              {TEXT.COMPANY_NAME}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
            </h1>
            <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
              {TEXT.HERO_SUBTITLE}
            </p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
            >
              <FiChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl"
          />
        </div>
      </section>
    )
}