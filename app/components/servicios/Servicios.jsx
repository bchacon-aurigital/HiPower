"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContactAction } from '../../hooks/useContactAction';

const servicios = [
  {
    id: "energia-gran-escala",
    titulo: "Energía Solar a Gran Escala",
    imagenPrincipal: {
      avif: "/assets/servicios/EnergiaSolar.avif",
      png: "/assets/servicios/EnergiaSolar.png",
    },
    descripcion: "Las plantas solares a gran escala generan energía limpia y eficiente para empresas generadoras y distribuidoras.",
    descripcion2: "Hemos diseñado e instalado las plantas solares más grandes de Costa Rica, instaladas a nivel de suelo, para empresas innovadoras como Coopeguanacaste, optimizando costos operativos y promoviendo la sostenibilidad.",
    esIzquierda: true,
    alt: "Planta solar fotovoltaica a gran escala con múltiples paneles solares"
  },
  {
    id: "microrredes",
    titulo: "Microrredes",
    imagenPrincipal: {
      avif: "/assets/servicios/Microrredes.avif",
      png: "/assets/servicios/Microrredes.png",
    },
    descripcion: "Una microred integra distintas fuentes de energía como paneles solares, baterías, generadores y la red eléctrica, garantizando autonomía y eficiencia.",
    descripcion2: "Hemos diseñado e instalado microrredes en Costa Rica para empresas innovadoras como Establishment Labs, contribuyendo además a la certificación LEED, EDGE y Carbono Neutral de su planta.",
    esIzquierda: false,
    alt: "Sistema de microrred inteligente con múltiples fuentes de energía integradas"
  },
  {
    id: "sistemas-hibridos",
    titulo: "Sistemas Híbridos",
    imagenPrincipal: {
      avif: "/assets/servicios/hibridos.avif",
      png: "/assets/servicios/hibridos.png",
    },
    descripcion: "Sistemas de generación y almacenamiento de energía que combinan paneles solares, inversores y baterías, permitiendo operar con o sin conexión a la red eléctrica.",
    descripcion2: "Proyectos como Asoplatal en Talamanca, la Fundación Omar Dengo y Casa Santuario han implementado estas soluciones para garantizar un suministro energético confiable en zonas con acceso limitado a la red.",
    esIzquierda: true,
    alt: "Sistema híbrido de energía solar con paneles solares, baterías y conexión a red eléctrica"
  },
  {
    id: "sistemas-autoconsumo",
    titulo: "Sistemas de autoconsumo",
    imagenPrincipal: {
      avif: "/assets/servicios/autoconsumo.avif",
      png: "/assets/servicios/autoconsumo.png",
    },
    descripcion: "Estas plantas de generación distribuida optimizan el consumo energético y reducen costos en industrias de alto consumo.",
    descripcion2: "Hemos diseñado e instalado algunas de las más grandes en Costa Rica para instituciones y empresas como la Caja Costarricense de Seguro Social (CCSS), ICE, Coopeguanacaste y Allergan, Establishment Labs asegurando un suministro más estable, menor dependencia de la red y una operación más eficiente.",
    esIzquierda: false,
    alt: "Sistema de autoconsumo energético con paneles solares instalados en techo industrial"
  },
];

const ServicioCard = ({
  titulo,
  imagenPrincipal,
  descripcion,
  descripcion2,
  esIzquierda,
  id,
  alt
}) => {
  const handleContactClick = useContactAction();

  return (
    <article
      className={`flex flex-col ${esIzquierda ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 my-16`}
      id={`servicio-${id}`}
      data-aos={esIzquierda ? "fade-right" : "fade-left"}
      role="region"
      aria-labelledby={`titulo-${id}`}
    >
      <div className="lg:w-2/3 overflow-hidden rounded-tl-3xl rounded-br-3xl">
        <picture>
          <source srcSet={imagenPrincipal.png} type="image/png" />
          <Image
            src={imagenPrincipal.avif}
            alt={alt || `Servicio de ${titulo}`}
            className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl transition-transform duration-700 hover:scale-105"
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            blurDataURL="data:image/avif;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAQECAQEBAgICAgICAgICAQICAgICAgICAgL/2wBDAQEBAQEBAQEBAQECAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCAAGAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9xtI8d+LfibeeKNW/Z3+A3j1bLxZfaZodlc/FLWvAujWNstlBMNVn0m1gM8fmS3Lf2XPcC31a3udP0r7QoXV9b06//W/FeLspwOF4fy3DZngcNisRioYrGVMXgpV6tLCwg5UMJCpVUlGdSaVWtCLjUjHkptRqRk/zXJ8dicTOvOrCdOFKpGEYVEouTfxVHHVrpddk9UVf+F+ftHf9G8+Ef/DraJ/8r6+S/wCI85v/ANBD/wDLVf8A3bP2POs2P//Z"
          />
        </picture>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h2
          id={`titulo-${id}`}
          className="text-[#037F3F] text-3xl lg:text-5xl font-bold mb-4"
        >
          {titulo}
        </h2>
        <p className="text-gray-600 mb-2 text-base md:text-xl">{descripcion}</p>
        <p className="text-gray-600 mb-6 text-base md:text-xl">{descripcion2}</p>
        <div>
          <div
            onClick={handleContactClick}
            className="cursor-pointer inline-flex items-center text-[#037F3F] md:text-xl font-medium hover:text-[#002D6A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#037F3F] focus:ring-offset-2 rounded-md py-1"
            aria-label={`Adquirir servicio de ${titulo}`}
          >
            Adquirir servicio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

const ServiciosEnergia = () => {
  const handleContactClick = useContactAction();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      aria-labelledby="servicios-energia-titulo"
    >
      <div className="space-y-24">
        {servicios.map((servicio) => (
          <ServicioCard
            key={servicio.id}
            id={servicio.id}
            titulo={servicio.titulo}
            imagenPrincipal={servicio.imagenPrincipal}
            descripcion={servicio.descripcion}
            descripcion2={servicio.descripcion2}
            esIzquierda={servicio.esIzquierda}
            alt={servicio.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiciosEnergia;