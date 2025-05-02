"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

const RippleEffect = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create a new ripple at the click position
      const newRipple = {
        id: counter,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 80, // Random size between 80-100px
      };

      setRipples((prev) => [...prev, newRipple]);
      setCounter((prev) => prev + 1);

      // Remove the ripple after animation completes to avoid memory issues
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 1000);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [counter]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{
              opacity: 0.7,
              scale: 0,
              x: ripple.x - ripple.size / 2,
              y: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
            animate={{
              opacity: 0,
              scale: 4,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(228,65,165,0.3) 0%, rgba(82,0,197,0.1) 70%, transparent 100%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;
