"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcesoTrabajo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);

  return (
    <section className="py-16 md:py-24" aria-labelledby="proceso-trabajo-titulo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              1
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-12">Conceptualización</h3>
            <p className="text-gray-600 text-sm">Definimos la mejor solución energética según tus necesidades.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              2
            </div> 
            <h3 className="text-xl font-bold mb-2 text-black pt-12">Diseño</h3>
            <p className="text-gray-600 text-sm">Dimensionamos y modelamos el proyecto solar para optimizar su rendimiento energético.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-12">Gestión de Permisos y Trámites</h3>
            <p className="text-gray-600 text-sm">Te apoyamos en la búsqueda de opciones de financiamiento para tu proyecto.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              6
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-12">Puesta en Marcha</h3>
            <p className="text-gray-600 text-sm">Realizamos pruebas y optimización para garantizar el correcto funcionamiento del proyecto solar. Te entregamos el proyecto llave en mano.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-12">Obtención de Financiamiento</h3>
            <p className="text-gray-600 text-sm">Te apoyamos en la búsqueda de opciones de financiamiento para tu proyecto.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              5
            </div>
            <h3 className="text-xl font-bold mb-2 text-black pt-12">Instalación y Construcción</h3>
            <p className="text-gray-600 text-sm">Instalamos y construimos tu proyecto con los más altos estándares de calidad, seguridad, respetando los tiempos y las especificaciones.</p>
          </div>
          
          <div 
            className="bg-white p-6 relative flex flex-col col-span-2 md:col-span-3 border-[#C9C9C9] border"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold mb-4">
              7
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Soporte y Monitoreo</h3>
            <p className="text-gray-600 text-sm">Brindamos monitoreo y asistencia durante toda la vida útil del proyecto solar para garantizar su eficiencia.</p>
          </div>
          
          <div 
            className="bg-[#037F3F] p-6 relative flex flex-col col-span-2 md:col-span-3 text-white"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="w-10 h-10 text-xl  rounded-full bg-white text-[#037F3F] flex items-center justify-center font-bold mb-4">
              8
            </div>
            <h3 className="text-xl font-bold mb-2">No pierdas más energía!</h3>
            <p className="mb-6 text-sm">Adquiere estos y más servicios trabajando con el equipo de Hi power.</p>

            <button
            className="w-fit relative px-8 py-4 text-lg border-2 border-white font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#037F3F]"
            aria-label="Conecta con nosotros para consultoría energética"
            type="button"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <span className="relative z-10 font-bold text-lg">
              Conecta con nosotros
            </span>
          </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTrabajo; 