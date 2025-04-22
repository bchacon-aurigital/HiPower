"use client";
import "aos/dist/aos.css";
import { useContactAction } from '../../hooks/useContactAction';

export default function projectsjCTA() {
    const handleContactClick = useContactAction();

    return (
        <>
            <div id="contacto" className="relative flex items-center justify-center h-screen">
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <picture>
                        <source
                            srcSet="/assets/servicios/mission_section.avif"
                            type="image/avif"
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet="/assets/servicios/mission_section.png"
                            type="image/png"
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet="/assets/servicios/mission_sectionM.avif"
                            type="image/avif"
                            media="(max-width: 767px)"
                        />
                        <source
                            srcSet="/assets/servicios/mission_sectionM.png"
                            type="image/png"
                            media="(max-width: 767px)"
                        />
                        <img
                            src="/assets/servicios/mission_sectionM.png"
                            alt="Paneles solares en techo industrial"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <section
                    className="relative z-20 w-[86%] rounded-tl-3xl rounded-br-3xl h-[66vh] py-12 overflow-hidden mx-auto my-auto bg-white/80"
                    aria-labelledby="cta-heading"
                >
                    <div
                        className="relative flex flex-col items-center justify-center w-full h-full text-black px-4 md:px-8"
                        role="region"
                        aria-labelledby="cta-heading"
                        data-aos="fade-down"
                    >
                        <h2
                            id="cta-heading"
                            className="text-4xl md:text-5xl text-center max-w-[61rem] mb-4 font-roboto font-bold lg:leading-snug"
                            data-aos="fade-down"
                        >
                            Da el siguiente paso hacia un futuro más sostenible con nosotros
                        </h2>

                        <p
                            className="text-md md:text-xl text-center max-w-xs md:max-w-2xl mb-5 font-roboto font-medium text-[#959595]"
                            id="cta-subheading"
                            data-aos="fade-down"
                        >
                            Solicita una evaluación sin costo y comienza a ahorrar, optimizar y asegurar un suministro confiable con energía solar diseñada para tu futuro.
                        </p>

                        <button
                            className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
                            aria-label="Conecta con nosotros para consultoría energética"
                            type="button"
                            onClick={handleContactClick}                        >
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                aria-hidden="true"
                            ></span>
                            <span className="relative z-10 font-bold text-2xl">
                                Recibir Asesoría
                            </span>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};