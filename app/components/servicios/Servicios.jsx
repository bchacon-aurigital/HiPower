"use client";
import React, { memo, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useContactAction } from "../../hooks/useContactAction";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const servicios = [
  {
    id: "energia-gran-escala",
    titulo: "Energía Solar a Gran Escala",
    imagenesPrincipales: [
      { avif: "/assets/servicios/EnergiaSolar.avif", jpg: "/assets/servicios/EnergiaSolar.jpg" },
      { avif: "/assets/servicios/EnergiaSolar2.avif", jpg: "/assets/servicios/EnergiaSolar2.jpg" },
      { avif: "/assets/servicios/EnergiaSolar3.avif", jpg: "/assets/servicios/EnergiaSolar3.jpg" }
    ],
    descripcion:
      "Las plantas solares a gran escala generan energía limpia y eficiente para empresas generadoras y distribuidoras.",
    descripcion2:
      'Hemos diseñado e instalado las plantas solares más grandes de Costa Rica, instaladas a nivel de suelo, para empresas innovadoras como <strong>Coopeguanacaste</strong>, optimizando costos operativos y promoviendo la sostenibilidad.',
    esIzquierda: true,
    alt: "Planta solar fotovoltaica a gran escala con múltiples paneles solares"
  },
  {
    id: "microrredes",
    titulo: "Microrredes",
    imagenesPrincipales: [
      { avif: "/assets/servicios/Microrredes.avif", jpg: "/assets/servicios/Microrredes.jpg" },
      { avif: "/assets/servicios/Microrredes2.avif", jpg: "/assets/servicios/Microrredes2.jpg" },
      { avif: "/assets/servicios/Microrredes3.avif", jpg: "/assets/servicios/Microrredes3.jpg" }
    ],
    descripcion:
      "Una microred integra distintas fuentes de energía como paneles solares, baterías, generadores y la red eléctrica, garantizando autonomía y eficiencia.",
    descripcion2:
      'Hemos diseñado e instalado microrredes en Costa Rica para empresas innovadoras como <strong>Establishment Labs</strong>, contribuyendo además a la certificación LEED, EDGE y Carbono Neutral de su planta.',
    esIzquierda: false,
    alt: "Sistema de microrred inteligente con múltiples fuentes de energía integradas"
  },
  {
    id: "sistemas-autoconsumo",
    titulo: "Sistemas de autoconsumo",
    imagenesPrincipales: [
      { avif: "/assets/servicios/autoconsumo.avif", jpg: "/assets/servicios/autoconsumo.jpg" },
      { avif: "/assets/servicios/autoconsumo2.avif", jpg: "/assets/servicios/autoconsumo2.jpg" },
      { avif: "/assets/servicios/autoconsumo3.avif", jpg: "/assets/servicios/autoconsumo3.jpg" }
    ],
    descripcion:
      "Estas plantas de generación distribuida optimizan el consumo energético y reducen costos en industrias de alto consumo.",
    descripcion2:
      "Hemos diseñado e instalado algunas de las más grandes en Costa Rica para instituciones y empresas como la <strong>Caja Costarricense de Seguro Social (CCSS)</strong>, <strong>ICE</strong>, <strong>Coopeguanacaste</strong>, <strong>Allergan</strong> y <strong>Establishment Labs</strong>, asegurando un suministro más estable, menor dependencia de la red y una operación más eficiente.",
    esIzquierda: true,
    alt: "Sistema de autoconsumo energético con paneles solares instalados en techo industrial"
  },
  {
    id: "sistemas-hibridos",
    titulo: "Sistemas Híbridos",
    imagenesPrincipales: [
      { avif: "/assets/servicios/hibridos.avif", jpg: "/assets/servicios/hibridos.jpg" },
      { avif: "/assets/servicios/hibridos2.avif", jpg: "/assets/servicios/hibridos2.jpg" },
      { avif: "/assets/servicios/hibridos3.avif", jpg: "/assets/servicios/hibridos3.jpg" }
    ],
    descripcion:
      "Sistemas de generación y almacenamiento de energía que combinan paneles solares, inversores y baterías, permitiendo operar con o sin conexión a la red eléctrica.",
    descripcion2:
      "Proyectos como <strong>Asoplatal</strong> en Talamanca, la <strong>Fundación Omar Dengo</strong> y <strong>Casa Santuario</strong> han implementado estas soluciones para garantizar un suministro energético confiable en zonas con acceso limitado a la red.",
    esIzquierda: false,
    alt: "Sistema híbrido de energía solar con paneles solares, baterías y conexión a red eléctrica"
  }
];

const Carousel = memo(({ imagenes, alt }) => {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setActive((i) => (i + 1) % imagenes.length), 4000);
    return () => clearInterval(id);
  }, [inView, imagenes.length]);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] min-h-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl"
    >
      {imagenes.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <picture>
            <source srcSet={img.avif} type="image/avif" />
            <source srcSet={img.jpg} type="image/jpeg" />
            <Image
              src={img.jpg}
              alt={`${alt} ${i + 1}`}
              fill
              sizes="100vw"              /* ← siempre 100 % ancho en mobile */
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </picture>
        </div>
      ))}
    </div>
  );
});
Carousel.displayName = "Carousel";

const ActionButtons = memo(({ titulo, onContact }) => (
  <div className="flex">
        <a
          href="https://www.hipowercr.com/proyectos/"
          className="button-project !mt-0"
          aria-label="Ver proyectos"
        >
          Ver Proyectos
        </a>
    <div
      onClick={onContact}
      className="cursor-pointer inline-flex items-center text-[#037F3F] md:text-xl font-medium hover:text-[#002D6A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#037F3F] focus:ring-offset-2 rounded-md "
      aria-label={`Adquirir servicio de ${titulo}`}
      data-aos-disabled="true"
    >
      Adquirir servicio
      <FaArrowRight className="ml-2" aria-hidden="true" />
    </div>
  </div>
));
ActionButtons.displayName = "ActionButtons";

const ServicioCard = memo(
  ({ id, titulo, imagenesPrincipales, descripcion, descripcion2, esIzquierda, alt }) => {
    const onContact = useContactAction();

    return (
      <article
        id={`servicio-${id}`}
        className={`flex flex-col ${esIzquierda ? "lg:flex-row" : "lg:flex-row-reverse"} md:gap-16 gap-4`}
        data-aos={esIzquierda ? "fade-right" : "fade-left"}
        data-aos-duration="600"
      >
        <div className="lg:w-2/3">
          <Carousel imagenes={imagenesPrincipales} alt={alt || `Servicio de ${titulo}`} />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#037F3F] text-3xl lg:text-5xl font-bold mb-4">{titulo}</h2>
          <p className="text-gray-600 mb-2 text-base md:text-lg text-left">{descripcion}</p>
          <p
            className="text-gray-600 mb-6 text-base md:text-lg text-left"
            dangerouslySetInnerHTML={{ __html: descripcion2 }}
          />
          <ActionButtons titulo={titulo} onContact={onContact} />
        </div>
      </article>
    );
  }
);
ServicioCard.displayName = "ServicioCard";

const ServiciosEnergia = () => {

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-24 pb-8 md:pb-14">
      <div className="space-y-16 md:space-y-28">
        {servicios.map((s) => (
          <ServicioCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
};

export default memo(ServiciosEnergia);
