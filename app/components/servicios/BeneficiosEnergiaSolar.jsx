"use client";
import React from 'react';
import Image from 'next/image';

export const dynamic = "force-static";

const BeneficiosEnergiaSolar = () => {
    const beneficios = [
        {
            id: 1,
            titulo: "Capacidad constructiva propia",
            descripcion: "Equipo y experiencia para ejecutar fases críticas de construcción, incluyendo pruebas POT, pre-drilling e hincado.",
            imageSrc: "/assets/servicios/BeneficiosEnergiaSolar1",
            imageAlt: "Equipo de construcción y equipamiento especializado para instalaciones solares"
        },
        {
            id: 2,
            titulo: "Respaldo técnico certificado",
            descripcion: "Contamos con certificación NABCEP, fortaleciendo nuestros estándares técnicos en el diseño e implementación de soluciones solares.",
            imageSrc: "/assets/servicios/BeneficiosEnergiaSolar2",
            imageAlt: "Certificación NABCEP y estándares técnicos internacionales en instalaciones solares"
        },
        {
            id: 3,
            titulo: "Soluciones adaptadas a cada operación",
            descripcion: "Cada proyecto se diseña según el perfil energético, la infraestructura y las condiciones específicas del sitio.",
            imageSrc: "/assets/servicios/BeneficiosEnergiaSolar3",
            imageAlt: "Diseño personalizado de soluciones solares según necesidades operativas"
        }
    ];

    return (
        <section
            className="px-6 md:px-8 py-8 md:py-14 bg-[#037F3F]"
            aria-labelledby="beneficios-titulo"
        >
            <div className="max-w-6xl mx-auto">
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <h2
                        id="beneficios-titulo"
                        className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-md mx-auto"
                    >
                        ¿Por qué HiPower?
                    </h2>
                    <p className="text-white/90 max-w-md mx-auto">
                        Combinamos capacidad constructiva propia, respaldo técnico certificado y soluciones diseñadas según las necesidades de cada operación.
                    </p>
                </div>

                {/* Grid de beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {beneficios.map((beneficio) => (
                        <article
                            key={beneficio.id}
                            className="rounded-tl-3xl rounded-br-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:transform hover:scale-105 h-full"
                            data-aos="fade-up"
                            data-aos-delay={beneficio.id * 100}
                        >
                            <div className="relative h-fit w-full">
                                <picture>
                                    <source
                                        srcSet={`${beneficio.imageSrc}.avif`}
                                        type="image/avif"
                                    />
                                    <source
                                        srcSet={`${beneficio.imageSrc}.png`}
                                        type="image/png"
                                    />
                                    <img
                                        src={`${beneficio.imageSrc}.png`}
                                        alt={beneficio.imageAlt}
                                        className="w-full h-full object-cover"
                                        loading={beneficio.id === 1 ? "eager" : "lazy"}
                                        width={400}
                                        height={300}
                                    />
                                </picture>

                                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#037F3F] text-white flex items-center justify-center font-bold text-xl<">
                                    {beneficio.id}
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-4">
                                <h3 className="text-3xl font-bold text-white mb-3">
                                    {beneficio.titulo}
                                </h3>
                                <p className="text-white text-md w-52">
                                    {beneficio.descripcion}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeneficiosEnergiaSolar;