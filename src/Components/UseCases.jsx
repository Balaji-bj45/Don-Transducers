import React from "react";
import { motion } from "framer-motion";
import {
  Speaker,
  Disc,
  Zap,
  Mic2,
  ArrowRight,
  Cpu,
  Layers,
} from "lucide-react";
import img from "../assets/Images/8.png";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function UseCases() {
  return (
    <section className="relative w-full py-34 bg-white overflow-hidden text-black font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-40 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4"
          >
            Don Transducers Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Every Stage
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From raw driver components to finished cabinet solutions. We supply
            sound engineers, system integrators, and venue owners with
            specification-driven audio precision.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* Card 1: Main Feature (Large) - Touring Sound */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="absolute inset-0">
              <img
                src={img}
                alt="Concert Crowd"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
             
              <h3 className="text-2xl font-bold mb-2">High-SPL Touring Rigs</h3>
              <p className="text-gray-200 text-sm max-w-sm mb-4">
                Utilizing our 18X2000B subwoofers and high-compression drivers
                to deliver earth-shaking bass for large-scale events.
              </p>
              <div className="flex gap-2 text-xs font-semibold">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  2000W RMS
                </span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  4" Voice Coil
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Custom Building (Tall) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-1 row-span-2 bg-white rounded-3xl p-6 border border-blue-50 shadow-lg flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
          >
            {/* ✅ Added Card 3 style circle */}
            <div className="absolute top-0 right-0 w-46 h-46 bg-blue-700 opacity-[0.04] rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="p-3 bg-blue-50 w-fit rounded-lg text-blue-700 mb-6">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-2">
                System Integrators & DIY
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                For cabinet builders demanding precise specs. We provide raw
                drivers, 3-way crossovers (750+500+500), and diagrams.
              </p>
            </div>

            <div className="mt-8 space-y-3 relative z-10">
              <div className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-blue-700 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Aluminium Frames</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-blue-700 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Neodymium Options</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-blue-700 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Replacement Kits</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Installation (Square) */}
          {/* Card 3: Installation (Square) */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />

            <Mic2 className="w-8 h-8 mb-4 text-blue-200" />
            <h3 className="text-lg font-bold mb-1">Fixed Installations</h3>
            <p className="text-blue-100 text-xs">
              Stadiums, Houses of Worship, and Auditoriums.
            </p>
          </motion.div>

          {/* Card 4: Product Highlight (Square) */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center relative overflow-hidden group"
          >
            {/* ✅ Added same circle design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 opacity-[0.04] rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />

            <Disc className="w-8 h-8 mb-4 text-blue-700" />
            <h3 className="text-lg font-bold mb-1">Crossover Logic</h3>
            <p className="text-gray-500 text-xs">
              Network boards (450, 518) designed for seamless frequency
              division.
            </p>
          </motion.div>

          {/* Card 5: Wide Bottom Card - Roadmap/Future */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-4 bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-blue-700">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Active Architecture
                </h3>
                <p className="text-gray-600 text-sm mt-1 max-w-lg">
                  Expanding beyond passive systems. Our roadmap includes active
                  speaker integration and the upcoming{" "}
                  <span className="font-semibold text-blue-700">
                    234XLS Active Crossover
                  </span>
                  .
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-200/50">
              View Specifications <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default UseCases;
