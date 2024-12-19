import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track if the cursor should be visible

  useEffect(() => {
    const updateVisibility = () => {
      // Hide the cursor on screens less than 768px width (mobile and tablet)
      setIsVisible(window.innerWidth >= 768);
    };

    updateVisibility(); // Check on mount
    window.addEventListener('resize', updateVisibility); // Recheck on resize

    const handleMouseMove = (e: MouseEvent) => {
      if (isVisible) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        const target = e.target as HTMLElement;
        setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null; // Do not render the custom cursor on smaller screens
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          mass: 0.6,
          stiffness: 50,
          damping: 10,
        }}
      />
    </>
  );
};

export default CustomCursor;
