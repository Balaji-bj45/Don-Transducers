

import React from 'react';
import { 
  ArrowRight, Waves, Disc, Mic2, Hexagon, Target, Shield, Zap,
  ArrowUpRight, Check, Users, Factory, Award, ChevronRight,
  Wrench, Speaker, Settings, Box, Cpu, Volume2, Radio, Headphones,
  Building2, UserCheck, Truck, Store
} from 'lucide-react';
import img1 from '../../assets/Images/9.png';
function OurStory() {

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
    

      <section className="w-full max-w-[1400px] mx-auto py-24 px-6 lg:px-12 bg-white">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-blue-700 font-mono text-sm tracking-wider">01 — OUR STORY</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4 mb-8 text-black">
                  Built from the <br/>
                  <span className="italic">ground up.</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2008 in the industrial heartland, Don Transducers began as a simple 
                    workshop with a singular obsession: <span className="text-black font-medium">perfect sound reproduction.</span>
                  </p>
                  <p>
                    What started as custom builds for local venues evolved into a reputation that 
                    spread across continents. Today, our transducers power festivals, concert halls, 
                    and installations in over 40 countries.
                  </p>
                  <p>
                    We never chased trends. We chased physics. Every driver we produce undergoes 
                    rigorous testing protocols that exceed industry standards by a factor of three. 
                    This isn't marketing—it's methodology.
                  </p>
                </div>
    
                <div className="mt-10 flex gap-8">
                  <div>
                    <p className="text-4xl font-serif font-bold text-black">40+</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Countries</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif font-bold text-black">15</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Active</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif font-bold text-black">50K+</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Units Shipped</p>
                  </div>
                </div>
              </div>
    
              <div className="relative">
                <img 
                  src={img1} 
                  alt="Workshop" 
                  className="w-full h-[500px] object-cover  "
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 max-w-[280px]">
                  <p className="text-sm font-mono uppercase tracking-wider mb-2">Since 2008</p>
                  <p className="text-lg font-serif italic">Engineering sound that moves people.</p>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default OurStory