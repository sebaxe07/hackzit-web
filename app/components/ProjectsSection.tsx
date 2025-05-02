"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import projectsData from "../data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const projectsDataTyped: Project[] = projectsData as Project[];
const projects = projectsDataTyped
  .filter((project) => project.featured)
  .slice(0, 4);
// Filter only featured projects or adjust count as needed
/* Data structure:
{
    "id": 1,
    "title": "Enterprise Resource Planning System",
    "description": "A comprehensive ERP solution with modules for inventory management, HR, accounting, and business intelligence dashboards.",
    "image": "/file.svg",
    "technologies": ["C#", ".NET Core", "SQL Server", "React", "Power BI"],
    "githubUrl": "https://github.com/hackzit/enterprise-erp",
    "liveUrl": "https://example.com/erp-demo",
    "featured": true
} */

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
    <section id="projects" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            Explore our diverse portfolio of custom software solutions deployed
            across multiple platforms and industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-background/30 backdrop-blur-lg rounded-xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-primary/20"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-text">
                    {project.title}
                  </h3>
                  <p className="text-text/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center py-16"
            >
              <div className="glassmorphism rounded-full p-8 mb-6">
                <FaClock className="text-6xl text-primary/70 animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text text-center mb-4">
                Coming Soon
              </h3>
              <p className="text-xl text-text/80 text-center max-w-md">
                Our featured projects are currently under development. Check
                back soon to see our latest work!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
