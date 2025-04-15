import React from "react";
import Image from "next/image";

const StatisticsSection = () => {
  const stats = [
    {
      id: "solar-capacity",
      value: "+30 MW",
      label: "Capacidad solar instalada",
      iconSize: 64,
    },
    {
      id: "storage-capacity",
      value: "+5 MWh",
      label: "Capacidad de almacenamiento",
      iconSize: 96,
    },
    {
      id: "co2-reduction",
      value: "-15k ton",
      label: "Reducción anual de CO2",
      iconSize: 64,
    },
  ];
  
  return (
    <section className="w-full py-16 md:py-24 bg-gray-900 text-white" aria-labelledby="statistics-heading" role="region">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold mb-12">
          Nuestro <span className="text-[#037F3F] font-bold">impacto</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="relative bg-black/20 text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105"
              role="article"
              aria-labelledby={`${stat.id}-heading`}
            >
              <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
                background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
              }}></div>
              <div className="relative z-10 text-white mb-4">
                <Image
                  src="/assets/landing/HeroIcon.svg"
                  alt={`Icono de estrella representando ${stat.label}`}
                  width={stat.iconSize}
                  height={stat.iconSize}
                  className="mb-6"
                />
              </div>
              <h3 id={`${stat.id}-heading`} className="relative z-10 text-5xl font-bold text-[#037F3F] mb-2">{stat.value}</h3>
              <p className="relative z-10 text-2xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;