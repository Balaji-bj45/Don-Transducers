import React from 'react';
import { 
  ArrowRight, Waves, Disc, Mic2, Hexagon, Target, Shield, Zap,
  ArrowUpRight, Check, Users, Factory, Award, ChevronRight,
  Wrench, Speaker, Settings, Box, Cpu, Volume2, Radio, Headphones,
  Building2, UserCheck, Truck, Store
} from 'lucide-react';
import img1 from '../../assets/Images/9.png';
import AboutPageHero from '../../Components/AboutComponents/Hero.jsx';
import OurStory from '../../Components/AboutComponents/OurStory.jsx';
// Images: Open source (Unsplash)
const IMAGES = {
  workshop: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80",
  precision: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
  testing: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
  factory: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&auto=format&fit=crop&q=80",
  speaker: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
  engineer: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop&q=80",
  concert: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80",
  studio: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
};

const AboutPage = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - DARK MODE
      ═══════════════════════════════════════════════════════════════════ */}
     <AboutPageHero />

      {/* ═══════════════════════════════════════════════════════════════════
          OUR STORY SECTION - LIGHT MODE
      ═══════════════════════════════════════════════════════════════════ */}
    <OurStory />

      {/* ═══════════════════════════════════════════════════════════════════
          WHO WE SERVE SECTION - LIGHT MODE (NEW)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="text-blue-700 font-mono text-sm tracking-wider">02 — WHO WE SERVE</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 text-black">
                Built for <span className="italic">professionals.</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md lg:text-right">
              We support technically informed buyers who understand specifications 
              and demand performance without compromise.
            </p>
          </div>

          {/* Client Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
            
            {[
              {
                icon: Headphones,
                title: "Sound Engineers",
                desc: "Live sound professionals and studio engineers who specify equipment for critical listening environments and high-SPL applications.",
                stat: "200+",
                statLabel: "Engineers Trust Us"
              },
              {
                icon: Settings,
                title: "System Integrators",
                desc: "AV integration firms designing complete sound systems for venues, houses of worship, auditoriums, and commercial installations.",
                stat: "150+",
                statLabel: "Integration Partners"
              },
              {
                icon: Store,
                title: "Dealers & Distributors",
                desc: "Professional audio dealers seeking reliable, specification-verified components backed by consistent quality and supply.",
                stat: "40+",
                statLabel: "Countries Served"
              },
              {
                icon: Wrench,
                title: "Cabinet Builders",
                desc: "Professional speaker cabinet manufacturers and custom enclosure builders requiring OEM-grade drivers with detailed T/S parameters.",
                stat: "500+",
                statLabel: "Cabinet Projects"
              }
            ].map((client, index) => (
              <div 
                key={index} 
                className={`p-8 bg-white group hover:bg-blue-700 transition-all duration-300 ${
                  index !== 3 ? 'border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-black' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-6 group-hover:border-white group-hover:bg-white transition-colors">
                  <client.icon size={24} className="text-black" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-white transition-colors uppercase tracking-wide">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-blue-100 transition-colors">
                  {client.desc}
                </p>
                
                {/* Stat */}
                <div className="pt-4 border-t border-gray-200 group-hover:border-blue-500 transition-colors">
                  <p className="text-2xl font-bold text-blue-700 group-hover:text-white transition-colors">{client.stat}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 group-hover:text-blue-200 transition-colors">
                    {client.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-gray-300">
            <p className="text-lg text-black max-w-xl">
              <span className="font-bold">Not for consumers.</span> Our products are engineered for 
              professionals who read datasheets, understand Thiele-Small parameters, and specify 
              components based on measured performance.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
            >
              Become a Partner <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT WE DO SECTION - LIGHT MODE (NEW)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <span className="text-blue-700 font-mono text-sm tracking-wider">03 — WHAT WE DO</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 text-black leading-tight">
                Business<br/>
                <span className="italic">Focus.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-gray-600 text-lg max-w-xl">
                We specialize in manufacturing precision audio components for professional 
                sound reinforcement. Every product line addresses specific needs in the 
                pro-audio signal chain.
              </p>
            </div>
          </div>

          {/* Business Focus Grid - Horizontal Layout */}
          <div className="space-y-0">
            
            {[
              {
                num: "01",
                title: "Passive Speaker Driver Manufacturing",
                desc: "Our core competency. We design and manufacture high-power passive drivers from 10\" to 18\", including woofers, mid-range drivers, and compression drivers. Each unit features precision-wound voice coils, optimized motor structures, and robust suspension systems engineered for continuous high-SPL operation.",
                specs: ["10\" – 18\" range", "Up to 2000W RMS", "Neodymium & Ferrite", "Custom voice coils"],
                image: IMAGES.speaker
              },
              {
                num: "02",
                title: "Speaker System Components",
                desc: "Beyond drivers, we supply the complete ecosystem of components required for professional speaker systems. This includes precision-tuned passive crossover networks, high-frequency horns, waveguides, and terminal plates—all designed to integrate seamlessly with our driver lineup.",
                specs: ["Passive crossovers", "HF horns & waveguides", "Terminal assemblies", "Damping materials"],
                image: IMAGES.precision
              },
              {
                num: "03",
                title: "Professional Audio Accessories",
                desc: "Supporting hardware that meets the same quality standards as our primary products. Speakon-compatible connectors, heavy-gauge internal wiring, acoustic foam, and mounting hardware—everything needed for professional cabinet assembly.",
                specs: ["Connectors & wiring", "Acoustic treatment", "Mounting hardware", "Grille assemblies"],
                image: IMAGES.factory
              },
              {
                num: "04",
                title: "Cabinet Solutions for Bass & Top Systems",
                desc: "Complete enclosure solutions for subwoofer and full-range applications. We offer both finished cabinets and flat-pack kits in Baltic birch plywood, featuring computer-optimized port designs, internal bracing, and tour-grade hardware. Available as standard designs or custom OEM configurations.",
                specs: ["Baltic birch construction", "Optimized porting", "Tour-grade hardware", "Custom OEM options"],
                image: IMAGES.workshop
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-12 gap-8 py-12 border-t-2 border-black ${
                  index === 3 ? 'border-b-2' : ''
                } group hover:bg-gray-50 transition-colors -mx-6 px-6`}
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-4xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors">
                    {item.num}
                  </span>
                </div>
                
                {/* Image */}
                <div className="lg:col-span-3 aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 uppercase tracking-wide group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
                
                {/* Specs */}
                <div className="lg:col-span-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4">Includes</p>
                  <ul className="space-y-3">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-700 flex-shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 bg-black text-white">
            {[
              { value: "4", label: "Product Categories" },
              { value: "50+", label: "SKUs Available" },
              { value: "100%", label: "Made In-House" },
              { value: "ISO", label: "9001 Certified" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`p-8 text-center ${index !== 3 ? 'border-r border-gray-800' : ''}`}
              >
                <p className="text-3xl lg:text-4xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRODUCT PHILOSOPHY SECTION - DARK MODE (NEW)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-black text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-mono text-sm tracking-wider">04 — PRODUCT PHILOSOPHY</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-light mt-4 mb-6">
              Specification-driven.<br/>
              <span className="italic text-blue-400">Performance-verified.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Every component we manufacture is born from a simple premise: measurable 
              performance matters more than marketing claims.
            </p>
          </div>

          {/* Philosophy Pillars */}
          <div className="grid lg:grid-cols-3 gap-0 border border-gray-800">
            
            {[
              {
                icon: "◇",
                title: "Product-Centric Approach",
                desc: "We don't chase trends or aesthetics. Every design decision starts with the question: does this improve acoustic performance? If the answer isn't a definitive yes, it doesn't make it into production.",
                points: [
                  "Performance over aesthetics",
                  "Function dictates form",
                  "No unnecessary features"
                ]
              },
              {
                icon: "□",
                title: "Specification-Driven Design",
                desc: "Our engineering process is anchored in measurable specifications. Thiele-Small parameters, frequency response curves, power handling charts—we publish complete data because our products can withstand scrutiny.",
                points: [
                  "Published T/S parameters",
                  "Verified frequency response",
                  "Documented power handling"
                ]
              },
              {
                icon: "○",
                title: "Performance-Oriented Components",
                desc: "High power. Durability. Consistency. These aren't marketing bullet points—they're engineering requirements baked into every component. Our drivers are built to perform under continuous demanding conditions.",
                points: [
                  "High power density",
                  "Extended operational life",
                  "Batch-to-batch consistency"
                ]
              }
            ].map((pillar, index) => (
              <div 
                key={index} 
                className={`p-10 ${index !== 2 ? 'border-r border-gray-800' : ''} group hover:bg-gray-900 transition-colors`}
              >
                {/* Icon */}
                <div className="text-5xl text-gray-700 group-hover:text-blue-400 transition-colors mb-8 font-light">
                  {pillar.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4 group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {pillar.desc}
                </p>
                
                {/* Points */}
                <ul className="space-y-3">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <Check size={14} className="text-blue-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div className="mt-20 border-l-4 border-blue-400 pl-8 py-4 max-w-3xl">
            <blockquote className="text-2xl lg:text-3xl font-serif italic text-white leading-relaxed mb-4">
              "We build for engineers who read datasheets, not brochures."
            </blockquote>
            <cite className="text-sm text-gray-500 not-italic font-mono uppercase tracking-wider">
              — Don Transducers Engineering Team
            </cite>
          </div>

          {/* Philosophy in Numbers */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { value: "±0.01mm", label: "Machining Tolerance" },
              { value: "100%", label: "Units Tested" },
              { value: "48hr", label: "Burn-in Protocol" },
              { value: "3X", label: "Industry Standard" },
              { value: "0.3%", label: "Return Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CORE VALUES SECTION - LIGHT MODE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <span className="text-blue-700 font-mono text-sm tracking-wider">05 — PRINCIPLES</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 text-black">
              What we stand for.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
            
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200 group hover:bg-white transition-colors">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6 group-hover:border-blue-700 group-hover:bg-blue-700 transition-colors">
                <Target size={24} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-black">Precision Engineering</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Every component is machined to tolerances of ±0.01mm. No approximations. 
                No shortcuts. Only exactness that translates to acoustic perfection.
              </p>
            </div>

            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200 group hover:bg-white transition-colors">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6 group-hover:border-blue-700 group-hover:bg-blue-700 transition-colors">
                <Shield size={24} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-black">Uncompromised Durability</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our drivers are built for the long haul. Touring rigs, permanent installations, 
                desert festivals—they perform identically after a thousand hours.
              </p>
            </div>

            <div className="p-10 group hover:bg-white transition-colors">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6 group-hover:border-blue-700 group-hover:bg-blue-700 transition-colors">
                <Zap size={24} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-black">Pure Performance</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We optimize for one thing: sound. Not aesthetics, not trends, not profit margins. 
                The result is equipment that professionals trust implicitly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRODUCTS SECTION - LIGHT MODE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="products" className="w-full max-w-[1400px] mx-auto py-24 px-6 lg:px-12 bg-white">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div>
            <span className="text-blue-700 font-mono text-sm tracking-wider">06 — PRODUCTS</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 text-black">
              What we create.
            </h2>
          </div>
          <a href="/products" className="group flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1 hover:text-blue-700 hover:border-blue-700 transition-colors">
            View Full Catalog <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 bg-gray-100 aspect-[4/3]">
              <img 
                src={IMAGES.speaker} 
                alt="Passive Drivers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1">
                <span className="text-xs font-mono uppercase tracking-wider">10" — 18"</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2 text-black group-hover:text-blue-700 transition-colors">
              Passive Drivers
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              High-excursion woofers and compression drivers engineered for maximum SPL 
              with minimal distortion across the entire frequency spectrum.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Neodymium & Ferrite options
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Die-cast aluminum frames
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Custom voice coil designs
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 bg-gray-100 aspect-[4/3]">
              <img 
                src={IMAGES.precision} 
                alt="Crossovers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1">
                <span className="text-xs font-mono uppercase tracking-wider">2-Way / 3-Way</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2 text-black group-hover:text-blue-700 transition-colors">
              Crossover Networks
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Precision-tuned passive crossovers with phase-coherent designs that 
              ensure seamless transitions between frequency bands.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Air-core inductors
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Film capacitors
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Custom frequency points
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 bg-gray-100 aspect-[4/3]">
              <img 
                src={IMAGES.factory} 
                alt="Cabinets" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1">
                <span className="text-xs font-mono uppercase tracking-wider">Custom</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2 text-black group-hover:text-blue-700 transition-colors">
              Speaker Cabinets
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Tour-grade enclosures built from Baltic birch plywood with 
              computer-optimized port designs for maximum acoustic efficiency.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> 18mm Baltic birch
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Road-ready hardware
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={14} className="text-blue-700" /> Custom branding
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROCESS SECTION - DARK MODE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-black text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-blue-400 font-mono text-sm tracking-wider">07 — PROCESS</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 mb-8">
                From concept <br/>
                <span className="italic">to cabinet.</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Design & Simulation",
                    desc: "FEA modeling and acoustic simulation before any physical prototype is built."
                  },
                  {
                    step: "02",
                    title: "Prototype & Test",
                    desc: "Anechoic chamber measurements and real-world stress testing under extreme conditions."
                  },
                  {
                    step: "03",
                    title: "Precision Manufacturing",
                    desc: "CNC machining and hand assembly by experienced technicians with quality gates at every stage."
                  },
                  {
                    step: "04",
                    title: "Final Verification",
                    desc: "100% of units undergo individual testing. No sampling. Every driver is validated."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="text-blue-400 font-mono text-sm w-8 flex-shrink-0 pt-1">{item.step}</div>
                    <div className="border-l border-gray-700 pl-6 group-hover:border-blue-400 transition-colors">
                      <h4 className="text-lg font-serif mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={IMAGES.testing} 
                alt="Testing Process" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-serif font-bold text-blue-400">99.7%</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-blue-400">48hr</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Burn-in Test</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-blue-400">12pt</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">QC Checks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION - LIGHT MODE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-black leading-tight">
                Ready to specify<br/>
                <span className="italic">with confidence?</span>
              </h2>
              <p className="text-gray-600 text-lg mt-6 max-w-md">
                Get complete specifications, T/S parameters, and application guidance 
                from our engineering team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-blue-700 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors"
              >
                Request Specifications <ArrowRight size={16} />
              </a>
              <a 
                href="/products" 
                className="inline-flex items-center justify-center gap-3 border-2 border-black text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-gray-400 uppercase tracking-wider text-xs mb-2">Email</p>
              <a href="mailto:sales@dontransducers.com" className="text-black hover:text-blue-700 transition-colors font-medium">
                sales@dontransducers.com
              </a>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wider text-xs mb-2">Phone</p>
              <a href="tel:+911234567890" className="text-black hover:text-blue-700 transition-colors font-medium">
                +91 123 456 7890
              </a>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wider text-xs mb-2">Location</p>
              <p className="text-black font-medium">Industrial Area, Sector 12, New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default AboutPage;