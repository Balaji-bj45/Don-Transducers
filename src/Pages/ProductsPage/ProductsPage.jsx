import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  SignalHigh,
  Settings,
  Ruler,
  Sparkles,
  Check,
  AudioLines,
  PackageOpen,
  Wrench,
  Waves,
} from "lucide-react";
import img1 from "../../assets/Images/1.jpg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/4.jpeg";
import img5 from "../../assets/Images/5.jpeg";
import img6 from "../../assets/Images/6.png";

const SERIES = [
  {
    name: "Aegis LF",
    tag: "Low Frequency Drivers",
    range: '12" – 18"',
    power: "800W – 2000W",
    bl: "High BL Motor",
    image: img1,
    highlight: "Extreme excursion, low distortion",
    points: ["4-layer voice coils", "Die-cast aluminum frame", "Tour-grade suspension"],
  },
  {
    name: "Vector MF",
    tag: "Midrange Drivers",
    range: '6.5" – 12"',
    power: "250W – 800W",
    bl: "Fast transient response",
    image: img2,
    highlight: "Vocal clarity for long throw",
    points: ["Kevlar-reinforced cones", "Low inductance coils", "Phase plug ready"],
  },
  {
    name: "Ion HF",
    tag: "Compression Drivers",
    range: '1" – 2"',
    power: "80W – 200W",
    bl: "Titanium diaphragm",
    image: img3,
    highlight: "Airy detail with controlled dispersion",
    points: ["Neodymium motor", "1.4\" & 2\" exits", "Waveguide matched"],
  },
];

const COMPONENTS = [
  {
    title: "Passive Crossovers",
    desc: "Phase-aligned networks with film caps and air-core inductors.",
    icon: AudioLines,
  },
  {
    title: "Cabinet Hardware",
    desc: "Handles, grills, corners, and tour latches tested for 10k cycles.",
    icon: PackageOpen,
  },
  {
    title: "Service Kits",
    desc: "Reconing, diaphragms, dust caps, and gasket sets.",
    icon: Wrench,
  },
  {
    title: "Waveguides",
    desc: "Matched directivity horns for even coverage patterns.",
    icon: Waves,
  },
];

const PRODUCTS = [
  {
    name: "DT-18X",
    type: "18\" LF Driver",
    spl: "98 dB",
    aes: "1500W",
    impedance: "8Ω",
    image: img4,
  },
  {
    name: "DT-12M",
    type: "12\" Mid Driver",
    spl: "100 dB",
    aes: "700W",
    impedance: "8Ω",
    image: img5,
  },
  {
    name: "DT-2N",
    type: "2\" Compression",
    spl: "112 dB",
    aes: "160W",
    impedance: "16Ω",
    image: img6,
  },
];

