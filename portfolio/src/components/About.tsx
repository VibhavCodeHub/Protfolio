"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] pt-32 pb-24 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left text column */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Behind the Code
          </h3>
          <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
            <p>
              I am a Computer Science student currently pursuing an MCA (dual degree). 
              With practical experience balancing both Python development and web development, 
              I design clean interfaces and architect the robust backend scripts powering them.
            </p>
            <p>
              My true passion lies at the intersection of creating digital experiences 
              and protecting them. I am highly interested in cybersecurity concepts, 
              threat analysis, and risk assessment workflows.
            </p>
          </div>
        </motion.div>

        {/* Right timeline column */}
        <motion.div 
          className="md:w-1/2 flex flex-col gap-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="border-l border-neutral-700 pl-8 relative">
            <span className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-white blur-[2px]"></span>
            <span className="absolute top-0 -left-[4px] w-[7px] h-[7px] rounded-full bg-white"></span>
            <h4 className="text-2xl font-semibold mb-2 text-neutral-200">Education</h4>
            <p className="text-white font-medium mb-1">Master of Computer Application (Dual Degree)</p>
            <p className="text-neutral-500 text-sm mb-3">Dr. A.P.J. Abdul Kalam Technical University (AKTU) | 2019 – 2024</p>
          </div>

          <div className="border-l border-neutral-700 pl-8 relative">
            <span className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-white blur-[2px]"></span>
            <span className="absolute top-0 -left-[4px] w-[7px] h-[7px] rounded-full bg-white"></span>
            <h4 className="text-2xl font-semibold mb-2 text-neutral-200">Experience</h4>
            
            <div className="mb-6">
              <p className="text-white font-medium">Cybersecurity Job Simulation</p>
              <p className="text-neutral-500 text-sm">Deloitte (Forage) | Dec 2025</p>
            </div>
            
            <div className="mb-6">
              <p className="text-white font-medium">Web Development Intern</p>
              <p className="text-neutral-500 text-sm">CodSoft | Oct – Nov 2025</p>
            </div>
            
            <div>
              <p className="text-white font-medium">Python Developer Intern</p>
              <p className="text-neutral-500 text-sm">Certify Technology | Sep – Oct 2025</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
