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

  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "SERVICIOS", href: "/servicios" },
    { name: "PROYECTOS", href: "/proyectos" },
    { name: "SOBRE NOSOTROS", href: "/aboutUs" },
    { name: "CONTACTO", action: "contact" },
    { name: "BLOG", href: "/", comingSoon: true },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#002D6A] to-[#037F3F] text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 flex-grow justify-between max-w-4xl">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Nosotros</h3>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {link.comingSoon ? (
                      <div className="group relative">
                        <span className="absolute -top-3 left-0 whitespace-nowrap text-[#037F3F] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Proximamente!
                        </span>
                        <a 
                          href="/#" 
                          className="hover:text-gray-300 transition-colors opacity-100 group-hover:opacity-50"
                        >
                          {link.name}
                        </a>
                      </div>
                    ) : link.action === "contact" ? (
                      <button
                        onClick={handleContactClick}
                        className="hover:text-gray-300 transition-colors bg-transparent border-none p-0 cursor-pointer text-left text-white"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href} className="hover:text-gray-300 transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Relaciones Públicas</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.nacion.com/brandvoice/contenido-a-la-medida/hipower-aliado-del-planeta-y-del-ahorro-energetico/Z3UUX53BCRB2RNXT6XE7NFDBWM/story" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gray-300 transition-colors"
                  >
                    HiPower, aliado del planeta
                  </a>
                </li>
                <li>
                  <a 
                    href="https://energiaestrategica.com/anticipan-un-apogeo-de-energia-solar-en-costa-rica" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gray-300 transition-colors"
                  >
                    Apogeo de energía solar
                  </a>
                </li>
                <li>
                  <a 
                    href="https://energiaestrategica.com/hipower-amplia-su-pipeline-de-proyectos-de-energia-solar-y-almacenamiento-en-costa-rica" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gray-300 transition-colors"
                  >
                    HiPower amplía proyectos
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Temas legales</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?param1=NRTC&nValor1=1&nValor2=96064" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gray-300 transition-colors"
                  >
                    Ley 10.086
                  </a>
                </li>
                <li>
                  <a 
                    href="/Términos y Condiciones de HiPower Systems.pdf" 
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
                    <a href="mailto:asesor@hipowercr.com" className="hover:text-gray-300 transition-colors">
                      asesor@hipowercr.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">General: </span>
                    <a href="mailto:info@hipowercr.com" className="hover:text-gray-300 transition-colors">
                      info@hipowercr.com
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
                    aria-label={`Visitar ${link.name} de HiPower`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center lg:items-end space-y-6 lg:max-w-md">
            <Image
              src="/assets/landing/LogoHiPower.svg"
              alt="Logo de HiPower"
              width={280}
              height={84}
              className="mb-4 mx-auto"
              priority
            />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5525.417955663463!2d-84.03334208811162!3d10.0014812900627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e57dbd4b1e8f%3A0xed30c90dcaa44df0!2sHiPower!5e1!3m2!1ses!2scr!4v1745347574017!5m2!1ses!2scr" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de HiPower"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;