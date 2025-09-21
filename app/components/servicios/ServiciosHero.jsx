"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useContactAction } from '../../hooks/useContactAction';

export default function ProjectsHero() {
  const handleContactClick = useContactAction();

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 750,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Servicios de Energía Solar y Almacenamiento | Empresa Sostenible</title>
        <meta 
          name="description" 
          content="Servicios especializados en energía solar y almacenamiento con más de 14 años de experiencia. Proyectos innovadores, rentables y con tecnología avanzada." 
        />
      </Head>
      
      <section 
        className="relative flex flex-col h-screen w-full overflow-hidden" 
        aria-labelledby="projects-hero-heading"
      >
        <div className="sm:h-2/5 h-1/5 w-full">
          <video
            className="object-fill md:object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/homepage/HeroBG.png"
            aria-label="Video de fondo mostrando servicios de energía solar"
            preload="auto"
            
          >
            <source src="/assets/servicios/services.webm" type="video/webm" />
            <source src="/assets/servicios/services.mp4" type="video/mp4" />
            <p>Tu navegador no soporta videos HTML5.</p>
          </video>
        </div>

        <div className="flex flex-grow items-center justify-center w-full">
          <div className="container mx-auto px-4 md:px-8 py-6 md:py-8 h-full flex items-center">
            <div 
              className="max-w-4xl text-center mx-auto" 
              data-aos="fade-right"
            >
              <h1
                id="projects-hero-heading"
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black"
              >
                Servicios especializados en energía solar y almacenamiento
              </h1>
              <p className="text-[#9B9B9B] text-lg md:text-xl mb-8 max-w-4xl">
                Por más de 14 años, hemos desarrollado proyectos solares y de almacenamiento innovadores, altamente rentables y con las tecnologías más avanzadas. Nuestros proyectos hablan por sí solos, impulsando la eficiencia y sostenibilidad de grandes empresas.
              </p>
              <button
                className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
                aria-label="Cotizar mi proyecto para consultoría energética"
                type="button"
                onClick={handleContactClick}
                              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10 font-bold text-2xl">
                  Cotizar mi proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}