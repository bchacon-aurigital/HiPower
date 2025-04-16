"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BeneficiosEnergiaSolar = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            delay: 100
        });
    }, []);

    const beneficios = [
        {
            id: 1,
            titulo: "Maximiza la rentabilidad",
            descripcion: "Si buscas que tu proyecto genere la mayor rentabilidad con nosotros.",
            imageSrc: "/assets/servicios/BeneficiosEnergiaSolar1",
            imageAlt: "Paneles solares instalados en un techo generando alta rentabilidad"
        },
        {
            id: 2,
            titulo: "Energía confiable y segura",
            descripcion: "Si buscas que tu proyecto se ejecute en tiempo y forma, es con nosotros.",
            imageSrc: "/assets/servicios/BeneficiosEnergiaSolar2",
            imageAlt: "Técnico instalando paneles solares con equipo de seguridad"
        },
        {
            id: 3,
            titulo: "Acompañamiento garantizado",
            descripcion: "Si buscas acompañamiento a lo largo de la vida útil de tu proyecto, es con nosotros.",
            imageSrc: "/assets/servicios/BeneficiosEnergiaSolar3",
            imageAlt: "Paneles solares con vista al cielo mostrando servicio de monitoreo continuo"
        }
    ];

    return (
        <section
            className="py-16 md:py-24 bg-[#037F3F]"
            aria-labelledby="beneficios-titulo"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <h2
                        id="beneficios-titulo"
                        className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-md mx-auto"
                    >
                        Beneficios de la energía solar con Hi Power
                    </h2>
                    <p className="text-white/90 max-w-md mx-auto">
                        Nos aseguramos de que tu inversión en energía solar sea rentable,
                        segura y respaldada a lo largo del tiempo.
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