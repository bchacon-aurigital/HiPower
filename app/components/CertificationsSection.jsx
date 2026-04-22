import React from "react";
import Image from "next/image";
import { useIsMobile } from "./../hooks/useIsMobile";

const CertificationsSection = () => {
  const isMobile = useIsMobile();
  return (
    <section
      className="relative w-full px-6 md:px-8 py-8 md:py-14"
      aria-labelledby="certificaciones-heading"
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 mb-8">
        <h2
          id="certificaciones-heading"
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Certificaciones internacionales
        </h2>
        <p className="text-sm md:text-lg mb-4 max-w-2xl mx-auto">
          Estas certificaciones respaldan cómo se diseñan, ejecutan y operan sistemas fotovoltaicos, microrredes y soluciones con almacenamiento, asegurando calidad, seguridad y desempeño técnico.
        </p>
        <Image
          src="/assets/landing/HeroIcon.svg"
          alt="star"
          width={64}
          height={64}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden">
          <div
            className="w-full mb-8 bg-black relative aspect-video"
            role="region"
            aria-label="Video sobre certificaciones de HiPower"
          >
            <video
              src="/assets/homepage/nabcep.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay={false}
              muted
              preload="none"
              poster="/assets/homepage/video-poster.png"
            >
              <source
                src={
                  isMobile
                    ? "/assets/homepage/nabcep.mp4"
                    : "/assets/homepage/nabcepMob.mp4"
                }
                type="video/mp4"
              />
              <source
                src={
                  isMobile
                    ? "/assets/homepage/nabcep.webm"
                    : "/assets/homepage/nabcepMob.webm"
                }
                type="video/webm"
              />
              <p>
                Tu navegador no soporta video HTML5. Podés contactarnos para más
                información sobre nuestras certificaciones.
              </p>
            </video>
          </div>

          <ul
            className="lista-certificaciones"
            aria-label="Certificaciones internacionales de HiPower"
          >
            <li className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
              <div className="md:hidden w-full flex justify-center mb-6">
                <Image
                  src="/assets/homepage/NABCEP.svg"
                  alt="Logo de NABCEP - PV Installation Professional"
                  width={150}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="mb-4 md:mb-0 max-w-lg">
                <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                  NABCEP
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  North American Board of Certified Energy Practitioners
                </p>
                <p className="text-gray-600">
                  NABCEP es el estándar más reconocido en la industria solar a nivel internacional, con requisitos estrictos en diseño, instalación y validación de sistemas. Esto asegura que los proyectos se desarrollen bajo criterios técnicos exigentes, reduciendo riesgos y aumentando la confiabilidad del sistema.
                </p>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/assets/homepage/NABCEP.svg"
                  alt="Logo de NABCEP - PV Installation Professional"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </li>

            <li className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
              <div className="md:hidden w-full flex justify-center mb-6">
                <Image
                  src="/assets/homepage/SEI.avif"
                  alt="Logo de SEI - Solar Energy International"
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="mb-4 md:mb-0 max-w-lg">
                <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                  SEI
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Solar Energy International
                </p>
                <p className="text-gray-600">
                  Solar Energy International (SEI) es una organización líder a nivel global en formación técnica en energías renovables, con más de 30 años de experiencia capacitando profesionales del sector. Nuestro equipo ha sido formado bajo sus programas, lo que asegura la aplicación de mejores prácticas internacionales en el diseño e implementación de sistemas energéticos. Esto permite tomar decisiones técnicas fundamentadas desde las etapas iniciales del proyecto.
                </p>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/assets/homepage/SEI.avif"
                  alt="Logo de SEI - Solar Energy International"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </li>

            <li className="py-9 px-8 flex flex-col md:flex-row items-center justify-between">
              <div className="md:hidden w-full flex justify-center mb-6">
                <Image
                  src="/assets/homepage/OSHA.avif"
                  alt="Logo de OSHA - Occupational Safety and Health Administration"
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="mb-4 md:mb-0 max-w-lg">
                <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                  OSHA
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Occupational Safety and Health Administration
                </p>
                <p className="text-gray-600">
                  OSHA establece estándares internacionales en seguridad ocupacional para la ejecución de proyectos industriales. En HiPower, estos lineamientos se integran en cada etapa del proyecto, desde la planificación hasta la construcción, asegurando condiciones seguras en obra y continuidad en la ejecución. Esto reduce riesgos operativos y protege tanto al equipo como al desarrollo del proyecto.
                </p>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/assets/homepage/OSHA.avif"
                  alt="Logo de OSHA - Occupational Safety and Health Administration"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.hipowercr.com/sobrenosotros/"
              className="button-project md:ml-5 mb-5 !mr-0"
              aria-label="Volver al inicio"
            >
              Sobre nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
