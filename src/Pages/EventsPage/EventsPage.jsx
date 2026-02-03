import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Sparkles,
} from "lucide-react";
import heroImg from "../../assets/Images/events.jpg";
import featureImg from "../../assets/Images/9.png";

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

const EventsPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.7, ease },
    },
  };

  const sectionFade = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.75, ease },
    },
  };

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Don Transducers events"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-8">
              <motion.p
                variants={fadeUp}
                className="text-blue-300 font-mono text-xs tracking-[0.4em] uppercase"
              >
                Events
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-7xl font-serif font-light leading-[1.05] mt-6"
              >
                Where the specs meet the stage.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-gray-200/90 text-lg mt-6 max-w-2xl"
              >
                Join our demo days, partner sessions, and exhibitions to explore
                our product lineup with measurement-led demonstrations and
                practical system advice.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#upcoming"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  View Upcoming <ArrowUpRight size={16} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  Contact Team
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-4 bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-6"
            >
              <p className="text-xs uppercase tracking-widest text-white/70">
                Quick info
              </p>
              <div className="mt-6 space-y-4 text-sm text-gray-200/90">
                <div className="flex items-start gap-3">
                  <Ticket className="text-blue-300" size={18} />
                  <p>
                    Invite-based events for dealers, integrators, and system
                    builders.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-300" size={18} />
                  <p>Upcoming events posted here as schedules are confirmed.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-blue-300" size={18} />
                  <p>Bring your cabinet goals. We will help match the driver.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* UPCOMING */}
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

      {/* FEATURED */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
                <img
                  src={featureImg}
                  alt="Driver showcase"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Featured focus
                  </p>
                  <p className="text-2xl font-serif mt-2">
                    Listening + measurements, side by side.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-blue-300 font-mono text-sm tracking-wider">
                02 - WHAT TO EXPECT
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
                A premium demo flow.
              </h2>
              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Our events are designed for technical buyers. We bring measured
                baselines, enclosure targets, crossover considerations, and
                real-world application context.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Live comparisons",
                    desc: "Matched enclosures and controlled listening setups.",
                  },
                  {
                    title: "Spec sheets",
                    desc: "Clear parameters and tolerance expectations.",
                  },
                  {
                    title: "OEM options",
                    desc: "Coils, cones, magnet packs, and tuning guidance.",
                  },
                  {
                    title: "Engineering Q&A",
                    desc: "Bring your build goals. We will help define the path.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-white/10 bg-black/40 rounded-2xl p-6 hover:bg-black/60 transition-colors"
                  >
                    <p className="text-lg font-serif">{item.title}</p>
                    <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-200 transition-colors"
                >
                  Book a meeting <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAST */}
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

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-700/60 via-black to-emerald-600/50 p-10 lg:p-14 overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_55%)]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Host a demo
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mt-4">
                Want an engineering-led demo at your venue?
              </h2>
              <p className="text-white/85 mt-6 max-w-2xl">
                Tell us your city, expected audience, and the system type (tops,
                subs, installs). We will propose a session format and a lineup.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                Contact Us <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Browse Products <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EventsPage;
