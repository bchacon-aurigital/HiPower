import React from 'react';
import Image from 'next/image';

const CertificationsSection = () => {
  return (
    <section className="relative w-full px-6 md:px-8 py-8 md:py-14" aria-labelledby="certificaciones-heading">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 mb-8">
        <h2 id="certificaciones-heading" className="text-3xl md:text-5xl font-bold mb-6">
          Certificaciones Internacionales
        </h2>
        <p className="text-sm md:text-lg mb-4">
          Única empresa certificada NABCEP y que sigue normas OSHA.
        </p>
        <Image
          src="/assets/landing/HeroIcon.svg"
          alt=""
          width={64}
          height={64}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden">
          <div 
            className="w-full mb-8 bg-black relative aspect-video"
            role="region" 
            aria-label="Video sobre certificaciones de Hi Power"
          >
            <video
              src="/assets/homepage/nabcep.mp4"
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/assets/homepage/video-poster.jpg"
            >
              <source src="/assets/homepage/nabcep.mp4" type="video/mp4" />
              <p>Tu navegador no soporta video HTML5. Podés contactarnos para más información sobre nuestras certificaciones.</p>
            </video>
          </div>

          <ul className="lista-certificaciones" aria-label="Certificaciones internacionales de Hi Power">
            <li className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
              <div className="md:hidden w-full flex justify-center mb-6">
                <Image
                  src="/assets/homepage/NABCEP.svg"
                  alt="Logo de NABCEP - PV Installation Professional"
                  width={150}
                  height={120}
                  className="object-contain"
                />
              </div>
              
              <div className="mb-4 md:mb-0 max-w-lg">
                <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                  NABCEP
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Certificación solar más prestigiosa a nivel global,
                  garantizando máxima seguridad y calidad.
                </p>
              </div>
              
              <div className="hidden md:block">
                <Image
                  src="/assets/homepage/NABCEP.svg"
                  alt="Logo de NABCEP - PV Installation Professional"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </li>

            <li className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
              <div className="md:hidden w-full flex justify-center mb-6">
                <Image
                  src="/assets/homepage/SEI.avif"
                  alt="Logo de SEI - Solar Energy International"
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>
              
              <div className="mb-4 md:mb-0 max-w-lg">
                <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                  SEI
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Reconocidos por Solar Energy International por
                  nuestros altos estándares técnicos.
                </p>
              </div>
              
              <div className="hidden md:block">
                <Image
                  src="/assets/homepage/SEI.avif"
                  alt="Logo de SEI - Solar Energy International"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </li>

            <li className="py-9 px-8 flex flex-col md:flex-row items-center justify-between">
              <div className="md:hidden w-full flex justify-center mb-6">
                <Image
                  src="/assets/homepage/OSHA.avif"
                  alt="Logo de OSHA - Occupational Safety and Health Administration"
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>
              
              <div className="mb-4 md:mb-0 max-w-lg">
                <h3 className="text-3xl font-semibold text-[#339C59] mb-1">
                  OSHA
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Cumplimos con normas de seguridad ocupacional
                  para proteger equipo y clientes.
                </p>
              </div>
              
              <div className="hidden md:block">
                <Image
                  src="/assets/homepage/OSHA.avif"
                  alt="Logo de OSHA - Occupational Safety and Health Administration"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;