import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CtaSection = ({ sectionFade }) => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-700/60 via-black to-emerald-600/50 p-10 lg:p-14 overflow-hidden relative"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_55%)]" />
        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Host a demo
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
              Want an engineering-led demo at your venue?
            </h2>
            <p className="text-white/85 mt-6 max-w-2xl">
              Tell us your city, expected audience, and the system type (tops,
              subs, installs). We will propose a session format and a lineup.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Browse Products <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
