"use client";

import sections from "@/constants/sections";
import frameBackground from "@/constants/images/Background/Frame_8.jpg";
import Footer from "@/components/footer";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { Suspense, useEffect, useState, useRef, useCallback } from "react";
import SearchParamsHandler from "./SearchParamsHandler";
import { ScrollSection } from "@/components/ScrollSection";

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleParamChange = useCallback((params: Record<string, string>) => {
    console.log("Search parameters changed:", params);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionRefs.current.length || isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;
      event.preventDefault();
      setIsScrolling(true);
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(
        0,
        Math.min(sectionRefs.current.length - 1, currentSection + direction)
      );
      scrollToSection(nextSection);
    };

    const handleScrollEnd = () => setIsScrolling(false);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection, isScrolling]);

  return (
    <div className="relative min-h-screen overflow-y-auto pb-8 snap-y snap-mandatory">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${frameBackground.src})`,
        }}
      />
      <div className="relative">
        <header className="relative z-50">
          <MegaMenu />
        </header>
        <main className="relative pt-8">
          <div
            className="fixed top-0 left-8 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent"
            aria-hidden="true"
          />
          <Suspense fallback={<div>Loading search parameters...</div>}>
            <SearchParamsHandler onParamChange={handleParamChange} />
          </Suspense>
          {Object.entries(sections).map(([key, section], index) => (
            <section
              key={key}
              id={key}
              ref={(el) => {
                sectionRefs.current[index] = el as HTMLDivElement | null;
              }}
              className={`min-h-screen flex items-center justify-center py-24 snap-start ${
                index === 0 ? "mt-16" : ""
              }`}
            >
              <div
                className={`w-full max-w-7xl mx-auto px-2 py-4 rounded-3xl transition-colors duration-500 outline outline-2 outline-black/50 ${
                  index % 2 === 0
                    ? "bg-blue-400/5 dark:bg-blue-950/10"
                    : "bg-gray-400/10 dark:bg-gray-900/10"
                }`}
                style={{ minHeight: "50vh" }}
              >
                <ScrollSection
                  index={index}
                  title={section.title}
                  description={section.description}
                  imageUrl={section.imageUrl.src}
                  bulletPoints={section.bulletPoints}
                  additionalImageUrl={section.additionalImageUrl?.src}
                />
              </div>
            </section>
          ))}
        </main>
        <Footer />
      </div>
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
              animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MousePointer2 size={16} aria-hidden="true" />
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown size={16} aria-hidden="true" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// "use client";

// import { ScrollSection } from "@/components/ScrollSection";
// import Navbar from "@/components/ui/navbar";
// import { useEffect, useRef, useState } from "react";
// import sections from "@/constants/sections";
// import frameBackground from "@/constants/images/Background/Frame_8.jpg";
// import Footer from "@/components/footer";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, MousePointer2 } from "lucide-react";

// export default function servicesPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [currentSection, setCurrentSection] = useState(0);
//   const [showScrollHint, setShowScrollHint] = useState(true);
//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleWheel = (e: WheelEvent) => {
//       e.preventDefault();

//       if (isScrolling) return;

//       const delta = e.deltaY;
//       const currentScroll = container.scrollTop;
//       const sectionHeight = window.innerHeight;
//       const maxSection = Object.keys(sections).length - 1;

//       let nextSection;
//       if (delta > 0) {
//         // Scrolling down
//         nextSection = Math.min(currentSection + 1, maxSection);
//       } else {
//         // Scrolling up
//         nextSection = Math.max(currentSection - 1, 0);
//       }

//       setIsScrolling(true);
//       setCurrentSection(nextSection);

//       container.scrollTo({
//         top: nextSection * sectionHeight,
//         behavior: "smooth"
//       });

//       // Reset scrolling state after animation
//       setTimeout(() => {
//         setIsScrolling(false);
//       }, 800); // Matches scroll animation duration
//     };

//     const handleScroll = () => {
//       if (!container) return;
//       const section = Math.round(container.scrollTop / window.innerHeight);
//       setCurrentSection(section);
//       if (section > 0) setShowScrollHint(false);
//     };

//     // Keyboard navigation
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (isScrolling) return;

//       if (e.key === "ArrowUp" || e.key === "ArrowDown") {
//         e.preventDefault();

//         const nextSection = e.key === "ArrowDown"
//           ? Math.min(currentSection + 1, Object.keys(sections).length - 1)
//           : Math.max(currentSection - 1, 0);

//         setIsScrolling(true);
//         setCurrentSection(nextSection);

//         container.scrollTo({
//           top: nextSection * window.innerHeight,
//           behavior: "smooth"
//         });

//         setTimeout(() => {
//           setIsScrolling(false);
//         }, 800);
//       }
//     };

//     // Touch handling for mobile
//     let touchStart = 0;
//     let touchStartTime = 0;

//     const handleTouchStart = (e: TouchEvent) => {
//       touchStart = e.touches[0].clientY;
//       touchStartTime = Date.now();
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       if (isScrolling) return;

//       const touchEnd = e.touches[0].clientY;
//       const touchEndTime = Date.now();
//       const delta = touchStart - touchEnd;
//       const timeDelta = touchEndTime - touchStartTime;

//       // Only trigger if the swipe was fast enough and long enough
//       if (Math.abs(delta) > 50 && timeDelta < 300) {
//         handleWheel({ deltaY: delta, preventDefault: () => {} } as WheelEvent);
//       }
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });
//     container.addEventListener("scroll", handleScroll);
//     container.addEventListener("touchstart", handleTouchStart);
//     container.addEventListener("touchmove", handleTouchMove);
//     window.addEventListener("keydown", handleKeyDown);

//     // Hide scroll hint after 5 seconds
//     const timer = setTimeout(() => setShowScrollHint(false), 5000);

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//       container.removeEventListener("scroll", handleScroll);
//       container.removeEventListener("touchstart", handleTouchStart);
//       container.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("keydown", handleKeyDown);
//       clearTimeout(timer);
//     };
//   }, [currentSection, isScrolling]);

//   return (
//     <div
//       className="h-screen font-[family-name:var(--font-geist-sans)] bg-cover bg-center relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${frameBackground.src})`,
//       }}
//     >
//       <Navbar />

