"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContactAction } from '../../hooks/useContactAction';

export default function AboutUsHero() {
  const handleContactClick = useContactAction();

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 750,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden " aria-labelledby="AboutUs-hero-heading">
      <div className="absolute inset-0 z-0">
        <picture className="">
          <source
            srcSet="/assets/aboutUs/AboutUsHeroBG.avif"
            type="image/avif"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/assets/aboutUs/AboutUsHeroBG.png"
            type="image/png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/assets/aboutUs/AboutUsHeroBGM.avif"
            type="image/avif"
            media="(max-width: 767px)"
          />
          <source
            srcSet="/assets/aboutUs/AboutUsHeroBGM.png"
            type="image/png"
            media="(max-width: 767px)"
          />
          <img
            src="/assets/aboutUs/AboutUsHeroBGM.png"
            alt="Paneles solares en techo industrial"
            className="w-full h-full object-cover absolute inset-0"
          />
        </picture>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 xl:mt-auto py-[5%]">
          <div className="max-w-4xl text-center md:text-left" data-aos="fade-right">
            <h1
              id="AboutUs-hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white max-w-[650px]"
            >
              Impulsamos el
              cambio hacia un futuro 
              más limpio y sostenible
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-[650px]">
            <strong className="font-bold">Lideramos proyectos solares desde hace 14 años</strong> para diversificar y descarbonizar la energía en Costa Rica
            </p>
            <a
              href="https://www.hipowercr.com/proyectos/"
              className="relative px-8 py-4 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
              aria-label="Conoce nuestros proyectos"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              ></span>
              <span className="relative z-10 font-bold text-2xl">
                Conoce nuestros proyectos
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 