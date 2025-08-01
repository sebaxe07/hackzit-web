"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaPaperPlane, FaLanguage } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

// Translations object with English and Spanish text
const translations = {
  en: {
    getInTouch: "Get In Touch",
    projectDescription:
      "Have a project in mind or want to learn more about our services? Contact us!",
    contactInformation: "Contact Information",
    email: "Email",
    phone: "Phone",
    followUs: "Follow Us",
    sendMessage: "Send Us a Message",
    successMessage: "Thanks for your message! We'll get back to you soon.",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    messagePlaceholder: "Tell us about your project...",
    send: "Send Message",
    namePlaceholder: "John Smith",
    emailPlaceholder: "john@example.com",
    subjectPlaceholder: "Project Inquiry",
  },
  es: {
    getInTouch: "Ponte en Contacto",
    projectDescription:
      "¿Tienes un proyecto en mente o quieres saber más sobre nuestros servicios? ¡Contáctanos!",
    contactInformation: "Información de Contacto",
    email: "Correo",
    phone: "Teléfono",
    followUs: "Síguenos",
    sendMessage: "Envíanos un Mensaje",
    successMessage:
      "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.",
    yourName: "Tu Nombre",
    yourEmail: "Tu Correo",
    subject: "Asunto",
    yourMessage: "Tu Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
    send: "Enviar Mensaje",
    namePlaceholder: "Juan Pérez",
    emailPlaceholder: "juan@ejemplo.com",
    subjectPlaceholder: "Consulta de Proyecto",
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // Use the global language context instead of local state
  const { language, toggleLanguage } = useLanguage();

  // Get translations based on current language
  const t = translations[language];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend or a service
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: t.successMessage,
    });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="contact" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary transition-colors"
            aria-label={
              language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
            }
          >
            <FaLanguage size={20} />
            <span>{language === "en" ? "EN" : "ES"}</span>
          </button>
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            {t.getInTouch}
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            {t.projectDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-background/30 backdrop-blur-md rounded-xl p-8 border border-accent/10 h-full">
              <h3 className="text-2xl font-bold mb-6 text-text">
                {t.contactInformation}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">{t.email}</p>
                    <a
                      href="mailto:hackzit.dev@gmail.com"
                      className="hover:text-accent transition-colors"
                    >
                      hackzit.dev@gmail.com
                    </a>
                    <br />
                    <a
                      href="mailto:sebaxe09@gmail.com"
                      className="hover:text-accent transition-colors"
                    >
                      sebaxe09@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FaPhone className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">{t.phone}</p>
                    <a
                      href="tel:+1234567890"
                      className="text-text/70 hover:text-accent transition-colors"
                    >
                      +39 (344) 342 2393
                    </a>
                    <br />
                    <a
                      href="tel:+1234567890"
                      className="text-text/70 hover:text-accent transition-colors"
                    >
                      +57 (321) 755 1344
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="font-medium text-text mb-2">{t.followUs}</p>
                <div className="flex space-x-4">
                  {/* Social media icons remain unchanged */}
                  {/* ... existing social media icons ... */}
                  <span
                    className="p-3 bg-primary/5 rounded-full cursor-not-allowed opacity-50"
                    title="Coming soon"
                  >
                    <svg
                      className="w-5 h-5 text-primary/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>

                  {/* Disabled Twitter icon */}
                  <span
                    className="p-3 bg-primary/5 rounded-full cursor-not-allowed opacity-50"
                    title="Coming soon"
                  >
                    <svg
                      className="w-5 h-5 text-primary/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </span>

                  {/* Disabled Instagram icon */}
                  <span
                    className="p-3 bg-primary/5 rounded-full cursor-not-allowed opacity-50"
                    title="Coming soon"
                  >
                    <svg
                      className="w-5 h-5 text-primary/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>

                  {/* Active GitHub icon */}
                  <a
                    href="https://github.com/hackzitDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-background/30 backdrop-blur-md rounded-xl p-8 border border-accent/10">
              <h3 className="text-2xl font-bold mb-6 text-text">
                {t.sendMessage}
              </h3>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg mb-6 ${
                    formStatus.success
                      ? "bg-green-500/20 text-green-200"
                      : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-text"
                  >
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-text placeholder:text-text/50"
                    placeholder={t.namePlaceholder}
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-text"
                  >
                    {t.yourEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-text placeholder:text-text/50"
                    placeholder={t.emailPlaceholder}
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-text"
                  >
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-text placeholder:text-text/50"
                    placeholder={t.subjectPlaceholder}
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-text"
                  >
                    {t.yourMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-accent/20 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-text placeholder:text-text/50"
                    placeholder={t.messagePlaceholder}
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {t.send} <FaPaperPlane />
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
