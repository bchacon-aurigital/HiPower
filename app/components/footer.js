import React from 'react';
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex items-center justify-center p-6">
            <footer className="relative text-white w-full rounded-3xl max-w-[90rem] lg:min-h-[20rem] flex flex-col justify-between">
                <div
                    className="absolute inset-0 w-full bg-cover bg-center bg-[url('/assets/BgFooter.avif')] rounded-3xl"
                />

                <div className="relative container mx-auto px-6 md:px-16 pt-8 pb-4 flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between w-full">
                        {/* Frase principal, aparece arriba en responsive */}
                        <div className="text-center md:text-right mb-6 md:mb-0 order-first md:order-last">
                            <h2 className="text-lg md:text-xl font-bold max-w-md mx-auto md:mx-0">
                                Revoluciona tu empresa con energía limpia. Ahorra hoy, protege el mañana.
                            </h2>
                        </div>

                        {/* Sección de Social y Recursos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">SOCIAL</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>
                                        <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://wa.me"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            Whatsapp
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">RECURSOS</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>
                                        <a
                                            href="/"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            Sitio web
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/privacy"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            Política de Privacidad
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/terms"
                                            className="hover:text-[#D5A153] transition-colors"
                                        >
                                            Términos & Condiciones
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Íconos Sociales */}
                    <div className="flex justify-center gap-4 mt-16">
                        <a 
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#D5A153] transition-colors"
                        >
                            <AiFillInstagram size={36} />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#D5A153] transition-colors"
                        >
                            <FaLinkedin size={36} />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#D5A153] transition-colors"
                        >
                            <FaFacebookSquare size={36} />
                        </a>
                        <a
                            href="https://wa.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#D5A153] transition-colors"
                        >
                            <FaWhatsappSquare size={36} />
                        </a>
                    </div>
                </div>

                {/* Créditos */}
                <div className="relative w-full h-6 bg-[#2A5757] rounded-b-3xl">
                    <a
                        href="https://aurigital.com"
                        target="_blank"
                        className="flex justify-center mx-auto w-full mt-1"
                    >
                        <p className="text-white uppercase text-[10px] text-center p-1 hover:text-[#28C0F5]">
                            Design and Development by:
                        </p>
                        <img
                            src="/assets/isotipo.avif"
                            alt="Design and Development by aurigital"
                            className="h-[18px] w-[18px] ml-1"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
