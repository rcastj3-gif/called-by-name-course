"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I spent 10 years wondering if I missed my calling. This course helped me see what God was showing me all along. I finally have clarity.",
    author: "David M.",
    role: "Business Owner",
  },
  {
    quote: "I thought I had to choose between my career and my calling. Turns out, they were the same thing. I just couldn't see it until now.",
    author: "Sarah K.",
    role: "Healthcare Professional",
  },
  {
    quote: "The process Reyes teaches actually works. I went from confused to crystal clear in 6 weeks. Worth every penny.",
    author: "Michael R.",
    role: "Ministry Leader",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            WHAT STUDENTS ARE
            <span className="text-yellow-400"> SAYING</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-yellow-500/20"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
