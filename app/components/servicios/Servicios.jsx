"use client";
import React, { memo, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useContactAction } from "../../hooks/useContactAction";
import { FaArrowRight } from "react-icons/fa";


const servicios = [
  {
    id: "energia-gran-escala",
    titulo: "Energía solar a gran escala",
    imagenesPrincipales: [
      { avif: "/assets/servicios/EnergiaSolar.avif", jpg: "/assets/servicios/EnergiaSolar.jpg" },
      { avif: "/assets/servicios/EnergiaSolar2.avif", jpg: "/assets/servicios/EnergiaSolar2.jpg" },
      { avif: "/assets/servicios/EnergiaSolar3.avif", jpg: "/assets/servicios/EnergiaSolar3.jpg" }
    ],
    descripcion: "Desarrollamos plantas solares de alta capacidad (utility-scale) para actores del sector energético. Abarcamos el desarrollo completo del proyecto, desde la ingeniería inicial hasta la operación del sistema, asegurando una ejecución ordenada y alineada con los requerimientos técnicos y regulatorios.",
    sections: [
      {
        h3: "Alcance del servicio",
        items: [
          "Desarrollo e ingeniería del proyecto",
          "Ejecución EPC y construcción",
          "Integración eléctrica y puesta en marcha",
          "Operación, monitoreo y mantenimiento"
        ]
      },
      {
        h3: "Capacidad de ejecución",
        text: "Contamos con capacidad constructiva propia para fases críticas de obra, incluyendo pruebas POT, pre-drilling e hincado, lo que permite mayor control sobre la calidad, los tiempos y la ejecución en sitio."
      },
      {
        h3: "Experiencia aplicada",
        text: "Participación en proyectos como la <strong>Planta Solar Huacas</strong> y la <strong>Planta Solar Las Cañas</strong> en Guanacaste."
      }
    ],
    esIzquierda: true,
    alt: "Planta solar fotovoltaica a gran escala con múltiples paneles solares"
  },
  {
    id: "microrredes",
    titulo: "Microrredes energéticas",
    imagenesPrincipales: [
      { avif: "/assets/servicios/Microrredes.avif", jpg: "/assets/servicios/Microrredes.jpg" },
      { avif: "/assets/servicios/Microrredes2.avif", jpg: "/assets/servicios/Microrredes2.jpg" },
      { avif: "/assets/servicios/Microrredes3.avif", jpg: "/assets/servicios/Microrredes3.jpg" }
    ],
    descripcion: "Diseñamos microrredes que integran generación solar, almacenamiento en baterías (BESS) y sistemas de control para gestionar el suministro eléctrico en instalaciones críticas. Estos sistemas integrados permiten coordinar distintas fuentes de energía dentro de una misma operación, asegurando una implementación alineada con las condiciones del sitio.",
    sections: [
      {
        h3: "Alcance del servicio",
        items: [
          "Ingeniería y diseño del sistema",
          "Integración de generación, almacenamiento y respaldo",
          "Implementación, pruebas y puesta en marcha"
        ]
      },
      {
        h3: "Gestión del sistema",
        text: "El sistema de gestión de energía (EMS) permite monitorear y controlar el flujo energético en tiempo real, priorizando el uso de generación, almacenamiento o red según las condiciones de la operación. Esto permite una gestión energética más estable, predecible y eficiente."
      },
      {
        h3: "Experiencia aplicada",
        text: "Proyectos para clientes como <strong>Establishment Labs</strong>, contribuyendo a certificaciones LEED, EDGE y Carbono Neutral."
      }
    ],
    esIzquierda: false,
    alt: "Sistema de microrred inteligente con múltiples fuentes de energía integradas"
  },
  {
    id: "sistemas-autoconsumo",
    titulo: "Sistemas de autoconsumo industrial",
    imagenesPrincipales: [
      { avif: "/assets/servicios/autoconsumo.avif", jpg: "/assets/servicios/autoconsumo.jpg" },
      { avif: "/assets/servicios/autoconsumo2.avif", jpg: "/assets/servicios/autoconsumo2.jpg" },
      { avif: "/assets/servicios/autoconsumo3.avif", jpg: "/assets/servicios/autoconsumo3.jpg" }
    ],
    descripcion: "Diseñamos e instalamos sistemas de generación distribuida que permiten utilizar energía solar directamente en el sitio, reduciendo la dependencia de la red eléctrica. Este tipo de solución se aplica en operaciones con altos consumos eléctricos que buscan optimizar su estructura energética.",
    sections: [
      {
        h3: "Alcance del servicio",
        items: [
          "Desarrollo e ingeniería del sistema",
          "Ejecución EPC y construcción",
          "Integración eléctrica y puesta en marcha",
          "Operación y mantenimiento"
        ]
      },
      {
        h3: "Experiencia aplicada",
        text: "Proyectos de autoconsumo para instituciones y empresas como la <strong>CCSS</strong>, <strong>ICE</strong>, <strong>Coopeguanacaste</strong>, <strong>Foundever</strong> y <strong>Allergan</strong>."
      }
    ],
    esIzquierda: true,
    alt: "Sistema de autoconsumo energético con paneles solares instalados en techo industrial"
  },
  {
    id: "sistemas-almacenamiento",
    titulo: "Sistemas de Almacenamiento (BESS)",
    imagenesPrincipales: [
      { avif: "/assets/servicios/hibridos.avif", jpg: "/assets/servicios/hibridos.jpg" },
      { avif: "/assets/servicios/hibridos2.avif", jpg: "/assets/servicios/hibridos2.jpg" },
      { avif: "/assets/servicios/hibridos3.avif", jpg: "/assets/servicios/hibridos3.jpg" }
    ],
    descripcion: "Integramos sistemas de almacenamiento en baterías dentro de soluciones energéticas para mantener la operación ante interrupciones, estabilizar el suministro eléctrico y gestionar la demanda de forma controlada.",
    sections: [
      {
        h3: "Alcance del servicio",
        text: "Diseñamos e implementamos sistemas de almacenamiento adaptados a las necesidades energéticas de cada operación, asegurando una integración eficiente con el resto de la infraestructura eléctrica.",
        items: [
          "Ingeniería y dimensionamiento del sistema",
          "Integración de equipos y sistemas de control",
          "Implementación y puesta en marcha",
          "Operación y soporte técnico"
        ]
      },
      {
        h3: "Gestión energética",
        text: "Los sistemas BESS permiten gestionar el uso de la energía almacenada, reducir picos de demanda y mejorar la estabilidad del suministro, especialmente en operaciones con alta exigencia energética."
      },
      {
        h3: "Experiencia aplicada",
        text: "Implementación de proyectos en distintas escalas para clientes como <strong>Establishment Labs</strong>, <strong>Coopeguanacaste</strong>, <strong>ICE</strong>, <strong>Fundación Omar Dengo</strong> y <strong>Casa Santuario</strong> en Nosara."
      }
    ],
    esIzquierda: false,
    alt: "Sistema de almacenamiento en baterías con paneles solares para suministro eléctrico confiable"
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
      className="relative w-full h-full min-h-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl"
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
  <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
    <div
      onClick={onContact}
      className="button-project !mt-0 cursor-pointer"
      aria-label={`Evaluar servicio de ${titulo}`}
      data-aos-disabled="true"
    >
      Evaluar este tipo de proyecto
    </div>

    <a
      href="https://www.hipowercr.com/proyectos/"
      className="cursor-pointer inline-flex items-center text-[#037F3F] md:text-lg font-medium hover:text-[#002D6A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#037F3F] focus:ring-offset-2 rounded-md"
      aria-label="Ver proyectos"
    >
      Ver Proyectos
      <FaArrowRight className="ml-2" aria-hidden="true" />
    </a>
  </div>
));
ActionButtons.displayName = "ActionButtons";

