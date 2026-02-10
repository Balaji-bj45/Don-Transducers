import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  Ticket,
  Sparkles,
} from "lucide-react";
import heroImg from "../../assets/Images/events.jpg";

const Hero = ({ container, fadeUp }) => {
  return (
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
  );
};

export default Hero;
