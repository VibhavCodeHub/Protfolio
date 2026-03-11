"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  // Opacity: 1 at 0%, 0 at 15%
  // Y: 0 at 0%, -100 at 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -150]);

  // Section 2: 30% to 50%
  // Opacity: 0 at 20%, 1 at 30%, 1 at 45%, 0 at 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -150]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [100, -150]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center text-white p-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-center">
          Vibhav Sanger.
        </h1>
        <p className="text-xl md:text-3xl text-neutral-300 font-light tracking-wide text-center">
          Developer & Cybersecurity Enthusiast.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-[150vh] left-0 w-full h-screen flex flex-col items-start justify-center text-white px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
          Crafting robust backend systems.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-[300vh] left-0 w-full h-screen flex flex-col items-end justify-center text-white px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl bg-clip-text text-transparent bg-gradient-to-l from-white to-neutral-500">
          Exploring the world of Web & Security.
        </h2>
      </motion.div>

    </div>
  );
}
