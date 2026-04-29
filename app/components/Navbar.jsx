"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useContactAction } from '../hooks/useContactAction';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowSocial(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Updated links with trailing slashes and absolute URLs
  const navLinks = [
    { name: "INICIO", href: "/", internal: true },
    { name: "SERVICIOS", href: "/servicios/", internal: true },
    { name: "PROYECTOS", href: "/proyectos/", internal: true },
    { name: "NOSOTROS", href: "/sobrenosotros/", internal: true },
    { name: "CONTACTO", href: "#", action: "contact" },
    { name: "BLOG", href: "https://blog.hipowercr.com/" },
  ];

  const socialLinks = [
    { icon: <FaInstagram className="text-3xl" aria-hidden="true" />, href: "https://www.instagram.com/hipower.cr/", name: "Instagram" },
    { icon: <FaLinkedin className="text-3xl" aria-hidden="true" />, href: "https://www.linkedin.com/company/hipowercr/", name: "LinkedIn" },
    { icon: <FaFacebook className="text-3xl" aria-hidden="true" />, href: "https://www.facebook.com/hipowercr", name: "Facebook" },
    { icon: <FaYoutube className="text-3xl" aria-hidden="true" />, href: "https://www.youtube.com/@hipowercr", name: "YouTube" },
  ];

  const handleContactClick = useContactAction();

  return (
    <>
      <nav className="absolute w-full z-50 px-6 py-4" aria-label="Navegación principal" data-aos="fade-down">
        <div className="container mx-auto flex items-center justify-between xl:justify-center gap-10">
          <Link
            href="/"
            className={`flex-shrink-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            aria-label="HiPower - Ir a inicio"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/landing/logoHP.png"
              alt="Logo de HiPower"
              className="w-[200px] sm:w-[360px] h-auto"
            />
          </Link>

          <button
            className="xl:hidden text-white focus:outline-none relative w-6 h-6 z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute w-6 h-1 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute w-6 h-1 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`absolute w-6 h-1 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </button>

          <div className="hidden xl:flex items-center gap-16">
            <ul className="bg-white rounded-full px-9 py-4 flex items-center gap-4 2xl:gap-8 text-sm" aria-label="Menú principal">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.comingSoon ? (
                    <div className="group relative flex flex-col items-center">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[#037F3F] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Proximamente!
                      </span>
                      <a
                        href="/#"
                        className="text-gray-800 font-medium transition-colors opacity-100 group-hover:opacity-50"
                      >
                        {link.name}
                      </a>
                    </div>
                  ) : link.action === "contact" ? (
                    <button
                      onClick={handleContactClick}
                      className="text-gray-800 hover:text-[#037F3F] font-medium transition-colors bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : link.internal ? (
                    <Link
                      href={link.href}
                      className="text-gray-800 hover:text-[#037F3F] font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-800 hover:text-[#037F3F] font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=50670662545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#037F3F] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform"
            >
              <FaWhatsapp className="text-xl" />
              Soporte y Mantenimiento
            </a>
          </div>
        </div>

      </nav>

      <ul
        className={`hidden xl:flex flex-col items-center gap-2 fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
          showSocial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
        aria-label="Redes sociales"
      >
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white/25 rounded-tl-md rounded-br-md hover:bg-white/40 transition-colors text-white"
              aria-label={`Visitar ${link.name} de HiPower`}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 w-[80%] h-full bg-gradient-to-r from-[#037F3F] to-[#002D6A] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav aria-label="Menú móvil">
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.comingSoon ? (
                    <div className="group relative flex flex-col">
                      <span className="absolute -top-3 left-0 whitespace-nowrap text-[#037F3F] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Proximamente!
                      </span>
                      <a 
                        href="/#" 
                        className="text-white text-xl font-medium hover:text-gray-300 transition-colors opacity-100 group-hover:opacity-50"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </div>
                  ) : link.action === "contact" ? (
                    <button
                      onClick={(e) => {
                        toggleMenu();
                        handleContactClick();
                      }}
                      className="text-white text-xl font-medium hover:text-gray-300 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  ) : link.internal ? (
                    <Link
                      href={link.href}
                      className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto mb-8 space-y-4">
            <div>
              <p className="text-white text-lg mb-4" id="social-heading">Síguenos</p>
              <ul 
                className="flex gap-4" 
                aria-labelledby="social-heading"
              >
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label={`Visitar ${link.name} de HiPower`}
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=50670662545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#037F3F] px-4 py-3 rounded-lg font-semibold w-full hover:bg-gray-100 transition-colors duration-300 hover:scale-[1.02] transform"
            >
              <FaWhatsapp className="text-2xl" />
              Soporte y Mantenimiento
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;