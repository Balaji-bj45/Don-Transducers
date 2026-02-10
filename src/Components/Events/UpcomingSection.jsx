import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, MapPin, Clock } from "lucide-react";

const UPCOMING_EVENTS = [
  {
    id: "pro-audio-demo-day-delhi-2026",
    title: "Don Transducers Demo Day",
    date: "March 21, 2026",
    time: "10:00 AM - 06:00 PM",
    location: "New Delhi, India",
    type: "Demo Day",
    description:
      "Hands-on listening sessions for LF drivers, crossover boards, and cabinet builds with engineering-led Q&A.",
    cta: "Request an invite",
  },
  {
    id: "system-integrators-meet-2026",
    title: "System Integrators Meet",
    date: "May 09, 2026",
    time: "11:00 AM - 04:30 PM",
    location: "Mumbai, India",
    type: "Partner Event",
    description:
      "A focused day for integrators and dealers. Performance targets, spec sheets, and OEM customization options.",
    cta: "Become a partner",
  },
  {
    id: "pro-sound-expo-2026",
    title: "Pro Sound Expo",
    date: "August 14, 2026",
    time: "09:30 AM - 05:30 PM",
    location: "Bengaluru, India",
    type: "Expo",
    description:
      "Meet the team and explore our passive driver lineup with measurement-led demos and application guidance.",
    cta: "Book a meeting",
  },
];

const UpcomingSection = ({ sectionFade, container, fadeUp }) => {
  return (
    <section id="upcoming" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
      >
        <div>
          <p className="text-blue-300 font-mono text-sm tracking-wider">
            01 - UPCOMING
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
            Upcoming events
          </h2>
        </div>
        <p className="text-gray-300 max-w-xl">
          Dates and locations below are confirmed. For meetings, invite
          requests, and dealer sessions, please reach out.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-3 gap-8"
      >
        {UPCOMING_EVENTS.map((event) => (
          <motion.div
            key={event.id}
            variants={fadeUp}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/10 transition-colors"
          >
            <div className="p-7">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-blue-300 border border-blue-300/40 px-2 py-1">
                  {event.type}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/60">
                  Upcoming
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

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-blue-200 transition-colors"
                >
                  {event.cta} <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-emerald-500 to-transparent opacity-60" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default UpcomingSection;
