import React from "react";
import { motion } from "framer-motion";

const Hero = ({ variants }) => {
  return (
    <section className="w-full pt-32 pb-6 px-6 bg-black shrink-0 mb-2">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-end">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={variants.fadeUp} className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-black/20" />
            <div className="w-3 h-3 rounded-full bg-black/20" />
            <div className="w-3 h-3 rounded-full bg-black" />
          </motion.div>

          <motion.h1
            variants={variants.fadeUp}
            className="text-7xl md:text-8xl font-medium text-white tracking-tighter leading-none mb-2"
          >
            Speak.
          </motion.h1>
          <motion.h1
            variants={variants.fadeUp}
            className="text-7xl md:text-8xl font-medium text-gray-600 tracking-tighter leading-none"
          >
            Listen.
          </motion.h1>
        </motion.div>

        <motion.div variants={variants.fadeUp} initial="hidden" animate="show" className="hidden lg:block pb-4">
          <p className="text-xl font-medium text-gray-500 max-w-sm">
            We design the hardware that makes the world sound better. Reach out to collaborate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
