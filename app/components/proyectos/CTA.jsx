"use client";
import "aos/dist/aos.css";

export default function projectsjCTA() {
    return (
        <>
            <div id="contacto" className="relative flex items-center justify-center h-screen">
                <div className="absolute inset-0 z-10">
                    <video
                        className="object-cover w-full h-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/assets/homepage/heroBG.png"
                    >
                        <source src="/assets/proyectos/projects.webm" type="video/webm" />
                        <source src="/assets/proyectos/projects.mp4" type="video/mp4" />
                        <p>Tu navegador no soporta videos HTML5.</p>
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                <section
                    className="relative z-20 w-[86%] rounded-tl-3xl rounded-br-3xl h-[88vh] overflow-hidden mx-auto my-auto bg-white"
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
                            ¿Listo para tu propio proyecto solar?
                        </h2>

                        <p
                            className="text-md md:text-2xl text-center max-w-xs md:max-w-xl mb-5 font-roboto font-medium text-[#959595]"
                            id="cta-subheading"
                            data-aos="fade-down"
                        >
                            Llevá tu empresa, industria o hogar al siguiente nivel con una solución personalizada de energía limpia y confiable.
                        </p>

                        <button
                            className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
                            aria-label="Conecta con nosotros para consultoría energética"
                            type="button"
                            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                aria-hidden="true"
                            ></span>
                            <span className="relative z-10 font-bold text-2xl">
                                Conecta con nosotros
                            </span>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};