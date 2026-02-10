import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import featureImg from "../../assets/Images/9.png";

const featureItems = [
  {
    title: "Live comparisons",
    desc: "Matched enclosures and controlled listening setups.",
  },
  {
    title: "Spec sheets",
    desc: "Clear parameters and tolerance expectations.",
  },
  {
    title: "OEM options",
    desc: "Coils, cones, magnet packs, and tuning guidance.",
  },
  {
    title: "Engineering Q&A",
    desc: "Bring your build goals. We will help define the path.",
  },
];

const FeaturedSection = ({ sectionFade }) => {
  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
              <img
                src={featureImg}
                alt="Driver showcase"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Featured focus
                </p>
                <p className="text-2xl font-serif mt-2">
                  Listening + measurements, side by side.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-blue-300 font-mono text-sm tracking-wider">
              02 - WHAT TO EXPECT
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
              A premium demo flow.
            </h2>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Our events are designed for technical buyers. We bring measured
              baselines, enclosure targets, crossover considerations, and
              real-world application context.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {featureItems.map((item) => (
                <div
                  key={item.title}
                  className="border border-white/10 bg-black/40 rounded-2xl p-6 hover:bg-black/60 transition-colors"
                >
                  <p className="text-lg font-serif">{item.title}</p>
                  <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-200 transition-colors"
              >
                Book a meeting <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
