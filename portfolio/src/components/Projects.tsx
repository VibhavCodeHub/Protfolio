"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Project Alpha",
    category: "E-Commerce",
    year: "2025",
    description: "A headless commerce platform with 3D product visualization.",
  },
  {
    title: "Studio Beta",
    category: "Creative Agency",
    year: "2024",
    description: "An Awwwards winning interactive web experience.",
  },
  {
    title: "App Gamma",
    category: "Fintech App",
    year: "2023",
    description: "Modern financial dashboard with real-time analytics.",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] pt-24 pb-48 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Selected Works
          </h3>
          <div className="w-20 h-[1px] bg-neutral-600 mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col justify-between h-96 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-500 overflow-hidden cursor-pointer"
            >
              
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="text-sm font-medium tracking-wide text-neutral-400 uppercase">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {project.year}
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
