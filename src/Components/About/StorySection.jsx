import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/9.png";

const StorySection = ({ sectionFade }) => {
  return (
    <section className="bg-white/5 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">01 - Our Story</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 mb-8">
              Built from the <br />
              <span className="italic text-gray-400">ground up.</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in 2008 in the industrial heartland, Don Transducers began as a simple
                workshop with a singular obsession: <span className="text-white font-medium">perfect sound reproduction.</span>
              </p>
              <p>
                What started as custom builds for local venues evolved into a reputation that
                spread across continents. Today, our transducers power festivals, concert halls,
                and installations in over 40 countries.
              </p>
              <p>
                We never chased trends. We chased physics. Every driver we produce undergoes
                rigorous testing protocols that exceed industry standards by a factor of three.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl rounded-3xl" />
            <div className="relative bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-2">
              <img
                src={img1}
                alt="Workshop"
                className="w-full h-[400px] object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur border border-white/10 p-6 max-w-[280px] rounded-lg">
                <p className="text-blue-300 text-sm font-mono uppercase tracking-wider mb-2">Since 2008</p>
                <p className="text-white text-lg font-serif italic">Engineering sound that moves people.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
