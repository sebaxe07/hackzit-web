"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { smoothScrollTo } from "../lib/scrollUtils";

// Define particle generator function outside component to avoid recreation
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 250 + 50,
    opacity: Math.random() * 0.3 + 0.1,
    duration: Math.random() * 25 + 15,
    delay: 0, // Remove delay to start animation immediately
  }));
};

// Initial particles are generated immediately
const initialParticles = generateParticles(15);

const HeroSection = () => {
  // No need for useState and useEffect anymore since particles are generated right away
  const particles = initialParticles;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 via-background to-background"></div>

        {/* Animated particles/circles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/30 blur-xl"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              top: `${particle.y}vh`,
              left: `${particle.x}vw`,
            }}
            animate={{
              x: ["0vw", `${30}vw`, `${-20}vw`, "0vw"],
              y: ["0vh", `${-20}vh`, `${30}vh`, "0vh"],
              scale: [1, 1.1, 0.9, 1],
              opacity: [
                particle.opacity,
                particle.opacity + 0.1,
                particle.opacity - 0.1,
                particle.opacity,
              ],
            }}
            transition={{
              duration: particle.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: 0,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Transforming Ideas Into Powerful Software Solutions
              </h1>
            </motion.div>

            <motion.p
              className="text-xl mb-8 text-text/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              HackZit is a full-stack software development company specializing
              in custom applications, mobile solutions, enterprise software, and
              cutting-edge technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
                onClick={(e) => smoothScrollTo(e, "projects")}
              >
                Our Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-accent hover:bg-accent/10 text-text rounded-md transition-colors duration-300"
                onClick={(e) => smoothScrollTo(e, "contact")}
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-3xl"></div>

              <div className="relative glassmorphism rounded-3xl p-6 w-full h-full flex items-center justify-center">
                <Image
                  src="/HACKZIT_LOGO/SVG/ColoredLogo.svg"
                  alt="HackZit Showcase"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
