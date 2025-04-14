// Footer/UsefulLinks.jsx
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

export default function UsefulLinks() {
  return (
    <div className="md:col-span-4">
      <div className="grid grid-cols-2  gap-4">
        {/* Column 1: Useful Links */}
        <div>
          <h3 className="text-2xl  mb-1">Useful Links</h3>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ delay: 0.6, duration: 1 }}
            className="block h-[2px] bg-gradient-to-r from-[#0098af] to-[#003C46] opacity-70  mb-4 rounded-full"
          />
          <ul className="space-y-2 text-[#E6F0F5]/70">
            {/* Home */}
            <li>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Home
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Projects */}

            <li>
              <Link
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Projects
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Careers */}
            <li>
              <Link
                href="/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Careers
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Abouts Us */}
            <li>
              <Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                About Us
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Contact Us */}
            <li>
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Contact Us
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* FAQs */}
            <li>
              <Link
                href="/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                FAQs
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-2xl  mb-1">Services</h3>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            transition={{ delay: 0.6, duration: 1 }}
            className="block h-[2px] bg-gradient-to-r from-[#0098af] to-[#003C46] opacity-70  mb-4 rounded-full"
          />
          <ul className="space-y-2 text-[#E6F0F5]/70">
          {/* Product Engineering */}
            <li>
              <Link
                href="/services/product-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Product Engineering
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Plant Engineering */}
            <li>
              <Link
                href="/services/plant-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Plant Engineering
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Saas Services */}
            <li>
              <Link
                href="/services/saas-solution/servicecpq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                SaaS Solutions
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            {/* Staffing and recruitment */}
            <li>
              <Link
                href="https://cognitionies.com/services/staffing-recruitment"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Staffing & Recruitment
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
