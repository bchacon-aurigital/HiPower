"use client";
import "aos/dist/aos.css";
import { useContactAction } from '../hooks/useContactAction';
import { useIsMobile } from '../hooks/useIsMobile';

export default function EnergyCTA() {
    const handleContactClick = useContactAction();
    const isMobile = useIsMobile();

    return (
        <>
            <div id="contacto" className="flex items-center justify-center bg-white px-6 md:px-8 py-8 md:py-14">
                <section
                    className="relative md:w-[86%] rounded-tl-3xl rounded-br-3xl h-[88vh] overflow-hidden mx-auto performance-offscreen"
                    aria-labelledby="cta-heading"
                >
                    <div className="absolute inset-0" aria-hidden="true">
                        						<video
							className="object-cover w-full h-full"
							autoPlay
							muted
							loop
							playsInline
							poster="/assets/homepage/HeroBG.png"
							preload="metadata"
							fetchPriority="low"
						>
                            <source src={isMobile ? "/assets/homepage/HPHeroVidMobile.webm" : "/assets/homepage/HPHeroVid.webm"} type="video/webm" />
                            <source src={isMobile ? "/assets/homepage/HPHeroVidMobile.mp4" : "/assets/homepage/HPHeroVid.mp4"} type="video/mp4" />
                            <p>Tu navegador no soporta videos HTML5.</p>
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    </div>

                    <div
                        className="relative flex flex-col items-center justify-center w-full h-full text-white px-4 md:px-8"
                        role="region"
                        aria-labelledby="cta-heading"
                        data-aos="fade-down"
                    >

                        <h2
                            id="cta-heading"
                            className="text-4xl md:text-5xl text-center max-w-[61rem] mb-4 font-roboto font-bold lg:leading-snug"
                            data-aos="fade-down"
                        >
                            Evalúa si la energía solar tiene sentido para tu operación
                        </h2>

                        <p
                            className="text-md md:text-2xl text-center max-w-xs md:max-w-xl mb-5 font-roboto font-medium text-[#CFCFCF]"
                            id="cta-subheading"
                            data-aos="fade-down"
                        >
                            Evaluamos tu operación, tu consumo energético y tus objetivos para definir si una solución solar realmente hace sentido desde el punto de vista técnico y económico.
                        </p>

                        <button
                            className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
                            aria-label="Hablar con un especialista"
                            type="button"
                            onClick={handleContactClick}
                            data-aos-disabled="true"
                        >
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                aria-hidden="true"
                            ></span>
                            <span className="relative z-10 font-bold text-2xl">
                                Hablar con un especialista
                            </span>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};