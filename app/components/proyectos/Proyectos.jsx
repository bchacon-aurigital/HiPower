"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const proyectos = [
  {
    id: "planta-solar-huacas",
    titulo: "Planta Solar Huacas",
    ubicacionDescripcion: "Ubicada en La Garita Nueva, Santa Cruz, Guanacaste, la Planta Solar Huacas es la más grande de Costa Rica.",
    descripcion: "Esta planta solar propiedad de Coopeguanacaste fue implementada por Hi Energy y HiPower, hoy abastece de energía limpia a más de 5,000 hogares.",
    beneficios: "Este proyecto ha generado oportunidades de empleo para la comunidad local, demostrando que la sostenibilidad también impulsa el desarrollo social.",
    caracteristicas: [
      { valor: '17,000', descripcion: 'Paneles solares' },
      { valor: '10 MWp', descripcion: 'Potencia instalada' },
      { valor: '46', descripcion: 'Inversores' },
      { valor: '5,000', descripcion: 'Hogares beneficiados' },
      { valor: '1,700', descripcion: 'Toneladas CO₂ evitadas' }
    ]
  },
  {
    id: "microred-establishment",
    titulo: "Microred Establishment Labs",
    ubicacionDescripcion: "Ubicada en El Coyol, esta microred combina paneles solares, baterías, generador y conexión a la red eléctrica nacional. Cuatro fuentes de energía en un solo lugar.",
    descripcion: "El sistema permite a Establishment Labs reducir sus costos energéticos y operar con mayor estabilidad energética, incluso ante interrupciones.",
    beneficios: "Gracias a este proyecto, ayudamos a la planta a obtener certificaciones internacionales como LEED, EDGE y Carbono Neutral.",
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
    titulo: "Escuelas Indígenas con la Fundación Omar Dengo",
    ubicacionDescripcion: "Desde Boruca hasta Bribrí pasando por Térraba, Cabécar, Huetar y Ngäbe. El proyecto que ejecutamos en territorios indígenas provee energía a más de 120 escuelas en distintas zonas del país.",
    descripcion: "Este proyecto fue especialmente retador, ya que se realizó en algunas de las zonas más remotas de Costa Rica, con caminos difíciles, angostos y en mal estado, donde transportar equipos de más de 40 kg por unidad representó un gran desafío, que logramos superar exitosamente en cada escuela.",
    beneficios: "Gracias a este proyecto financiado por la Fundación Omar Dengo pudimos dotar de electricidad a escuelas y comunidades que ahora se benefician con acceso a la información.",
    caracteristicas: [
      { valor: '2000', descripcion: 'Paneles Solares' },
      { valor: '1 MWp', descripcion: 'Potencia instalada' },
      { valor: '1.5MWh', descripcion: 'Capacidad de almacenamiento' },
      { valor: '+120', descripcion: 'Escuelas con electricidad' }
    ]
  },
  {
    id: "hospitales-publicos",
    titulo: "Hospitales Públicos",
    ubicacionDescripcion: "Hi Power ha desarrollado proyectos solares en hospitales públicos de Turrialba, Puntarenas y San Isidro contribuyendo a la descarbonización del sector salud.",
    descripcion: "Estos centros médicos cuentan con sistemas fotovoltaicos de autoconsumo lo que reduce considerablemente gastos energéticos.",
    beneficios: "Reducir su huella de carbono, costos energéticos y avanzar hacia una operación más sostenible y resiliente.",
    caracteristicas: [
      { valor: '1700', descripcion: 'Paneles Solares' },
      { valor: '900 kWp', descripcion: 'Potencia instalada' },
      { valor: '142 t/año', descripcion: 'CO₂ mitigado' }
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
  },
  {
    id: "casa-santuario",
    titulo: "Casa Santuario",
    ubicacionDescripcion: "Ubicada en una zona remota, esta vivienda cuenta con un sistema solar híbrido que combina paneles solares con baterías y red eléctrica.",
    descripcion: "La energía generada se utiliza para abastecer la vivienda y cargar las baterías, permitiendo mantener un suministro continuo incluso en caso de interrupciones del servicio eléctrico.",
    beneficios: "Esta solución brinda autonomía energética parcial, mejora la estabilidad del suministro y reduce el consumo de la red pública.",
    caracteristicas: [
      { valor: '20', descripcion: 'Paneles Solares' },
      { valor: '10 kWp', descripcion: 'Potencia instalada' },
      { valor: '10,8 kWh', descripcion: 'Capacidad de almacenamiento' },
      { valor: '2', descripcion: 'Cantidad de baterías' },
      { valor: '1', descripcion: 'Cantidad de inversores' }
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);

  const [imagenActiva, setImagenActiva] = useState(1);

  const imagenPrincipal = {
    avif: `/assets/proyectos/${id}${imagenActiva}.avif`,
    png: `/assets/proyectos/${id}${imagenActiva}.png`
  };

  const imagenesSecundarias = [1, 2, 3].map(num => ({
    avif: `/assets/proyectos/${id}${num}.avif`,
    png: `/assets/proyectos/${id}${num}.png`,
    num: num
  }));

  const cambiarImagenPrincipal = (numeroImagen) => {
    setImagenActiva(numeroImagen);
  };

  return (
    <article className="w-full p-4 rounded-lg shadow-sm max-w-7xl mx-auto mt-16" id={`proyecto-${id}`} role="region" aria-label={`Proyecto: ${titulo}`}>
      <div className="flex items-center gap-2 mb-4" data-aos="fade-right">
        <div className="text-green-600 w-8 h-8 relative" aria-hidden="true">
          <Image 
            src={`/assets/proyectos/${id}.svg`}
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-gray-700 text-3xl italic font-bold">{titulo}</h2>
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
              className={`h-[128px] overflow-hidden cursor-pointer ${img.num === imagenActiva ? 'ring-4 ring-[#037F3F] rounded-tl-3xl rounded-br-3xl' : ''}`} 
              onClick={() => cambiarImagenPrincipal(img.num)}
              onKeyDown={(e) => e.key === 'Enter' && cambiarImagenPrincipal(img.num)}
              tabIndex={0}
              role="button"
              aria-label={`Ver imagen ${index + 1} del proyecto ${titulo}`}
            >
              <picture>
                <source srcSet={img.avif} type="image/avif" />
                <Image 
                  src={img.png} 
                  alt={`${titulo} - Vista complementaria ${index + 1}`}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl transition-all duration-300 hover:scale-105" 
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
        <div className="border pr-4 rounded-tl-3xl rounded-br-3xl bg-white px-6 py-16 border-[#C9C9C9]" role="region" aria-label="Ubicación" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-[#037F3F] font-bold mb-2 text-2xl">Ubicación</h3>
          <p className="text-gray-600 text-md italic">{ubicacionDescripcion}</p>
        </div>
        <div className="border pr-4 rounded-tl-3xl rounded-br-3xl bg-white px-6 py-16 border-[#C9C9C9]" role="region" aria-label="Descripción" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-[#037F3F] font-bold mb-2 text-2xl">Descripción</h3>
          <p className="text-gray-600 text-md italic">{descripcion}</p>
        </div>
        <div className="border pr-4 rounded-tl-3xl rounded-br-3xl bg-white px-6 py-16 border-[#C9C9C9]" role="region" aria-label="Beneficios" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-[#037F3F] font-bold mb-2 text-2xl">Beneficios</h3>
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
        
        <div className={caracteristicas.length === 3 ? "grid lg:grid-cols-4 gap-2" : 
                        caracteristicas.length === 4 ? "grid lg:grid-cols-5 gap-2" : 
                        caracteristicas.length === 5 ? "grid lg:grid-cols-6 gap-2" : "grid lg:grid-cols-6 gap-2"}>
          {caracteristicas.map((item, index) => (
            <div key={index} className="bg-white border border-[#C9C9C9] px-8 py-16 rounded-tl-3xl rounded-br-3xl text-center flex flex-col justify-center items-center" data-aos="flip-up" data-aos-delay={100 * index}>
              <p className="text-[#037F3F] font-bold text-3xl">{item.valor}</p>
              <p className="text-gray-600 text-md">{item.descripcion}</p>
            </div>
          ))}
          
          <div className="group bg-white border border-[#C9C9C9] px-8 py-16 rounded-tl-3xl rounded-br-3xl text-center flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#037F3F] hover:border-transparent" data-aos="flip-up" data-aos-delay={100 * caracteristicas.length}>
            <p className="text-gray-700 font-medium mb-2 text-xl group-hover:text-white transition-colors duration-300">Conecta con nosotros</p>
            <button 
              className="inline-flex items-center justify-center w-24 h-10 rounded-md mx-auto text-white bg-gradient-to-r from-[#037F3F] to-[#002D6A] group-hover:bg-gradient-to-r group-hover:from-[#ffffff] group-hover:to-[#ffffff] group-hover:text-black transition-all duration-300 group-hover:scale-105"
              aria-label="Contactar sobre este proyecto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
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