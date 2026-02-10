import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Scan, Activity, Radio } from 'lucide-react';

// Import Assets
import v1 from "../../assets/Videos/video1.mp4";
import v2 from "../../assets/Videos/video2.mp4";
import v3 from "../../assets/Videos/video3.mp4";

const HeroTechnicalGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 0,
      video: v1,
      code: "SYS_01",
      title: "DRIVER MECHANICS",
      spec: "NdFeB Magnet Topology",
      desc: "High-excursion architecture designed for maximum displacement without mechanical noise.",
    },
    {
      id: 1,
      video: v2,
      code: "SYS_02",
      title: "SIGNAL CHAIN",
      spec: "Analog Crossover Network",
      desc: "Zero-latency signal processing ensuring phase coherence across the entire frequency spectrum.",
    },
    {
      id: 2,
      video: v3,
      code: "SYS_03",
      title: "ARRAY DEPLOYMENT",
      spec: "120° Horizontal Dispersion",
      desc: "Scalable acoustic solutions for venues requiring precise directional control.",
    }
  ];

  // Auto-advance logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // --- ANIMATIONS ---
  // A "Mask" reveal that looks like text is being printed/scanned
  const scanReveal = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    visible: { 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white font-sans overflow-hidden">

      {/* =======================================
          1. BACKGROUND VIDEO
      ======================================= */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <video
            src={slides[currentIndex].video}
            autoPlay loop muted playsInline
            className="w-full h-full object-cover opacity-60 grayscale-[30%] contrast-125"
          />
          {/* Technical Grid Overlay (The "Viewfinder" look) */}
     
        </motion.div>
      </AnimatePresence>

     

      {/* =======================================
          3. CONTENT CONTENT
      ======================================= */}
      <div className="absolute inset-0 z-20 container mx-auto px-8 md:px-16 py-12 flex flex-col justify-between">
        
        {/* --- TOP HEADER --- */}
        <div className="flex justify-between items-start">
            

        </div>

        {/* --- BOTTOM CONTENT (The Grid Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            {/* Left Column: Title & Desc */}
            <div className="md:col-span-7 lg:col-span-6">
                
                {/* ID Tag */}
                <motion.div 
                    key={`code-${currentIndex}`}
                    variants={scanReveal}
                    initial="hidden"
                    animate="visible"
                    className="inline-block bg-white text-black text-xs font-bold font-mono px-2 py-1 mb-4"
                >
                    {slides[currentIndex].code}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    key={`title-${currentIndex}`}
                    variants={scanReveal}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6 uppercase"
                >
                    {slides[currentIndex].title}
                </motion.h1>

                {/* Description Box */}
                <motion.div
                    key={`desc-${currentIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border-l border-blue-500 pl-6 bg-black/40 backdrop-blur-sm py-2"
                >
                    <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                        {slides[currentIndex].desc}
                    </p>
                </motion.div>
            </div>

            {/* Right Column: Technical Spec & Controls */}
            <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start md:items-end justify-end h-full">
                
                {/* Tech Spec Box */}
                <motion.div
                    key={`spec-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8 text-left md:text-right"
                >
                    <span className="block text-xs font-mono text-blue-400 uppercase mb-1">Active Specification</span>
                    <span className="text-2xl font-bold border-b border-white/20 pb-2 inline-block">
                        {slides[currentIndex].spec}
                    </span>
                </motion.div>

                {/* Navigation Squares */}
                <div className="flex gap-1">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-12 h-12 border flex items-center justify-center font-mono text-sm transition-all
                                ${index === currentIndex 
                                    ? 'bg-white text-black border-white' 
                                    : 'bg-transparent text-white/50 border-white/20 hover:border-white hover:text-white'
                                }
                            `}
                        >
                            0{index + 1}
                        </button>
                    ))}
                </div>

            </div>

        </div>

      </div>

    </div>
  );
};

export default HeroTechnicalGrid;