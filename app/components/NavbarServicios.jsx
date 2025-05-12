"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { useContactAction } from '../hooks/useContactAction';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Updated navLinks with absolute URLs and trailing slashes
  const navLinks = [
    { name: "INICIO", href: "https://www.hipowercr.com/" },
    { name: "SERVICIOS", href: "https://www.hipowercr.com/servicios/" },
    { name: "PROYECTOS", href: "https://www.hipowercr.com/proyectos/" },
    { name: "SOBRE NOSOTROS", href: "https://www.hipowercr.com/sobrenosotros/" },
    { name: "CONTACTO", href: "#", action: "contact" },
    { name: "BLOG", href: "/", comingSoon: true },
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
          <a 
            href="https://www.hipowercr.com/" 
            className={`flex-shrink-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            aria-label="HiPower - Ir a inicio"
          >
            <Image
              src="/assets/landing/LogoHiPower.svg"
              alt="Logo de HiPower"
              width={200}
              height={74}
              className="h-auto brightness-0 invert hidden"
              loading="lazy"
            />
          </a>

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

          {/* Reemplazando div con role="menubar" por un nav con ul/li apropiados */}
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

            <ul className="flex items-center gap-2" aria-label="Redes sociales">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white/25 rounded-tl-md rounded-br-md hover:bg-white/40 transition-colors"
                    aria-label={`Visitar ${link.name} de HiPower`}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

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

          <div className="mt-auto mb-8">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;