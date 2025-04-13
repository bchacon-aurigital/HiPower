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
                { value: "+15,000", description: "Cantidad de paneles" },
                { value: "5,000", description: "Casas abastecidas" },
                { value: "9.7 MWp", description: "Potencia solar" },
                { value: "14,404 tn", description: "CO₂ mitigado" },
            ],
            videoPathWebm: "/assets/homepage/planta-solar.webm",
            videoPathMp4: "/assets/homepage/planta-solar.mp4",
            altText: "Vista aérea de la Planta Solar Huacas con sus paneles solares"
        },
        {
            title: "Microrredes (Microgrids)",
            description: "Sistemas de energía integrados con paneles solares, baterías y generadores para garantizar autonomía y continuidad operativa.",
            projectName: "Establishment Labs",
            metrics: [
                { value: "1,501", description: "Cantidad de paneles" },
                { value: "2 MWh", description: "Capacidad de almacenamiento" },
                { value: "2 MWh", description: "Capacidad de baterías" },
                { value: "900 kWp", description: "Potencia solar" },
                { value: "216.8 T/A", description: "CO₂ mitigado" },
            ],
            videoPathWebm: "/assets/homepage/establishment-labs.webm",
            videoPathMp4: "/assets/homepage/establishment-labs.mp4",
            altText: "Instalación solar en Establishment Labs mostrando el sistema de microrredes"
        },
        {
            title: "Sistemas de autoconsumo",
            description: "Sistemas fotovoltaicos diseñados para autoconsumo, que permiten generar electricidad de manera eficiente y reducir costos.",
            projectName: "Hospital de Turrialba",
            metrics: [
                { value: "792", description: "Cantidad de paneles" },
                { value: "$36,000", description: "Ahorro estimado" },
                { value: "360 kWp", description: "Potencia solar" },
                { value: "86.72 T/A", description: "CO₂ mitigado" },
            ],
            videoPathWebm: "/assets/homepage/hospital-turrialba.webm",
            videoPathMp4: "/assets/homepage/hospital-turrialba.mp4",
            altText: "Vista aérea del Hospital de Turrialba con sus paneles solares"
        },
        {
            title: "Sistemas Híbridos",
            description: "Los sistemas solares híbridos combinan paneles solares, almacenamiento en baterías y, en algunos casos, respaldo de la red eléctrica o generadores",
            projectName: "Casa Santuario",
            metrics: [
                { value: "20", description: "Cantidad de paneles" },
                { value: "10.8 kWh", description: "Capacidad de almacenamiento" },
                { value: "3 horas", description: "Capacidad de baterías" },
                { value: "10 kWp", description: "Potencia solar" },
                { value: "2.41 T/A", description: "CO₂ mitigado" },
            ],
            videoPathWebm: "/assets/homepage/casa-santuario.webm",
            videoPathMp4: "/assets/homepage/casa-santuario.mp4",
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
            );
        }

        return (
            <div className="flex flex-col gap-6 mt-8" role="list" aria-label="Métricas del proyecto">
                <div className="grid grid-cols-3 gap-x-10 gap-y-6 justify-items-center mx-auto w-fit">
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
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 justify-items-center mx-auto w-fit">
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
            </div>
        );
    };

    return (
        <section className="w-full bg-white py-16 px-6 md:px-8 lg:px-12" aria-label="Proyectos Solares">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="flex items-center space-x-6 w-full md:w-[30%]" role="list" aria-label="Certificaciones">
                        <picture role="listitem">
                            <source srcSet="/assets/homepage/NABCEP.avif" type="image/avif" />
                            <Image
                                src="/assets/logos/NABCEP.png"
                                alt="Certificación NABCEP"
                                width={74}
                                height={67}
                                className="h-auto"
                            />
                        </picture>
                        <picture role="listitem">
                            <source srcSet="/assets/homepage/SolarEnergy.avif" type="image/avif" />
                            <Image
                                src="/assets/logos/SolarEnergy.png"
                                alt="Certificación Solar Energy"
                                width={111}
                                height={65}
                                className="h-auto"
                            />
                        </picture>
                        <picture role="listitem">
                            <source srcSet="/assets/homepage/OSHA.avif" type="image/avif" />
                            <Image
                                src="/assets/logos/OSHA.png"
                                alt="Certificación OSHA"
                                width={147}
                                height={42}
                                className="h-auto"
                            />
                        </picture>
                    </div>

                    <div className="w-full md:w-[55%] text-center md:text-right mt-6 md:mt-0">
                        <h2 className="text-3xl lg:text-[2.7rem] leading-10 font-semibold text-black">
                            Proyectos solares para empresas con{" "}
                            <span className="text-[#0046AD] font-bold">
                                alta demanda energética
                            </span>
                        </h2>
                        <p className="text-[#777777] md:max-w-[26rem] md:text-right mt-2 md:ml-auto">
                            Diseñamos proyectos solares que garantizan tu inversión a lo largo de la vida útil.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8">
                    <div className="w-full md:w-[40%]">
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <div className="bg-[#0046AD] text-white px-3 py-2 rounded-bl-xl rounded-tr-xl text-lg font-semibold" role="heading" aria-level="2">
                                Nuestros Servicios
                            </div>
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

                        <h2 className="text-[#037F3F] text-5xl font-bold mb-4 w-[80%]">
                            {currentServiceData.title}
                        </h2>

                        <p className="text-black text-base font-medium leading-relaxed w-[90%] mb-6">
                            {currentServiceData.description}
                        </p>

                        <button 
                            className="font-semibold border-2 border-[#0046AD] text-[#0046AD] rounded-full px-4 py-1 flex items-center gap-2 hover:bg-[#0046AD] hover:text-white transition-colors"
                            aria-label={`Más información sobre ${currentServiceData.title}`}
                        >
                            Más Información
                            <FaArrowRight aria-hidden="true" />
                        </button>

                        {renderMetrics(currentServiceData.metrics)}
                    </div>

                    <div className="w-full md:w-[60%] relative order-first md:order-last">
                        <div className="relative h-full 339C59339C59339C59339C59339C59339C59 overflow-hidden">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                aria-label={currentServiceData.altText}
                            >
                                <source src={currentServiceData.videoPathWebm} type="video/webm" />
                                <source src={currentServiceData.videoPathMp4} type="video/mp4" />
                                <p>Tu navegador no soporta videos HTML5.</p>
                            </video>
                            <div className="absolute bottom-9 left-7 md:top-9 md:left-7">
                                <span className="bg-white px-10 py-4 rounded-full text-xs font-medium shadow-md text-black">
                                    {currentServiceData.projectName}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProyectoSolar; 