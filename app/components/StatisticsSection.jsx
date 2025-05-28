import React from "react";
import Image from "next/image";

const StatisticsSection = () => {
  return (
    <section className="w-full px-6 md:px-8 py-8 md:pt-36" aria-labelledby="por-que-hipower-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="por-que-hipower-heading" className="text-3xl text-white md:text-4xl lg:text-5xl leading-tight font-semibold mb-12">
          ¿Por qué{" "}
          <span className="text-[#339C59] font-bold">HiPower</span>?
        </h2>
        
        <ul 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 list-none"
          role="list"
          aria-label="Datos clave de HiPower"
        >
          <li className="relative bg-black/20 text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105">
            <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
              background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
            }}></div>
            <div className="relative z-10 text-white mb-4">
              <Image
                src="/assets/landing/HeroIcon.svg"
                alt="star"
                width={64}
                height={64}
                className="mb-6"
                aria-hidden="true"
              />
            </div>
            <strong className="relative z-10 text-5xl font-bold text-blue-500 mb-2">+14</strong>
            <span className="relative z-10 text-2xl">años de experiencia</span>
          </li>
          
          <li className="relative bg-black bg-opacity-60 text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105">
            <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
              background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
            }}></div>
            <div className="relative z-10 text-white mb-4">
              <Image
                src="/assets/landing/HeroIcon.svg"
                alt="star"
                width={96}
                height={96}
                aria-hidden="true"
              />
            </div>
            <strong className="relative z-10 text-5xl font-bold text-blue-500 mb-2">+30 MW</strong>
            <span className="relative z-10 text-2xl">en nuestra gestión solar</span>
          </li>
          
          <li className="relative bg-black text-white rounded-tl-3xl rounded-br-3xl p-16 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105">
            <div className="absolute inset-0 rounded-tl-3xl rounded-br-3xl border-2 border-transparent bg-clip-padding" style={{ 
              background: "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #1C4CD0, #037F3F) border-box" 
            }}></div>
            <div className="relative z-10 text-white mb-4">
              <Image
                src="/assets/landing/HeroIcon.svg"
                alt="star"
                width={64}
                height={64}
                className="mb-6"
                aria-hidden="true"
              />
            </div>
            <strong className="relative z-10 text-5xl font-bold text-blue-500 mb-2">+5 MWH</strong>
            <span className="relative z-10 text-2xl">en almacenamiento</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StatisticsSection;