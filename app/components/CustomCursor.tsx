/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // Use motion values for smoother tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Store previous positions for trail calculation
  const positions = useRef<{ x: number; y: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Create spring physics for smoother motion with better conservation of momentum
  const springConfig = { damping: 20, stiffness: 250, mass: 0.25 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // For storing and updating cursor position history
    const positionHistory = positions.current;
    const maxPositions = 10; // Store 10 past positions for trail calculation

    // Initialize with current position
    for (let i = 0; i < maxPositions; i++) {
      positionHistory.push({ x: -100, y: -100 });
    }

    let requestId: number | null = null;
    let mouseX = -100;
    let mouseY = -100;

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!requestId) {
        requestId = requestAnimationFrame(updateCursorPosition);
      }
    };

    const updateCursorPosition = () => {
      // Update the main cursor position
      cursorX.set(mouseX);
      cursorY.set(mouseY);

      // Update position history for trail
      positionHistory.pop(); // Remove oldest position
      positionHistory.unshift({ x: mouseX, y: mouseY }); // Add current position

      requestId = null;
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
    };

    const mouseEnterHandler = () => {
      setIsVisible(true);
    };

    const mouseDownHandler = () => {
      setIsActive(true);
    };

    const mouseUpHandler = () => {
      setIsActive(false);
    };

    const mouseCursorHandler = () => {
      const hoveredElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .clickable'
      );

      const handleMouseOver = () => {
        setIsPointer(true);
      };

      const handleMouseOut = () => {
        setIsPointer(false);
      };

      hoveredElements.forEach((element) => {
        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);
      });

      return () => {
        hoveredElements.forEach((element) => {
          element.removeEventListener("mouseover", handleMouseOver);
          element.removeEventListener("mouseout", handleMouseOut);
        });
      };
    };

    // Add event listeners
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);

    // Call the cursor style handler and store its cleanup function
    const cursorCleanup = mouseCursorHandler();

    // Hide default cursor
    document.body.classList.add("no-cursor");

    // Clean up
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);

      if (cursorCleanup) cursorCleanup();
      document.body.classList.remove("no-cursor");

      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, [cursorX, cursorY, isVisible]);

  // Customizable trail properties
  const trailCount = 5;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 border-primary flex items-center justify-center ${
          isActive
            ? "bg-accent/30"
            : isPointer
            ? "bg-secondary/20"
            : "bg-primary/20"
        } ${!isVisible ? "opacity-0" : "opacity-100"}`}
        style={{
          width: isPointer ? 40 : 25,
          height: isPointer ? 40 : 25,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "screen",
          transition: "opacity 0.15s ease",
        }}
      >
        {isPointer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        )}
      </motion.div>

      {/* Trail elements */}
      {Array.from({ length: trailCount }).map((_, i) => {
        // Calculate decreasing size and opacity for trail elements
        const size = (isPointer ? 40 : 25) * (1 - i * 0.15);
        const opacity = 0.5 - i * 0.1;

        // Different spring configuration for each trail element
        const trailSpringConfig = {
          damping: 18 - i * 1.5, // Less damping = more bounce
          stiffness: 180 - i * 20, // Less stiffness = more elastic
          mass: 0.2 + i * 0.07, // More mass = more inertia
          restSpeed: 0.001,
          restDelta: 0.001,
        };

        // Create individual springs for each trail element with increasing delay
        const trailX = useSpring(cursorXSpring, trailSpringConfig);
        const trailY = useSpring(cursorYSpring, trailSpringConfig);

        return (
          <motion.div
            key={i}
            className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] bg-gradient-to-r from-primary/40 to-secondary/30 ${
              !isVisible ? "opacity-0" : ""
            }`}
            style={{
              width: size,
              height: size,
              x: trailX,
              y: trailY,
              translateX: "-50%",
              translateY: "-50%",
              opacity: opacity * (isVisible ? 1 : 0),
              filter: `blur(${i * 0.5}px)`,
              transition: "opacity 0.15s ease",
            }}
          />
        );
      })}
    </>
  );
};

export default CustomCursor;
