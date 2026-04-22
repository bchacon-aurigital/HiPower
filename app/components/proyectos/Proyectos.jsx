"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContactAction } from '../../hooks/useContactAction';

const proyectos = [
  {
    id: "planta-solar-huacas",
    titulo: "Planta Solar Huacas",
    ubicacionDescripcion: "Proyecto de energía solar a gran escala ubicado en Santa Cruz, Guanacaste, desarrollado para generación e inyección directa de energía al sistema eléctrico nacional.",
    descripcion: "Planta fotovoltaica a nivel de suelo que integra paneles solares, inversores y sistemas de conexión a la red, permitiendo generar y transferir energía de forma continua y estable al sistema eléctrico.",
    beneficios: "Aumenta la capacidad de generación renovable del país y aporta estabilidad al sistema eléctrico. Durante su ejecución, también generó empleo local y actividad económica en la zona.",
    caracteristicas: [
      { valor: '17,000', descripcion: 'Paneles solares' },
      { valor: '12 MWp', descripcion: 'Potencia instalada' },
      { valor: '46', descripcion: 'Inversores' },
      { valor: '5,000', descripcion: 'Hogares beneficiados' },
      { valor: '1,700', descripcion: 'Toneladas CO₂ evitadas' }
    ]
  },
  {
    id: "microred-establishment",
    titulo: "Establishment Labs",
    ubicacionDescripcion: "Operación industrial en El Coyol, Alajuela, con alta demanda energética y requerimientos de continuidad ante posibles interrupciones del suministro eléctrico.",
    descripcion: "Sistema de microred que integra generación solar, almacenamiento en baterías (BESS), respaldo eléctrico y conexión a la red, gestionado mediante un sistema EMS que optimiza el uso de energía en tiempo real.",
    beneficios: "Permite mantener la operación ante fallas de la red, reducir picos de demanda y mejorar la estabilidad energética. Contribuye al cumplimiento de certificaciones como LEED, EDGE y Carbono Neutral.",
    caracteristicas: [
      { valor: '1501', descripcion: 'Paneles Solares' },
      { valor: '1 MWp', descripcion: 'Potencia instalada' },
      { valor: '2MWh', descripcion: 'Capacidad de almacenamiento' },
      { valor: '6', descripcion: 'Inversores' },
      { valor: '174 t/año', descripcion: 'CO₂ mitigado' }
    ]
  },
  {
    id: "escuelas-indigenas",
    titulo: "Fundación Omar Dengo",
    ubicacionDescripcion: "Proyecto implementado en territorios indígenas en Talamanca, en zonas sin acceso a red eléctrica y con limitaciones en infraestructura energética.",
    descripcion: "Sistemas híbridos autónomos que combinan generación solar mediante paneles fotovoltaicos y almacenamiento en baterías, diseñados para operar sin conexión a la red eléctrica.",
    beneficios: "Garantizan acceso continuo a electricidad, habilitando el uso de tecnología educativa y reduciendo la brecha digital en comunidades sin conexión a la red.",
    caracteristicas: [
      { valor: '2000', descripcion: 'Paneles Solares' },
      { valor: '1 MWp', descripcion: 'Potencia instalada' },
      { valor: '1.5MWh', descripcion: 'Capacidad de almacenamiento' },
      { valor: '+120', descripcion: 'Escuelas con electricidad' }
    ]
  },
  {
    id: "hospitales-publicos",
    titulo: "Hospitales públicos (CCSS)",
    ubicacionDescripcion: "Centros hospitalarios de la CCSS en Turrialba, Puntarenas y San Isidro, con alta demanda energética y requerimientos de operación continua.",
    descripcion: "Sistemas solares de autoconsumo instalados sobre cubierta, integrados a la infraestructura eléctrica hospitalaria. Diseñados para operar de forma segura junto a equipos médicos y asegurar estabilidad en la generación y el consumo energético.",
    beneficios: "Reducen el costo energético institucional y la dependencia de la red eléctrica, aportando a la descarbonización del sector salud sin comprometer la operación crítica.",
    caracteristicas: [
      { valor: '1700', descripcion: 'Paneles Solares' },
      { valor: '900 kWp', descripcion: 'Potencia instalada' },
      { valor: '142 t/año', descripcion: 'CO₂ mitigado' }
    ]
  },
  {
    id: "casa-santuario",
    titulo: "Casa Santuario",
    ubicacionDescripcion: "Nosara, Guanacaste",
    descripcion: "Sistema que integra paneles solares, inversor y almacenamiento en baterías (BESS), diseñado para generar y gestionar energía directamente en sitio.",
    beneficios: "Permite operar con mayor independencia de la red eléctrica, reducir el consumo de energía externa y mantener continuidad en el suministro ante interrupciones o variaciones del servicio.",
    caracteristicas: [
      { valor: '20', descripcion: 'Paneles Solares' },
      { valor: '10 kWp', descripcion: 'Potencia instalada' },
      { valor: '10,8 kWh', descripcion: 'Capacidad de almacenamiento' },
      { valor: '2', descripcion: 'Cantidad de baterías' },
      { valor: '1', descripcion: 'Cantidad de inversores' }
    ]
  },
  {
    id: "centro-control-energia",
    titulo: "Centro Nacional de Control de Energía",
    ubicacionDescripcion: "Ubicado en Santo Domingo de Heredia, el CENCE, entidad encargada de dirigir y coordinar la operación del Sistema Eléctrico Nacional.",
    descripcion: "Implementó un sistema de autoconsumo solar para abastecer parte de sus operaciones con energía renovable.",
    beneficios: "Este proyecto es infraestructura energética vital del país desde su núcleo operativo y está alineado con nuestra misión de impulsar el crecimiento de nuestros clientes a través de proyectos sostenibles, innovadores y a la medida.",
    caracteristicas: [
      { valor: '915', descripcion: 'Paneles Solares' },
      { valor: '250 kWp', descripcion: 'Potencia instalada' },
      { valor: '39.5 t/año', descripcion: 'CO₂ mitigado' }
    ]
  }
];

