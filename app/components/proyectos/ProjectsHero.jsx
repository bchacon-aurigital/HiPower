"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <section className="relative h-screen w-full overflow-hidden" aria-labelledby="projects-hero-heading">
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/homepage/HeroBG.png"
          preload="auto"
        >
          <source src="/assets/proyectos/projects.webm" type="video/webm" />
          <source src="/assets/proyectos/projects.mp4" type="video/mp4" />
          <p>Tu navegador no soporta videos HTML5.</p>
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 xl:mt-auto py-[5%]">
          <div className="max-w-4xl text-center md:text-left" data-aos="fade-right">
            <h1
              id="projects-hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white max-w-[700px]"
            >
              Proyectos emblemáticos con resultados reales 
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-4xl">
              Durante más de 14 años, en Hi Power hemos desarrollado proyectos solares y de almacenamiento que han contribuido a reducir los costos energéticos de nuestros clientes, así como a diversificar y descarbonizar la matriz energética de Costa Rica.            </p>
            <button
              className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
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
        </div>
      </div>
    </section>
  );
} 