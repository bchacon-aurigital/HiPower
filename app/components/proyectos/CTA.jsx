"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContactAction } from '../../hooks/useContactAction';

export default function ProjectsCTA() {
    const handleContactClick = useContactAction();

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 750,
            delay: 100
        });
    }, []);

    return (
        <div 
            id="contacto" 
            className="relative min-h-screen w-full overflow-hidden py-16 flex items-center justify-center"
            role="region" 
            aria-labelledby="cta-heading"
        >
            {/* Video de fondo con overlay */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <div className="relative w-full h-full">
                    <video
                        className="absolute object-cover w-full h-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/assets/homepage/HeroBG.png"
                        >
                          <source src="/assets/proyectos/projects.webm" type="video/webm" />
                          <source src="/assets/proyectos/projects.mp4" type="video/mp4" />
                        <p>Tu navegador no soporta videos HTML5.</p>
                    </video>
                </div>
            </div>

            {/* Contenido principal */}
            <section
                className="relative z-10 w-11/12 sm:w-10/12 md:w-[86%] rounded-tl-3xl rounded-br-3xl py-16 sm:py-20 md:py-24 max-h-[90vh] md:max-h-[85vh] overflow-hidden mx-auto bg-white/60 md:bg-white/80 shadow-2xl"
                aria-labelledby="cta-heading"
            >
                <div
                    className="relative flex flex-col items-center justify-center w-full h-full text-black px-4 sm:px-6 md:px-8 py-8"
                    data-aos="fade-up"
                >
                    <h2
                        id="cta-heading"
                        className="text-3xl sm:text-4xl md:text-5xl text-center max-w-[61rem] mb-4 sm:mb-6 font-bold lg:leading-snug"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        ¿Listo para tu propio proyecto solar?
                    </h2>

                    <p
                        className="text-base sm:text-lg md:text-2xl text-center max-w-xs sm:max-w-lg md:max-w-xl mb-5 sm:mb-8 font-medium text-black md:text-[#959595] font-roboto"
                        id="cta-subheading"
                        data-aos="fade-up"
                        data-aos-delay="250"
                    >
                        Llevá tu empresa, industria o hogar al siguiente nivel con una solución personalizada de energía limpia y confiable.
                    </p>

                    <button
                        className="relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-6 sm:mt-8 focus:outline-none focus:ring-2 focus:ring-[#037F3F] focus:ring-offset-2 focus:ring-offset-white"
                        aria-label="Conecta con nosotros para consultoría energética"
                        type="button"
                        onClick={handleContactClick}
                        data-aos="fade-up"
                        data-aos-delay="350"
                    >
                        <span
                            className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            aria-hidden="true"
                        ></span>
                        <span className="relative z-10 font-bold text-xl sm:text-2xl">
                            Conecta con nosotros
                        </span>
                    </button>
                </div>
            </section>
        </div>
    );
}