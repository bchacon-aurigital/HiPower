"use client";
import { useContactAction } from "../../hooks/useContactAction";

export default function projectsjCTA() {
  const handleContactClick = useContactAction();

  return (
    <>
      <div
        id="contacto"
        className="relative flex items-center justify-center h-screen px-6 md:px-8 py-8 md:py-14"
      >
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
              loading="lazy"
              decoding="async"
              width="1920"
              height="1080"
            />
          </picture>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <section
          className="relative z-20 md:w-[86%] rounded-tl-3xl rounded-br-3xl h-[66vh] overflow-hidden mx-auto my-auto bg-white/60 md:bg-white/80 performance-offscreen"
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
              className="text-lg md:text-xl text-center max-w-xs md:max-w-2xl mb-5 font-roboto font-medium md:text-[#959595]"
              id="cta-subheading"
              data-aos="fade-down"
            >
              Solicita una evaluación sin costo y comienza a ahorrar, optimizar
              y asegurar un suministro confiable con energía solar diseñada para
              tu futuro.
            </p>
            <div className="flex">
              <a  className="button-project"
                href="https://www.hipowercr.com/"
                aria-label="Volver al inicio"
              >
                Volver al inicio
              </a>
              <button
                className="button-project"
                aria-label="Cotizar mi proyecto para consultoría energética"
                type="button"
                onClick={handleContactClick}
                data-aos-disabled="true"
              >
                Recibir Asesoría
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
