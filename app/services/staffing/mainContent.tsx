import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";
import React from "react";

//import { Search, Users, CheckCircle } from "lucide-react";
//import Link from "next/link";

const mainContent = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-40"></div>

      {/* Floating elements */}

      {/* Animated lines */}
      <div className="decoration-line w-[200px] rotate-[30deg] top-[35%] left-[5%]"></div>
      <div className="decoration-line w-[150px] -rotate-[20deg] bottom-[30%] right-[10%]"></div>

      <div className="container mx-auto max-w-7xl px-6 md:px-10 z-10 flex flex-col items-center">
        {/* Main heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#003C46] via-[#0098af] to-[#00b4d8]">
            Where exceptional talent meets innovative opportunities
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#0098af] to-[#00b4d8] rounded-full mb-6"></div>
        </motion.div>

        {/* Option buttons */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8 w-full max-w-5xl">
          {/* Find a Job */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md border border-white/20  rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="bg-[#0098af]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#0098af]/20 transition-colors duration-300">
              <User size={30} className="text-[#0098af]" />
            </div>
            <h2 className="text-2xl font-bold text-[#003C46] mb-4">
              Find Your Dream Job
            </h2>
            <p className="text-[#5b5b5b] mb-6">
              Discover opportunities that match your skills, experience, and
              career aspirations.
            </p>
            <a
              href="#"
              className="bg-[#0098af] text-white px-6 py-3 rounded-lg font-medium transition-all 
                hover:bg-[#003C46] hover:shadow-lg shadow-[#0098af]/20 relative overflow-hidden
                after:content-[''] after:absolute after:h-full after:w-full after:top-0 after:left-0
                after:bg-white/20 after:translate-x-[-100%] after:skew-x-[45deg] after:transition-transform
                hover:after:translate-x-[150%] after:duration-70 inline-block"
            >
              Explore Jobs
            </a>
          </motion.div>

          {/* Hire Talent */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="bg-[#00b4d8]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#00b4d8]/20 transition-colors duration-300">
              <Briefcase size={30} className="text-[#00b4d8]" />
            </div>
            <h2 className="text-2xl font-bold text-[#003C46] mb-4">
              Hire Exceptional Talent
            </h2>

            <p className="text-[#5b5b5b] mb-6">
              Connect with pre-vetted professionals who can bring value to your
              organization.
            </p>
            <a
              href="#"
              className=" bg-white text-[#0098af] border-2 border-[#0098af] px-6 py-3 rounded-lg font-medium
                transition-all hover:bg-[#E6F0F5] hover:border-[#003C46] hover:text-[#003C46] hover:shadow-lg
                shadow-[#0098af]/10 relative overflow-hidden after:content-[''] after:absolute after:h-full after:w-full
                after:top-0 after:left-0 after:bg-[#E6F0F5]/50 after:translate-x-[-100%] after:skew-x-[45deg]
                after:transition-transform hover:after:translate-x-[150%] after:duration-700 inline-block"
            >
              Find Talent
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        ></motion.div>
      </div>
    </section>
  );
};
export default mainContent;
