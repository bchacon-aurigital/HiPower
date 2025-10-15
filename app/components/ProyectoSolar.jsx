"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useIsMobile } from "../hooks/useIsMobile";

const ProyectoSolar = () => {
    const [currentService, setCurrentService] = useState(0);
    const videoRef = useRef(null);
    const isMobile = useIsMobile();

    const services = [
        {
            title: "Energía solar a gran escala",
            description: "Desarrollamos proyectos solares de gran capacidad para generadores y distribuidoras de energía. Nuestra experiencia se refleja en la Planta Solar Huacas, un referente nacional en eficiencia y generación sostenible.",
            projectName: "Planta Solar Huacas",
            metrics: [
                { value: "17,000", description: "Paneles Solares" },
                { value: "10 MWp", description: "Potencia instalada" },
                { value: "46", description: "Inversores" },
                { value: "1700 tn", description: "CO₂ mitigado por año" },
            ],
            videoPathWebm: "/assets/homepage/energiaSolar.webm",
            videoPathMp4: "/assets/homepage/energiaSolar.mp4",
            videoPathWebmMobile: "/assets/homepage/energiaSolar.webm",
            videoPathMp4Mobile: "/assets/homepage/energiaSolar.mp4",
            altText: "Vista aérea de la Planta Solar Huacas con sus paneles solares",
            id: "gran-escala-heading"
        },
        {
            title: "Microredes",
            description: "Diseñamos e implementamos microredes energéticas que integran paneles solares, baterías y generadores para garantizar autonomía, eficiencia y respaldo operativo ante cortes o picos de demanda.",
            projectName: "Establishment Labs",
            metrics: [
                { value: "1,501", description: "Paneles Solares" },
                { value: "1 MWp", description: "Potencia instalada" },
                { value: "2 Mwh", description: "de almacenamiento" },
                { value: "6", description: "Inversores" },
            ],
            videoPathWebm: "/assets/homepage/microredes.webm",
            videoPathMp4: "/assets/homepage/microredes.mp4",
            videoPathWebmMobile: "/assets/homepage/microredesMobile.webm",
            videoPathMp4Mobile: "/assets/homepage/microredesMobile.mp4",
            altText: "Instalación solar en Establishment Labs mostrando el sistema de microrredes",
            id: "microgrids-heading"
        },
        {
            title: "Sistemas de Autoconsumo",
            description: "Ideales para empresas e instituciones que buscan mayor eficiencia energética. Permiten generar energía limpia, reducir costos operativos y tomar control del consumo eléctrico.",
            projectName: "Hospital de Turrialba",
            metrics: [
                { value: "1700", description: "Paneles Solares" },
                { value: "900 kWp", description: "Potencia instalada" },
                { value: "142 tn", description: "CO₂ mitigado por año" },
            ],
            videoPathWebm: "/assets/homepage/autoconsumo.webm",
            videoPathMp4: "/assets/homepage/autoconsumo.mp4",
            videoPathWebmMobile: "/assets/homepage/autoconsumoMobile.webm",
            videoPathMp4Mobile: "/assets/homepage/autoconsumoMobile.mp4",
            altText: "Vista aérea del Hospital de Turrialba con sus paneles solares",
            id: "autoconsumo-heading"
        },
        {
            title: "Sistemas Híbridos",
            description: "Perfectos para negocios o instalaciones en zonas con red eléctrica inestable o sin acceso a ella. Combinan energía solar y almacenamiento para ofrecer un suministro fiable, constante y eficiente.",
            projectName: "Casa Santuario",
            metrics: [
                { value: "20", description: "Paneles Solares" },
                { value: "10 kWp", description: "Potencia instalada" },
                { value: "10.8 kWh", description: "de almacenamiento" },
                { value: "1", description: "Inversor" },
            ],
            videoPathWebm: "/assets/homepage/hibridos.webm",
            videoPathMp4: "/assets/homepage/hibridos.mp4",
            videoPathWebmMobile: "/assets/homepage/hibridosMobile.webm",
            videoPathMp4Mobile: "/assets/homepage/hibridosMobile.mp4",
            altText: "Vista aérea de la Casa Santuario con sus paneles solares",
            id: "hibridos-heading"
        },
    ];

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [currentService]);

    const handlePrev = () => {
        setCurrentService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const currentServiceData = services[currentService];

    const renderMetrics = (metrics) => {
        return (
            <ul className="grid grid-cols-2 gap-x-10 gap-y-6 mt-8" aria-label="Métricas del proyecto">
                {metrics.map((metric, index) => (
                    <li key={index} className="flex flex-col">
                        <p className="text-[#037F3F] text-3xl font-bold" aria-label={`${metric.description}: ${metric.value}`}>
                            {metric.value}
                            <span className=" text-sm md:text-lg font-medium max-w-[12rem] text-black block">
                                {metric.description}
                            </span>
                        </p>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <section className="w-full bg-white px-6 md:px-8 pt-12 md:pt-24 pb-8 md:pb-14" aria-labelledby="servicios-heading">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <article className="w-full md:w-[40%]" aria-labelledby={currentServiceData.id}>
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <h2 id="servicios-heading" className="bg-[#0046AD] text-white px-3 py-2 rounded-bl-xl rounded-tr-xl text-xl font-semibold inline-block">
                                Nuestros Servicios
                            </h2>
                            <div className="flex gap-3 border-2 border-[#037F3F] p-3 rounded-full" aria-label="Navegación de servicios">
                                <button
                                    onClick={handlePrev}
                                    className="w-9 h-9 bg-[#037F3F] rounded-full flex items-center justify-center"
                                    aria-label="Servicio anterior"
                                >
                                    <FaChevronLeft className="text-white" aria-hidden="true" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-9 h-9 bg-[#037F3F] rounded-full flex items-center justify-center"
                                    aria-label="Siguiente servicio"
                                >
                                    <FaChevronRight className="text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <h3 id={currentServiceData.id} className="text-[#037F3F] text-4xl lg:text-5xl font-bold mb-4 w-[80%]">
                            {currentServiceData.title}
                        </h3>

                        <p className="text-black text-base font-medium leading-relaxed w-[90%] mb-6">
                            {currentServiceData.description}
                        </p>

                        <a
                            href="https://www.hipowercr.com/servicios/"                        
                            className=" w-fit font-semibold border-2 border-[#0046AD] text-[#0046AD] rounded-full px-6 py-2 flex items-center justify-center gap-2 hover:bg-[#0046AD] hover:text-white transition-colors whitespace-nowrap"
                            aria-label={`Cotizar proyecto de ${currentServiceData.title}`}
                        >
                            Cotizar mi proyecto
                            <FaArrowRight aria-hidden="false" />
                        </a>

                        {renderMetrics(currentServiceData.metrics)}
                    </article>

                    <div className="w-full md:w-[60%] rounded-tl-3xl rounded-br-3xl relative order-first md:order-last">
                        <div className="relative h-full overflow-hidden">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster={`/assets/homepage/${currentServiceData.videoPathWebm.split('/').pop().replace('.webm', '.avif')}`}
                                className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl "
                                aria-label={currentServiceData.altText}
                            >
                                <source src={isMobile ? currentServiceData.videoPathWebmMobile : currentServiceData.videoPathWebm} type="video/webm" />
                                <source src={isMobile ? currentServiceData.videoPathMp4Mobile : currentServiceData.videoPathMp4} type="video/mp4" />
                                <p>Tu navegador no soporta videos HTML5.</p>
                            </video>
                            <a href="https://www.hipowercr.com/proyectos/" className="absolute top-5 md:top-9 left-7 md:w-52">
                                <p className="text-center bg-white relative px-3 py-2 md:px-10 md:py-4 rounded-full text-xs font-medium shadow-md text-black transition-colors duration-300 hover:text-white overflow-hidden group">
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-0"></span>
                                    <span className="relative z-10 block group-hover:hidden ">{currentServiceData.projectName}</span>
                                    <span className="hidden group-hover:block relative z-10">Ver Proyectos</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProyectoSolar;