"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-black relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent-yellow font-mono tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </h2>
          <h3 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            Let's <span className="text-accent-red italic font-serif">Work</span> Together.
          </h3>
          <p className="text-light-gray text-lg max-w-2xl mx-auto">
            Got a project in mind? Fill out the form below or drop me an email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="text-left space-y-8">
            <div>
              <p className="text-accent-yellow font-mono text-xs uppercase tracking-widest mb-2">Email Me</p>
              <a href="mailto:farisbhatti2727@gmail.com" className="text-2xl md:text-3xl text-white hover:text-accent-red transition-colors">
                farisbhatti2727@gmail.com
              </a>
            </div>
            <div>
              <p className="text-accent-yellow font-mono text-xs uppercase tracking-widest mb-2">Socials</p>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/engr-haris-bhatti" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-white transition-colors font-mono">LINKEDIN</a>
                <a href="https://github.com/Haris2703" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-white transition-colors font-mono">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6 bg-[#0f0f0f] p-8 rounded-3xl border border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-red transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-red transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-red transition-colors resize-none"
            ></textarea>
            <button className="bg-accent-red hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02]">
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Copyright Footer */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-mono uppercase tracking-widest">
          <p>© 2026 HARIS TAHIR. ALL RIGHTS RESERVED.</p>
          <p>WAH, PUNJAB, PAKISTAN | +92 336 5762033</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;