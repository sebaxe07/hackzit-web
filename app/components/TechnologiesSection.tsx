"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiSharp,
  SiKotlin,
  SiFlutter,
  SiAmazon,
  SiGooglecloud,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

// Technology categories with their respective icons
const technologies = [
  {
    category: "Front-end",
    description:
      "Creating responsive and interactive user interfaces that drive engagement",
    techs: [
      { name: "React", icon: <SiReact size={40} className="text-blue-500" /> },
      {
        name: "Angular",
        icon: <SiAngular size={40} className="text-red-500" />,
      },
      {
        name: "Vue.js",
        icon: <SiVuedotjs size={40} className="text-green-500" />,
      },
    ],
  },
  {
    category: "Back-end",
    description:
      "Building robust server-side architectures that power your applications",
    techs: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={40} className="text-green-600" />,
      },
      {
        name: "Python",
        icon: <SiPython size={40} className="text-yellow-500" />,
      },
      { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
    ],
  },
  {
    category: "Desktop & Enterprise",
    description:
      "Developing powerful desktop applications and enterprise solutions",
    techs: [
      { name: "C#", icon: <SiSharp size={40} className="text-purple-500" /> },
      { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
      {
        name: "Python",
        icon: <SiPython size={40} className="text-yellow-500" />,
      },
    ],
  },
  {
    category: "Mobile",
    description: "Crafting native and cross-platform mobile experiences",
    techs: [
      {
        name: "Flutter",
        icon: <SiFlutter size={40} className="text-blue-400" />,
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative size={40} className="text-blue-500" />,
      },

      {
        name: "Kotlin",
        icon: <SiKotlin size={40} className="text-purple-600" />,
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Implementing scalable and resilient cloud infrastructure",
    techs: [
      { name: "AWS", icon: <SiAmazon size={40} className="text-yellow-600" /> },
      {
        name: "Azure",
        icon: <VscAzure size={40} className="text-blue-400" />,
      },
      {
        name: "GCP",
        icon: <SiGooglecloud size={40} className="text-blue-500" />,
      },
    ],
  },
  {
    category: "AI & Data",
    description:
      "Leveraging data and machine learning to deliver intelligent solutions",
    techs: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow size={40} className="text-orange-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={40} className="text-blue-700" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={40} className="text-green-500" />,
      },
    ],
  },
];

const TechnologiesSection = () => {
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
    <section id="technologies" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            We leverage a comprehensive range of modern technologies to build
            powerful software solutions across all platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(153, 21, 127, 0.3)",
                transition: { duration: 0.1 }, // Speed up hover transition
              }}
              className="bg-background/30 backdrop-blur-md rounded-xl p-6 border border-secondary/10 hover:border-secondary/30 transition-colors duration-150" // Faster transition, only for colors
            >
              <h3 className="text-xl font-bold mb-2 text-text">
                {category.category}
              </h3>
              <p className="text-text/70 mb-6">{category.description}</p>

              <div className="flex justify-around items-center gap-4">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-col items-center">
                    <div className="p-3 bg-background/50 rounded-lg mb-2 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-text/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
