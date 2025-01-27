import React from "react";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex items-center justify-center p-6" role="contentinfo">
            <footer
                className="relative text-white w-full rounded-3xl max-w-[90rem] lg:min-h-[20rem] flex flex-col justify-between"
                aria-labelledby="footer-heading"
            >
                <div
                    className="absolute inset-0 w-full bg-cover bg-center md:bg-[url('/assets/BgFooter.avif')] rounded-3xl"
                    aria-hidden="true"
                    style={{
                        backgroundImage: `url('/assets/FooterBgResponsive.avif'), url('/assets/FooterBgResponsive.png'), url('/assets/BgFooter.png')`,
                    }}
                />

                <div className="relative container mx-auto px-6 md:px-16 pt-8 pb-4 flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between w-full">
                        <div
                            className="text-center md:text-right mb-6 md:mb-0 order-first md:order-last"
                            aria-label="Frase inspiradora para el uso de energía limpia"
                        >
                            <h2
                                id="footer-heading"
                                className="text-lg md:text-xl font-bold max-w-md mx-auto md:mx-0 text-right"
                            >
                                Revoluciona tu empresa con energía limpia. Ahorra hoy, protege el mañana.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3
                                    id="social-heading"
                                    className="text-lg md:text-xl font-semibold"
                                >
                                    SOCIAL
                                </h3>
                                <ul className="mt-2 space-y-1" aria-labelledby="social-heading">
                                    <li>
                                        <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace a Instagram de HiPower"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace a LinkedIn de HiPower"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace a Facebook de HiPower"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://wa.me"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace a WhatsApp de HiPower"
                                        >
                                            Whatsapp
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3
                                    id="resources-heading"
                                    className="text-lg md:text-xl font-semibold"
                                >
                                    RECURSOS
                                </h3>
                                <ul className="mt-2 space-y-1" aria-labelledby="resources-heading">
                                    <li>
                                        <a
                                            href="/"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace al sitio web principal"
                                        >
                                            Sitio web
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/privacy"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace a la Política de Privacidad"
                                        >
                                            Política de Privacidad
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/terms"
                                            className="hover:text-[#037F3F] transition-colors"
                                            aria-label="Enlace a Términos y Condiciones"
                                        >
                                            Términos & Condiciones
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-5 mt-16">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#037F3F] transition-colors text-[3rem] lg:text-[3.5rem]"
                            aria-label="Ícono de enlace a Instagram"
                        >
                            <AiFillInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#037F3F] transition-colors text-[3rem] lg:text-[3.5rem]"
                            aria-label="Ícono de enlace a LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#037F3F] transition-colors text-[3rem] lg:text-[3.5rem]"
                            aria-label="Ícono de enlace a Facebook"
                        >
                            <FaFacebookSquare />
                        </a>
                        <a
                            href="https://wa.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#037F3F] transition-colors text-[3rem] lg:text-[3.5rem]"
                            aria-label="Ícono de enlace a WhatsApp"
                        >
                            <FaWhatsappSquare />
                        </a>
                    </div>
                </div>

                <div className="relative w-full h-6 bg-[#2A5757] rounded-b-3xl">
                    <a
                        href="https://aurigital.com"
                        target="_blank"
                        className="flex justify-center mx-auto w-full mt-1"
                        aria-label="Créditos de diseño y desarrollo por Aurigital"
                    >
                        <p className="text-white uppercase text-[10px] text-center p-1 hover:text-[#28C0F5]">
                            Design and Development by:
                        </p>
                        <img
                            src="/assets/isotipo.avif"
                            alt="Aurigital logo"
                            className="h-[18px] w-[18px] ml-1"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
