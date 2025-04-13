import React from 'react';

const CertificationsSection = () => {
  return (
    <section className="relative w-full">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Certificaciones Internacionales
          </h2>
          <p className="text-sm md:text-lg mb-4">
            Única empresa certificada NABCEP y que sigue normas OSHA.
          </p>
          <img
            src="/assets/landing/HeroIcon.svg"
            alt="Icono en forma de estrella"
            className="w-16 h-16"
          />
        </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md rounded-md overflow-hidden">
        <div className="w-full mb-8 bg-black">
          <video
            src="/assets/videos/instalacion-paneles.mp4" 
            className="w-full h-full object-cover"
            controls
          />
        </div>
          
          <div className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
            <div className="mb-4 md:mb-0 max-w-lg">
              <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                NABCEP
              </h3>
              <p className="text-gray-600 max-w-sm">
                Certificación solar más prestigiosa a nivel global, 
                garantizando máxima seguridad y calidad.
              </p>
            </div>
            <img
              srcSet="/assets/homepage/NABCEP.avif"
              alt="NABCEP Certification Badge"
              className="w-24 h-auto object-contain"
            />
          </div>

          <div className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
            <div className="mb-4 md:mb-0 max-w-lg">
              <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                SEI
              </h3>
              <p className="text-gray-600 max-w-sm">
                Reconocidos por Solar Energy International por 
                nuestros altos estándares técnicos.
              </p>
            </div>
            <img
              srcSet="/assets/homepage/SolarEnergy.avif"
              alt="SEI Recognition Badge"
              className="w-20 h-auto object-contain"
            />
          </div>

          <div className="py-9 px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 max-w-lg">
              <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                OSHA
              </h3>
              <p className="text-gray-600 max-w-sm">
                Cumplimos con normas de seguridad ocupacional 
                para proteger equipo y clientes.
              </p>
            </div>
            <img
              srcSet="/assets/homepage/OSHA.avif"
              alt="OSHA Badge"
              className="w-20 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
