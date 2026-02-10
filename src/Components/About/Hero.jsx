import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/9.png";

const Hero = ({ container, fadeUp }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-blue-600/20 blur-[120px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">
                About Don Transducers
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl lg:text-8xl font-serif font-light leading-[1.05]"
            >
              Precision in <br />
              <span className="italic text-blue-300">every pulse.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 text-lg lg:text-xl mt-8 max-w-xl leading-relaxed"
            >
              Don Transducers creates the invisible force that moves the crowd.
              We engineer passive drivers, crossovers, and cabinets defined by
              durability and pure sonic specification.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <span className="block text-3xl font-bold font-serif text-white">10-18"</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Driver Range</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-serif text-white">2000W</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Max Power</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-serif text-white">15+</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Years Active</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-square rounded-full border border-white/10 p-8 animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />
              <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-90" />
              <div className="w-full h-full rounded-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img src={img1} alt="Don Transducers Driver" className="w-full h-full object-cover scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
