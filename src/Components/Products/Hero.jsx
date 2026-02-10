import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../assets/Images/1.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[140px] animate-[float_22s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase mb-6">
              Product Catalog
            </p>
            <h1 className="text-5xl lg:text-7xl font-serif font-light leading-[1.05]">
              Structured for precision,
              <span className="italic text-blue-300"> built for scale.</span>
            </h1>
            <p className="text-gray-300 text-lg mt-6 max-w-xl">
              Explore our four core product categories. Each section provides
              full specifications, product listings, and individual detail
              pages sourced from the official catalog.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#categories"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Browse Categories <ArrowUpRight size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/40 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Request Specs
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 animate-[rise_1.2s_ease-out]">
              <img
                src={img1}
                alt="Don Transducers products"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
