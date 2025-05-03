"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaRobot,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

// Translations for services section
const translations = {
  en: {
    sectionTitle: "Our Services",
    sectionDescription:
      "We deliver end-to-end software solutions across multiple platforms and technologies to power your business innovation.",
    services: [
      {
        id: 1,
        title: "Custom Software Development",
        description:
          "Tailored software solutions designed to address your unique business challenges and operational needs.",
      },
      {
        id: 2,
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android with seamless functionality and engaging UX.",
      },
      {
        id: 3,
        title: "Enterprise Solutions",
        description:
          "Robust enterprise software for workflow automation, resource management, and business process optimization.",
      },
      {
        id: 4,
        title: "AI & Machine Learning",
        description:
          "Advanced AI integrations that provide intelligent automation, data analysis, and predictive capabilities.",
      },
      {
        id: 5,
        title: "Data Engineering",
        description:
          "Comprehensive data solutions including architecture design, ETL pipelines, and analytics implementations.",
      },
      {
        id: 6,
        title: "Cloud & DevOps",
        description:
          "Modern infrastructure with CI/CD pipelines, containerization, and scalable cloud-native architectures.",
      },
    ],
  },
  es: {
    sectionTitle: "Nuestros Servicios",
    sectionDescription:
      "Ofrecemos soluciones de software completas en múltiples plataformas y tecnologías para impulsar la innovación de tu negocio.",
    services: [
      {
        id: 1,
        title: "Desarrollo de Software a Medida",
        description:
          "Soluciones de software personalizadas diseñadas para abordar los desafíos específicos de tu negocio y necesidades operativas.",
      },
      {
        id: 2,
        title: "Desarrollo de Aplicaciones Móviles",
        description:
          "Aplicaciones móviles nativas y multiplataforma para iOS y Android con funcionalidad fluida y experiencia de usuario atractiva.",
      },
      {
        id: 3,
        title: "Soluciones Empresariales",
        description:
          "Software empresarial robusto para automatización de flujos de trabajo, gestión de recursos y optimización de procesos de negocio.",
      },
      {
        id: 4,
        title: "IA & Aprendizaje Automático",
        description:
          "Integraciones avanzadas de IA que proporcionan automatización inteligente, análisis de datos y capacidades predictivas.",
      },
      {
        id: 5,
        title: "Ingeniería de Datos",
        description:
          "Soluciones de datos completas que incluyen diseño de arquitectura, pipelines ETL e implementaciones analíticas.",
      },
      {
        id: 6,
        title: "Cloud & DevOps",
        description:
          "Infraestructura moderna con pipelines CI/CD, containerización y arquitecturas escalables nativas de la nube.",
      },
    ],
  },
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Map the icons from the services array to our translated services
  const serviceIcons = {
    1: <FaCode className="text-4xl text-primary" />,
    2: <FaMobile className="text-4xl text-primary" />,
    3: <FaDesktop className="text-4xl text-primary" />,
    4: <FaRobot className="text-4xl text-primary" />,
    5: <FaDatabase className="text-4xl text-primary" />,
    6: <FaCloud className="text-4xl text-primary" />,
  };

  return (
    <section id="services" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            {t.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(82, 0, 197, 0.3)",
                transition: { duration: 0.1 }, // Speed up hover transition
              }}
              className="bg-background/30 backdrop-blur-md rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-colors duration-150" // Faster transition, only for colors
            >
              <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                {serviceIcons[service.id as keyof typeof serviceIcons]}
              </div>
              <h3 className="text-xl font-bold mb-2 text-text">
                {service.title}
              </h3>
              <p className="text-text/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
