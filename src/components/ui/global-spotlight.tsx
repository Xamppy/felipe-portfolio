'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function GlobalSpotlight() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Don't render on server or mobile (no mouse)
  if (!isMounted) return null;

  return (
    <>
      {/* Main Spotlight - Large Indigo Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1] hidden lg:block"
        aria-hidden="true"
      >
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0.04) 35%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Secondary Spotlight - Smaller Purple Accent */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1] hidden lg:block"
        aria-hidden="true"
      >
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Tertiary Spotlight - Core highlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1] hidden lg:block"
        aria-hidden="true"
      >
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
            filter: 'blur(30px)',
          }}
        />
      </motion.div>
    </>
  );
}
