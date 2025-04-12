"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100,
    });
  }, []);

  const stats = [
    { text: "Únicos en Costa Rica con certificación NABCEP", color: "bg-[#037F3F]", delay: 100 },
    { text: "+25 MW instalados", color: "bg-[#00439D]", delay: 200 },
    { text: "+14 años de experiencia", color: "bg-[#00439D]", delay: 300 },
    { text: "+5MWH generados", color: "bg-[#00439D]", delay: 400 },
  ];

  return (
    <section 
      className="relative h-screen w-full overflow-hidden" 
      role="banner"
      aria-label="Sección principal"
    >
      {/* Video/Image Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <picture className="object-cover w-full h-full">
          <source
            srcSet="/assets/homepage/HeroBG.avif"
            type="image/avif"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/assets/homepage/HeroBG.png"
            type="image/png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/assets/homepage/HeroBGM.avif"
            type="image/avif"
            media="(max-width: 767px)"
          />
          <source
            srcSet="/assets/homepage/HeroBGM.png"
            type="image/png"
            media="(max-width: 767px)"
          />
          <img
            src="/assets/homepage/HeroBG.png"
            alt="Instalación de paneles solares en Costa Rica"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div 
          className="text-center max-w-4xl mx-auto" 
          data-aos="fade-up"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            id="hero-heading"
          >
            Energía solar y almacenamiento para empresas generadoras de energía
          </h1>
          
          <div 
            className="font-light text-lg mb-6 md:hidden"
            aria-label="Estadísticas móviles"
          >
            <p>+14 años de experiencia | +25 MW instalados | +5MWH</p>
            <p>Únicos en Costa Rica con certificación NABCEP</p>
          </div>

          <button
            className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
            aria-label="Conecta con nosotros para consultoría energética"
            type="button"
          >
            <span 
              className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <span className="relative z-10 font-bold text-2xl">
              Conecta con nosotros
            </span>
          </button>
        </div>

        {/* Stats */}
        <div 
          className="hidden xl:block absolute bottom-12 left-0 right-0"
          role="region"
          aria-label="Estadísticas principales"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-8 text-white">
              <div 
                className="bg-[#037F3F]/50 rounded-full px-4 py-3" 
                data-aos="fade-right" 
                data-aos-delay="100"
                role="text"
              >
                <p className="text-md 2xl:text-xl font-bold">Únicos en Costa Rica con certificación NABCEP</p>
              </div>

              <Image
                src="/assets/landing/HeroIcon.svg"
                alt=""
                width={56}
                height={56}
                className="w-14 h-14"
                data-aos="fade-right"
                data-aos-delay="400"
                aria-hidden="true"
                priority
              />

              {stats.slice(1).map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.color}/50 rounded-full px-4 py-3`}
                  data-aos="fade-right"
                  data-aos-delay={stat.delay}
                  role="text"
                >
                  <p className="text-md 2xl:text-xl font-bold">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 