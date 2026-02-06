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

     <section id="categories" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 overflow-hidden">
  <div className="relative mb-20">
    <div className="flex items-center gap-8 mb-12">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-blue-700 animate-pulse"></div>
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-75"></div>
        <div className="w-3 h-3 rounded-full bg-blue-300 animate-pulse delay-150"></div>
      </div>
      <p className="text-blue-700 font-mono text-sm tracking-[0.3em] uppercase">
        Categories • 01
      </p>
    </div>
    <div className="">
    <h2 className="text-6xl lg:text-8xl font-serif font-light mb-8">
      Our full 
      <span className=" text-blue-700 italic"> lineup.</span>
    </h2>
    
    <p className="text-gray-500 text-xl max-w-2xl ">
      Click any category to view its full catalog, subgroups, and detailed
      product pages.
    </p>
  </div>
  </div>

  <div className="relative">
    {/* Background Decorative Elements */}
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

    <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
      {productCategories.map((category, index) => {
        const visual = categoryVisuals[category.slug];
        const Icon = visual.icon;
        return (
          <Link
            key={category.slug}
            to={`/products/${category.slug}`}
            className="group relative"
          >
            <div className="relative">
              {/* Glassmorphic Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden hover:bg-white/90 transition-all duration-500">
                
               

                {/* Split Layout */}
                <div className="grid md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <img
                      src={visual.image}
                      alt={category.name}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/30"></div>
                    
                    {/* Index Number Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-7xl font-serif font-bold text-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-blue-700 mb-4">
                        <span className="w-8 h-px bg-blue-700"></span>
                        {visual.tag}
                      </span>
                      
                      <h3 className="text-3xl lg:text-4xl font-serif mb-4 text-gray-900">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white"></div>
                      </div>
                      
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                        Explore
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shadow Card Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -z-10 translate-y-4 scale-95 opacity-50 group-hover:translate-y-6 group-hover:scale-90 transition-all duration-500"></div>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>
    </div>
  );
};

export default ProductsPage;
