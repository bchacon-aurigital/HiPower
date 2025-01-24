import React from 'react';

const SolarCard = ({ 
  title, 
  power, 
  panels, 
  establishment, 
  quote, 
  bgImage 
}) => {
  return (
    <div className="w-full mx-auto relative overflow-hidden rounded-3xl">
      <div 
        className="relative h-[480px] md:h-[700px] bg-cover bg-center "
        style={{
          backgroundImage: `url('${bgImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#002D6A] to-[#037F3F]"
             style={{
               clipPath: 'polygon(0% 100%, 0% 54%, 275% 100%, 0% 100%)'
             }}
        />

        <div className="absolute bottom-0 left-0 right-0 px-8 py-2 text-white z-20">
          <div className="mb-1 md:mb-8">
            <span className="inline-block bg-[#037F3F] px-4 py-1 mb-4 font-roboto font-bold text-2xl rounded-tl-3xl rounded-br-3xl">
              {title}
            </span>
            
            <div className="space-y-2 mb-6">
              <h2 className="font-roboto font-bold text-sm  md:text-2xl">
                Generando {power}
              </h2>
              <p className="font-roboto font-bold text-sm md:text-2xl">
                {panels} paneles instalados
              </p>
            </div>

            <h3 className="font-roboto font-bold text-sm md:text-2xl mb-4 text-end">
              {establishment}
            </h3>

            <div className="flex justify-end">
              <p className="md:text-xl font-inter text-sm font-[300] text-end max-w-sm">
                "{quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolarCardsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-4 max-w-7xl mx-auto">
      <SolarCard
        title="GENERACIÓN"
        power="10 MW"
        panels="+15MIL"
        establishment="PLANTA SOLAR HUACAS"
        quote="Gracias a HiPower, reducimos costos y beneficiamos a más de 4,000 hogares con energía limpia."
        bgImage="/assets/HeroBG.avif"
      />
      
      <SolarCard
        title="MICRO RED"
        power="1MW"
        panels="1501"
        establishment="ESTABLISHMENT LABS"
        quote="HiPower nos ayudó a garantizar energía continua y ahorrar significativamente en horarios pico."
        bgImage="/assets/HeroBG.avif"
      />
    </div>
  );
}