import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Send } from "lucide-react";

const FormSection = ({
  variants,
  status,
  submitError,
  form,
  onChange,
  onSubmit,
}) => {
  return (
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
            {submitError && (
              <div className="mt-6 border border-rose-500/30 bg-rose-500/10 text-rose-200 rounded-2xl px-5 py-4 text-sm">
                {submitError}
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
  );
};

export default FormSection;
