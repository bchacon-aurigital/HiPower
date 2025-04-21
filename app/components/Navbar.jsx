"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

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

  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "SERVICIOS", href: "/servicios" },
    { name: "PROYECTOS", href: "/proyectos" },
    { name: "SOBRE NOSOTROS", href: "/aboutUs" },
    { name: "CONTACTO", href: "/aboutUs" },
    { name: "BLOG", href: "/blog" },
  ];

  const socialLinks = [
    { icon: <FaInstagram className="text-3xl" aria-hidden="true" />, href: "https://instagram.com", name: "Instagram" },
    { icon: <FaLinkedin className="text-3xl" aria-hidden="true" />, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: <FaFacebook className="text-3xl" aria-hidden="true" />, href: "https://facebook.com", name: "Facebook" },
    { icon: <FaYoutube className="text-3xl" aria-hidden="true" />, href: "https://youtube.com", name: "YouTube" },
  ];

  return (
    <>
      <nav className="absolute w-full z-50 px-6 py-4" role="navigation" aria-label="Navegación principal" data-aos="fade-down"      >
        <div className="container mx-auto flex items-center justify-between xl:justify-center gap-10">
          <Link 
            href="/" 
            className={`flex-shrink-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            aria-label="HiPower - Ir a inicio"
          >
            <Image
              src="/assets/landing/LogoHiPower.svg"
              alt="Logo de HiPower"
              width={200}
              height={74}
              className="h-auto brightness-0 invert"
              priority
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

          <div className="hidden xl:flex items-center gap-16" role="menubar">
            <div className="bg-white rounded-full px-9 py-4 flex items-center gap-4 2xl:gap-8 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-[#037F3F] font-medium transition-colors"
                  role="menuitem"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2" role="list" aria-label="Redes sociales">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/25 rounded-tl-md rounded-br-md hover:bg-white/40 transition-colors"
                  aria-label={`Visitar ${link.name} de HiPower`}
                  role="listitem"
                >
                  {link.icon}
                </a>
              ))}
            </div>
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
          <nav className="flex flex-col space-y-6" role="navigation" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
                role="menuitem"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto mb-8">
            <h3 className="text-white text-lg mb-4" id="social-heading">Síguenos</h3>
            <div 
              className="flex gap-4" 
              role="list" 
              aria-labelledby="social-heading"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label={`Visitar ${link.name} de HiPower`}
                  role="listitem"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 