const ServicioCard = memo(
  ({ id, titulo, imagenesPrincipales, descripcion, sections, esIzquierda, alt }) => {
    const onContact = useContactAction();

    return (
      <article
        id={`servicio-${id}`}
        className={`flex flex-col ${esIzquierda ? "lg:flex-row" : "lg:flex-row-reverse"} md:gap-8 gap-4`}
        data-aos={esIzquierda ? "fade-right" : "fade-left"}
        data-aos-duration="600"
      >
        <div className="lg:w-2/3">
          <Carousel imagenes={imagenesPrincipales} alt={alt || `Servicio de ${titulo}`} />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#037F3F] text-3xl font-bold mb-4">{titulo}</h2>
          <p className="text-gray-600 mb-6 text-base text-left">{descripcion}</p>

          {sections && sections.map((section, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="text-gray-800 text-lg font-semibold mb-1">{section.h3}</h3>
              {section.text && (
                <p className="text-gray-600 mb-1 text-sm text-left" dangerouslySetInnerHTML={{ __html: section.text }} />
              )}
              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

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
      <div className="mb-16 md:mb-28 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Qué tipo de soluciones desarrollamos?</h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">Desarrollamos soluciones energéticas diseñadas según el perfil de consumo, la infraestructura eléctrica y los objetivos operativos de cada empresa. 
          <br/>Nuestro enfoque integra diseño, ejecución y operación para asegurar sistemas confiables a largo plazo.</p>
          
      </div>
      <div className="space-y-16 md:space-y-28">
        {servicios.map((s) => (
          <ServicioCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
};

export default memo(ServiciosEnergia);