const ProyectoSolarFixed = ({
  titulo,
  id,
  ubicacionDescripcion,
  descripcion,
  beneficios,
  caracteristicas
}) => {
  const handleContactClick = useContactAction();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);

  const imagenPrincipal = {
    avif: `/assets/proyectos/${id}.avif`,
    png: `/assets/proyectos/${id}.png`
  };

  const imagenesSecundarias = [1, 2, 3].map(num => ({
    avif: `/assets/proyectos/${id}${num}.avif`,
    png: `/assets/proyectos/${id}${num}.png`,
    num: num
  }));

  return (
    <article className="w-full p-4 rounded-lg shadow-sm max-w-7xl mx-auto mt-16" id={`proyecto-${id}`} role="region" aria-label={`Proyecto: ${titulo}`}>
      <div className="flex items-center gap-2 mb-4" data-aos="fade-right">
        <div className="text-green-600 w-10 h-10 relative" aria-hidden="true">
          <Image
            src={`/assets/proyectos/${id}.svg`}
            alt="Icono de Proyecto"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-gray-700 text-xl md:text-3xl italic font-bold">{titulo}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-6 lg:max-h-[400px]">
        <div className="col-span-3 lg:h-[400px]" data-aos="fade-up">
          <picture>
            <source srcSet={imagenPrincipal.avif} type="image/avif" />
            <Image
              src={imagenPrincipal.png}
              alt={`Proyecto ${titulo} - Vista principal`}
              className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
              width={800}
              height={400}
              priority={id === "planta-solar-huacas"}
              loading={id === "planta-solar-huacas" ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 75vw"
            />
          </picture>
        </div>
        <div className="col-span-1 grid grid-cols-3 lg:grid-cols-1 gap-2">
          {imagenesSecundarias.map((img, index) => (
            <div
              key={index}
              className={`h-[128px] overflow-hidden`}
              tabIndex={0}
              aria-label={`Imagen ${index + 1} del proyecto ${titulo}`}
            >
              <picture>
                <source srcSet={img.avif} type="image/avif" />
                <Image
                  src={img.png}
                  alt={`${titulo} - Vista complementaria ${index + 1}`}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                  width={300}
                  height={128}
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="border pr-4 rounded-tl-3xl rounded-br-3xl bg-white px-6 py-16 border-[#C9C9C9]" role="region" aria-label="Contexto operativo" data-aos="fade-up" data-aos-delay="100">
          <p className="text-[#037F3F] font-bold mb-2 text-2xl">Contexto operativo</p>
          <p className="text-gray-600 text-md italic">{ubicacionDescripcion}</p>
        </div>
        <div className="border pr-4 rounded-tl-3xl rounded-br-3xl bg-white px-6 py-16 border-[#C9C9C9]" role="region" aria-label="Solución implementada" data-aos="fade-up" data-aos-delay="200">
          <p className="text-[#037F3F] font-bold mb-2 text-2xl">Solución implementada</p>
          <p className="text-gray-600 text-md italic">{descripcion}</p>
        </div>
        <div className="border pr-4 rounded-tl-3xl rounded-br-3xl bg-white px-6 py-16 border-[#C9C9C9]" role="region" aria-label="Impacto en la operación" data-aos="fade-up" data-aos-delay="300">
          <p className="text-[#037F3F] font-bold mb-2 text-2xl">Impacto en la operación</p>
          <p className="text-gray-600 text-md italic">{beneficios}</p>
        </div>
      </div>

      <div className="mb-6" role="region" aria-label="Características técnicas">
        <div className="flex items-center gap-2 mb-4" data-aos="fade-right">
          <div className="text-gray-500 bg-white border border-[#C9C9C9] p-2 rounded-lg w-10 h-10 flex items-center justify-center" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <h3 className="text-gray-700 text-3xl italic font-bold">Características</h3>
        </div>

        <div className={caracteristicas.length === 3 ? "grid lg:grid-cols-3 gap-2" :
                        caracteristicas.length === 4 ? "grid lg:grid-cols-4 gap-2" :
                        caracteristicas.length === 5 ? "grid lg:grid-cols-5 gap-2" : "grid lg:grid-cols-6 gap-2"}>
          {caracteristicas.map((item, index) => (
            <div key={index} className="bg-white border border-[#C9C9C9] px-8 py-16 rounded-tl-3xl rounded-br-3xl text-center flex flex-col justify-center items-center" data-aos="flip-up" data-aos-delay={100 * index}>
              <p className="text-[#037F3F] font-bold text-3xl">{item.valor}</p>
              <p className="text-gray-600 text-md">{item.descripcion}</p>
            </div>
          ))}


        </div>
      </div>
    </article>
  );
};

const ProyectosList = ({ proyectoId = null }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 50
    });
  }, []);

  if (proyectoId) {
    const proyecto = proyectos.find(p => p.id === proyectoId);
    if (!proyecto) return <div aria-live="polite">Proyecto no encontrado</div>;

    return <ProyectoSolarFixed {...proyecto} id={proyecto.id} />;
  }

  return (
    <section className="space-y-12" aria-label="Listado de proyectos solares">
      {proyectos.map((proyecto, index) => (
        <div key={proyecto.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <ProyectoSolarFixed {...proyecto} id={proyecto.id} />
        </div>
      ))}
    </section>
  );
};

export { ProyectosList, proyectos };
export default ProyectosList;
