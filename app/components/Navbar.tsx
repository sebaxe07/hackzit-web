"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { smoothScrollTo } from "../lib/scrollUtils";
import { FaLanguage } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

// Translations for navbar items
const translations = {
  en: {
    solutions: "Solutions",
    technologies: "Technologies",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
  },
  es: {
    solutions: "Soluciones",
    technologies: "Tecnologías",
    projects: "Proyectos",
    team: "Equipo",
    contact: "Contacto",
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  // Get translations based on current language
  const t = translations[language];

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
            {t.solutions}
          </a>
          <a
            href="#technologies"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "technologies")}
          >
            {t.technologies}
          </a>
          <a
            href="#projects"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "projects")}
          >
            {t.projects}
          </a>
          <a
            href="#team"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "team")}
          >
            {t.team}
          </a>
          <a
            href="#contact"
            className="text-text hover:text-accent transition-colors"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            {t.contact}
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-text hover:text-accent transition-colors"
            aria-label={
              language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
            }
          >
            <FaLanguage className="text-lg" />
            <span className="text-sm">{language === "en" ? "ES" : "EN"}</span>
          </button>
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
              {t.solutions}
            </a>
            <a
              href="#projects"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              {t.projects}
            </a>
            <a
              href="#technologies"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "technologies")}
            >
              {t.technologies}
            </a>
            <a
              href="#team"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "team")}
            >
              {t.team}
            </a>
            <a
              href="#contact"
              className="text-text hover:text-accent transition-colors py-2"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              {t.contact}
            </a>

            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-2 text-text hover:text-accent transition-colors"
              aria-label={
                language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
              }
            >
              <FaLanguage size={20} />
              <span>{language === "en" ? "Español" : "English"}</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
