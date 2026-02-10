import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = ({ sectionFade }) => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)]" />

        <div className="relative p-12 lg:p-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-serif font-light text-white mb-6">
            Ready to specify <span className="italic text-blue-300">with confidence?</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Get complete specifications, T/S parameters, and application guidance
            from our engineering team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
