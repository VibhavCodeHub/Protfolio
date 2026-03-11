"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#0a0a0a] pt-32 pb-16 px-4 md:px-12 text-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
            Let&apos;s talk.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto">
            Open to opportunities in Web Development and Cybersecurity. Let&apos;s build something secure and beautiful.
          </p>
        </motion.div>

        <motion.a
          href="mailto:vibhavofficial2@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="group relative inline-flex items-center justify-center px-8 py-4 mb-16 font-bold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-white/10 hover:border-white/30"
        >
          <span className="relative z-10 flex items-center gap-3">
            vibhavofficial2@gmail.com
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          {/* Subtle button glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/0 via-white/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.a>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-8">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vibhav Sanger. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a 
              href="https://www.linkedin.com/in/vibhav-sanger/" 
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 pb-1"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/VibhavCodeHub" 
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 pb-1"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
