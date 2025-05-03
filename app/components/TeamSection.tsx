"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Sebastian Perea",
    role: "Founder & Lead Developer",
    bio: "A passionate software engineer and creative thinker pursuing a Double Degree at Politecnico di Milano. With experience building innovative solutions, from web applications to interactive simulations.",
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
    bio: "Systems Engineer with a passion for technology and a focus on web development. Experienced in creating user-friendly applications and optimizing performance.",
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
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
            Meet Our Team
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            The talented developers and designers behind HackZit&apos;s
            innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mx-auto"
          style={{ maxWidth: "fit-content" }}
        >
          {teamMembers.map((member) => (
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
