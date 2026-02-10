import React from 'react';
import { Speaker, Layers, Settings, Disc, ArrowRight } from 'lucide-react';
import Speakers from '../../assets/Images/1.jpg';

const About = () => {
  const features = [
    { title: "Driver Manufacturing", icon: Speaker, desc: "10” to 18” passive speaker drivers with high power handling." },
    { title: "System Components", icon: Layers, desc: "Precision crossovers, network boards, and essential accessories." },
    { title: "Cabinet Solutions", icon: Disc, desc: "Professionally designed bass and top cabinets optimized for events." },
    { title: "Tech Focused", icon: Settings, desc: "Specification-driven approach for engineers and integrators." },
  ];

  // Defined single background color for consistency between Section and SVGs
  const bgColor = '#0f0f0f';

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
          <path 
           d="M0,120 L1200,120 L1200,0 C1000,80 400,150 0,0 Z" 
            fill={bgColor}
          />
        </svg>
      </div>

      {/* --- Main Section Content --- */}
      <section
        id="about"
        className="w-full min-h-screen flex flex-col lg:flex-row relative z-10"
        style={{ backgroundColor: bgColor }}
      >

        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-5/12 flex items-center justify-center p-1 lg:p-1 relative">
          
          {/* Decorative Border */}
          <div className="absolute inset-8 lg:inset-16 border border-white/10 hidden sm:block pointer-events-none" />

          {/* BIGGER IMAGE */}
          <div className="relative z-10 w-full max-w-4xl h-[420px] lg:h-[790px] shadow-2xl overflow-hidden bg-black">
            <img
              src={Speakers}
              alt="Professional Audio Speaker"
              className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-7/12 flex items-center px-8 py-16 lg:px-20 lg:py-20">
          <div className="max-w-2xl">

            {/* TITLE */}
            <h2 className="text-5xl lg:text-6xl tracking-widest mb-10 text-white">
              <span className="font-light">ABOUT</span>{' '}
              <span className="font-bold text-blue-400">US</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-gray-400 mb-8 font-light">
              We are a professional audio components brand engaged in the manufacturing
              and supply of passive speaker drivers, crossovers, diaphragms, and
              speaker cabinets for the sound reinforcement industry.
            </p>

            <p className="text-sm leading-relaxed text-gray-500 mb-12 text-justify">
              At Don Transducers, we combine precision engineering with high-quality
              materials to deliver sound solutions that perform consistently in
              demanding environments. Our specification-driven design philosophy
              supports engineers and system integrators across the professional
              sound landscape.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 border-t border-gray-800 pt-8">
              {features.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon size={18} strokeWidth={1.5} className='text-blue-400'/>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-7 border-l border-gray-800">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              className="group text-white flex items-center gap-4 px-8 py-3 border text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 border-blue-400 hover:bg-blue-400/10"
            >
              Learn More
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

          </div>
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
          <path 
             d="M0,0 L1200,0 L1200,120 C1000,40 400,0 0,120 Z" 
            fill={bgColor}
          />
        </svg>
      </div>

    </div>
  );
};

export default About;