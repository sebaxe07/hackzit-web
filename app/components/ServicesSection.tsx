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

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and operational needs.",
    icon: <FaCode className="text-4xl text-primary" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless functionality and engaging UX.",
    icon: <FaMobile className="text-4xl text-primary" />,
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description:
      "Robust enterprise software for workflow automation, resource management, and business process optimization.",
    icon: <FaDesktop className="text-4xl text-primary" />,
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description:
      "Advanced AI integrations that provide intelligent automation, data analysis, and predictive capabilities.",
    icon: <FaRobot className="text-4xl text-primary" />,
  },
  {
    id: 5,
    title: "Data Engineering",
    description:
      "Comprehensive data solutions including architecture design, ETL pipelines, and analytics implementations.",
    icon: <FaDatabase className="text-4xl text-primary" />,
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    description:
      "Modern infrastructure with CI/CD pipelines, containerization, and scalable cloud-native architectures.",
    icon: <FaCloud className="text-4xl text-primary" />,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
            Our Services
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            We deliver end-to-end software solutions across multiple platforms
            and technologies to power your business innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
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
                {service.icon}
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
