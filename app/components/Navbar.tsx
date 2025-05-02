"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { smoothScrollTo } from "../lib/scrollUtils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for section navigation that also closes the mobile menu
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    smoothScrollTo(e, targetId);

    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "top")}
          className="flex items-center"
        >
          <Image
            src="/HACKZIT_LOGO/SVG/Logo&NameSide.svg"
            alt="HackZit Logo"
            width={180}
            height={48}
            className="object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "services")}
          >
            Solutions
          </a>
          <a
            href="#technologies"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "technologies")}
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#team"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "team")}
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "services")}
            >
              Solutions
            </a>
            <a
              href="#projects"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </a>
            <a
              href="#technologies"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "technologies")}
            >
              Technologies
            </a>
            <a
              href="#team"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "team")}
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