const ProductsPage = () => {
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-blue-700/30 blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
          <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[140px] animate-[float_22s_ease-in-out_infinite]" />
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase mb-6">
                Products Catalog
              </p>
              <h1 className="text-5xl lg:text-7xl font-serif font-light leading-[1.05]">
                Built for engineers who
                <span className="italic text-blue-300"> demand</span> the data.
              </h1>
              <p className="text-gray-300 text-lg mt-6 max-w-xl">
                Drivers, crossovers, and cabinets engineered for high-SPL
                systems with measured performance, tight tolerances, and
                production repeatability.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#series"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  Browse Series <ArrowUpRight size={16} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/40 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  Request Datasheets
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Driver Range", value: '6.5" – 18"' },
                  { label: "Max Power", value: "2000W RMS" },
                  { label: "Units Tested", value: "100%" },
                  { label: "Lead Time", value: "3–6 Weeks" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l border-white/20 pl-4">
                    <p className="text-2xl font-serif">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-6 animate-[rise_1.2s_ease-out]">
                <img
                  src={img6}
                  alt="Don Transducers driver"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-black px-6 py-4 rounded-2xl shadow-xl">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    Highlight
                  </p>
                  <p className="text-lg font-serif">
                    Measured T/S parameters on every batch.
                  </p>
                </div>
              </div>
              <div className="absolute -top-10 right-6 bg-black/70 border border-white/10 px-4 py-3 rounded-xl text-xs uppercase tracking-widest text-blue-300">
                Pro Audio Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERIES */}
      <section id="series" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-blue-700 font-mono text-sm tracking-wider">
              01 — DRIVER SERIES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
              The core driver line.
            </h2>
          </div>
          <p className="text-gray-600 max-w-lg">
            Each series is tuned for a specific role in professional systems:
            sub-bass, mid detail, and high frequency articulation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERIES.map((item) => (
            <div
              key={item.name}
              className="group border border-gray-200 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {item.tag}
                  </p>
                  <h3 className="text-2xl font-serif">{item.name}</h3>
                  <p className="text-sm text-white/80 mt-1">{item.highlight}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="uppercase tracking-wider text-xs text-gray-400">
                      Range
                    </p>
                    <p className="font-medium">{item.range}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-wider text-xs text-gray-400">
                      Power
                    </p>
                    <p className="font-medium">{item.power}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-wider text-xs text-gray-400">
                      Motor
                    </p>
                    <p className="font-medium">{item.bl}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check size={14} className="text-blue-700" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-700 hover:text-black transition-colors"
                >
                  Request Specs <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENTS STRIP */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-5">
              <p className="text-blue-700 font-mono text-sm tracking-wider">
                02 — SYSTEM COMPONENTS
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
                Everything behind the grille.
              </h2>
            </div>
            <div className="lg:col-span-7 text-gray-600 text-lg">
              Build complete systems with crossovers, hardware, and service kits
              matched to the driver series for predictable performance.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPONENTS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-blue-700 font-mono text-sm tracking-wider">
              03 — FEATURED BUILDS
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
              Proven drivers in the field.
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b-2 border-black hover:text-blue-700 hover:border-blue-700 transition-colors"
          >
            Ask for availability <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {product.type}
                </p>
                <h3 className="text-2xl font-serif mt-2">{product.name}</h3>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs uppercase tracking-wider text-gray-500">
                  <div>
                    <p className="text-black font-semibold">{product.spl}</p>
                    SPL
                  </div>
                  <div>
                    <p className="text-black font-semibold">{product.aes}</p>
                    AES
                  </div>
                  <div>
                    <p className="text-black font-semibold">{product.impedance}</p>
                    Impedance
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-blue-400 font-mono text-sm tracking-wider">
                04 — SPECIFICATION STANDARD
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
                Consistency by design.
              </h2>
              <p className="text-gray-400 mt-6 text-lg">
                Every production batch is tested for T/S parameters, impedance
                curves, and SPL variance. Specs are published with tolerance
                bands, not marketing ranges.
              </p>
              <div className="mt-10 space-y-4 text-sm text-gray-300">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Verified QC",
                    desc: "12-point QC and burn-in before packing.",
                  },
                  {
                    icon: SignalHigh,
                    title: "Measured SPL",
                    desc: "Anechoic and near-field baselines.",
                  },
                  {
                    icon: Settings,
                    title: "OEM Tuning",
                    desc: "Custom coils, cones, and spider packs.",
                  },
                  {
                    icon: Ruler,
                    title: "Tight Tolerances",
                    desc: "±0.3% impedance variance target.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                      <item.icon size={18} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-serif">Spec Summary</h3>
                  <span className="text-xs uppercase tracking-widest text-blue-300">
                    sample sheet
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  {[
                    ["Resonance (Fs)", "32 Hz"],
                    ["Qts", "0.31"],
                    ["Sensitivity", "98 dB"],
                    ["Voice Coil", "4\" copper"],
                    ["Max Excursion", "12 mm"],
                    ["Magnet Type", "Neodymium"],
                    ["Impedance", "8Ω nominal"],
                    ["Power Handling", "1500W AES"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-gray-400">{label}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
                    Download Datasheet
                  </button>
                  <button className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                    Talk to Engineering
                  </button>
                </div>
              </div>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  { label: "Batches Tested", value: "Every run" },
                  { label: "Spec Revisions", value: "Traceable" },
                  { label: "Support", value: "Engineering-led" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/10 rounded-2xl p-6 text-center bg-white/5"
                  >
                    <p className="text-2xl font-serif text-white">{item.value}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="bg-gradient-to-r from-blue-700 via-black to-emerald-600 text-white rounded-3xl p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4),_transparent_50%)]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Ready to specify
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
                Tell us your cabinet goals and we will match the driver.
              </h2>
              <p className="text-white/80 mt-6 max-w-xl">
                Share target SPL, box volume, and tuning goals. We will respond
                with optimized drivers, recommended crossovers, and data sheets.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                Start a Project <Sparkles size={16} />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
