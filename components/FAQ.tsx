"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How is this different from just reading the book?",
    answer: "The book gives you the framework. The course gives you the process. You'll get video teaching that goes deeper than the book, workbooks to apply what you're learning, a community of people on the same journey, and live coaching calls to get your specific questions answered.",
  },
  {
    question: "What if I've been a Christian for years and still don't know my calling?",
    answer: "That's exactly who this course is for. Most people have been taught that calling is mysterious or only for 'special' Christians. This course demystifies the process and gives you practical tools to discover what God has already been showing you.",
  },
  {
    question: "How much time does each week require?",
    answer: "Plan for 2-3 hours per week: 60-90 minutes of video content, 30-60 minutes for workbook exercises, and optional community engagement. It's designed for busy people who are serious about clarity.",
  },
  {
    question: "What if I fall behind?",
    answer: "You have lifetime access to all course materials. Go at your own pace. Many students take longer than 6 weeks, and that's perfectly fine. The content will be here when you're ready.",
  },
  {
    question: "Is this just for pastors or ministry leaders?",
    answer: "Not at all. This is for any Christian who wants clarity on their calling—whether that's in business, education, healthcare, arts, or full-time ministry. Your calling is about who God made you to be, not just your job title.",
  },
  {
    question: "How does the 30-day guarantee work?",
    answer: "Try the full course for 30 days. Complete the first two modules, do the work, and if you don't feel clearer about your calling, email us for a full refund. No questions. No hassle. We only want students who are getting value.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left gap-4"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-6"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FREQUENTLY ASKED
            <span className="text-yellow-500"> QUESTIONS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 mx-4 sm:mx-0"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
