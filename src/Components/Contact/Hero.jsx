import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";
import heroImg from "../../assets/Images/background.png";

const socials = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "Facebook", href: "#", Icon: Facebook },
];

const Hero = ({ variants }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Don Transducers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-36">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-12 items-end"
        >
          <div className="lg:col-span-8">
            <motion.p
              variants={variants.fadeUp}
              className="text-blue-300 font-mono text-xs tracking-[0.4em] uppercase"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={variants.fadeUp}
              className="text-5xl lg:text-7xl font-serif font-light leading-[1.05] mt-6"
            >
              Let us spec your next build.
            </motion.h1>
            <motion.p
              variants={variants.fadeUp}
              className="text-gray-200/90 text-lg mt-6 max-w-2xl"
            >
              Share your application (tops, subs, installs), target SPL, and
              cabinet goals. We will recommend the right drivers and provide
              the relevant datasheets.
            </motion.p>

            <motion.div variants={variants.fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Send a message <ArrowUpRight size={16} />
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Browse Products
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={variants.fadeUp}
            className="lg:col-span-4 bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-6"
          >
            <p className="text-xs uppercase tracking-widest text-white/70">
              Direct contact
            </p>
            <div className="mt-6 space-y-4 text-sm text-gray-200/90">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-300" size={18} />
                <a
                  href="mailto:sales@dontransducers.com"
                  className="hover:text-white transition-colors"
                >
                  sales@dontransducers.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-300" size={18} />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-300 mt-0.5" size={18} />
                <p className="leading-relaxed">
                  Industrial Area, Sector 12
                  <br />
                  New Delhi, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-blue-300" size={18} />
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-white/70">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-2 border border-white/15 bg-black/30 hover:bg-white hover:text-black transition-colors rounded-xl px-4 py-2 text-xs uppercase tracking-widest"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
