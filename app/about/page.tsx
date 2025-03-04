"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/MegaMenu";
import Footer from "@/components/footer";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Link from "next/link";

const image = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31";

export default function AboutPage() {
  // Animation Variants
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const scaleHover = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />
      {/* Hero Section */}
      {/* <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0098AF] via-[#007B8F] to-[#5B5B5B] text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-7xl mx-auto px-6 z-10 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 relative">
              Cognition IES
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-8 relative">
              Engineering the future with innovation, agility, and a human-first
              approach since 2023.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "20%" }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white opacity-50"
              />
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="text-[#0098AF] border-white hover:bg-white hover:text-[#0098AF] px-8 py-3 rounded-full text-lg font-semibold shadow-lg relative overflow-hidden"
              >
                Learn More
                <motion.span
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white opacity-10 rounded-full"
                />
              </Button>
              <Button
                variant="default"
                className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-8 py-3 rounded-full text-lg font-semibold shadow-lg relative overflow-hidden"
              >
                Contact Us
                <motion.span
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-[#0098AF] opacity-20 rounded-full"
                />
              </Button>
            </div>
          </motion.div>
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Abstract Tech"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#5B5B5B] opacity-50 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.1, rotate: 360 }}
            transition={{
              delay: 1,
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-[#0098AF] opacity-50 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 left-10 w-4 h-4 bg-[#0098AF] opacity-50 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 right-10 w-6 h-6 bg-[#0098AF] opacity-30 rounded-full"
          />
        </section> */}
      <section>
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src={image}
            alt="Office Environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
          <div className="absolute inset-0 opacity-5 bg-[url('/images/career-pattern.jpg')] bg-repeat" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
            <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4" />
                Home
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
              Cognition IES
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
            </h1>
            <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
              Engineering the future with innovation, agility, and a human-first
              approach since 2023.
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
      {/* Our Story */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          >
            <div className="lg:col-span-3">
              <h2 className="text-4xl md:text-5xl font-bold text-[#5B5B5B] mb-6 tracking-tight">
                Our Journey
              </h2>
              <p className="text-lg font-light leading-relaxed text-justify text-gray-700 mb-6">
                Born in 2023 from a visionary spark in India, Cognition IES has
                evolved into a global innovator. We’ve reimagined engineering by
                breaking down traditional hierarchies, connecting our expert
                engineers directly with clients to deliver seamless solutions
                for industries like automotive, aerospace, and medical devices.
              </p>
              <p className="text-lg font-light text-justify text-gray-700 mb-6 relative">
                Our unique blend of startup agility and deep expertise drives us
                to create value that’s bold, practical, and sustainable—every
                single day.
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 1 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-[#0098AF] opacity-50"
                />
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 relative">
                {/* Subtle Glow Effect Around Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#0098AF] opacity-10 rounded-lg blur-xl -z-10"
                />
                <div className="flex items-center space-x-4 bg-[#0098AF] opacity-60 p-4 rounded-lg shadow-md border border-[#0098AF] opacity-30">
                  <div className="w-12 h-12 bg-[#5B5B5B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">50+</span>
                  </div>
                  <p className="text-lg font-medium text-black">
                    Skilled Engineers
                  </p>
                </div>
                <div className="flex items-center space-x-4 bg-[#0098AF] opacity-60 p-4 rounded-lg shadow-md border border-[#0098AF] opacity-30">
                  <div className="w-12 h-12 bg-[#5B5B5B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">65+</span>
                  </div>
                  <p className="text-lg font-medium text-black">
                    Years of Expertise
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-80 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                alt="Creative Workspace"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-lg"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 bg-[#5B5B5B] opacity-50 rounded-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#5B5B5B] opacity-20 rounded-full shadow-md flex items-center justify-center text-center p-4"
              >
                <p className="text-white font-semibold">
                  Global Reach: India & USA
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute top-0 left-0 w-32 h-32 bg-[#0098AF] opacity-50 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.1, rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-0 w-24 h-24 border border-[#0098AF] opacity-50 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-10 right-10 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
              />
            </div>
          </motion.div>
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-10 w-6 h-6 bg-[#0098AF] opacity-30 rounded-full"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-16 relative"
          >
            <div className="bg-white p-8  rounded-xl shadow-lg max-w-2xl -rotate-3 mx-auto transform  relative border-l-4 border-[#0098AF] z-10  ">
              <h2 className="text-3xl font-semibold text-[#5B5B5B] mb-4 tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                To spark engineering innovation with a people-first mindset,
                empowering every team member to deliver exceptional value
                directly to our clients.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-[#0098AF] opacity-50 mt-4 rounded-full"
              />
            </div>
            <div className="bg-[#0098AF] opacity-90 p-8 rounded-xl rotate-3 shadow-lg max-w-2xl ml-auto transform border-r-4 border-[#5b5b5b] relative z-10 border-r-4 border-[#0098AF]">
              <h2 className="text-3xl font-semibold text-[#5B5B5B] mb-4 tracking-tight">
                Our Vision
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                To lead as the world’s trusted engineering partner, thriving on
                self-driven teams and sustainable, collaborative brilliance.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-[#5B5B5B] opacity-50 mt-4 rounded-full"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-20"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-10 left-10 w-4 h-4 bg-[#0098AF] opacity-50 rounded-full -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{
                delay: 1.5,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-10 right-10 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
            />
          </motion.div>

          {/* Background Image for Mission Vision Section */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Abstract Lines"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      {/* <section className="py-24 bg-gradient-to-b from[#F9FAFB] to-[#E5E7EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-16 relative z-10"
          >
            <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto transform -rotate-2 border-l-4 border-[#0098AF] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-3xl font-semibold text-[#003C46] mb-4 tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                To spark engineering innovation with a people-first mindset,
                empowering every team member to deliver exceptional value
                directly to our clients.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-[#0098AF] opacity-80 mt-4 rounded-full"
              />
            </div>
            <div className="bg-[#E6F0F2] p-8 rounded-xl shadow-md max-w-2xl ml-auto transform rotate-2 border-r-4 border-[#5B5B5B] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-3xl font-semibold text-[#003C46] mb-4 tracking-tight">
                Our Vision
              </h2>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                To lead as the world’s trusted engineering partner, thriving on
                self-driven teams and sustainable, collaborative brilliance.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-[#5B5B5B] opacity-80 mt-4 rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#99D5DF] opacity-15 rounded-full blur-3xl -z-20"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 0.25, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-10 left-10 w-4 h-4 bg-[#0098AF] opacity-40 rounded-full -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{
                delay: 1.5,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-10 right-10 w-5 h-5 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
            />
          </motion.div>

          <div className="absolute inset-0 opacity-5">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Abstract Lines"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section> */}

      {/* Key Values */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#5B5B5B] mb-12 tracking-tight">
            What Drives Us
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Co-Innovation",
                desc: "Co-creating patents with you.",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              },
              {
                title: "Lifecycle Mastery",
                desc: "From vision to victory.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
              },
              {
                title: "Quality Core",
                desc: "Precision every time.",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
              },
              {
                title: "Flex & Scale",
                desc: "Adapting to your pace.",
                img: "https://images.unsplash.com/photo-1551288049-341cbeb25138",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleHover}
                initial="rest"
                whileHover="hover"
                className="p-6 bg-gray-100 rounded-lg border border-gray-300 hover:border-[#0098AF] transition-all shadow-md relative overflow-hidden"
              >
                <div className="relative h-24 mb-4">
                  <Image
                    src={value.img}
                    alt={value.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    className="absolute inset-0 bg-[#5B5B5B] opacity-50"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5B5B5B] mb-2">
                  {value.title}
                </h3>
                <p className="text-base font-light text-gray-700">
                  {value.desc}
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  className="absolute inset-0 bg-[#0098AF] opacity-20 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#0098AF] opacity-80 rounded-full flex items-center justify-center text-white font-bold shadow-sm"
                >
                  {index + 1}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{
                    delay: 1,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute bottom-2 right-2 w-3 h-3 bg-[#0098AF] opacity-30 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10" />
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-10 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 right-10 w-4 h-4 bg-[#5B5B5B] opacity-20 rounded-full"
          />
        </div>
      </section>

      {/* Stats & Impact */}
      <section className="py-24 bg-[#5B5B5B] text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
            Our Impact
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { stat: "50+", label: "Skilled Engineers" },
              { stat: "65+", label: "Years of Expertise" },
              { stat: "100%", label: "On-Time Delivery" },
              { stat: "ISO 9001", label: "Certified Quality" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#5B5B5B] bg-opacity-60 rounded-lg shadow-lg border-2 border-[#0098AF] opacity-90 relative overflow-hidden"
              >
                <h3 className="text-5xl font-bold mb-2">{item.stat}</h3>
                <p className="text-lg font-light">{item.label}</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0098AF] opacity-50 rounded-full blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{
                    delay: 1,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-2 left-2 w-3 h-3 bg-[#0098AF] opacity-30 rounded-full"
                />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Tech Pattern"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-72 h-72 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.1, rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-48 h-48 border-2 border-[#0098AF] opacity-50 rounded-full -z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 right-10 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 left-10 w-4 h-4 bg-[#5B5B5B] opacity-20 rounded-full"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0098AF] to-[#5B5B5B] text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Shape the Future with Us
            </h2>
            <p className="text-lg font-light text-justify max-w-2xl mx-auto mb-8 relative">
              Ready to turn your engineering challenges into opportunities?
              Let’s connect and create something extraordinary together.
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "20%" }}
                transition={{ duration: 1 }}
                className="absolute bottom-0 left-[90px] transform -translate-x-1/2 h-0.5 bg-white opacity-50"
              />
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/contact">
                <Button
                  variant="default"
                  className="bg-white text-[#5B5B5B] hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg relative overflow-hidden"
                >
                  Get in Touch
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[#0098AF] opacity-20 rounded-full"
                  />
                </Button>
              </Link>
              <Link href="/expertise">
                <Button
                  variant="outline"
                  className="text-[#0098AF] border-white hover:bg-white hover:text-[#0098AF] px-10 py-4 rounded-full text-lg font-semibold shadow-lg relative overflow-hidden"
                >
                  Explore Expertise
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white opacity-10 rounded-full"
                  />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl -z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 right-10 w-4 h-4 bg-[#5B5B5B] opacity-20 rounded-full"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
