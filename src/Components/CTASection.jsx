import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

function CTASection() {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden bg-slate-900">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    READY TO FEEL <br /> THE POWER?
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Whether you are a system integrator, cabinet builder, or dealer, Don Transducers provides the components you need for professional audio success.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        Get a Quote
                    </button>
                    <button className="h-14 px-8 bg-transparent border border-slate-600 hover:border-white text-white font-bold rounded-full transition-colors flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        Contact Support
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  );
}

export default CTASection;