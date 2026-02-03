import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";
import heroImg from "../../assets/Images/background.png";

const ContactPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  const variants = useMemo(() => {
    const baseTransition = prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.75, ease };

    return {
      container: {
        hidden: {},
        show: {
          transition: prefersReducedMotion ? {} : { staggerChildren: 0.08 },
        },
      },
      fadeUp: {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: baseTransition },
      },
      section: {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: baseTransition },
      },
    };
  }, [prefersReducedMotion]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const socials = [
    { label: "LinkedIn", href: "#", Icon: Linkedin },
    { label: "Instagram", href: "#", Icon: Instagram },
    { label: "YouTube", href: "#", Icon: Youtube },
    { label: "Facebook", href: "#", Icon: Facebook },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks! We received your message and will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
    window.setTimeout(() => setStatus(null), 6000);
  };

  const mapSrc =
    "https://www.google.com/maps?q=Industrial%20Area%2C%20Sector%2012%2C%20New%20Delhi%2C%20India&output=embed";

  return (
    <div className="bg-black text-white">
      {/* HERO */}
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

      {/* FORM + DETAILS */}
      <section id="form" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <motion.div
          variants={variants.section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-blue-300 font-mono text-sm tracking-wider">
                    01 - MESSAGE
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-serif font-light mt-4">
                    Tell us what you are building.
                  </h2>
                </div>
                <Link
                  to="/events"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-blue-200 transition-colors"
                >
                  See Events <ArrowUpRight size={16} />
                </Link>
              </div>

              {status && (
                <div className="mt-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 rounded-2xl px-5 py-4 text-sm">
                  {status}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600/70"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600/70"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+91"
                      className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600/70"
                    />
                  </div>
                  <div className="flex items-end">
                    <p className="text-sm text-white/60 leading-relaxed">
                      For the fastest response, include your preferred driver size
                      and cabinet tuning goals.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    placeholder="Tell us the application, target SPL, box volume, and any constraints."
                    className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600/70 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-2xl"
                  >
                    Send Message <Send size={16} />
                  </button>
                  <p className="text-xs text-white/55 uppercase tracking-widest">
                    Response time: 1-2 business days
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
              <p className="text-blue-300 font-mono text-sm tracking-wider">
                02 - SUPPORT
              </p>
              <h3 className="text-3xl font-serif font-light mt-4">
                Engineering-led support.
              </h3>
              <p className="text-white/75 mt-4 leading-relaxed">
                We help dealers, integrators, cabinet builders, and sound
                engineers specify the right components with confidence.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/85">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-white/60 uppercase tracking-widest text-xs">
                    Sales
                  </span>
                  <a
                    href="mailto:sales@dontransducers.com"
                    className="hover:text-blue-200 transition-colors"
                  >
                    sales@dontransducers.com
                  </a>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-white/60 uppercase tracking-widest text-xs">
                    Support
                  </span>
                  <a
                    href="mailto:info@dontransducers.com"
                    className="hover:text-blue-200 transition-colors"
                  >
                    info@dontransducers.com
                  </a>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-white/60 uppercase tracking-widest text-xs">
                    Phone
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-blue-200 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-200 transition-colors rounded-2xl"
                >
                  View Products <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-2xl"
                >
                  About Don Transducers
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MAP */}
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
    </div>
  );
};

export default ContactPage;
