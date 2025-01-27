import React from 'react';

const SolarCard = ({
  title,
  power,
  panels,
  establishment,
  quote,
  bgImage,
  bgAlt
}) => {
  return (
    <div
      className="w-full mx-auto relative overflow-hidden rounded-[2rem]"
      role="article"
      aria-labelledby={`card-title-${title}`}
      aria-describedby={`card-description-${title}`}
    >
      <div
        className="relative h-[480px] md:h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`
        }}
        aria-label={bgAlt} // Texto alternativo para la imagen de fondo
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#002D6A] to-[#037F3F]"
          style={{
            clipPath: 'polygon(0% 100%, 0% 54%, 275% 100%, 0% 100%)'
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 px-8 py-2 text-white z-20">
          <div className="mb-1 md:mb-8">
            <span
              id={`card-title-${title}`}
              className="inline-block bg-[#037F3F] px-4 py-1 mb-4 font-roboto font-bold text-2xl rounded-tl-3xl rounded-br-3xl"
            >
              {title}
            </span>

            <div
              className="space-y-2 mb-6"
              id={`card-description-${title}`}
            >
              <h2 className="font-roboto font-bold text-sm md:text-2xl">
                Generando {power}
              </h2>
              <p className="font-roboto font-bold text-sm md:text-2xl">
                {panels} paneles instalados
              </p>
            </div>

            <h3
              className="font-roboto font-bold text-sm md:text-2xl mb-4 text-end"
              aria-label={`Establecimiento: ${establishment}`}
            >
              {establishment}
            </h3>

            <div className="flex justify-end">
              <p
                className="md:text-xl font-inter text-sm font-[300] text-end max-w-sm"
                aria-label={`Cita del cliente: ${quote}`}
              >
                "{quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SolarCardsGrid() {
  return (
    <>
      <h2 className='text-3xl md:text-4xl text-center mx-auto font-roboto font-bold text-[#002D6A] mb-1 max-w-[60%]'>Empresas que ya confían en nosotros</h2>
      <h3 className='text-xl md:text-2xl text-center mx-auto font-roboto font-bold text-[#000000] pb-14'>Ejemplos de proyectos destacados</h3>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-4 max-w-7xl mx-auto"
        role="list"
        aria-label="Tarjetas de proyectos solares de HiPower"
      >
        <SolarCard
          title="GENERACIÓN"
          power="10 MW"
          panels="+15MIL"
          establishment="PLANTA SOLAR HUACAS"
          quote="Gracias a HiPower, reducimos costos y beneficiamos a más de 4,000 hogares con energía limpia."
          bgImage="/assets/landing/HeroBG.avif"
          bgAlt="Imagen de una planta solar a gran escala, representando el proyecto Huacas"
        />

        <SolarCard
          title="MICRO RED"
          power="1MW"
          panels="1501"
          establishment="ESTABLISHMENT LABS"
          quote="HiPower nos ayudó a garantizar energía continua y ahorrar significativamente en horarios pico."
          bgImage="/assets/landing/HeroBG.avif"
          bgAlt="Imagen de instalaciones solares en un entorno empresarial, representando Establishment Labs"
        />
      </div>
    </>
  );
}
