"use client";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
        <img
          src="/assets/404-error.svg"
          alt="Error 404 Ilustración"
          className="w-44 h-44 mb-6"
        />

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl text-center max-w-2xl mb-4 sm:mb-6 font-bold lg:leading-snug text-black"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Vaya! Parece que la página no ha sido encontrada...
        </h2>

        <p
          className="text-base sm:text-lg md:text-2xl text-center max-w-xs md:max-w-3xl mb-5 sm:mb-8 font-medium text-[#959595]"
          id="cta-subheading"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          La página que buscas puede haber sido movida, renombrada o ya no existir. Pero no te preocupes, ¡sigues en el camino hacia la sostenibilidad!
        </p>

        <a
          className="relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-6 sm:mt-8 focus:outline-none focus:ring-2 focus:ring-[#037F3F] focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Conecta con nosotros para consultoría energética"
          href="/"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          ></span>
          <span className="relative z-10 font-bold text-xl sm:text-2xl">
            Volver al Inicio
          </span>
        </a>
      </div>
      <Footer />
    </div>
  );
}