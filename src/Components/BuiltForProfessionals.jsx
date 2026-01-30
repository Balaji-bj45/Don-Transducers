import React from "react";
import { motion } from "framer-motion";
import { Mic2, Settings, Users, Shield, ArrowRight } from "lucide-react";

const BuiltForProfessionals = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cards = [
    { title: "Sound Engineers", icon: Mic2, text: "Demanding sonic transparency." },
    { title: "System Integrators", icon: Settings, text: "Seamless component fitting." },
    { title: "Audio Dealers", icon: Users, text: "Consistent supply chain." },
    { title: "Dependability", icon: Shield, text: "Built for the long haul." },
  ];

  return (
    <section className="w-full py-14 bg-white text-zinc-900 flex items-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* soft grid */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(2, 6, 23, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 6, 23, 0.06) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />
        {/* blue glow */}
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-blue-500/15 blur-[100px] rounded-full" />
        <div className="absolute -bottom-28 -left-28 w-[520px] h-[520px] bg-sky-400/10 blur-[110px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-24 py-10 flex flex-col lg:flex-row gap-10 items-center relative z-10">
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-blue-600/70"></span>
            <span className="text-blue-700 font-bold tracking-[0.2em] text-xs uppercase">
              Target Audience
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold leading-[0.95] mb-8"
          >
            BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500">
              PROS.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-600 leading-relaxed max-w-lg mb-10 border-l-2 border-zinc-200 pl-6"
          >
            Designed for sound engineers, system integrators, and audio dealers who demand
            transparent specifications, consistent performance, and dependable components.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-8 py-4 rounded-md text-sm font-extrabold tracking-widest uppercase
              border border-blue-600/25 bg-white/70 backdrop-blur-md
              text-blue-700 transition-all hover:border-blue-600/50 hover:bg-blue-50"
          >
            Start Integration
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* RIGHT: INTERACTIVE CARDS */}
        <motion.div
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0px 18px 45px -20px rgba(37, 99, 235, 0.25)",
              }}
              className="group p-8 rounded-xl cursor-default
                bg-white/80 backdrop-blur-xl
                border border-zinc-200/70 hover:border-blue-500/40
                transition-all duration-300"
            >
              <div
                className="mb-6 p-3 w-fit rounded-full
                  bg-gradient-to-b from-white to-zinc-50
                  border border-zinc-200 group-hover:border-blue-500/30
                  transition-colors"
              >
                <card.icon
                  className="text-zinc-500 group-hover:text-blue-700 transition-colors"
                  size={24}
                />
              </div>

              <h3 className="text-xl font-extrabold mb-2 text-zinc-900 group-hover:text-blue-900 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-zinc-600 group-hover:text-zinc-700 transition-colors">
                {card.text}
              </p>

              {/* bottom accent line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-sky-400 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForProfessionals;
