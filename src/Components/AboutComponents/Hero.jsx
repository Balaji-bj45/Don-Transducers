
import React from 'react';
import { 
  ArrowRight, Waves, Disc, Mic2, Hexagon, Target, Shield, Zap,
  ArrowUpRight, Check, Users, Factory, Award, ChevronRight,
  Wrench, Speaker, Settings, Box, Cpu, Volume2, Radio, Headphones,
  Building2, UserCheck, Truck, Store
} from 'lucide-react';
import img1 from '../../assets/Images/9.png';
function AboutPage() {


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
  return (
    <>
     <div className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-blue-700 selection:text-white py-10 bg-black">
            <section className="relative w-full max-w-[1400px] mx-auto pt-16 pb-2 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
              
              {/* LEFT: TYPOGRAPHY */}
              <div className="w-full lg:w-1/2 z-10 relative">
                <div className="absolute -left-6 top-2 bottom-2 w-[1px] bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200 hidden lg:block"></div>
    
                <h5 className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-blue-500"></span>
                  About Don Transducers
                </h5>
    
                <h1 className="text-5xl lg:text-8xl font-light leading-[1.1] mb-8 font-serif">
                  Precision in <br/>
                  <span className="italic font-normal text-blue-400">Every Pulse.</span>
                </h1>
    
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
                  Don Transducers creates the invisible force that moves the crowd. We engineer 
                  <span className="font-semibold text-white"> passive drivers, crossovers, and cabinets </span> 
                  defined by durability and pure sonic specification.
                </p>
    
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="pr-6 sm:border-r border-gray-700">
                    <p className="text-3xl font-bold font-serif">10-18"</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Driver Range</p>
                  </div>
                  <div className="pr-6 sm:border-r border-gray-700">
                    <p className="text-3xl font-bold font-serif">2000W</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Max Power</p>
                  </div>
                  <div className="flex items-center">
                    <a href="#products" className="group flex items-center gap-2 text-sm font-bold border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                      Explore Series <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                  </div>
                </div>
              </div>
    
              {/* RIGHT: GEOMETRIC IMAGE */}
              <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-gray-700 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-2xl animate-[spin_60s_linear_infinite_reverse] hover:animate-none transition-all">
                    <img src={img1} alt="Speaker Driver" className="w-full h-full object-cover scale-125" />
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none rounded-full"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    
    </>
  )
}

export default AboutPage
