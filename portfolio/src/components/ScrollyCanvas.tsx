"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 17;

const currentFrame = (index: number) =>
  `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.png`;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        loadedImages[i - 1] = img;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      
      // Fallback if image fails to load
      img.onerror = () => {
        loadedCount++;
        loadedImages[i - 1] = img; 
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      }
    }
  }, []);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (0-16)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Handle rendering to canvas
  const renderFrame = (index: number) => {
    if (!imagesLoaded || !canvasRef.current || !images[index]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas internal resolution to match window size for sharpness
    // This could also be a fixed size like 1920x1080 and drawn scaled
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const img = images[index];

    // Calculate aspect ratio mathematically to fill screen (object-fit: cover)
    const canvasProp = canvas.width / canvas.height;
    const imgProp = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasProp > imgProp) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgProp;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgProp;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill background with same dark color 
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Listen to frame index changes and draw 
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesLoaded) {
      renderFrame(Math.round(latest));
    }
  });

  // Initial draw once loaded
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
    
    const handleResize = () => {
        if(imagesLoaded) renderFrame(Math.round(frameIndex.get()));
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
      {children}
    </div>
  );
}
