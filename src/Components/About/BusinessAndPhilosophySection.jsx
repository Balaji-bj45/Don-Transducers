import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Shield, Zap } from "lucide-react";

const BUSINESS_FOCUS = [
  {
    num: "01",
    title: "Passive Driver",
    desc: "Our core competency. High-power passive drivers from 10\" to 18\", featuring precision-wound voice coils and optimized motor structures.",
    specs: ["10\" - 18\" range", "Up to 2000W RMS", "Neodymium & Ferrite"],
  },
  {
    num: "02",
    title: "System Components",
    desc: "Complete ecosystem components: precision-tuned passive crossover networks, high-frequency horns, and waveguides.",
    specs: ["Passive crossovers", "HF horns & waveguides", "Terminal assemblies"],
  },
  {
    num: "03",
    title: "Cabinet Solutions",
    desc: "Complete enclosure solutions for subwoofer and full-range applications. Finished cabinets and flat-pack kits in Baltic birch.",
    specs: ["Baltic birch construction", "Optimized porting", "Tour-grade hardware"],
  },
];

const PHILOSOPHY_PILLARS = [
  {
    icon: Target,
    title: "Product-Centric",
    desc: "We don't chase trends. Every design decision starts with: does this improve acoustic performance?",
  },
  {
    icon: Shield,
    title: "Spec-Driven",
    desc: "Our engineering is anchored in measurable specifications. We publish complete data because our products withstand scrutiny.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    desc: "High power. Durability. Consistency. These aren't marketing points - they're engineering requirements.",
  },
];

const BusinessAndPhilosophySection = ({ sectionFade }) => {
  return (
    <section className="bg-gradient-to-b from-white/5 to-black py-24 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-4">
            <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">03 - What We Do</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 mb-6">
              Business <br /><span className="italic">Focus.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We specialize in manufacturing precision audio components for professional
              sound reinforcement.
            </p>
            <div className="mt-10">
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                View Product Catalog <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {BUSINESS_FOCUS.map((item) => (
              <div key={item.num} className="group bg-black border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <span className="text-3xl font-bold text-white/20 group-hover:text-blue-500/50 transition-colors">{item.num}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.specs.map((spec) => (
                        <span key={spec} className="px-3 py-1 bg-white/5 rounded-full text-xs text-blue-200 border border-white/5">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-32"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">04 - Philosophy</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-light mt-4 mb-6">
              Specification-driven.<br />
              <span className="italic text-gray-500">Performance-verified.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PHILOSOPHY_PILLARS.map((item) => (
              <div key={item.title} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-900/10 text-blue-400 mb-6">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessAndPhilosophySection;