//       {/* Section Navigation */}
//       <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
//         <div className="space-y-3 py-4 px-2 rounded-full bg-background/5 backdrop-blur-sm">
//           {Object.values(sections).map((section, index) => (
//             <motion.div
//               key={index}
//               className="group relative flex items-center"
//               whileHover="hover"
//             >
//               <motion.div
//                 className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
//                   currentSection === index
//                     ? 'bg-primary scale-125'
//                     : 'bg-muted hover:bg-primary/50'
//                 }`}
//                 onClick={() => {
//                   if (isScrolling) return;
//                   setIsScrolling(true);
//                   setCurrentSection(index);
//                   containerRef.current?.scrollTo({
//                     top: index * window.innerHeight,
//                     behavior: "smooth"
//                   });
//                   setTimeout(() => setIsScrolling(false), 800);
//                 }}
//                 whileHover={{ scale: 1.2 }}
//               />
//               <motion.span
//                 className="absolute left-6 px-2 py-1 text-sm text-primary bg-background/80 rounded-md opacity-0 pointer-events-none whitespace-nowrap"
//                 variants={{
//                   hover: { opacity: 1, x: 0 }
//                 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {section.title}
//               </motion.span>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div
//         ref={containerRef}
//         className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         <div className="fixed top-0 left-8 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />

//         {Object.values(sections).map((section, index) => (
//           <div
//             key={index}
//             className="snap-start snap-always h-screen flex items-center justify-center relative"
//           >
//             <motion.div
//               className={`w-full max-w-7xl mx-auto px-6 md:px-8 py-8 rounded-2xl backdrop-blur-sm transition-colors duration-500 ${
//                 index % 2 === 0
//                   ? 'bg-blue-400/5 dark:bg-blue-950/10'
//                   : 'bg-gray-400/5 dark:bg-gray-900/10'
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <ScrollSection
//                 index={index}
//                 title={section.title}
//                 description={section.description}
//                 imageUrl={section.imageUrl}
//                 bulletPoints={section.bulletPoints}
//                 logos={section.logos}
//               />
//             </motion.div>
//           </div>
//         ))}

//         <Footer />
//       </div>

//       {/* Scroll Navigation Hints */}
//       <AnimatePresence>
//         {showScrollHint && currentSection === 0 && (
//           <motion.div
//             className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/90"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
//               animate={{ y: [0, 4, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <MousePointer2 size={16} />
//               <span className="text-sm font-medium">Scroll, Swipe, or use Arrow Keys</span>
//               <ChevronDown size={16} />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Footer />
//     </div>
//   );
// }
