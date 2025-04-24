"use client";
import React, { useEffect, useState, memo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { initAOS } from '../../utils/aos-helper';
import { useContactAction } from '../../hooks/useContactAction';

const servicios = [
  {
    id: "energia-gran-escala",
    titulo: "Energía Solar a Gran Escala",
    imagenesPrincipales: [
      {
        avif: "/assets/servicios/EnergiaSolar.avif",
        jpg: "/assets/servicios/EnergiaSolar.jpg",
      },
      {
        avif: "/assets/servicios/EnergiaSolar2.avif",
        jpg: "/assets/servicios/EnergiaSolar2.jpg",
      },
      {
        avif: "/assets/servicios/EnergiaSolar3.avif",
        jpg: "/assets/servicios/EnergiaSolar3.jpg",
      }
    ],
    descripcion: "Las plantas solares a gran escala generan energía limpia y eficiente para empresas generadoras y distribuidoras.",
    descripcion2: "Hemos diseñado e instalado las plantas solares más grandes de Costa Rica, instaladas a nivel de suelo, para empresas innovadoras como <strong>Coopeguanacaste</strong>, optimizando costos operativos y promoviendo la sostenibilidad.",
    esIzquierda: true,
    alt: "Planta solar fotovoltaica a gran escala con múltiples paneles solares"
  },
  {
    id: "microrredes",
    titulo: "Microrredes",
    imagenesPrincipales: [
      {
        avif: "/assets/servicios/Microrredes.avif",
        jpg: "/assets/servicios/Microrredes.jpg",
      },
      {
        avif: "/assets/servicios/Microrredes2.avif",
        jpg: "/assets/servicios/Microrredes2.jpg",
      },
      {
        avif: "/assets/servicios/Microrredes3.avif",
        jpg: "/assets/servicios/Microrredes3.jpg",
      }
    ],
    descripcion: "Una microred integra distintas fuentes de energía como paneles solares, baterías, generadores y la red eléctrica, garantizando autonomía y eficiencia.",
    descripcion2: "Hemos diseñado e instalado microrredes en Costa Rica para empresas innovadoras como <strong>Establishment Labs</strong>, contribuyendo además a la certificación LEED, EDGE y Carbono Neutral de su planta.",
    esIzquierda: false,
    alt: "Sistema de microrred inteligente con múltiples fuentes de energía integradas"
  },
  {
    id: "sistemas-autoconsumo",
    titulo: "Sistemas de autoconsumo",
    imagenesPrincipales: [
      {
        avif: "/assets/servicios/autoconsumo.avif",
        jpg: "/assets/servicios/autoconsumo.jpg",
      },
      {
        avif: "/assets/servicios/autoconsumo2.avif",
        jpg: "/assets/servicios/autoconsumo2.jpg",
      },
      {
        avif: "/assets/servicios/autoconsumo3.avif",
        jpg: "/assets/servicios/autoconsumo3.jpg",
      }
    ],
    descripcion: "Estas plantas de generación distribuida optimizan el consumo energético y reducen costos en industrias de alto consumo.",
    descripcion2: "Hemos diseñado e instalado algunas de las más grandes en Costa Rica para instituciones y empresas como la <strong>Caja Costarricense de Seguro Social (CCSS)</strong>, <strong>ICE</strong>, <strong>Coopeguanacaste</strong> y <strong>Allergan</strong>, <strong>Establishment Labs</strong> asegurando un suministro más estable, menor dependencia de la red y una operación más eficiente.",
    esIzquierda: true,
    alt: "Sistema de autoconsumo energético con paneles solares instalados en techo industrial"
  },
  {
    id: "sistemas-hibridos",
    titulo: "Sistemas Híbridos",
    imagenesPrincipales: [
      {
        avif: "/assets/servicios/hibridos.avif",
        jpg: "/assets/servicios/hibridos.jpg",
      },
      {
        avif: "/assets/servicios/hibridos2.avif",
        jpg: "/assets/servicios/hibridos2.jpg",
      },
      {
        avif: "/assets/servicios/hibridos3.avif",
        jpg: "/assets/servicios/hibridos3.jpg",
      }
    ],
    descripcion: "Sistemas de generación y almacenamiento de energía que combinan paneles solares, inversores y baterías, permitiendo operar con o sin conexión a la red eléctrica.",
    descripcion2: "Proyectos como <strong>Asoplatal</strong> en Talamanca, la <strong>Fundación Omar Dengo</strong> y <strong>Casa Santuario</strong> han implementado estas soluciones para garantizar un suministro energético confiable en zonas con acceso limitado a la red.",
    esIzquierda: false,
    alt: "Sistema híbrido de energía solar con paneles solares, baterías y conexión a red eléctrica"
  },
];

const Carousel = memo(({ imagenes, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % imagenes.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {imagenes.map((imagen, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <picture>
            <source srcSet={imagen.avif} type="image/avif" />
            <source srcSet={imagen.jpg} type="image/jpg" />
            <Image
              src={imagen.jpg}
              alt={`${alt} - imagen ${index + 1}`}
              className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl transition-transform duration-700 hover:scale-105"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index === 0 && imagen.id === "energia-gran-escala" ? "eager" : "lazy"}
              blurDataURL="data:image/avif;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAQECAQEBAgICAgICAgICAQICAgICAgICAgL/2wBDAQEBAQEBAQEBAQECAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCAAGAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9xtI8d+LfibeeKNW/Z3+A3j1bLxZfaZodlc/FLWvAujWNstlBMNVn0m1gM8fmS3Lf2XPcC31a3udP0r7QoXV9b06//W/FeLspwOF4fy3DZngcNisRioYrGVMXgpV6tLCwg5UMJCpVUlGdSaVWtCLjUjHkptRqRk/zXJ8dicTOvOrCdOFKpGEYVEouTfxVHHVrpddk9UVf+F+ftHf9G8+Ef/DraJ/8r6+S/wCI85v/ANBD/wDLVf8A3bP2POs2P//Z"
            />
          </picture>
        </div>
      ))}
    </div>
  );
});

const ActionButtons = memo(({ titulo, handleContactClick }) => (
  <div>
    <a
      href='/proyectos'
      className="mr-8 relative px-5 py-3 font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
      aria-label="Ver proyectos relacionados"
    >
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-tl-xl rounded-br-xl"
        aria-hidden="true"
      ></span>
      <span className="relative z-10 font-bold text-xl">
        Ver Proyecto
      </span>
    </a>
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
));

const ServicioCard = memo(({
  titulo,
  imagenesPrincipales,
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
      data-aos-duration="600"
      role="region"
      aria-labelledby={`titulo-${id}`}
    >
      <div className="lg:w-2/3 overflow-hidden rounded-tl-3xl rounded-br-3xl">
        <Carousel imagenes={imagenesPrincipales} alt={alt || `Servicio de ${titulo}`} />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h2
          id={`titulo-${id}`}
          className="text-[#037F3F] text-3xl lg:text-5xl font-bold mb-4"
        >
          {titulo}
        </h2>
        <p className="text-gray-600 mb-2 text-base md:text-xl">{descripcion}</p>
        <p className="text-gray-600 mb-6 text-base md:text-xl" dangerouslySetInnerHTML={{__html: descripcion2}}></p>
        <ActionButtons titulo={titulo} handleContactClick={handleContactClick} />
      </div>
    </article>
  );
});

const ServiciosEnergia = () => {
  initAOS({
    duration: 600,
    once: true,
    offset: 50,
    delay: 50,
    disable: window.innerWidth < 768
  });

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      aria-labelledby="servicios-energia-titulo"
    >
      <div className="space-y-24">
        {servicios.map((servicio, index) => (
          <ServicioCard
            key={servicio.id}
            id={servicio.id}
            titulo={servicio.titulo}
            imagenesPrincipales={servicio.imagenesPrincipales}
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

Carousel.displayName = 'Carousel';
ActionButtons.displayName = 'ActionButtons';
ServicioCard.displayName = 'ServicioCard';

export default memo(ServiciosEnergia);