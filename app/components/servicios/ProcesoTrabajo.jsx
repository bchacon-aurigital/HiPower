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
          className="text-4xl md:text-5xl font-bold text-[#037F3F] text-center mb-12"
          data-aos="fade-up"
        >
          ¿Cómo es trabajar con nosotros?
        </h2>

        <div className="grid sm:grid-cols-4 md:grid-cols-6 border border-[#C9C9C9]">
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              <img src="../assets/servicios/iconos/material-symbols_draw.svg" className='w-6 h-6' alt='conceptualizacion' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Conceptualización</h3>
            <p className="text-gray-600 text-sm">Definimos la mejor solución energética según tus necesidades.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (1).svg" className='w-6 h-6' alt='diseño' loading="lazy" decoding="async" width="24" height="24"/>
            </div> 
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Diseño</h3>
            <p className="text-gray-600 text-sm">Dimensionamos y modelamos el proyecto solar para optimizar su rendimiento energético.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/ion_document-sharp.svg" className='w-6 h-6' alt='permisos' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Gestión de Permisos y Trámites</h3>
            <p className="text-gray-600 text-sm">Nos encargamos de toda la documentación regulatoria para su implementación.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (3).svg" className='w-6 h-6' alt='financiamiento' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Obtención de Financiamiento</h3>
            <p className="text-gray-600 text-sm">Te apoyamos en la búsqueda de opciones de financiamiento para tu proyecto.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/mdi_build.svg" className='w-6 h-6' alt='instalacion' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Instalación y Construcción</h3>
            <p className="text-gray-600 text-sm">Instalamos y construimos tu proyecto con los más altos estándares de calidad, seguridad, respetando los tiempos y las especificaciones.</p>
          </div>

          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (5).svg" className='w-6 h-6' alt='marcha' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-3">Puesta en Marcha</h3>
            <p className="text-gray-600 text-sm">Realizamos pruebas y optimización para garantizar el correcto funcionamiento del proyecto solar. Te entregamos el proyecto llave en mano.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 md:col-span-3 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (6).svg" className='w-6 h-6' alt='soporte' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Soporte y Monitoreo</h3>
            <p className="text-gray-600 text-sm">Brindamos monitoreo y asistencia durante toda la vida útil del proyecto solar para garantizar su eficiencia.</p>
          </div>
          
          <div 
            className="bg-[#037F3F] p-6 relative flex flex-col col-span-2 md:col-span-3 text-white"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="w-10 h-10 text-xl rounded-full bg-white text-[#037F3F] flex items-center justify-center font-bold mb-4">
            <img src="../assets/servicios/iconos/Vector (7).svg" className='w-6 h-6' alt='energia' loading="lazy" decoding="async" width="24" height="24"/>
            </div>
            <h3 className="text-xl font-bold mb-2">No pierdas más energía!</h3>
            <p className=" text-sm">Adquiere estos y más servicios trabajando con el equipo de HiPower.</p>

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
              Cotizar mi proyecto
            </span>
          </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTrabajo; 