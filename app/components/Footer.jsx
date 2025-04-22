"use client";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { useContactAction } from '../hooks/useContactAction';


const Footer = () => {
  const handleContactClick = useContactAction();

  const socialLinks = [
    { icon: <FaInstagram className="text-2xl sm:text-3xl" />, href: "https://www.instagram.com/hipower.cr/", name: "Instagram" },
    { icon: <FaLinkedin className="text-2xl sm:text-3xl" />, href: "https://www.linkedin.com/company/hipowercr/", name: "LinkedIn" },
    { icon: <FaFacebook className="text-2xl sm:text-3xl" />, href: "https://www.facebook.com/hipowercr", name: "Facebook" },
    { icon: <FaYoutube className="text-2xl sm:text-3xl" />, href: "https://www.youtube.com/@hipowercr", name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#002D6A] to-[#037F3F] text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
          <div className="flex-shrink-0 text-center lg:text-left">
            <Image
              src="/assets/landing/LogoHiPower.svg"
              alt="Logo de HiPower"
              width={280}
              height={84}
              className="mb-4 mx-auto lg:mx-0"
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row gap-12 flex-grow justify-between max-w-4xl">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Nosotros</h3>
              <ul className="space-y-3">
                <li><Link href="/aboutUs" className="hover:text-gray-300 transition-colors">Empresa</Link></li>
                <li><Link href="/proyectos" className="hover:text-gray-300 transition-colors">Proyectos</Link></li>
                <li><Link href="/#partners" className="hover:text-gray-300 transition-colors">Aliados</Link></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Links Útiles</h3>
              <ul className="space-y-3">
                <li><Link href="/que-es-grid-tied" className="hover:text-gray-300 transition-colors">¿Qué es Grid Tied?</Link></li>
                <li><Link href="/que-es-off-grid" className="hover:text-gray-300 transition-colors">¿Qué es Off-Grid?</Link></li>
                <li><div  onClick={handleContactClick} className="cursor-pointer hover:text-gray-300 transition-colors">Cotizar</div></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Temas legales</h3>
              <ul className="space-y-3">
                <li><Link href="/ley-20969" className="hover:text-gray-300 transition-colors">Ley 20969</Link></li>
                <li>
                  <a 
                    href="/Términos y Condiciones de HiPower Systems.pdf" 
                    download="HiPower-Terminos-y-Condiciones.pdf"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-6 text-center md:text-left">
                <h3 className="text-lg font-bold mb-4">Contacto</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-bold">Ventas: </span>
                    <a href="mailto:asesor@hipowerco.com" className="hover:text-gray-300 transition-colors">
                      asesor@hipowerco.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">General: </span>
                    <a href="mailto:info@hipowerco.com" className="hover:text-gray-300 transition-colors">
                      info@hipowerco.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Teléfono: </span>
                    <a href="tel:+50640004090" className="hover:text-gray-300 transition-colors">
                      +506 4000-4090
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center md:justify-start gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#4C9678] rounded-tl-md rounded-br-md hover:opacity-80 transition-all duration-300 hover:scale-110"
                    aria-label={`Visitar ${link.label} de HiPower`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 