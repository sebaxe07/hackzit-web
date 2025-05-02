"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/HACKZIT_LOGO/SVG/Logo&NameTop.svg"
                alt="HackZit Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-text/70 mb-6">
              Innovative software solutions crafted for businesses and
              organizations looking to transform their ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-text">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Desktop Software
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  AI & ML Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text/70 hover:text-accent transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-text">Contact Us</h3>
            <address className="not-italic">
              <p className="text-text/70 mb-2">123 Innovation Street</p>
              <p className="text-text/70 mb-4">San Francisco, CA 94107</p>
              <p className="text-text/70 mb-2">
                <a
                  href="mailto:info@hackzit.com"
                  className="hover:text-accent transition-colors"
                >
                  info@hackzit.com
                </a>
              </p>
              <p className="text-text/70">
                <a
                  href="tel:+1234567890"
                  className="hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-text/10 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text/60 text-sm mb-4 md:mb-0">
            © {currentYear} HackZit. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-text/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
