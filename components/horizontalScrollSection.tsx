import React, { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface BulletPoint {
  mainTopic: string;
  subPoints: string[];
}

interface HorizontalScrollSectionProps {
  index: number;
  title: string;
  bulletPoints: BulletPoint[];
  imageUrl: string;
  id?: string;
}

export const HorizontalScrollSection = forwardRef<
  HTMLDivElement,
  HorizontalScrollSectionProps
>(
  (
    {
      index,
      title,
      bulletPoints = [],
      imageUrl,
      id,
    }: HorizontalScrollSectionProps,
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const [inViewRef, inView] = useInView({
      threshold: 0.2,
      triggerOnce: false,
    });

    const containerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
      },
    };

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      },
      hover: {
        scale: shouldReduceMotion ? 1 : 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    };

    const columnVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: "easeOut",
          delay: shouldReduceMotion ? 0 : i * 0.1,
        },
      }),
    };

    const setRefs = (node: HTMLDivElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inViewRef(node);
    };

    const isTwoColumns = bulletPoints.length === 2;
    let columnGroups = bulletPoints;

    if (isTwoColumns) {
      columnGroups = [
        {
          mainTopic: bulletPoints[0].mainTopic,
          subPoints: bulletPoints[0].subPoints.slice(0, Math.ceil(bulletPoints[0].subPoints.length / 2))
        },
        {
          mainTopic: bulletPoints[0].mainTopic,
          subPoints: bulletPoints[0].subPoints.slice(Math.ceil(bulletPoints[0].subPoints.length / 2))
        },
        {
          mainTopic: bulletPoints[1].mainTopic,
          subPoints: bulletPoints[1].subPoints.slice(0, Math.ceil(bulletPoints[1].subPoints.length / 2))
        },
        {
          mainTopic: bulletPoints[1].mainTopic,
          subPoints: bulletPoints[1].subPoints.slice(Math.ceil(bulletPoints[1].subPoints.length / 2))
        }
      ];
    }

    return (
      <motion.section
        ref={setRefs}
        id={id}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 w-full flex flex-col justify-center py-12 md:py-16"
        role="region"
        aria-labelledby={`${id}-title`}
      >
        <div
          className={`w-full max-w-7xl mx-auto px-6 py-6 rounded-xl transition-all duration-300 outline outline-2 outline-black/20 shadow-lg hover:shadow-xl ${
            index % 2 === 0
              ? "bg-gradient-to-br from-primary/10 to-primary/5"
              : "bg-gradient-to-br from-muted/20 to-muted/10"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {/* Heading Section */}
            <motion.div className="text-left" variants={itemVariants}>
              <motion.h2
                id={`${id}-title`}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary"
                variants={itemVariants}
              >
                {title}
              </motion.h2>
            </motion.div>

            {/* Enhanced Bullet Points Section */}
            <motion.div
              className="relative grid gap-4 sm:gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
            >
              {columnGroups.map((group, groupIdx) => (
                <motion.div
                  key={groupIdx}
                  custom={groupIdx}
                  variants={columnVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex flex-col p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0"
                >
                  <motion.h3
                    className="text-base font-semibold text-foreground pb-2 border-b border-primary/20 mb-3"
                    variants={itemVariants}
                  >
                    {group.mainTopic}
                  </motion.h3>
                  <ul className="space-y-1">
                    {(group.subPoints || []).map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2"
                        whileHover={{ x: shouldReduceMotion ? 0 : 3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <motion.span
                          className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"
                          whileHover={{ scale: shouldReduceMotion ? 1 : 1.3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              {/* Scroll indicator for mobile */}
              {bulletPoints.length > 2 && (
                <div className="sm:hidden absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/50 dark:from-gray-800/50 to-transparent flex items-center justify-end pr-2 pointer-events-none">
                  <span className="text-muted-foreground text-xs">→</span>
                </div>
              )}
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative w-full h-[200px] md:h-[250px] lg:h-[200px] rounded-lg overflow-hidden mt-8 shadow-lg"
              variants={imageVariants}
              whileHover="hover"
            >
              <Image
                src={imageUrl}
                alt={`Illustration for ${title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-opacity duration-300 hover:opacity-90"
                priority={index === 0}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }
);

HorizontalScrollSection.displayName = "HorizontalScrollSection";
// import React, { forwardRef } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";

// interface BulletPoint {
//   mainTopic: string;
//   subPoints: string[];
// }

// interface HorizontalScrollSectionProps {
//   index: number;
//   title: string;
//   bulletPoints: BulletPoint[];
//   imageUrl: string;
//   id?: string;
// }

// export const HorizontalScrollSection = forwardRef<
//   HTMLDivElement,
//   HorizontalScrollSectionProps
// >(
//   (
//     {
//       index,
//       title,
//       bulletPoints = [],
//       imageUrl,
//       id,
//     }: HorizontalScrollSectionProps,
//     ref
//   ) => {
//     const shouldReduceMotion = useReducedMotion();
//     const [inViewRef, inView] = useInView({
//       threshold: 0.2,
//       triggerOnce: false,
//     });

//     const containerVariants = {
//       hidden: { opacity: 0, y: 30 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: "easeOut" },
//       },
//     };

//     const itemVariants = {
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
//       },
//     };

//     const imageVariants = {
//       hidden: { opacity: 0, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.7, ease: "easeOut" },
//       },
//       hover: {
//         scale: shouldReduceMotion ? 1 : 1.02,
//         transition: { type: "spring", stiffness: 300, damping: 20 },
//       },
//     };

//     const setRefs = (node: HTMLDivElement) => {
//       if (typeof ref === "function") {
//         ref(node);
//       } else if (ref) {
//         ref.current = node;
//       }
//       inViewRef(node);
//     };

//     // Function to chunk subPoints into groups of 4
//     const chunkSubPoints = (subPoints: string[]) => {
//       const chunks = [];
//       for (let i = 0; i < subPoints.length; i += 4) {
//         chunks.push(subPoints.slice(i, i + 4));
//       }
//       return chunks;
//     };

//     return (
//       <motion.section
//         ref={setRefs}
//         id={id}
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 w-full flex flex-col justify-center py-12 md:py-16"
//         role="region"
//         aria-labelledby={`${id}-title`}
//       >
//         <div
//           className={`w-full max-w-7xl mx-auto px-6 py-6 rounded-xl transition-all duration-300 outline outline-2 outline-black/20 shadow-lg hover:shadow-xl ${
//             index % 2 === 0
//               ? "bg-gradient-to-br from-primary/10 to-primary/5"
//               : "bg-gradient-to-br from-muted/20 to-muted/10"
//           }`}
//         >
//           <div className="flex flex-col ">
//             {/* Heading Section */}
//             <motion.div className="text-left" variants={itemVariants}>
//               <motion.h2
//                 id={`${id}-title`}
//                 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary"
//                 variants={itemVariants}
//               >
//                 {title}
//               </motion.h2>
//             </motion.div>

//             {/* Bullet Points Section - Rows for each mainTopic */}
//             <div className="space-y-4">
//               {bulletPoints.map((group, groupIdx) => (
//                 <motion.div
//                   key={groupIdx}
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate={inView ? "visible" : "hidden"}
//                   className="flex flex-col"
//                 >
//                   <motion.h3
//                     className="text-base font-semibold text-foreground border-b border-primary/20 mb-2"
//                     variants={itemVariants}
//                   >
//                     {group.mainTopic}
//                   </motion.h3>
//                   <div className="space-y-2">
//                     {chunkSubPoints(group.subPoints).map((chunk, chunkIdx) => (
//                       <motion.ul
//                         key={chunkIdx}
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 "
//                         variants={containerVariants}
//                       >
//                         {chunk.map((point, idx) => (
//                           <motion.li
//                             key={idx}
//                             className="flex items-start gap-1 rounded-lg hover:bg-primary/5 transition-colors duration-200"
//                             variants={itemVariants}
//                             whileHover={{ x: shouldReduceMotion ? 0 : 3 }}
//                             transition={{
//                               type: "spring",
//                               stiffness: 400,
//                               damping: 20,
//                             }}
//                           >
//                             <motion.span
//                               className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"
//                               whileHover={{ scale: shouldReduceMotion ? 1 : 1.3 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                             />
//                             <span className="text-sm text-muted-foreground leading-relaxed">
//                               {point}
//                             </span>
//                           </motion.li>
//                         ))}
//                       </motion.ul>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Image Section */}
//             <motion.div
//               className="relative w-full h-[200px] md:h-[250px] lg:h-[200px] rounded-lg overflow-hidden mt-6 shadow-lg"
//               variants={imageVariants}
//               whileHover="hover"
//             >
//               <Image
//                 src={imageUrl}
//                 alt={`Illustration for ${title}`}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 className="object-cover transition-opacity duration-300 hover:opacity-90"
//                 priority={index === 0}
//               />
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     );
//   }
// );

// HorizontalScrollSection.displayName = "HorizontalScrollSection";