import React from "react";
import { motion } from "framer-motion";
import { Speaker, Layers, Disc, Box, ArrowRight, ArrowUpRight } from "lucide-react";
import img2 from "../assets/Images/1.jpg";
import img3 from "../assets/Images/6.png";

const products = [
  {
    title: "Passive Speaker Drivers",
    icon: Speaker,
    desc: "High-power LF drivers built for maximum output. Available in 10”, 12”, 15” and 18” sizes with Ferrite & Neodymium options for PA and event sound systems.",
    img: img2,
  },
  {
    title: "Passive Crossovers",
    icon: Layers,
    desc: "Precision network boards designed for clean frequency separation and stable performance — including 450, 518, 750 and multi-way crossover boards.",
    img: img2,
  },
  {
    title: "Compression Diaphragms",
    icon: Disc,
    desc: "Durable replacement diaphragms engineered for consistent HF clarity. Available in 450, 518, 750 and VRX variants for professional servicing.",
    img: img3,
  },
  {
    title: "Speaker Cabinets",
    icon: Box,
    desc: "Bass & top cabinets optimized for strong low-end response and road durability — including T RDX Bass Cabinet and premium top series designs.",
    img: img3,
  },
];

const ProductsGrid = () => {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
      {/* --- HEADER --- */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-600 font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4"
        >
          What We Create
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Professional Audio Components
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          Don Transducers supplies performance-driven passive speaker components for sound reinforcement — trusted by sound
          engineers, integrators, dealers and cabinet builders.
        </motion.p>
      </div>

      {/* --- GRID LAYOUT --- */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
        {products.map((item, index) => (
          <ServiceCard key={index} item={item} index={index} isReversed={index % 2 !== 0} />
        ))}
      </div>

      {/* --- BOTTOM BUTTON --- */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white pl-5 sm:pl-8 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase flex items-center gap-2 sm:gap-4 transition-all shadow-lg shadow-blue-600/30"
      >
        Explore Products
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
          <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
        </div>
      </motion.button>
    </section>
  );
};

const ServiceCard = ({ item, index, isReversed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] flex flex-col overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 md:h-80 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* 1. TEXT CONTENT */}
      <div className="w-full md:w-1/2 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-center z-10 order-1 md:order-none">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 md:mb-8">
          {item.desc}
        </p>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-widest cursor-pointer group/btn">
          <span>View Details</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:border-blue-600 transition-all">
            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 text-gray-500 group-hover/btn:text-white" />
          </div>
        </div>
      </div>

      {/* 2. IMAGE SECTION */}
      <div className="w-full md:w-1/2 relative h-48 sm:h-56 md:h-full order-2 md:order-none">
        {/* Mobile Image */}
        <div className="block md:hidden w-full h-full">
          <motion.img
            transition={{ duration: 0.7 }}
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover px-4 pb-4 rounded-3xl"
          />
        </div>

        {/* Desktop Image */}
        <div
          className="hidden md:block w-full h-full relative"
          style={{
            WebkitMaskImage: isReversed
              ? "radial-gradient(circle at right center, transparent 40px, black 41px)"
              : "radial-gradient(circle at left center, transparent 40px, black 41px)",
            maskImage: isReversed
              ? "radial-gradient(circle at right center, transparent 40px, black 41px)"
              : "radial-gradient(circle at left center, transparent 40px, black 41px)",
          }}
        >
          <motion.img
            transition={{ duration: 0.7 }}
            src={item.img}
            alt={item.title}
            className={`w-full h-full object-cover py-5 ${isReversed ? "rounded-r-[140px]" : "rounded-l-[140px]"}`}
          />
        </div>

        {/* Floating Icon - Desktop */}
        <div
          className={`hidden md:flex absolute top-1/2 z-20 ${
            isReversed ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
          } -translate-y-1/2`}
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-lg group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300"
          >
            <item.icon className="text-gray-600 group-hover:text-blue-600 transition-colors w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Floating Icon - Mobile */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-5 z-20">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-lg group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300"
          >
            <item.icon className="text-gray-600 group-hover:text-blue-600 transition-colors w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsGrid;
