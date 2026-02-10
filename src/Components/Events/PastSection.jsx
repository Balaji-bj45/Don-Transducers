import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const PAST_EVENTS = [
  {
    id: "dealer-training-2026-jan",
    title: "Dealer Training Session",
    date: "January 18, 2026",
    time: "02:00 PM - 06:00 PM",
    location: "New Delhi, India",
    type: "Training",
    description:
      "A training session on reading datasheets, matching drivers to enclosures, and warranty/after-sales workflow.",
  },
  {
    id: "live-sound-summit-2025",
    title: "Live Sound Summit",
    date: "November 22, 2025",
    time: "10:00 AM - 05:00 PM",
    location: "Pune, India",
    type: "Summit",
    description:
      "An overview of high-SPL system design choices and how motor design impacts real-world performance.",
  },
  {
    id: "install-workshop-2025",
    title: "Install Workshop",
    date: "September 06, 2025",
    time: "11:00 AM - 03:30 PM",
    location: "Hyderabad, India",
    type: "Workshop",
    description:
      "Practical tuning and crossover considerations for fixed installations and long-term reliability.",
  },
];

const PastSection = ({ sectionFade, container, fadeUp }) => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
      >
        <div>
          <p className="text-blue-300 font-mono text-sm tracking-wider">
            03 - PAST
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
            Past events
          </h2>
        </div>
        <p className="text-gray-300 max-w-xl">
          Highlights from recent sessions. Want us to run a demo in your city?
          Contact us with your preferred date and venue.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-3 gap-8"
      >
        {PAST_EVENTS.map((event) => (
          <motion.div
            key={event.id}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-white/70 border border-white/20 px-2 py-1">
                {event.type}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/55">
                Completed
              </span>
            </div>
            <h3 className="text-2xl font-serif mt-6">{event.title}</h3>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              {event.description}
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-200/90">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-blue-300" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-blue-300" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-300" />
                <span>{event.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PastSection;
