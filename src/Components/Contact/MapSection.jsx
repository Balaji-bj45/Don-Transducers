import React from "react";
import { motion } from "framer-motion";

const MapSection = ({ variants, mapSrc }) => {
  return (
    <section className="border-t border-white/10 bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <motion.div
          variants={variants.section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-blue-300 font-mono text-sm tracking-wider">
                03 - LOCATION
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
                Find us on the map.
              </h2>
            </div>
            <p className="text-white/70 max-w-xl">
              If you are visiting for testing or pickup, schedule an
              appointment in advance so the right team is available.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-black">
            <iframe
              title="Don Transducers location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
