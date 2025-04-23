import React from "react";
import Image from "next/image";

const StatisticsSection = () => {
  return (
    <section className="w-full py-16 md:py-24" aria-labelledby="statistics-heading" role="region">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 id="statistics-heading" className="text-3xl text-white md:text-4xl lg:text-5xl leading-tight font-semibold mb-12">
          ¿Por qué{" "}
          <span className="text-[#339C59] font-bold">Hi Power</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div 
            className="relative bg-black/20 text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105"
            role="article"
            aria-labelledby="experience-heading"
          >
            <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
              background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
            }}></div>
            <div className="relative z-10 text-white mb-4">
              <Image
                src="/assets/landing/HeroIcon.svg"
                alt="Icono de estrella representando años de experiencia"
                width={64}
                height={64}
                className="mb-6"
              />
            </div>
            <h3 id="experience-heading" className="relative z-10 text-5xl font-bold text-blue-500 mb-2">+14</h3>
            <p className="relative z-10 text-2xl">años de experiencia</p>
          </div>
          
          <div 
            className="relative bg-black bg-opacity-60 text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105"
            role="article"
            aria-labelledby="storage-heading"
          >
            <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
              background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
            }}></div>
            <div className="relative z-10 text-white mb-4">
              <Image
                src="/assets/landing/HeroIcon.svg"
                alt="Icono de estrella representando capacidad de almacenamiento"
                width={96}
                height={96}
              />
            </div>
            <h3 id="solar-heading" className="relative z-10 text-5xl font-bold text-blue-500 mb-2">+30 MW</h3>
            <p className="relative z-10 text-2xl">en nuestra gestión solar</p>
          </div>
          
          <div 
            className="relative bg-black text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105"
            role="article"
            aria-labelledby="solar-heading"
          >
            <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
              background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
            }}></div>
            <div className="relative z-10 text-white mb-4">
              <Image
                src="/assets/landing/HeroIcon.svg"
                alt="Icono de estrella representando gestión solar"
                width={64}
                height={64}
                className="mb-6"
              />
            </div>
            <h3 id="storage-heading" className="relative z-10 text-5xl font-bold text-blue-500 mb-2">+5 MWH</h3>
            <p className="relative z-10 text-2xl">en almacenamiento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;