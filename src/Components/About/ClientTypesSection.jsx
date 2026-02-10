import React from "react";
import { motion } from "framer-motion";
import { Headphones, Settings, Store, Wrench } from "lucide-react";

const CLIENT_TYPES = [
  {
    icon: Headphones,
    title: "Sound Engineers",
    desc: "Live sound professionals and studio engineers who specify equipment for critical listening environments.",
    stat: "200+",
    statLabel: "Engineers Trust Us",
  },
  {
    icon: Settings,
    title: "System Integrators",
    desc: "AV integration firms designing complete sound systems for venues, auditoriums, and commercial installations.",
    stat: "150+",
    statLabel: "Integration Partners",
  },
  {
    icon: Store,
    title: "Dealers & Distributors",
    desc: "Professional audio dealers seeking reliable, specification-verified components with consistent supply.",
    stat: "40+",
    statLabel: "Countries Served",
  },
  {
    icon: Wrench,
    title: "Cabinet Builders",
    desc: "Professional speaker manufacturers requiring OEM-grade drivers with detailed T/S parameters.",
    stat: "500+",
    statLabel: "Cabinet Projects",
  },
];

const ClientTypesSection = ({ container, fadeUp, sectionFade }) => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">02 - Who We Serve</span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
          <h2 className="text-4xl lg:text-5xl font-serif font-light">
            Built for <span className="italic">professionals.</span>
          </h2>
          <p className="text-gray-400 max-w-md text-lg">
            We support technically informed buyers who understand specifications
            and demand performance.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {CLIENT_TYPES.map((client) => (
          <motion.div
            key={client.title}
            variants={fadeUp}
            className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-900/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <client.icon size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-serif mb-3 text-white">{client.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
              {client.desc}
            </p>
            <div className="pt-4 border-t border-white/5 group-hover:border-blue-500/20 transition-colors">
              <p className="text-2xl font-bold text-white mb-1">{client.stat}</p>
              <p className="text-[10px] uppercase tracking-widest text-blue-300">{client.statLabel}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientTypesSection;
