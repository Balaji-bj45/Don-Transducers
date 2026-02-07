import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Shield,
  Zap,
  Check,
  Headphones,
  Settings,
  Store,
  Wrench,
  Factory,
  Speaker,
} from "lucide-react";
import img1 from "../../assets/Images/9.png";

const AboutPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  // Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.8, ease },
    },
  };

  const sectionFade = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.8, ease },
    },
  };

  // Data
  const CLIENT_TYPES = [
    {
      icon: Headphones,
      title: "Sound Engineers",
      desc: "Live sound professionals and studio engineers who specify equipment for critical listening environments.",
      stat: "200+",
      statLabel: "Engineers Trust Us",
    },
    {
      icon: Settings,
      title: "System Integrators",
      desc: "AV integration firms designing complete sound systems for venues, auditoriums, and commercial installations.",
      stat: "150+",
      statLabel: "Integration Partners",
    },
    {
      icon: Store,
      title: "Dealers & Distributors",
      desc: "Professional audio dealers seeking reliable, specification-verified components with consistent supply.",
      stat: "40+",
      statLabel: "Countries Served",
    },
    {
      icon: Wrench,
      title: "Cabinet Builders",
      desc: "Professional speaker manufacturers requiring OEM-grade drivers with detailed T/S parameters.",
      stat: "500+",
      statLabel: "Cabinet Projects",
    },
  ];

  const BUSINESS_FOCUS = [
    {
      num: "01",
      title: "Passive Driver",
      desc: "Our core competency. High-power passive drivers from 10\" to 18\", featuring precision-wound voice coils and optimized motor structures.",
      specs: ["10\" – 18\" range", "Up to 2000W RMS", "Neodymium & Ferrite"],
    },
    {
      num: "02",
      title: "System Components",
      desc: "Complete ecosystem components: precision-tuned passive crossover networks, high-frequency horns, and waveguides.",
      specs: ["Passive crossovers", "HF horns & waveguides", "Terminal assemblies"],
    },
    {
      num: "03",
      title: "Cabinet Solutions",
      desc: "Complete enclosure solutions for subwoofer and full-range applications. Finished cabinets and flat-pack kits in Baltic birch.",
      specs: ["Baltic birch construction", "Optimized porting", "Tour-grade hardware"],
    },
  ];

  const PHILOSOPHY_PILLARS = [
    {
      icon: Target,
      title: "Product-Centric",
      desc: "We don't chase trends. Every design decision starts with: does this improve acoustic performance?",
    },
    {
      icon: Shield,
      title: "Spec-Driven",
      desc: "Our engineering is anchored in measurable specifications. We publish complete data because our products withstand scrutiny.",
    },
    {
      icon: Zap,
      title: "Performance-First",
      desc: "High power. Durability. Consistency. These aren't marketing points—they're engineering requirements.",
    },
  ];

  return (
    <div className="bg-black text-white selection:bg-blue-600 selection:text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
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
              {/* Abstract decorative element similar to Products/Events */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          OUR STORY
      ═══════════════════════════════════════════════════════════════════ */}
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
              <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">01 — Our Story</span>
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

      {/* ═══════════════════════════════════════════════════════════════════
          WHO WE SERVE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">02 — Who We Serve</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-light">
              Built for <span className="italic">professionals.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg">
              We support technically informed buyers who understand specifications
              and demand performance.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CLIENT_TYPES.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-900/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <client.icon size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-white">{client.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                {client.desc}
              </p>
              <div className="pt-4 border-t border-white/5 group-hover:border-blue-500/20 transition-colors">
                <p className="text-2xl font-bold text-white mb-1">{client.stat}</p>
                <p className="text-[10px] uppercase tracking-widest text-blue-300">{client.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT WE DO & PHILOSOPHY
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-white/5 to-black py-24 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          {/* BUSINESS GRID */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-12 gap-16"
          >
            <div className="lg:col-span-4">
              <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">03 — What We Do</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 mb-6">
                Business <br /><span className="italic">Focus.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We specialize in manufacturing precision audio components for professional
                sound reinforcement.
              </p>
              <div className="mt-10">
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                  View Product Catalog <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {BUSINESS_FOCUS.map((item, index) => (
                <div key={index} className="group bg-black border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6">
                    <span className="text-3xl font-bold text-white/20 group-hover:text-blue-500/50 transition-colors">{item.num}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-blue-200 border border-white/5">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PHILOSOPHY */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-32"
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-300 font-mono text-sm tracking-wider uppercase">04 — Philosophy</span>
              <h2 className="text-4xl lg:text-6xl font-serif font-light mt-4 mb-6">
                Specification-driven.<br />
                <span className="italic text-gray-500">Performance-verified.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PHILOSOPHY_PILLARS.map((item, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-900/10 text-blue-400 mb-6">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-black">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)]" />

          <div className="relative p-12 lg:p-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-serif font-light text-white mb-6">
              Ready to specify <span className="italic text-blue-300">with confidence?</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Get complete specifications, T/S parameters, and application guidance
              from our engineering team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;