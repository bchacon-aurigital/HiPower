"use client";
import React from 'react';
import Link from 'next/link';
import { useContactAction } from '../../hooks/useContactAction';

const ProcesoTrabajo = () => {
  const handleContactClick = useContactAction();

  return (
    <section className="px-6 md:px-8 py-8 md:py-14" aria-labelledby="proceso-trabajo-titulo">
      <div className="max-w-6xl mx-auto">
        <h2
          id="proceso-trabajo-titulo"
          className="text-4xl md:text-5xl font-bold text-[#037F3F] text-center mb-6"
          data-aos="fade-up"
        >
          Cómo se desarrolla un proyecto energético con HiPower
        </h2>

        <p className='text-gray-600 text-base text-center mx-auto max-w-xl mb-6' data-aos="fade-up"
        >Cada proyecto se aborda como un proceso estructurado donde la ingeniería, la ejecución y la operación se integran para asegurar resultados confiables.</p>

        <div className="grid sm:grid-cols-4 md:grid-cols-6 border border-[#C9C9C9]">
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              <img src="../assets/servicios/iconos/material-symbols_draw.svg" className='w-6 h-6' alt='conceptualizacion' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Entendemos la operación</h3>
            <p className="text-gray-600 text-sm">Analizamos el contexto energético, operativo y técnico para identificar variables críticas que impactan el diseño del sistema.
            </p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (1).svg" className='w-6 h-6' alt='diseño' loading="lazy" decoding="async" width="24" height="24"/>
            </div> 
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Diseñamos la solución</h3>
            <p className="text-gray-600 text-sm">Definimos la alternativa más adecuada considerando el perfil de consumo, las condiciones del sitio y los objetivos de la operación.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/ion_document-sharp.svg" className='w-6 h-6' alt='permisos' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Planificamos la implementación</h3>
            <p className="text-gray-600 text-sm">Coordinamos requisitos técnicos, permisos y ruta de ejecución.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-3 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (3).svg" className='w-6 h-6' alt='financiamiento' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Ejecución con control técnico</h3>
            <p className="text-gray-600 text-sm">La implementación se realiza bajo estándares de calidad y seguridad, manteniendo control sobre las fases críticas del proyecto.</p>
          </div>
          

          <div 
            className="bg-[#037F3F] p-6 relative flex flex-col col-span-3 text-white"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-white text-[#037F3F] flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (7).svg" className='w-6 h-6' alt='energia' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2">Acompañamos la operación</h3>
            <p className=" text-sm">Se da acompañamiento continuo para asegurar el desempeño del sistema, su estabilidad operativa y su evolución en el tiempo.</p>

            <button
            onClick={handleContactClick}
            className="w-fit relative px-8 py-4 text-lg border-2 border-white font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
            aria-label="Cotizar mi proyecto para consultoría energética"
            type="button"
            data-aos-disabled="true"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <span className="relative z-10 font-bold text-lg">
              Evaluar mi operación
            </span>
          </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTrabajo; 