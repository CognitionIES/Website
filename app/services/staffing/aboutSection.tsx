import React from "react";
import { ClipboardCheck, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        {/* Background Decorations */}
        
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003C46] mb-4">
              Why Choose Talent Canvas?
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#0098af] to-[#00b4d8] rounded-full mb-6"></div>
            <p className="text-lg text-[#5b5b5b] max-w-2xl mx-auto">
              We&apos;re reinventing how companies connect with exceptional
              talent and how professionals find their ideal career paths.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-[#0098af]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck size={28} className="text-[#0098af]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003C46] mb-3">
                Personalized Matching
              </h3>
              <p className="text-[#5b5b5b]">
                Our advanced AI algorithms ensure perfect matches between
                candidates and opportunities.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-[#0098af]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-[#0098af]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003C46] mb-3">
                Expert Consultants
              </h3>
              <p className="text-[#5b5b5b]">
                Our industry specialists provide guidance throughout your hiring
                or job search journey.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-[#0098af]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-[#0098af]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003C46] mb-3">
                Quality Assurance
              </h3>
              <p className="text-[#5b5b5b]">
                We thoroughly vet all candidates and opportunities to ensure the
                highest standards.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-[#0098af]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={28} className="text-[#0098af]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003C46] mb-3">
                Growth-Focused
              </h3>
              <p className="text-[#5b5b5b]">
                We aim for long-term success, not just filling positions or
                finding jobs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
