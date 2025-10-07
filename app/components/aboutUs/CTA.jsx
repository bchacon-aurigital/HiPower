"use client";
import { useContactAction } from "../../hooks/useContactAction";

export default function projectsjCTA() {
  const handleContactClick = useContactAction();

  return (
    <>
      <div
        id="contacto"
        className="relative flex items-center justify-center h-screen"
      >
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <picture>
            <source
              srcSet="/assets/aboutUs/mission_section.avif"
              type="image/avif"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/assets/aboutUs/mission_section.png"
              type="image/png"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/assets/aboutUs/mission_sectionM.avif"
              type="image/avif"
              media="(max-width: 767px)"
            />
            <source
              srcSet="/assets/aboutUs/mission_sectionM.png"
              type="image/png"
              media="(max-width: 767px)"
            />
            <img
              src="/assets/aboutUs/mission_sectionM.png"
              alt="Paneles solares en techo industrial"
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
              decoding="async"
              width="1920"
              height="1080"
            />
          </picture>
        </div>
        <section
          className="relative z-20 w-[86%] rounded-tl-3xl rounded-br-3xl h-[66vh] py-12 overflow-hidden mx-auto my-auto"
          aria-labelledby="cta-heading"
        >
          <div
            className="relative flex flex-col items-center justify-center w-full h-full text-white px-4 md:px-8"
            role="region"
            aria-labelledby="cta-heading"
            data-aos="fade-down"
          >
            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl text-center max-w-xl mb-4 font-roboto font-bold lg:leading-snug"
              data-aos="fade-down"
            >
              <strong>¿Quieres impulsar un cambio real?</strong>
            </h2>

            <p
              className="text-md md:text-xl text-center max-w-[36rem] mb-5 font-roboto font-medium text-white"
              id="cta-subheading"
              data-aos="fade-down"
            >
              Conversemos sobre cómo la energía solar y el almacenamiento puede
              ser parte de tu presente y futuro.
            </p>

            <div className="flex">
              <button
                className="button-project"
                aria-label="Forma parte del cambio"
                type="button"
                onClick={handleContactClick}
                data-aos-disabled="true"
              >
                Forma parte del cambio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
