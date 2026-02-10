import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Shield, Settings, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Volume2,
    title: "High-Power Drivers",
    description: "2000W RMS with premium Ferrite & Neodymium magnets for maximum SPL performance.",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac15600f3?q=80&w=800&auto=format&fit=crop",
    color: "#6366f1"
  },
  {
    icon: Shield,
    title: "Built for Events",
    description: "Rugged aluminum frames and heavy-duty voice coils for touring PA systems.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    color: "#ec4899"
  },
  {
    icon: Settings,
    title: "Precision Engineering",
    description: "Transparent specs and reliable frequency response for professionals.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    color: "#14b8a6"
  }
];

function OrbitalSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <div className="relative w-full">
      
      {/* --- Top Curve (Smooth Arc Up) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%] z-20">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[120px]"
        >
          {/* A smooth quadratic bezier curve */}
          <path 
             d="M0,120 L1200,120 L1200,0 C1000,80 400,150 0,0 Z" 
            fill="#0a0a0f"
          />
        </svg>
      </div>

      {/* --- Main Section --- */}
      <section className="bg-[#0a0a0f] min-h-screen overflow-hidden relative z-10">
        
        {/* Animated Background Gradient */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at 70% 50%, ${active.color}40 0%, transparent 50%)`
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24 lg:min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 w-full items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 text-sm tracking-[0.3em] uppercase"
              >
                Why Choose Us
              </motion.span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6"
                    style={{ color: active.color }}
                  >
                    {active.title}
                  </h2>
                  <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-md mb-10">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stats Row */}
              <div className="flex gap-12 mb-10">
                {[
                  { val: "2000W", label: "Power" },
                  { val: "18\"", label: "Size" },
                  { val: "5\"", label: "Coil" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-gray-600 text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button 
                className="group flex items-center gap-4 px-8 py-4 rounded-full border transition-all duration-300"
                style={{ 
                  borderColor: active.color,
                  color: active.color
                }}
              >
                <span className="font-semibold">Explore More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Right - Orbital Selector */}
            <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Center Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full rounded-full overflow-hidden"
                    style={{ 
                      boxShadow: `0 0 100px ${active.color}50`
                    }}
                  >
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] border border-dashed border-gray-700 rounded-full"
                />
              </div>

              {/* Orbital Items */}
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ x, y }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: activeIndex === index 
                          ? `0 0 30px ${feature.color}80` 
                          : '0 0 0px transparent'
                      }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index 
                          ? 'bg-white' 
                          : 'bg-white/5 backdrop-blur-sm border border-white/10'
                      }`}
                    >
                      <Icon 
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        style={{ 
                          color: activeIndex === index ? feature.color : '#6b7280'
                        }}
                      />
                    </motion.div>
                    
                    {/* Label */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === index ? 1 : 0 }}
                      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap"
                    >
                      {feature.title}
                    </motion.span>
                  </motion.button>
                );
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {features.map((feature, index) => {
                  const angle = (index * 120 - 90) * (Math.PI / 180);
                  const radius = 180;
                  const x = Math.cos(angle) * radius + 50 + '%';
                  const y = Math.sin(angle) * radius + 50 + '%';
                  
                  return (
                    <motion.line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={x}
                      y2={y}
                      stroke={activeIndex === index ? feature.color : '#333'}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: activeIndex === i ? '48px' : '12px',
                backgroundColor: activeIndex === i ? feature.color : '#333'
              }}
            />
          ))}
        </div>
      </section>

      {/* --- Bottom Curve (Smooth Arc Down) --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[120px]"
        >
          {/* We just flip the logic for the bottom */}
          <path 
           d="M0,0 L1200,0 L1200,120 C1000,40 400,0 0,120 Z" 
            fill="#0a0a0f"
          />
        </svg>
      </div>

    </div>
  );
}

export default OrbitalSelector;