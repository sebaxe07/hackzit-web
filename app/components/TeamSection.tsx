"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

// Translations for team section
const translations = {
  en: {
    sectionTitle: "Meet Our Team",
    sectionDescription:
      "The talented developers and designers behind HackZit's innovative solutions.",
    teamMembers: [
      {
        id: 1,
        name: "Sebastian Perea",
        role: "Founder & Lead Developer",
        bio: "A passionate software engineer and creative thinker pursuing a Double Master's Degree at Politecnico di Milano. With experience building innovative solutions, from web applications to interactive simulations.",
        image: "/PictureSebas.jpg",
        github: "https://github.com/sebaxe07",
        linkedin: "https://www.linkedin.com/in/sebastian-perea-lopez-7a4005206",
      },
      {
        id: 2,
        name: "Christian Manga",
        role: "Co-founder & Full stack Developer",
        bio: "Bilingual Systems and Computer Engineer with expertise in web and mobile development across various industries, specializing in database structuring, front-end design, and back-end development.",
        image: "/PictureChris.jpg",
        github: "https://github.com/ChristianMA19",
        linkedin:
          "https://www.linkedin.com/in/christiandavidmangaarrazola-webdeveloper/",
      },
      {
        id: 3,
        name: "Carlos Otero",
        role: "Co-founder & Front-end Developer",
        bio: "Computer science major and systems engineer with a lifelong passion for technology and innovation. Strong foundation in developing user-friendly applications and front-end interfaces.",
        image: "/PictureCarlos.jpg",
        github: "https://github.com/carlos204658",
        linkedin: "https://www.linkedin.com/in/carlos-otero-926846300/",
      },
      {
        id: 4,
        name: "Marcela Rivaldo",
        role: "Creative Director",
        bio: "Graphic Designer and Illustrator specializing in user-centered solutions. Combines strategic vision with creative exploration to craft bold visual identities and digital experiences that elevate brand perception.",
        image: "/PictureMarce.jpg",
        web: "https://marcelarivaldo.myportfolio.com/",
        linkedin: "https://www.linkedin.com/in/dayana-marcela-rivaldo/",
      },
    ],
  },
  es: {
    sectionTitle: "Conoce a Nuestro Equipo",
    sectionDescription:
      "Los talentosos desarrolladores y diseñadores detrás de las soluciones innovadoras de HackZit.",
    teamMembers: [
      {
        id: 1,
        name: "Sebastian Perea",
        role: "Fundador y Desarrollador Principal",
        bio: "Maestro de Ciencias en ingenieria de software apasionado y pensador creativo cursando un Doble Grado en el Politecnico di Milano. Con experiencia en la creación de soluciones innovadoras, desde aplicaciones web hasta simulaciones interactivas.",
        image: "/PictureSebas.jpg",
        github: "https://github.com/sebaxe07",
        linkedin: "https://www.linkedin.com/in/sebastian-perea-lopez-7a4005206",
      },
      {
        id: 2,
        name: "Christian Manga",
        role: "Cofundador y Desarrollador Full Stack",
        bio: "Ingeniero de Sistemas y Computación bilingüe con experiencia en desarrollo web y móvil en diversas industrias, especializado en estructuración de bases de datos, diseño front-end y desarrollo back-end.",
        image: "/PictureChris.jpg",
        github: "https://github.com/ChristianMA19",
        linkedin:
          "https://www.linkedin.com/in/christiandavidmangaarrazola-webdeveloper/",
      },
      {
        id: 3,
        name: "Carlos Otero",
        role: "Cofundador y Desarrollador Front-end",
        bio: "Master en Ciencias de la Computación e Ingeniero de Sistemas con una pasión de toda la vida por la tecnología y la innovación. Sólida formación en el desarrollo de aplicaciones amigables para el usuario e interfaces front-end.",
        image: "/PictureCarlos.jpg",
        github: "https://github.com/carlos204658",
        linkedin: "https://www.linkedin.com/in/carlos-otero-926846300/",
      },
      {
        id: 4,
        name: "Marcela Rivaldo",
        role: "Directora Creativa",
        bio: "Diseñadora gráfica e ilustradora especializada en soluciones centradas en el usuario. Combina visión estratégica con exploración creativa para crear identidades visuales audaces y experiencias digitales que elevan la percepción de la marca.",
        image: "/PictureMarce.jpg",
        web: "https://marcelarivaldo.myportfolio.com/",
        linkedin: "https://www.linkedin.com/in/dayana-marcela-rivaldo/",
      },
    ],
  },
};

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mx-auto"
          style={{ maxWidth: "fit-content" }}
        >
          {t.teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(153, 21, 127, 0.3)",
              }}
              className="group bg-background/30 backdrop-blur-md rounded-xl overflow-hidden border border-secondary/10 hover:border-secondary/30"
            >
              <div className="relative h-56 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div
                    className="rounded-[22%] overflow-hidden shadow-lg border-2 border-secondary/30 group-hover:scale-105 h-48 w-48"
                    style={{ transition: "transform 0s" }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={180}
                      height={180}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-text">
                  {member.name}
                </h3>
                <p className="text-secondary mb-3 font-medium">{member.role}</p>
                <p className="text-text/70 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-4">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/60 hover:text-accent transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.web && (
                    <a
                      href={member.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/60 hover:text-accent transition-colors"
                      aria-label={`${member.name}'s Website`}
                    >
                      <FaGlobe size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/60 hover:text-accent transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
