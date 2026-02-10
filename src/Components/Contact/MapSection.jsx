import React from "react";
import { motion } from "framer-motion";

const MapSection = ({ variants, mapSrc }) => {
  return (
    <section id="map" className="w-full bg-white pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={variants.section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full h-[500px] rounded-[2.5rem] overflow-hidden bg-[#f4f4f4] p-4 group"
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
            <iframe
              title="Don Transducers location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0   transition-all duration-700"
            />

            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-lg pointer-events-none">
              <span className="font-bold text-black text-sm">📍 New Delhi HQ</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
