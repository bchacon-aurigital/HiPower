import React from 'react';
import Image from 'next/image';

const CertificationsSection = () => {
  return (
    <section className="relative w-full" aria-labelledby="certifications-heading">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 mb-8">
        <h2 id="certifications-heading" className="text-3xl md:text-5xl font-bold mb-6">
          Certificaciones Internacionales
        </h2>
        <p className="text-sm md:text-lg mb-4">
          Única empresa certificada NABCEP y que sigue normas OSHA.
        </p>
        <Image
          src="/assets/landing/HeroIcon.svg"
          alt="Icono decorativo de estrella"
          width={64}
          height={64}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden">
          <div className="w-full mb-8 bg-black relative aspect-video">
            <video
              src="/assets/homepage/nabcep.mp4"
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/assets/homepage/video-poster.jpg"
              aria-label="Video sobre certificación NABCEP"
            />
          </div>

          <div className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200" id="nabcep-section">
            <div className="md:hidden w-full flex justify-center mb-6">
              <Image
                src="/assets/homepage/NABCEP.avif"
                alt="NABCEP Certification Badge"
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
                src="/assets/homepage/NABCEP.avif"
                alt="NABCEP Certification Badge"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>

          <div className="py-9 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-200" id="sei-section">
            <div className="md:hidden w-full flex justify-center mb-6">
              <Image
                src="/assets/homepage/SEI.avif"
                alt="SEI Recognition Badge"
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
                alt="SEI Recognition Badge"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          <div className="py-9 px-8 flex flex-col md:flex-row items-center justify-between" id="osha-section">
            <div className="md:hidden w-full flex justify-center mb-6">
              <Image
                src="/assets/homepage/OSHA.avif"
                alt="OSHA Badge"
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
                alt="OSHA Badge"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
