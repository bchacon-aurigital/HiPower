"use client";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
        <img
          src="/assets/404-error.svg"
          alt="Error 404 Ilustración"
          className="w-44 h-44 mb-6"
          loading="eager"
          decoding="async"
          width="176"
          height="176"
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
          className="button-project"
          aria-label="Vuelve al inicio"
          href="https://www.hipowercr.com/"
          data-aos="fade-up"
          data-aos-delay="350"
        >
            Volver al Inicio
        </a>
      </div>
      <Footer />
    </div>
  );
}