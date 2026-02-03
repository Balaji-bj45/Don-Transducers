import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers, CircuitBoard, Gauge, Box } from "lucide-react";
import { productCategories } from "../../data/productsData";
import img1 from "../../assets/Images/1.jpg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/4.jpeg";

const categoryVisuals = {
  "passive-speaker-drivers": {
    image: img1,
    icon: Layers,
    tag: "Drivers",
  },
  crossovers: {
    image: img2,
    icon: CircuitBoard,
    tag: "Networks",
  },
  diaphragms: {
    image: img3,
    icon: Gauge,
    tag: "Service",
  },
  "speaker-cabinets": {
    image: img4,
    icon: Box,
    tag: "Cabinets",
  },
};

const ProductsPage = () => {
  return (
    <div className="bg-white text-black">
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
          <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[140px] animate-[float_22s_ease-in-out_infinite]" />
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

      <section id="categories" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-blue-700 font-mono text-sm tracking-wider">
              01 - CATEGORIES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
              Our full lineup.
            </h2>
          </div>
          <p className="text-gray-600 max-w-lg">
            Click any category to view its full catalog, subgroups, and detailed
            product pages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((category) => {
            const visual = categoryVisuals[category.slug];
            const Icon = visual.icon;
            return (
              <Link
                key={category.slug}
                to={`/products/${category.slug}`}
                className="group border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={visual.image}
                    alt={category.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      {visual.tag}
                    </p>
                    <h3 className="text-2xl font-serif mt-2">{category.name}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 text-sm text-gray-500 uppercase tracking-widest">
                    <span className="w-10 h-10 border border-black/10 flex items-center justify-center">
                      <Icon size={18} />
                    </span>
                    <span>Catalog Overview</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    {category.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-700 group-hover:text-black transition-colors">
                    View Category <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
