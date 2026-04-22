"use client";
import Image from "next/image";
import { useContactAction } from '../hooks/useContactAction';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Hero() {
  const isMobile = useIsMobile();
  
  const stats = [
    { text: "58+ MW instalados", color: "bg-[#037F3F]" },
    { text: "55+ MWh en almacenamiento", color: "bg-[#00439D]" },
    { text: "15+ años de experiencia", color: "bg-[#00439D]" },
    { text: "Ejecución EPC + O&M", color: "bg-[#00439D]" },
  ];

  const handleContactClick = useContactAction();

  return (
    <header
      className="relative h-screen w-full"
      role="banner"
      aria-label="Sección principal"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/homepage/HeroBG.png"
          preload={isMobile ? "metadata" : "auto"} // Preload condicional
          fetchPriority="high"
          style={{ willChange: 'auto' }} // Optimización GPU
        >
          <source src="/assets/homepage/HPHeroVid.webm" type="video/webm" />
          <source src="/assets/homepage/HPHeroVid.mp4" type="video/mp4" />
          <p>Tu navegador no soporta videos HTML5.</p>
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-2xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
            id="hero-heading"
          >
            Soluciones de energía solar y almacenamiento para el sector industrial y energético
          </h1>
          <p
            className="text-base font-normal mb-6 leading-tight"
          >
            Diseñamos e implementamos sistemas fotovoltaicos, almacenamiento en baterías y microrredes que reducen costos energéticos y aseguran la continuidad operativa en entornos industriales y utility scale.
          </p>

          <div
            className="font-light mb-6 md:hidden text-xs md:text-sm"
            aria-label="Estadísticas móviles"
          >
            <p>58+ MW instalados | 55+ MWh en almacenamiento | 15+ años de experiencia | Ejecución EPC + O&M</p>
          </div>

          <button
            className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
            aria-label="Hablar con un especialista"
            type="button"
            onClick={handleContactClick}
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <span className="relative z-10 font-bold text-2xl">
              Hablar con un especialista
            </span>
          </button>
        </div>

        <section 
          className="hidden xl:block absolute bottom-12 left-0 right-0"
          aria-labelledby="estadisticas"
        >
          <div id="estadisticas" className="sr-only">Resultados destacados</div>
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-center gap-8 text-white list-none">
              {/* First stat */}
              <li className="bg-[#037F3F]/50 rounded-full px-4 py-3">
                <p className="text-md 2xl:text-xl text-center font-bold">{stats[0].text}</p>
              </li>

              {/* Star icon */}
              <li className="flex-shrink-0">
                <Image
                  src="/assets/landing/HeroIcon.svg"
                  alt="star"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                  aria-hidden="true"
                  priority={false} 
                  loading="lazy"
                />
              </li>

              {/* Other stats */}
              {stats.slice(1).map((stat, index) => (
                <li
                  key={index}
                  className="bg-[#00439D]/50 rounded-full px-4 py-3"
                >
                  <p className="text-md 2xl:text-lg text-center font-bold">{stat.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
}