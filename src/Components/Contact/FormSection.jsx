import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BoxInput = ({ label, name, type = "text", value, onChange, placeholder, required }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-[#f4f4f4] text-black font-medium text-xl p-8 rounded-[2rem] border-2 border-transparent focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-gray-400"
    />
    <label className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest text-gray-400 pointer-events-none">
      {label}
    </label>
  </div>
);

const FormSection = ({
  variants,
  status,
  submitError,
  form,
  onChange,
  onSubmit,
}) => {
  return (
    <section className="relative z-10 px-6 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-6">

        {/* Contact Info Card */}
        <motion.div
          variants={variants.section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-4 bg-black text-white rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[500px]"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-medium mb-8">
              Contact & Info
            </span>
            <h3 className="text-3xl font-medium leading-tight mb-2">Don Transducers<br />Engineering</h3>
            <p className="text-gray-400">Est. 2024</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">General Inquiries</p>
              <a href="mailto:sales@dontransducers.com" className="text-xl underline decoration-gray-600 underline-offset-4 hover:decoration-white transition-all">sales@dontransducers.com</a>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Direct Line</p>
              <a href="tel:+919876543210" className="text-xl underline decoration-gray-600 underline-offset-4 hover:decoration-white transition-all">+91 98765 43210</a>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Headquarters</p>
              <p className="text-xl">New Delhi, India</p>
            </div>
          </div>
        </motion.div>

        {/* Form Area */}
        <motion.div
          variants={variants.section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-8 space-y-4"
        >
          {status && (
            <div className="bg-[#e6fffa] text-[#047857] p-6 rounded-[2rem] font-medium border border-[#047857]/10">
              {status}
            </div>
          )}
          {submitError && (
            <div className="bg-[#fff5f5] text-[#c53030] p-6 rounded-[2rem] font-medium border border-[#c53030]/10">
              {submitError}
            </div>
          )}

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <BoxInput label="Name" name="name" value={form.name} onChange={onChange} required placeholder="Your Name" />
              <BoxInput label="Email" name="email" value={form.email} onChange={onChange} required type="email" placeholder="email@address.com" />
            </div>

            <BoxInput label="Phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91..." />

            <div className="relative group min-h-[220px]">
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                placeholder="How can we help you?"
                className="w-full h-full bg-[#f4f4f4] text-black font-medium text-xl p-8 rounded-[2rem] border-2 border-transparent focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-gray-400 resize-none"
              />
              <label className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest text-gray-400 pointer-events-none">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white text-xl font-medium p-8 rounded-[2rem] hover:bg-gray-700 transition-colors flex justify-between items-center group mt-2"
            >
              <span>Send Request</span>
              <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowRight className="text-white" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;
