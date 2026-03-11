"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "HTML", "CSS"] },
  { category: "Tools", items: ["Git", "GitHub", "Linux", "VS Code"] },
  { category: "Cybersecurity", items: ["Threat Analysis", "Risk Assessment", "Incident Response"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 bg-[#121212] py-24 px-4 md:px-12 text-white overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Tools and technologies I use to build scalable applications and secure digital environments.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {SKILLS.map((skillGroup, groupIdx) => (
            <div key={skillGroup.category} className="flex-1 max-w-sm">
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.2 }}
                className="text-xl font-medium text-neutral-300 mb-6 border-b border-white/10 pb-2"
              >
                {skillGroup.category}
              </motion.h4>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (groupIdx * 0.2) + (itemIdx * 0.1),
                      ease: "easeOut" 
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono tracking-wide cursor-default transition-colors duration-300 backdrop-blur-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
