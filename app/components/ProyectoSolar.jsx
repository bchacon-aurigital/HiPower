"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProyectoSolar = () => {
    const [currentService, setCurrentService] = useState(0);
    const videoRef = useRef(null);

    const services = [
        {
            title: "Energía Solar a Gran Escala",
            description: "Diseñamos, construimos e instalamos plantas solares para generadoras y distribuidoras de energía, incluyendo algunas de las más grandes de Costa Rica.",
            projectName: "Planta Solar Huacas",
            metrics: [
                { value: "17,000", description: "Cantidad de paneles" },
                { value: "10 MWp", description: "Potencia instalada" },
                { value: "46", description: "Inversores" },
                { value: "1700 tn", description: " anuales de CO₂ mitigado" },
            ],
            videoPathWebm: "/assets/homepage/energiaSolar.webm",
            videoPathMp4: "/assets/homepage/energiaSolar.mp4",
            altText: "Vista aérea de la Planta Solar Huacas con sus paneles solares"
        },
        {
            title: "Microrredes (Microgrids)",
            description: "Sistemas de energía integrados con paneles solares, baterías y generadores para garantizar autonomía y continuidad operativa.",
            projectName: "Establishment Labs",
            metrics: [
                { value: "1,501", description: "Cantidad de paneles" },
                { value: "1 MWp", description: "Potencia instalada" },
                { value: "2 Mwh", description: "Capacidad de almacenamiento" },
                { value: "6", description: "Inversores" },
            ],
            videoPathWebm: "/assets/homepage/microredes.webm",
            videoPathMp4: "/assets/homepage/microredes.mp4",
            altText: "Instalación solar en Establishment Labs mostrando el sistema de microrredes"
        },
        {
            title: "Sistemas de autoconsumo",
            description: "Sistemas fotovoltaicos diseñados para autoconsumo, que permiten generar electricidad de manera eficiente y reducir costos.",
            projectName: "Hospital de Turrialba",
            metrics: [
                { value: "1700", description: "Paneles Solares" },
                { value: "900 kWp", description: "Potencia instalada" },
                { value: "142 tn", description: "anuales de CO₂ mitigado" },
            ],
            videoPathWebm: "/assets/homepage/autoconsumo.webm",
            videoPathMp4: "/assets/homepage/autoconsumo.mp4",
            altText: "Vista aérea del Hospital de Turrialba con sus paneles solares"
        },
        {
            title: "Sistemas Híbridos",
            description: "Los sistemas solares híbridos combinan paneles solares, almacenamiento en baterías y, en algunos casos, respaldo de la red eléctrica o generadores",
            projectName: "Casa Santuario",
            metrics: [
                { value: "20", description: "Cantidad de paneles" },
                { value: "10 kWp", description: "Potencia instalada" },
                { value: "10.8 kWh", description: "Capacidad de almacenamiento" },
                { value: "1", description: "Inversores" },
            ],
            videoPathWebm: "/assets/homepage/hibridos.webm",
            videoPathMp4: "/assets/homepage/hibridos.mp4",
            altText: "Vista aérea de la Casa Santuario con sus paneles solares"
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
        if (metrics.length === 4) {
            return (
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-8" role="list" aria-label="Métricas del proyecto">
                    {metrics.map((metric, index) => (
                        <h5 key={index} className="flex flex-col" role="listitem">
                            <span className="text-[#037F3F] text-3xl font-bold" aria-label={`Valor: ${metric.value}`}>
                                {metric.value}
                            </span>
                            <span className="text-md font-semibold max-w-[7rem] text-black">
                                {metric.description}
                            </span>
                        </h5>
                    ))}
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-6 mt-8" role="list" aria-label="Métricas del proyecto">
                <div className="hidden lg:grid grid-cols-3 gap-x-10 gap-y-6 w-full">
                    {metrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="flex flex-col" role="listitem">
                            <span className="text-[#037F3F] text-3xl font-bold" aria-label={`Valor: ${metric.value}`}>
                                {metric.value}
                            </span>
                            <span className="text-md font-semibold max-w-[7rem] text-black">
                                {metric.description}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-6 justify-items-center w-full">
                    {metrics.slice(3).map((metric, index) => (
                        <div key={index} className="flex flex-col" role="listitem">
                            <span className="text-[#037F3F] text-3xl font-bold" aria-label={`Valor: ${metric.value}`}>
                                {metric.value}
                            </span>
                            <span className="text-md font-semibold max-w-[7rem] text-black">
                                {metric.description}
                            </span>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-2 lg:hidden gap-x-10 gap-y-6 mx-auto w-full">
                    {metrics.slice(0, 5).map((metric, index) => (
                        <div key={index} className="flex flex-col" role="listitem">
                            <span className="text-[#037F3F] text-3xl font-bold justify-start" aria-label={`Valor: ${metric.value}`}>
                                {metric.value}
                            </span>
                            <span className="text-md font-semibold max-w-[7rem] text-black">
                                {metric.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className="w-full bg-white px-6 md:px-8 pt-12 md:pt-24 pb-8 md:pb-14" aria-label="Proyectos Solares">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-[40%]">
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <h2 className="bg-[#0046AD] text-white px-3 py-2 rounded-bl-xl rounded-tr-xl text-xl font-semibold" role="heading" aria-level="2">
                                Nuestros Servicios
                            </h2>
                            <div className="flex gap-3 border-2 border-[#037F3F] p-3 rounded-full" role="navigation" aria-label="Navegación de servicios">
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

                        <h3 className="text-[#037F3F] text-5xl font-bold mb-4 w-[80%]">
                            {currentServiceData.title}
                        </h3>

                        <p className="text-black text-base font-medium leading-relaxed w-[90%] mb-6">
                            {currentServiceData.description}
                        </p>

                        <a
                            href="/servicios"                        
                            className="w-48 font-semibold border-2 border-[#0046AD] text-[#0046AD] rounded-full px-4 py-1 flex items-center justify-center gap-2 hover:bg-[#0046AD] hover:text-white transition-colors"
                            aria-label={`Más información sobre ${currentServiceData.title}`}
                        >
                            Más Información
                            <FaArrowRight aria-hidden="true" />
                        </a>

                        {renderMetrics(currentServiceData.metrics)}
                    </div>

                    <div className="w-full md:w-[60%] rounded-tl-3xl rounded-br-3xl relative order-first md:order-last">
                        <div className="relative h-full overflow-hidden">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl "
                                aria-label={currentServiceData.altText}
                            >
                                <source src={currentServiceData.videoPathWebm} type="video/webm" />
                                <source src={currentServiceData.videoPathMp4} type="video/mp4" />
                                <p>Tu navegador no soporta videos HTML5.</p>
                            </video>
                            <a href="/proyectos" className="absolute top-5 md:top-9 left-7 md:w-52">
                                <h4 className="text-center bg-white relative px-3 py-2 md:px-10 md:py-4 rounded-full text-xs font-medium shadow-md text-black transition-colors duration-300 hover:text-white overflow-hidden group">
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-0"></span>
                                    <span className="relative z-10 block group-hover:hidden ">{currentServiceData.projectName}</span>
                                    <span className="hidden group-hover:block relative z-10">Ver Proyectos</span>
                                </h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProyectoSolar; 