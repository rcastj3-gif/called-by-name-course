"use client";

import { motion } from "framer-motion";

interface CTAProps {
  onCtaClick?: () => void;
}

export default function CTA({ onCtaClick }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white border-t-4 border-yellow-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            YOUR CALLING IS WAITING.
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-6 sm:mb-8">
            WILL YOU ANSWER?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds who have moved from confusion to crystal-clear calling.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-block px-6 sm:px-10 py-4 sm:py-5 bg-yellow-500 text-black font-bold text-base sm:text-lg rounded-lg hover:bg-yellow-600 transition-colors shadow-xl whitespace-normal sm:whitespace-nowrap"
          >
            ENROLL NOW — $297
          </button>
          <p className="mt-6 text-yellow-400 text-sm">
            30-day guarantee. Start your journey today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
