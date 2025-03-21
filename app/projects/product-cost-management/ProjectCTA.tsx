import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const buttonHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
};

const ProjectCTA = () => {
  return (
<div className="px-4 sm:px-6 lg:px-8 mb-12">
        <motion.section
          {...fadeInUp}
          className="py-20 lg:py-28 bg-gradient-to-br from-[#0098af] to-[#5b5b5b] text-white relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 opacity-10 bg-dot-pattern bg-[length:30px_30px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to optimize your manufacturing costs?
            </h2>
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-[#E6F0F5]">
              Our engineering team specializes in cost optimization without
              compromising quality. Discover how we can help improve your
              product&apos;s market competitiveness.
            </p>
            <motion.div {...buttonHover}>
              <Link href="/contact">
                <Button className="bg-white text-[#5b5b5b] hover:bg-[#E6F0F5] px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
  );
};

export default ProjectCTA;