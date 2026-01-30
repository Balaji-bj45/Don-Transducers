import React from "react";
import { Ruler, Zap, ArrowUpRight } from "lucide-react";
import speaker from "../assets/Images/speaker.png";

const ProductTransparency = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 relative border-t border-zinc-200 overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(2, 6, 23, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 6, 23, 0.06) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />
        {/* glow */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-blue-500/15 blur-[110px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-sky-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-600/70" />
              <span className="text-blue-700 uppercase tracking-widest text-xs font-extrabold">
                Engineering Philosophy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl text-zinc-900 font-extrabold leading-tight mb-6">
              Product <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                Transparency
              </span>
            </h2>

            <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
              We don't hide behind marketing fluff. We provide clear, detailed technical
              specifications across all products, enabling informed system design and easy
              integration.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Predictable Real-world Performance",
                "Standardized Professional Sizes",
                "Detailed Datasheets",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-700 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="w-fit px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em]
              rounded-md border border-blue-600/25 bg-white/80 backdrop-blur
              text-blue-700 hover:bg-blue-50 hover:border-blue-600/40
              transition-all duration-300"
            >
              Download Catalog
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 lg:mt-0">
            {/* Feature Box 1: Image */}
            <div
              className="md:col-span-2 h-72 relative group overflow-hidden rounded-2xl
              bg-white/80 backdrop-blur-xl border border-zinc-200 hover:border-blue-500/30
              transition-colors duration-300"
            >
              <img
                src={speaker}
                alt="Speaker Blueprint"
                className="w-full h-full object-cover "
              />

              

              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-extrabold flex items-center gap-2">
                  System Design{" "}
                  <ArrowUpRight className="text-blue-700" size={18} />
                </h3>
                <p className="text-sm text-zinc-200 mt-1">
                  Blueprint-level clarity for integrations.
                </p>
              </div>
            </div>

            {/* Feature Box 2 */}
            <div
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-xl
              border border-zinc-200 hover:border-blue-500/30 transition-colors duration-300 group"
            >
              <Ruler
                className="text-blue-700 mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h4 className="text-zinc-900 font-extrabold text-lg mb-2">
                Precise Fitment
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Standard sizing for 10" to 18" drivers, ensuring our components fit existing and
                custom cabinets perfectly.
              </p>
            </div>

            {/* Feature Box 3 */}
            <div
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-xl
              border border-zinc-200 hover:border-blue-500/30 transition-colors duration-300 group"
            >
              <Zap
                className="text-blue-700 mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h4 className="text-zinc-900 font-extrabold text-lg mb-2">
                Power Handling
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Honest RMS ratings. When we say 2000W, we mean continuous performance, not just
                peak bursts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTransparency;
