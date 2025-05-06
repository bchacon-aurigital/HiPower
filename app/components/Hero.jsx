"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContactAction } from '../hooks/useContactAction';

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
    { text: "+14 años de experiencia", color: "bg-[#00439D]", delay: 300 },
    { text: "+30 MW instalados", color: "bg-[#00439D]", delay: 200 },
    { text: "+5MWH generados", color: "bg-[#00439D]", delay: 400 },
  ];

  const handleContactClick = useContactAction();

  return (
    <header
      className="relative h-screen w-full overflow-hidden"
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
          poster="/assets/homepage/heroBG.png"
        >
          <source src="/assets/homepage/HPHeroVid.webm" type="video/webm" />
          <source src="/assets/homepage/HPHeroVid.mp4" type="video/mp4" />
          <p>Tu navegador no soporta videos HTML5.</p>
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            id="hero-heading"
          >
            Energía solar y almacenamiento para empresas
          </h1>
          <p
            className="text-xl md:text-2xl font-normal mb-6 leading-tight"
          >
            Solicitá tu diagnóstico sin costo y empezá a reducir tu factura eléctrica.
          </p>

          <div
            className="font-light mb-6 md:hidden text-sm"
            aria-label="Estadísticas móviles"
          >
            <p>+14 años de experiencia | +30 MW instalados | +5MWH</p>
            <p>Únicos en Costa Rica con certificación NABCEP</p>
          </div>

          <button
            className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
            aria-label="Conecta con nosotros para consultoría energética"
            type="button"
            onClick={handleContactClick}
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

        <section 
          className="hidden xl:block absolute bottom-12 left-0 right-0"
          aria-labelledby="estadisticas"
        >
          <h2 id="estadisticas" className="sr-only">Resultados destacados</h2>
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-center gap-8 text-white list-none">
              <li
                className="bg-[#037F3F]/50 rounded-full px-4 py-3"
                data-aos="fade-right"
              >
                <p className="text-md 2xl:text-xl font-bold">{stats[0].text}</p>
              </li>

              <li className="flex-shrink-0">
                <Image
                  src="/assets/landing/HeroIcon.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-14 h-14"
                  data-aos="fade-right"
                  aria-hidden="true"
                  priority
                />
              </li>

              {stats.slice(1).map((stat, index) => (
                <li
                  key={index}
                  className={`bg-[#00439D]/50 rounded-full px-4 py-3`}
                  data-aos="fade-right"
                >
                  <p className="text-md 2xl:text-xl font-bold">{stat.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
}